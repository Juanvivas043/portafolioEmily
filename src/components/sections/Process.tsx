import { Reveal } from "@/components/motion/Reveal";
import { Sticker } from "@/components/ui/Sticker";
import { processSteps } from "@/content/process";

/**
 * Mi forma de trabajo.
 *
 * Cuatro pasos sobre una línea trazada a mano que los cose, en el mismo
 * lenguaje que la banda de métricas. La línea solo aparece en escritorio: en
 * una columna estrecha estorbaría más de lo que explica.
 */
export function Process() {
  return (
    <section
      id="proceso"
      className="relative z-10 overflow-clip border-t border-bone/10 px-6 py-24 sm:px-10 lg:px-[72px] lg:py-32"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-4">
          <Reveal variant="fade">
            <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
              <Reveal variant="draw" as="span" className="block h-0.5 w-6" aria-hidden>
                <span className="block h-full w-full bg-ember" />
              </Reveal>
              Proceso
            </p>
          </Reveal>
          <Reveal
            variant="clip"
            delay={0.1}
            as="h2"
            className="font-display text-[clamp(2.5rem,6vw,3.875rem)] leading-[0.96] uppercase"
          >
            Mi forma de trabajo
          </Reveal>
        </div>

        <Reveal
          variant="right"
          delay={0.14}
          className="max-w-[34ch] text-base leading-relaxed text-mist lg:text-right"
        >
          <p className="text-pretty">
            Cuatro pasos, cada uno con su entregable y su plazo. Sabes en todo
            momento qué recibes y cuándo.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14">
        {/* Línea que cose los cuatro pasos, trazada a mano alzada. */}
        <svg
          aria-hidden
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -top-4 right-0 left-0 hidden h-10 w-full lg:block"
        >
          <path
            d="M 20 26 C 180 12, 320 32, 470 20 C 620 8, 760 30, 900 18 C 1010 9, 1110 22, 1180 14"
            fill="none"
            stroke="#FF7A3D"
            strokeOpacity=".55"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 14"
          />
        </svg>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.id}
              variant="up"
              delay={index * 0.1}
              className="h-full"
            >
              <article className="grain relative flex h-full flex-col gap-4 rounded-[26px] border border-bone/10 bg-surface p-7">
                <span
                  aria-hidden
                  className="absolute -top-3 left-7 grid size-9 place-items-center rounded-full bg-void font-display text-xs text-ember ring-1 ring-ember/40"
                >
                  {step.number}
                </span>

                <h3 className="mt-3 font-display text-2xl leading-tight uppercase">
                  {step.title}
                </h3>

                <p className="text-[15px] leading-[1.65] text-mist text-pretty">
                  {step.description}
                </p>

                <dl className="mt-auto flex flex-col gap-2 border-t border-bone/10 pt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-extrabold tracking-[0.12em] text-muted uppercase">
                      Recibes
                    </dt>
                    <dd className="text-right text-[13px] font-semibold text-bone">
                      {step.entrega}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-extrabold tracking-[0.12em] text-muted uppercase">
                      Plazo
                    </dt>
                    <dd className="text-right text-[13px] font-semibold text-bone">
                      {step.duracion}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      <Sticker
        variant="nube"
        fill="#A855F7"
        size={96}
        rotate={-10}
        className="pointer-events-none absolute right-8 bottom-10 hidden xl:block"
      />
    </section>
  );
}
