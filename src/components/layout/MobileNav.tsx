"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

import { SocialIcon } from "@/components/ui/SocialIcon";

import { navItems } from "@/content/nav";
import { site, socials } from "@/content/site";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type MobileNavProps = {
  /** "closing" mantiene el panel montado mientras corre la animación de salida. */
  state: "open" | "closing";
  activeId: string | null;
  onClose: () => void;
  onExited: () => void;
};

export function MobileNav({ state, activeId, onClose, onExited }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closing = state === "closing";

  useLockBodyScroll(true);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    // El foco entra en el panel al abrirse, si no el teclado se queda detrás.
    panel.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 lg:hidden">
      <button
        type="button"
        aria-label="Cerrar el menú"
        onClick={onClose}
        data-overlay={closing ? "out" : "in"}
        className="absolute inset-0 bg-void/75 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        data-panel={closing ? "out" : "in"}
        onAnimationEnd={closing ? onExited : undefined}
        className="grain absolute inset-y-0 right-0 flex w-[min(21rem,85vw)] flex-col gap-7 border-l border-magenta/25 bg-[#120F18] px-6 pt-4 pb-7 shadow-[-28px_0_60px_rgba(0,0,0,0.6)]"
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-[3px] bg-[image:var(--gradient-signature)]"
        />

        <div className="flex items-center justify-between">
          <span className="text-[10.5px] font-extrabold tracking-[0.16em] text-mist uppercase">
            Menú
          </span>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Cerrar el menú"
            className="grid size-12 place-items-center rounded-2xl bg-raised text-bone"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col">
            {navItems.map((item, index) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex min-h-13 items-baseline gap-3 font-display text-3xl uppercase transition-colors ${
                      isActive ? "text-bone" : "text-bone/50"
                    }`}
                  >
                    <span
                      className={`font-sans text-[11px] font-extrabold tracking-[0.1em] ${
                        isActive ? "text-magenta" : "text-bone/30"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-bone/10 pt-5">
          <div className="flex flex-col gap-1">
            <span className="text-[10.5px] font-extrabold tracking-[0.14em] text-mist uppercase">
              Escríbeme
            </span>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-semibold break-all text-bone"
            >
              {site.email}
            </a>
          </div>

          <ul className="flex gap-2.5">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid size-12 place-items-center rounded-2xl bg-raised text-bone transition-colors hover:bg-surface"
                >
                  <SocialIcon id={social.id} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            onClick={onClose}
            className="flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-[image:var(--gradient-signature)] text-[15px] font-extrabold text-void"
          >
            Hablemos
            <ArrowUpRight size={16} strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </div>
  );
}
