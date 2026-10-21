import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { privacySections, privacyUpdatedAt } from "@/content/privacy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Qué datos recoge el formulario de ${site.name}, para qué se usan y cómo pedir que se borren.`,
  alternates: { canonical: "/privacidad" },
};

/**
 * Política de privacidad.
 *
 * Página estática: el texto vive en content/privacy.ts y aquí solo se
 * maqueta. A la izquierda, un índice pegajoso en escritorio; a la derecha, las
 * secciones numeradas.
 */
export default function PrivacyPage() {
  return (
    <>
      <main className="relative z-10">
        <div className="px-6 pt-10 sm:px-10 lg:px-[72px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-mist transition-colors hover:text-bone"
          >
            <ArrowLeft size={16} strokeWidth={2.4} />
            Volver al inicio
          </Link>
        </div>

        <header className="relative px-6 pt-10 pb-14 sm:px-10 lg:px-[72px] lg:pb-20">
          <Reveal variant="fade">
            <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
              <span aria-hidden className="h-0.5 w-6 bg-magenta" />
              Legal, pero en claro
            </p>
          </Reveal>
          <Reveal
            variant="clip"
            delay={0.08}
            as="h1"
            className="mt-5 font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] uppercase"
          >
            Política de <span className="gradient-text">privacidad</span>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-mist text-pretty">
              Qué pasa con lo que escribes en el formulario, explicado sin letra
              pequeña.
            </p>
            <p className="mt-4 text-[13px] font-semibold text-muted">
              Última actualización: {privacyUpdatedAt}
            </p>
          </Reveal>
        </header>

        <div className="grid gap-12 border-t border-bone/10 px-6 py-14 sm:px-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16 lg:px-[72px] lg:py-20">
          <nav aria-label="Índice" className="hidden lg:block">
            <ol className="sticky top-10 flex flex-col gap-2.5">
              {privacySections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 text-[14px] font-semibold text-mist transition-colors hover:text-bone"
                  >
                    <span className="font-display text-magenta">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex max-w-[68ch] flex-col gap-12">
            {privacySections.map((section, index) => (
              <Reveal
                key={section.id}
                as="section"
                id={section.id}
                className="scroll-mt-10"
              >
                <p className="font-display text-sm tracking-[0.08em] text-magenta">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.6rem,3.4vw,2.25rem)] leading-[1] uppercase">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-[1.75] text-mist text-pretty"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.items && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-[1.7] text-bone"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-magenta"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
