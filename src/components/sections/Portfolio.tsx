import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          <h2 className="font-display text-[clamp(2.5rem,6.4vw,4.5rem)] leading-[0.92] uppercase">
            <Reveal variant="clip" as="span" className="block">
              Casos
            </Reveal>
            <Reveal variant="clip" delay={0.12} as="span" className="block">
              y Marcas
            </Reveal>
          </h2>
        </div>
        <p className="max-w-[34ch] text-base leading-relaxed text-mist lg:text-right text-pretty">
          Marcas con las que he trabajado la estrategia, la comunicación y el
          posicionamiento digital.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.slug}
            delay={0.05 * (index + 1)}
            className="h-full"
          >
            <Link
              href={`/proyectos/${project.slug}`}
              className="grain group flex h-full flex-col overflow-clip rounded-[28px] border border-bone/10 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-magenta/40"
            >
              <span aria-hidden className="relative block h-44 w-full overflow-clip">
                <Parallax
                  shift={8}
                  reverse={index % 2 === 1}
                  className="absolute inset-0 m-[-14%]"
                >
                  <span
                    className="block h-full w-full"
                    style={{ backgroundImage: TINT[project.tint] }}
                  />
                </Parallax>
              </span>
              <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-7">
                <div className="flex flex-col gap-3">
                  <span className="w-fit rounded-full border border-bone/10 bg-void/80 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-bone uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl uppercase transition-colors group-hover:text-magenta">
                    {project.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-mist text-pretty">
                    {project.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2 text-sm font-bold text-bone transition-colors group-hover:text-magenta">
                  <span>Ver caso completo</span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.4}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
