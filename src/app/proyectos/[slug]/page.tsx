import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Sparkles } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { ContactForm } from "@/components/form/ContactForm";
import { getProject, projects } from "@/content/projects";

const TINT: Record<string, string> = {
  ember: "linear-gradient(140deg,#FF9A3D,#7C1D42)",
  violet: "linear-gradient(140deg,#A855F7,#241C30)",
  magenta: "linear-gradient(140deg,#FF7A3D,#FF2E88 48%,#7C3AED)",
  grape: "linear-gradient(140deg,#FF2E88,#3B1E5C)",
};

/** Prerenderiza una página por caso: todas salen estáticas del build. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} · ${project.category}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <main className="relative z-10">
        <div className="px-6 pt-10 sm:px-10 lg:px-[72px]">
          <Link
            href="/#portafolio"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-mist transition-colors hover:text-bone"
          >
            <ArrowLeft size={16} strokeWidth={2.4} />
            Volver al portafolio
          </Link>
        </div>

        <header className="px-6 pt-10 pb-12 sm:px-10 lg:px-[72px]">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
            <span aria-hidden className="h-0.5 w-6 bg-magenta" />
            {project.category}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] uppercase">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-mist text-pretty">
            {project.summary}
          </p>
        </header>

        <div
          aria-hidden
          className="grain h-56 w-full sm:h-72 lg:h-96"
          style={{ backgroundImage: TINT[project.tint] }}
        />

        <div className="grid gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:px-[72px] lg:py-24">
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="font-display text-3xl uppercase">Descripción y Alcance</h2>
              <p className="max-w-[58ch] text-base leading-[1.8] text-mist text-pretty">
                {project.description}
              </p>
            </section>
          </div>

          <aside className="grain flex h-fit flex-col gap-5 rounded-[26px] border border-bone/10 bg-surface p-7">
            <div className="flex items-center gap-2.5">
              <Sparkles size={18} className="text-magenta" />
              <h2 className="font-display text-2xl uppercase">Servicios ejecutados</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {project.services.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={17}
                    strokeWidth={2.6}
                    className="mt-0.5 shrink-0 text-mint"
                  />
                  <span className="text-[15px] font-medium leading-relaxed text-bone">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="border-t border-bone/10 px-6 py-16 sm:px-10 lg:px-[72px] lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.94] uppercase">
                ¿Tienes algo parecido entre manos?
              </h2>
              <p className="max-w-[42ch] text-base leading-relaxed text-mist text-pretty">
                Hablemos de los objetivos de tu marca y definamos juntos la estrategia adecuada.
              </p>
            </div>

            <ContactForm submitLabel="Hablemos de tu marca" />
          </div>
        </section>
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
