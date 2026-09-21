"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

import { CustomSelect } from "@/components/form/CustomSelect";
import { Field } from "@/components/form/Field";
import { serviceOptions } from "@/content/services";
import {
  hasErrors,
  MESSAGE_MAX,
  validateContact,
  type ContactErrors,
} from "@/lib/validation/contact";

type Status = "idle" | "sending" | "sent" | "error";

type ContactFormProps = {
  className?: string;
  /** Endpoint alternativo, por si el formulario se reutiliza en otro contexto. */
  endpoint?: string;
  submitLabel?: string;
  onSuccess?: () => void;
};

const EMPTY = {
  name: "",
  email: "",
  company: "",
  topic: serviceOptions[0],
  message: "",
  consent: false,
  website: "",
};

/**
 * Formulario de contacto, autónomo y reutilizable.
 *
 * No sabe nada de la sección que lo contiene: se puede montar solo en cualquier
 * página. La validación es la misma función que usa el servidor, así que los
 * mensajes coinciden y no hay dos verdades sobre qué es válido.
 */
export function ContactForm({
  className,
  endpoint = "/api/contact",
  submitLabel = "Enviar mensaje",
  onSuccess,
}: ContactFormProps) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  // Sirve para descartar envíos instantáneos, que solo hacen los bots. Se sella
  // tras el montaje: leer el reloj durante el render no es puro y daría valores
  // distintos en cada repintado.
  const renderedAt = useRef(0);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const remaining = useMemo(
    () => MESSAGE_MAX - values.message.length,
    [values.message],
  );

  const update = <K extends keyof typeof EMPTY>(
    key: K,
    value: (typeof EMPTY)[K],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);

    const payload = { ...values, renderedAt: renderedAt.current };
    const { errors: found } = validateContact(payload);

    if (hasErrors(found)) {
      setErrors(found);
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.errors) setErrors(result.errors);
        setServerMessage(
          result.message ?? "No he podido enviar el mensaje. Inténtalo otra vez.",
        );
        setStatus("error");
        return;
      }

      setValues(EMPTY);
      setStatus("sent");
      onSuccess?.();
    } catch {
      setServerMessage(
        "Parece que no hay conexión. Inténtalo otra vez en un momento.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={`flex flex-col items-start gap-4 rounded-[30px] border border-mint/30 bg-surface p-8 ${className ?? ""}`}
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-mint/15 text-mint">
          <Check size={22} strokeWidth={2.6} />
        </span>
        <h3 className="font-display text-2xl uppercase">Mensaje enviado</h3>
        <p className="text-[15px] leading-relaxed text-mist">
          Gracias por escribir. Te respondo al correo que me has dejado.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-bold text-magenta underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 ${className ?? ""}`}
    >
      {/* Trampa para robots: invisible y fuera del recorrido de teclado. */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">No rellenes este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Nombre" required error={errors.name}>
          {(props) => (
            <input
              {...props}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Cómo te llamas"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
            />
          )}
        </Field>

        <Field id="email" label="Correo" required error={errors.email}>
          {(props) => (
            <input
              {...props}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
            />
          )}
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="company" label="Empresa" error={errors.company}>
          {(props) => (
            <input
              {...props}
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Opcional"
              value={values.company}
              onChange={(event) => update("company", event.target.value)}
            />
          )}
        </Field>

        <Field id="topic" label="¿En qué te ayudo?">
          {({ id }) => (
            <CustomSelect
              id={id}
              name="topic"
              value={values.topic}
              options={serviceOptions}
              onChange={(option) => update("topic", option)}
            />
          )}
        </Field>
      </div>

      <Field id="message" label="Mensaje" required error={errors.message}>
        {(props) => (
          <textarea
            {...props}
            name="message"
            rows={5}
            maxLength={MESSAGE_MAX}
            placeholder="En dos líneas: qué marca, qué necesitas y para cuándo."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
          />
        )}
      </Field>

      <p
        className={`-mt-1 text-right text-xs ${remaining < 100 ? "text-magenta" : "text-muted"}`}
      >
        {remaining} caracteres restantes
      </p>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="consent"
          className="flex cursor-pointer items-start gap-3 text-[12.5px] leading-relaxed text-mist"
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            className="mt-0.5 size-[18px] shrink-0 accent-magenta"
          />
          Acepto que guardes mis datos para responderme.
        </label>
        {errors.consent && (
          <p role="alert" className="text-xs font-semibold text-magenta">
            {errors.consent}
          </p>
        )}
      </div>

      {serverMessage && (
        <p
          role="alert"
          className="rounded-2xl border border-magenta/40 bg-magenta/10 px-4 py-3 text-[13.5px] text-bone"
        >
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-[image:var(--gradient-signature)] text-[15.5px] font-extrabold text-void transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={17} strokeWidth={2.6} className="animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            {submitLabel}
            <Send size={16} strokeWidth={2.4} />
          </>
        )}
      </button>
    </form>
  );
}
