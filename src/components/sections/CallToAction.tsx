import { ArrowRight } from "lucide-react";

import { Assemble } from "@/components/motion/Assemble";
import { Reveal } from "@/components/motion/Reveal";
import { Sticker } from "@/components/ui/Sticker";
import { site } from "@/content/site";

/**
 * Llamada a la acción a sangre completa, entre el portafolio y el contacto.
 *
 * Es la única superficie clara de toda la página: después de tanto oscuro,
 * invertir el contraste es lo que la hace imposible de saltar. El texto va en
 * tinta sobre crema, que da 17:1.
 */
export function CallToAction() {
  return (
    <section
      aria-label="Trabajemos juntas"
      className="relative z-10 overflow-clip bg-bone px-6 py-20 text-void sm:px-10 lg:px-[72px] lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[5px] bg-[image:var(--gradient-signature)]"
      />

      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-6">
          <Reveal variant="fade">
            <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-void/55 uppercase">
              <span aria-hidden className="h-0.5 w-6 bg-magenta" />
              Siguiente paso
            </p>
          </Reveal>

          <h2 className="max-w-[14ch] font-display text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[0.9] uppercase">
            <Reveal variant="clip" as="span" className="block">
              Cuéntame qué
            </Reveal>
            <Reveal variant="clip" delay={0.12} as="span" className="block">
              tienes entre manos
            </Reveal>
          </h2>

          <Reveal delay={0.2}>
            <p className="max-w-[46ch] text-[17px] leading-[1.6] text-void/75 text-pretty">
              No hace falta que venga con un brief hecho. Con dos líneas sobre
              la marca y lo que necesitas, te digo por dónde empezaría y si soy
              la persona adecuada para ello.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={0.16} className="shrink-0">
          <div className="flex flex-col items-start gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 rounded-full bg-void px-9 py-5 text-base font-extrabold text-bone transition-transform hover:-translate-y-0.5"
            >
              Hablemos de tu marca
              <ArrowRight size={18} strokeWidth={2.8} />
            </a>

            <p className="text-sm font-semibold text-void/65">
              o escríbeme a{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-bold text-void underline decoration-magenta decoration-2 underline-offset-4"
              >
                {site.email}
              </a>
            </p>

            <p className="text-[13px] font-semibold text-void/55">
              Respondo en menos de {site.responseTime}.
            </p>
          </div>
        </Reveal>
      </div>

      <Assemble
        y={5}
        x={2.5}
        rotate={20}
        scale={0.75}
        className="pointer-events-none absolute -right-6 -bottom-8 hidden opacity-90 xl:block"
      >
        <Sticker variant="corazon" size={112} rotate={12} />
      </Assemble>
    </section>
  );
}
