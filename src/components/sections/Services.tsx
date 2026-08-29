"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { services } from "@/content/services";

/**
 * Índice tipográfico: los títulos son la composición y solo uno está abierto.
 *
 * Se abre al pasar por encima y también al enfocar con el teclado, así que el
 * contenido es alcanzable sin ratón. Las descripciones de los cerrados siguen
 * en el DOM para que buscadores y lectores de pantalla las encuentren.
 */
export function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section
      id="servicios"
      className="relative z-10 border-t border-bone/10 px-6 py-24 sm:px-10 lg:px-[72px] lg:py-32"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--gradient-signature)]"
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
            <span aria-hidden className="h-0.5 w-6 bg-magenta" />
            Servicios
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,3.875rem)] leading-[0.96] uppercase">
            Lo que hago
          </h2>
        </div>
        <p className="max-w-[32ch] text-base leading-relaxed text-mist lg:text-right text-pretty">
          Seis frentes. Puedo llevarlos todos o solo aquel donde tu equipo va
          corto.
        </p>
      </div>

      <ul className="mt-10 flex flex-col">
        {services.map((service) => {
          const isActive = service.id === activeId;

          return (
            <li key={service.id}>
              <button
                type="button"
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                aria-expanded={isActive}
                className={`grain w-full cursor-pointer text-left transition-colors ${
                  isActive
                    ? "rounded-[26px] border border-magenta/30 bg-surface p-6 sm:p-8"
                    : "border-t border-bone/10 px-0 py-6"
                }`}
              >
                <div
                  className={`grid items-center gap-5 ${
                    isActive
                      ? "sm:grid-cols-[3rem_minmax(0,1fr)] lg:grid-cols-[3rem_minmax(0,1fr)_18rem] lg:gap-8"
                      : "grid-cols-[3rem_minmax(0,1fr)_2.5rem]"
                  }`}
                >
                  <span
                    className={`font-display text-sm tracking-[0.06em] ${
                      isActive ? "gradient-text" : "text-muted"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div className="flex flex-col gap-4">
                    <h3
                      className={`font-display uppercase transition-colors ${
                        isActive
                          ? "text-[clamp(1.9rem,4.4vw,3.625rem)] leading-[0.98] text-bone"
                          : "text-[clamp(1.4rem,3.4vw,3.375rem)] leading-none text-bone/55"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`max-w-[56ch] text-base leading-[1.6] text-mist text-pretty ${
                        isActive ? "" : "sr-only"
                      }`}
                    >
                      {service.description}
                    </p>

                    {isActive && (
                      <ul className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-magenta/15 px-3.5 py-1.5 text-[11.5px] font-extrabold tracking-[0.06em] text-[#FF8DBE] uppercase"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {isActive ? (
                    <span
                      aria-hidden
                      className="hidden h-48 overflow-hidden rounded-[18px] bg-[image:var(--gradient-mesh)] lg:block"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="grid size-10 place-items-center justify-self-end rounded-full border-[1.5px] border-bone/20 text-bone"
                    >
                      <ChevronDown size={15} strokeWidth={2.4} />
                    </span>
                  )}
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <a
        href="#contacto"
        className="mt-10 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-bone/20 px-7 py-4 text-[15px] font-bold text-bone transition-colors hover:border-magenta hover:text-magenta"
      >
        ¿Necesitas varios a la vez? Hablemos
        <ArrowUpRight size={16} strokeWidth={2.6} />
      </a>
    </section>
  );
}
