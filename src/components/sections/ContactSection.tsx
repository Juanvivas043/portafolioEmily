import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/form/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site, socials } from "@/content/site";

/**
 * Sección de contacto: el copy, los datos y el formulario.
 *
 * El formulario es un componente aparte precisamente para poder montarlo solo
 * en otra página sin arrastrar todo este contexto.
 */
export function ContactSection() {
  const details = [
    { icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Teléfono", value: site.phone, href: `tel:${site.phone}` },
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
          <Reveal variant="left" className="flex flex-col gap-5">
            <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
              <span aria-hidden className="h-0.5 w-6 bg-magenta" />
              Contacto
            </p>
            <h2 className="font-display text-[clamp(2.6rem,7vw,4.875rem)] leading-[0.88] uppercase">
              ¿Hablamos
              <br />
              de tu marca?
            </h2>
            <p className="max-w-[40ch] text-base leading-relaxed text-mist text-pretty">
              Cuéntame en dos líneas qué necesitas. Respondo en menos de{" "}
              {site.responseTime} con una primera idea de por dónde iría.
            </p>
          </Reveal>

          <ul className="grid gap-3.5 sm:grid-cols-2">
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

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="grain flex h-full flex-col gap-3 rounded-[22px] bg-surface p-5 transition-colors hover:bg-raised"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="grain flex h-full flex-col gap-3 rounded-[22px] bg-surface p-5">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-wrap gap-2.5">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex min-h-12 items-center gap-2 rounded-2xl bg-raised px-5 text-[13px] font-bold text-bone transition-colors hover:bg-surface"
                >
                  {social.label}
                  <span className="text-mist">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
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
