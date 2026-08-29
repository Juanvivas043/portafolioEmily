import { Assemble } from "@/components/motion/Assemble";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { Sticker } from "@/components/ui/Sticker";

/**
 * «Sobre mí» puesto en escena como papeles sobre una mesa: una nota escrita a
 * mano, una polaroid, un tiquet y un post-it. Las rotaciones solo entran a
 * partir de lg — apiladas en móvil estorbarían más que aportar.
 */
export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative z-10 overflow-clip bg-[linear-gradient(158deg,#16121D_0%,#0A090C_40%,#0C0A11_70%,#151120_100%)] px-6 py-24 sm:px-10 lg:px-[72px] lg:py-32"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-11 right-8 hidden font-display text-[130px] leading-none text-transparent uppercase [-webkit-text-stroke:2.4px_#A855F7] [writing-mode:vertical-rl] xl:block"
      >
        Sobre mí
      </span>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
        <Assemble y={3} x={-1.2} rotate={-3.5} className="lg:-rotate-[1.6deg]">
          <article className="grain relative rounded-sm bg-[linear-gradient(172deg,#F7EEDC,#F1E6CF)] px-7 py-9 shadow-[0_36px_74px_-20px_rgba(0,0,0,0.86)] sm:px-12 sm:py-11">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold tracking-[0.24em] text-[#554C61] uppercase">
                Sobre mí
              </span>
              <span aria-hidden className="h-px flex-1 bg-[#1A111B]/20" />
              <span className="text-xs font-medium text-[#554C61] italic">
                nota, no ficha
              </span>
            </div>

            <h2 className="mt-6 font-display uppercase">
              <span className="block text-[clamp(3rem,7vw,5rem)] leading-[0.88] text-[#15111C]">
                Hola,
              </span>
              <span className="block text-[clamp(2rem,4.4vw,3.125rem)] leading-[0.9] text-grape">
                soy Emily
              </span>
            </h2>

            <div className="mt-6 flex flex-col gap-3.5 text-[#2C2536]">
              <p className="text-base leading-[1.6] text-pretty">
                Soy ejecutiva de cuentas, aunque media jornada se me va
                traduciendo: la marca dice{" "}
                <mark className="bg-magenta/30 px-1 text-[#2C2536]">
                  «quiero algo que se sienta nuestro»
                </mark>{" "}
                y el equipo pregunta qué significa eso.
              </p>
              <p className="text-base leading-[1.6] text-pretty">
                Mi trabajo es justo esa parte: dejarlo en un brief que alguien
                abra el lunes y pueda ejecutar sin llamarme. Referencia, tono,
                formato y fecha.
              </p>
              <p className="text-lg leading-[1.5] font-bold text-[#15111C] text-pretty">
                Y cuando hace falta, el contenido lo produzco yo: guion, cámara
                y montaje.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-1.5">
              <svg
                aria-hidden
                width="252"
                height="61"
                viewBox="0 0 380 92"
                className="block"
              >
                <g
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 74 C10 46, 26 14, 52 12 C68 11, 72 30, 52 40 C40 46, 28 47, 24 47 C44 44, 64 54, 66 70 C67 78, 58 82, 52 76" />
                  <path d="M82 74 C84 54, 90 44, 96 44 C102 44, 102 58, 99 72 C104 52, 110 44, 116 44 C122 44, 122 58, 119 72 C124 52, 130 44, 136 44 C142 44, 142 60, 139 74" />
                  <path d="M156 44 C154 56, 152 66, 156 72" />
                  <path d="M176 76 C174 48, 182 20, 194 12 C200 22, 188 56, 186 70 C186 76, 192 78, 198 72" />
                  <path d="M212 44 C212 58, 218 70, 224 70 C230 70, 234 58, 236 44 C232 68, 230 86, 218 90 C210 92, 208 84, 214 80" />
                  <path d="M246 68 C274 62, 316 56, 366 40" />
                </g>
                <circle cx="158" cy="29" r="3.6" fill="#FF2E88" />
              </svg>
              <p className="text-xs font-medium text-[#554C61]">
                Emily · ejecutiva de cuentas y creadora de contenido
              </p>
            </div>
          </article>
        </Assemble>

        <div className="flex flex-col gap-8">
          <Assemble y={4.5} x={1.5} rotate={5} className="lg:rotate-[4.5deg]">
            <figure className="bg-[linear-gradient(168deg,#F3EAD8,#E7DCC6)] p-4 shadow-[0_38px_72px_-22px_rgba(0,0,0,0.9)]">
              <PortraitPlaceholder className="aspect-4/5 w-full" />
              <figcaption className="px-1 pt-3 text-[15px] font-medium text-[#2A2333] italic">
                Emily, en su sitio favorito para pensar
              </figcaption>
            </figure>
          </Assemble>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start lg:flex-col">
            <Assemble y={3.5} x={-1.8} rotate={-6} reverse className="lg:-rotate-[5deg]">
              <aside className="flex flex-col gap-3 bg-[linear-gradient(158deg,#FFC24A,#FF8A3D_62%,#FF7A3D)] p-6 shadow-[0_24px_44px_-16px_rgba(0,0,0,0.82)] sm:max-w-[13rem]">
                <span className="text-xs font-extrabold tracking-[0.18em] text-[#3A1408] uppercase">
                  Regla nº 1
                </span>
                <p className="text-[15.5px] leading-[1.34] font-bold text-[#20100A] text-pretty">
                  Si el brief no cabe en una frase, todavía no está listo.
                </p>
              </aside>
            </Assemble>

            <Assemble y={4} x={1.2} rotate={4.5} className="lg:rotate-[3.2deg]">
              <aside className="flex flex-col gap-2.5 bg-[linear-gradient(172deg,#F8F3E5,#EAE3D0)] px-5 py-4 shadow-[0_20px_38px_-18px_rgba(0,0,0,0.86)] sm:max-w-[19rem]">
                <span className="text-xs font-extrabold tracking-[0.15em] text-[#3B3348] uppercase">
                  Tiquet de caja
                </span>

                <dl className="flex flex-col gap-1.5">
                  {[
                    { label: "años en esto", value: "6", accent: false },
                    { label: "cuentas llevadas", value: "40+", accent: true },
                    { label: "ROAS medio", value: "3,2x", accent: false },
                  ].map((row) => (
                    <div key={row.label} className="flex items-baseline gap-2.5">
                      <dt className="text-xs font-semibold text-[#463C57]">
                        {row.label}
                      </dt>
                      <span
                        aria-hidden
                        className="h-0 flex-1 border-t border-dotted border-[#A2967F]"
                      />
                      <dd
                        className={`font-display text-xl leading-none ${
                          row.accent ? "text-grape" : "text-[#15111C]"
                        }`}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span
                  aria-hidden
                  className="h-0 border-t border-dashed border-[#1A111B]/30"
                />

                <p className="flex items-baseline gap-2.5">
                  <span className="text-xs font-extrabold tracking-[0.14em] text-[#3B3348] uppercase">
                    Total
                  </span>
                  <span className="text-xs font-medium text-[#554C61] italic">
                    un brief que se entiende
                  </span>
                </p>
              </aside>
            </Assemble>
          </div>
        </div>
      </div>

      <Assemble
        y={5}
        x={-2}
        rotate={-16}
        scale={0.8}
        className="pointer-events-none absolute bottom-10 left-4 hidden xl:block"
      >
        <Sticker variant="mancha" size={108} rotate={-12} />
      </Assemble>
    </section>
  );
}
