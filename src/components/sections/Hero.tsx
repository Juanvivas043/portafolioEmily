import { ArrowDown, ArrowRight } from "lucide-react";

import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { Sticker } from "@/components/ui/Sticker";
import { site } from "@/content/site";

/**
 * El titular es la composición: ocupa el ancho completo a un cuerpo enorme y
 * todo lo demás se ordena por debajo. La segunda línea entra sangrada para
 * dejarle sitio al retrato a su izquierda.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-[calc(100dvh-86px)] flex-col justify-center overflow-clip px-6 py-6 sm:px-10 lg:px-[72px] lg:py-9"
    >
      <Reveal variant="fade" className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <p className="flex items-center gap-3.5 text-xs font-extrabold tracking-[0.2em] text-mist uppercase">
          <span aria-hidden className="h-0.5 w-8 bg-magenta" />
          {site.roleLong}
        </p>

        <p className="inline-flex -rotate-3 items-center gap-2.5 rounded-full border-[1.6px] border-magenta bg-void px-[19px] py-2.5 text-[12.5px] font-extrabold tracking-[0.1em] text-magenta uppercase">
          <span aria-hidden className="size-2 rounded-full bg-mint" />
          Agenda abierta
        </p>
      </Reveal>

      <h1 className="mt-6 font-display text-[clamp(2.6rem,9.4vw,8.5rem)] leading-[0.86] uppercase">
        {/* Cada línea sube desde detrás de su propia caja, una tras otra: el
            titular se monta a la vista en vez de aparecer entero. */}
        <Reveal variant="clip" as="span" className="block">
          Tu <span className="gradient-text">cuenta</span>
        </Reveal>
        <Reveal
          variant="clip"
          delay={0.14}
          as="span"
          className="block lg:pl-[19rem]"
        >
          <span className="text-hollow">La llevo</span> yo
        </Reveal>
      </h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-12">
        <Parallax shift={16} className="hidden lg:block">
          <PortraitPlaceholder className="h-[clamp(11rem,26vh,19rem)] rounded-[28px]" />
        </Parallax>

        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="max-w-[46ch] text-[17.5px] leading-[1.62] text-mist text-pretty">
              El brief, la producción y el informe salen de la misma cabeza:
              nada se pierde entre correos. Te contesto en {site.responseTime}.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 rounded-full bg-[image:var(--gradient-signature)] px-8 py-[18px] text-[15.5px] font-extrabold text-void transition-transform hover:-translate-y-0.5"
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

          <div className="relative hidden lg:block">
            <svg
              aria-hidden
              width="216"
              height="34"
              viewBox="0 0 216 34"
              className="text-magenta"
            >
              <path
                d="M8 13 C62 4, 152 5, 208 11"
                stroke="currentColor"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M16 27 C72 20, 146 21, 198 26"
                stroke="#FF7A3D"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
                opacity=".92"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Anclada a la sección, no a la columna de texto: así queda en el hueco
          libre de la derecha y no se le echa encima al pie del hero. */}
      <Parallax
        shift={20}
        reverse
        className="pointer-events-none absolute right-10 bottom-32 hidden xl:block"
      >
        <Sticker variant="estrella" size={104} rotate={9} />
      </Parallax>

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
