import { ArrowDown, ArrowRight } from "lucide-react";

import { Assemble } from "@/components/motion/Assemble";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { Sticker } from "@/components/ui/Sticker";
import { site } from "@/content/site";

/**
 * Hero a una pantalla exacta.
 *
 * El retrato va en columna propia y a toda la altura disponible, no debajo del
 * titular. Apilados, el titular grande y una foto alta se peleaban por el mismo
 * alto: o la foto salía diminuta, o la sección crecía y el aviso de bajar
 * quedaba fuera de pantalla. En paralelo caben los dos.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-[calc(100dvh-86px)] flex-col overflow-clip px-6 py-6 sm:px-10 lg:px-[72px] lg:py-8"
    >
      <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-14">
        <div className="flex flex-col gap-6">
          <Reveal
            variant="fade"
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <p className="flex items-center gap-3.5 text-xs font-extrabold tracking-[0.2em] text-mist uppercase">
              <span aria-hidden className="h-0.5 w-8 bg-magenta" />
              {site.roleLong}
            </p>

            <p className="inline-flex -rotate-3 items-center gap-2.5 rounded-full border-[1.6px] border-magenta bg-void px-[19px] py-2.5 text-[12.5px] font-extrabold tracking-[0.1em] text-magenta uppercase">
              <span aria-hidden className="size-2 rounded-full bg-mint" />
              Agenda abierta
            </p>
          </Reveal>

          <h1 className="font-display text-[clamp(2.4rem,5.9vw,5.25rem)] leading-[0.88] uppercase">
            {/* Cada línea sube desde detrás de su propia caja, una tras otra:
                el titular se monta a la vista en vez de aparecer entero. */}
            <Reveal variant="clip" as="span" className="block">
              Tu <span className="gradient-text">cuenta</span>
            </Reveal>
            <Reveal variant="clip" delay={0.14} as="span" className="block">
              <span className="text-hollow">La llevo</span> yo
            </Reveal>
          </h1>

          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[17px] leading-[1.6] text-mist text-pretty">
              El brief, la producción y el informe salen de la misma cabeza:
              nada se pierde entre correos. Te contesto en {site.responseTime}.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 rounded-full bg-[image:var(--gradient-signature)] px-8 py-[17px] text-[15.5px] font-extrabold text-void transition-transform hover:-translate-y-0.5"
              >
                Hablemos de tu cuenta
                <ArrowRight size={16} strokeWidth={2.8} />
              </a>

              <p className="text-[14.5px] text-mist">
                o escríbeme a{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-bold text-bone underline decoration-magenta decoration-[1.5px] underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </Reveal>

          <svg
            aria-hidden
            width="216"
            height="26"
            viewBox="0 0 216 26"
            className="hidden text-magenta lg:block"
          >
            <path
              d="M8 11 C62 3, 152 4, 208 9"
              stroke="currentColor"
              strokeWidth="6.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M16 22 C72 16, 146 17, 198 21"
              stroke="#FF7A3D"
              strokeWidth="4.2"
              fill="none"
              strokeLinecap="round"
              opacity=".92"
            />
          </svg>
        </div>

        {/*
          El marco manda la altura y el retrato lo desborda por dentro: así el
          parallax tiene recorrido sin que la foto se salga del marco ni la
          recorte el borde de la pantalla.
        */}
        <div className="relative hidden h-full max-h-[34rem] min-h-[20rem] overflow-clip rounded-[36px] lg:block">
          <Parallax shift={9} className="absolute inset-0 m-[-9%]">
            <PortraitPlaceholder className="h-full w-full" />
          </Parallax>

          <Assemble
            y={3}
            x={1.5}
            rotate={14}
            scale={0.82}
            reverse
            className="pointer-events-none absolute -bottom-2 -left-4"
          >
            <Sticker variant="estrella" size={96} rotate={9} />
          </Assemble>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 pt-4">
        <p className="flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] text-muted uppercase">
          <ArrowDown size={15} strokeWidth={2.4} />
          Baja para ver casos
        </p>
        <p className="text-[12.5px] font-semibold text-muted">
          {site.location} · {site.availability}
        </p>
      </div>
    </section>
  );
}
