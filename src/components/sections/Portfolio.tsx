import Link from "next/link";
import { Parallax } from "@/components/motion/Parallax";

import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";

const TINT: Record<string, string> = {
  ember: "linear-gradient(140deg,#FF9A3D,#7C1D42)",
  violet: "linear-gradient(140deg,#A855F7,#241C30)",
  magenta: "linear-gradient(140deg,#FF7A3D,#FF2E88 48%,#7C3AED)",
  grape: "linear-gradient(140deg,#FF2E88,#3B1E5C)",
};

export function Portfolio() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="portafolio"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-[72px] lg:py-32"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
            <span aria-hidden className="h-0.5 w-6 bg-magenta" />
            Portafolio
          </p>
          {/* Un solo h2: las líneas son spans para que cada una barra por su
              cuenta sin romper la jerarquía del documento. */}
          <h2 className="font-display text-[clamp(2.5rem,6.4vw,4.5rem)] leading-[0.92] uppercase">
            <Reveal variant="clip" as="span" className="block">
              Casos
            </Reveal>
            <Reveal variant="clip" delay={0.12} as="span" className="block">
              que cuento
            </Reveal>
          </h2>
        </div>
        <p className="max-w-[34ch] text-base leading-relaxed text-mist lg:text-right text-pretty">
          Cinco encargos contados por lo que había que resolver, no por lo
          bonito que quedó.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 lg:grid-cols-6">
        <Reveal as="li" className="lg:col-span-4">
          <Link
            href={`/proyectos/${featured.slug}`}
            className="grain group flex h-full flex-col overflow-clip rounded-[28px] bg-surface transition-transform hover:-translate-y-1"
          >
            {/* El fondo es mayor que su ventana para que el parallax tenga
                recorrido sin dejar huecos por los bordes. */}
            <span
              aria-hidden
              className="relative block h-56 w-full overflow-clip lg:h-64"
            >
              <Parallax shift={10} className="absolute inset-0 m-[-14%]">
                <span
                  className="block h-full w-full"
                  style={{ backgroundImage: TINT[featured.tint] }}
                />
              </Parallax>
            </span>
            <div className="flex flex-1 flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:p-7">
              <div className="flex flex-col gap-2.5">
                <span className="w-fit rounded-full bg-void/70 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-bone uppercase">
                  {featured.category}
                </span>
                <h3 className="font-display text-2xl uppercase sm:text-[26px]">
                  {featured.title}
                </h3>
                <p className="max-w-[52ch] text-sm leading-relaxed text-mist">
                  {featured.summary}
                </p>
              </div>
              <p className="shrink-0 sm:text-right">
                <span className="block font-display text-3xl leading-none text-magenta">
                  {featured.result.value}
                </span>
                <span className="text-xs font-semibold text-mist">
                  {featured.result.label}
                </span>
              </p>
            </div>
          </Link>
        </Reveal>

        {rest.map((project, index) => (
          <Reveal
            as="li"
            key={project.slug}
            delay={0.06 * (index + 1)}
            className="lg:col-span-2"
          >
            <Link
              href={`/proyectos/${project.slug}`}
              className="grain group flex h-full flex-col overflow-clip rounded-[28px] bg-surface transition-transform hover:-translate-y-1"
            >
              <span aria-hidden className="relative block h-44 w-full overflow-clip">
                <Parallax
                  shift={9}
                  reverse={index % 2 === 1}
                  className="absolute inset-0 m-[-14%]"
                >
                  <span
                    className="block h-full w-full"
                    style={{ backgroundImage: TINT[project.tint] }}
                  />
                </Parallax>
              </span>
              <div className="flex flex-1 flex-col gap-2.5 p-6">
                <span className="w-fit rounded-full bg-void/70 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-bone uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-xl uppercase">
                  {project.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-mist">
                  {project.summary}
                </p>
                <p className="mt-auto pt-3 font-display text-xl text-violet">
                  {project.result.value}{" "}
                  <span className="font-sans text-xs font-semibold text-mist">
                    {project.result.label}
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}

      </ul>
    </section>
  );
}
