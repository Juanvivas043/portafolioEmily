import { Assemble } from "@/components/motion/Assemble";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative z-10 overflow-clip bg-[linear-gradient(158deg,#16121D_0%,#0A090C_40%,#0C0A11_70%,#151120_100%)] px-6 py-16 sm:px-10 lg:px-[72px] lg:py-20"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-11 right-8 hidden font-display text-[130px] leading-none text-transparent uppercase [-webkit-text-stroke:2.4px_#A855F7] [writing-mode:vertical-rl] xl:block"
      >
        Sobre mí
      </span>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <Assemble y={2.5} x={-1} rotate={-2} className="lg:-rotate-[1.5deg]">
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

            <div className="mt-6 flex flex-col gap-4 text-[#2C2536]">
              <p className="text-base leading-[1.65] text-pretty">
                Soy comunicadora social y ejecutiva de cuentas senior. Gran parte
                de mi trabajo consiste en hacer de puente y traducción
                estratégica: la marca busca conectar con su audiencia y el
                equipo creativo necesita claridad absoluta para ejecutar.
              </p>
              <p className="text-base leading-[1.65] text-pretty">
                Mi labor es transformar los objetivos de marcas corporativas en
                un brief claro, una estrategia sólida y un flujo de trabajo
                donde el 100% de los entregables se cumplan a tiempo.
              </p>
              <p className="text-base leading-[1.65] font-semibold text-[#15111C] text-pretty">
                Y cuando el proyecto lo requiere, paso a la acción directa:
                redacto comunicados estratégicos, desarrollo copys y dirijo la
                producción de contenido audiovisual original.
              </p>
            </div>
          </article>
        </Assemble>

        {/* Columna derecha: Solo la foto, limpia y centrada verticalmente */}
        <div className="flex justify-center lg:justify-end">
          <Assemble y={3} x={1.5} rotate={3} className="w-full max-w-md lg:rotate-[2.5deg]">
            <figure className="grain overflow-clip rounded-2xl bg-[linear-gradient(168deg,#F3EAD8,#E7DCC6)] p-3 shadow-[0_38px_72px_-22px_rgba(0,0,0,0.9)]">
              <PortraitPlaceholder className="aspect-4/5 w-full rounded-xl" />
            </figure>
          </Assemble>
        </div>
      </div>
    </section>
  );
}
