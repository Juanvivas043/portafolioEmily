import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/form/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { site } from "@/content/site";

/**
 * Sección de contacto: el copy, los datos y el formulario.
 *
 * El formulario es un componente aparte precisamente para poder montarlo solo
 * en otra página sin arrastrar todo este contexto.
 */
export function ContactSection() {
  const details = [
    { icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Teléfono", value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: "Dónde estoy", value: site.location },
    { icon: Clock, label: "Horario", value: `${site.workingDays} · ${site.workingHours}` },
  ];

  return (
    <section
      id="contacto"
      className="relative z-10 border-t border-bone/10 px-6 py-24 sm:px-10 lg:px-[72px] lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="flex flex-col gap-8">
          {/* Cada pieza entra por su cuenta, escalonada. Anidar los barridos
              dentro de otro Reveal haría que las dos animaciones se pisaran. */}
          <div className="flex flex-col gap-5">
            <Reveal variant="fade">
              <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
                <span aria-hidden className="h-0.5 w-6 bg-magenta" />
                Contacto
              </p>
            </Reveal>

            <h2 className="font-display text-[clamp(2.6rem,7vw,4.875rem)] leading-[0.88] uppercase">
              <Reveal variant="clip" as="span" className="block">
                ¿Hablamos
              </Reveal>
              <Reveal variant="clip" delay={0.12} as="span" className="block">
                de tu marca?
              </Reveal>
            </h2>

            <Reveal delay={0.2}>
              <p className="max-w-[40ch] text-base leading-relaxed text-mist text-pretty">
                Cuéntame en dos líneas qué necesitas. Respondo en menos de{" "}
                {site.responseTime} con una primera idea de por dónde iría.
              </p>
            </Reveal>
          </div>

          <Stagger
            as="ul"
            itemAs="li"
            variant="scale"
            step={0.07}
            className="grid gap-3.5 sm:grid-cols-2"
          >
            {details.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <Icon size={20} strokeWidth={1.8} className="text-magenta" />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[11.5px] font-extrabold tracking-[0.12em] text-mist uppercase">
                      {label}
                    </span>
                    <span className="text-sm font-semibold break-all text-bone">
                      {value}
                    </span>
                  </span>
                </>
              );

              // El <li> lo pone Stagger, que es quien envuelve cada hijo.
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="grain flex h-full flex-col gap-3 rounded-[22px] bg-surface p-5 transition-colors hover:bg-raised"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={label}
                  className="grain flex h-full flex-col gap-3 rounded-[22px] bg-surface p-5"
                >
                  {body}
                </div>
              );
            })}
          </Stagger>
        </div>

        <Reveal>
          <div className="grain rounded-[30px] border border-bone/10 bg-surface p-6 sm:p-9">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl uppercase">Cuéntame</h3>
              <span className="rounded-full border border-mint/35 bg-mint/12 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#6EE7B7] uppercase">
                Respondo en {site.responseTime}
              </span>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
