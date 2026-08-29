import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      id="portfolio"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-[72px] lg:py-32"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
            <span aria-hidden className="h-0.5 w-6 bg-magenta" />
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6.4vw,4.5rem)] leading-[0.92] uppercase">
            Casos
            <br />
            que cuento
          </h2>
        </div>
        <p className="max-w-[34ch] text-base leading-relaxed text-mist lg:text-right text-pretty">
          Las marcas y los números van entre corchetes hasta que me confirmes
          qué puedo publicar.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 lg:grid-cols-6">
        <Reveal as="li" className="lg:col-span-4">
          <Link
            href={`/proyectos/${featured.slug}`}
            className="grain group flex h-full flex-col overflow-hidden rounded-[28px] bg-surface transition-transform hover:-translate-y-1"
          >
            <span
              aria-hidden
              className="h-56 w-full lg:h-64"
              style={{ backgroundImage: TINT[featured.tint] }}
            />
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
              className="grain group flex h-full flex-col overflow-hidden rounded-[28px] bg-surface transition-transform hover:-translate-y-1"
            >
              <span
                aria-hidden
                className="h-44 w-full"
                style={{ backgroundImage: TINT[project.tint] }}
              />
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

        <li className="lg:col-span-6">
          <div className="grain flex flex-col gap-5 rounded-[28px] border border-magenta/25 bg-[linear-gradient(120deg,#16121C_0%,#1E1926_60%,#2A1530_100%)] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl uppercase sm:text-[28px]">
                ¿Te suena tu caso en alguno de estos?
              </h3>
              <p className="text-[14.5px] text-mist">
                Cuéntame qué tienes entre manos y te digo por dónde empezaría.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full bg-[image:var(--gradient-signature)] px-7 py-4 text-[15px] font-extrabold text-void transition-transform hover:-translate-y-0.5"
            >
              Escríbeme
              <ArrowUpRight size={16} strokeWidth={2.6} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
