import { ArrowUpRight, ArrowUp } from "lucide-react";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { navItems } from "@/content/nav";
import { services } from "@/content/services";
import { site, socials } from "@/content/site";

/**
 * Pie de página.
 *
 * Cierra con el nombre a tamaño descomunal y recortado por el borde inferior:
 * es el mismo recurso tipográfico del hero, así que la página empieza y acaba
 * con el mismo gesto. Encima, tres columnas con lo que alguien busca de
 * verdad al llegar hasta abajo: correo, secciones y servicios.
 */
export function Footer() {
  return (
    <footer className="relative z-10 overflow-clip border-t border-bone/10">
      <div className="px-6 pt-16 pb-10 sm:px-10 lg:px-[72px] lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-extrabold tracking-[0.18em] text-mist uppercase">
              ¿Empezamos?
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group inline-flex w-fit items-center gap-4 font-display text-[clamp(1.6rem,4vw,2.75rem)] leading-none break-all text-bone uppercase transition-colors hover:text-magenta"
            >
              {site.email}
              <ArrowUpRight
                size={28}
                strokeWidth={2.4}
                className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <p className="max-w-[42ch] text-[15px] leading-relaxed text-mist">
              {site.summary}
            </p>

            <ul className="mt-2 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid size-12 place-items-center rounded-2xl bg-raised text-bone transition-colors hover:bg-surface hover:text-magenta"
                  >
                    <SocialIcon id={social.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <nav aria-label="Secciones">
              <h2 className="text-[11px] font-extrabold tracking-[0.14em] text-muted uppercase">
                Secciones
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[15px] font-semibold text-mist transition-colors hover:text-bone"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-[11px] font-extrabold tracking-[0.14em] text-muted uppercase">
                Servicios
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href="#servicios"
                      className="text-[15px] font-semibold text-mist transition-colors hover:text-bone"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[13px] text-muted">
              © {new Date().getFullYear()} {site.name} · {site.role} ·{" "}
              {site.location}
            </p>

            <a
              href="#inicio"
              className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-muted uppercase transition-colors hover:text-bone"
            >
              Volver arriba
              <ArrowUp size={14} strokeWidth={2.6} />
            </a>
          </div>

          <p className="text-[13px] font-semibold text-muted">
            Desarrollado por{" "}
            <span className="text-bone">Juandev</span>
          </p>
        </div>
      </div>

      {/* El nombre a tamaño descomunal, recortado por abajo: cierra la página
          con el mismo gesto tipográfico con el que abre el hero. */}
      <p
        aria-hidden
        className="-mb-[0.22em] select-none px-6 font-display text-[clamp(5rem,19vw,17rem)] leading-[0.8] text-bone/[0.055] uppercase sm:px-10 lg:px-[72px]"
      >
        {site.name}
        <span className="text-magenta/25">.</span>
      </p>
    </footer>
  );
}
