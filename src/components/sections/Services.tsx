import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/content/services";

/** Un acento por tarjeta, rotando, para que la pila no sea monocroma. */
const ACCENTS = [
  { ring: "border-magenta/35", text: "text-magenta", chip: "bg-magenta/15 text-[#FF8DBE]", panel: "from-ember/70 via-magenta/60 to-violet/70" },
  { ring: "border-violet/35", text: "text-violet", chip: "bg-violet/16 text-[#C4A9FF]", panel: "from-violet/70 via-magenta/50 to-grape/70" },
  { ring: "border-ember/35", text: "text-ember", chip: "bg-ember/15 text-[#FFB088]", panel: "from-ember/75 via-magenta/45 to-grape/60" },
];

/**
 * Servicios como una pila de tarjetas.
 *
 * Cada tarjeta se queda pegada bajo la cabecera con un desfase creciente, de
 * modo que la siguiente sube por encima y va dejando asomar el canto de la
 * anterior. Es `position: sticky` puro: sin JavaScript, sin escuchar el scroll
 * y sin medir nada. El desfase vive en --stack-index.
 */
export function Services() {
  return (
    <section
      id="servicios"
      className="relative z-10 border-t border-bone/10 px-6 pt-24 pb-32 sm:px-10 lg:px-[72px] lg:pt-32"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--gradient-signature)]"
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-4">
          <Reveal variant="fade">
            <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
              {/* El color va en el hijo: si lo lleva la caja de fuera, el
                  filete se ve entero antes de dibujarse. */}
              <Reveal variant="draw" as="span" className="block h-0.5 w-6" aria-hidden>
                <span className="block h-full w-full bg-magenta" />
              </Reveal>
              Servicios
            </p>
          </Reveal>
          <Reveal
            variant="clip"
            delay={0.1}
            as="h2"
            className="font-display text-[clamp(2.5rem,6vw,3.875rem)] leading-[0.96] uppercase"
          >
            Lo que hago
          </Reveal>
        </div>

        <Reveal
          variant="right"
          delay={0.1}
          className="max-w-[32ch] text-base leading-relaxed text-mist lg:text-right"
        >
          <p className="text-pretty">
            Seis frentes. Puedo llevarlos todos o solo aquel donde tu equipo va
            corto.
          </p>
        </Reveal>
      </div>

      <ul className="mt-12 flex flex-col gap-8">
        {services.map((service, index) => {
          const accent = ACCENTS[index % ACCENTS.length];

          return (
            <li
              key={service.id}
              data-stack-card
              style={{ "--stack-index": index } as CSSProperties}
            >
              <article
                className={`grain relative flex min-h-[clamp(19rem,50vh,26rem)] flex-col overflow-clip rounded-[32px] border ${accent.ring} bg-surface shadow-[0_-6px_16px_-10px_rgba(0,0,0,0.85)] lg:flex-row`}
              >
                <div className="flex flex-1 flex-col justify-between gap-8 p-7 sm:p-10">
                  <div className="flex flex-col gap-5">
                    <p
                      className={`font-display text-sm tracking-[0.08em] ${accent.text}`}
                    >
                      {service.number} / {services.length.toString().padStart(2, "0")}
                    </p>

                    <h3 className="max-w-[16ch] font-display text-[clamp(1.9rem,4.6vw,3.5rem)] leading-[0.98] uppercase">
                      {service.title}
                    </h3>

                    <p className="max-w-[48ch] text-[16.5px] leading-[1.65] text-mist text-pretty">
                      {service.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full px-4 py-2 text-[11.5px] font-extrabold tracking-[0.06em] uppercase ${accent.chip}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Panel fijo, sin parallax. Seis transformaciones atadas al
                    scroll dentro de tarjetas pegajosas era justo lo que hacía
                    que la pila fuese a tirones. */}
                <div
                  className={`relative grid w-full place-items-center overflow-clip bg-linear-to-br ${accent.panel} lg:w-[38%]`}
                >
                  <span
                    aria-hidden
                    className="font-display text-[clamp(6rem,16vw,11rem)] leading-none text-void/25"
                  >
                    {service.number}
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <Reveal delay={0.05}>
        <a
          href="#contacto"
          className="mt-12 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-bone/20 px-7 py-4 text-[15px] font-bold text-bone transition-colors hover:border-magenta hover:text-magenta"
        >
          ¿Necesitas varios a la vez? Hablemos
          <ArrowUpRight size={16} strokeWidth={2.6} />
        </a>
      </Reveal>
    </section>
  );
}
