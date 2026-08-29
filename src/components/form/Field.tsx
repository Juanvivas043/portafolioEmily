import type { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
    className: string;
  }) => ReactNode;
};

const CONTROL =
  "w-full rounded-2xl border bg-[#0F0C14] px-4 py-3.5 text-sm text-bone placeholder:text-muted outline-none transition-colors focus-visible:border-magenta focus-visible:ring-2 focus-visible:ring-magenta/40";

/**
 * Etiqueta, control y error, atados entre sí.
 *
 * El control se pinta mediante children como función para que el campo no tenga
 * que saber si dentro va un input, un textarea o un select: solo se ocupa de la
 * envoltura y de las relaciones de accesibilidad.
 */
export function Field({
  id,
  label,
  error,
  required,
  className,
  children,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <label
        htmlFor={id}
        className="text-[11.5px] font-extrabold tracking-[0.12em] text-mist uppercase"
      >
        {label}
        {required && (
          <span aria-hidden className="text-magenta">
            {" "}
            *
          </span>
        )}
      </label>

      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        className: `${CONTROL} ${error ? "border-magenta" : "border-bone/12"}`,
      })}

      {error && (
        <p id={errorId} role="alert" className="text-xs font-semibold text-magenta">
          {error}
        </p>
      )}
    </div>
  );
}
