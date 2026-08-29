"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { MobileNav } from "@/components/layout/MobileNav";
import { MenuIcon } from "@/components/ui/MenuIcon";
import { headerNavItems, sectionIds } from "@/content/nav";
import { site } from "@/content/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type MenuState = "closed" | "open" | "closing";

export function Header() {
  const [menu, setMenu] = useState<MenuState>("closed");
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-bone/10 bg-void/80 backdrop-blur-md">
        {/* La barra de progreso la mueve el scroll de la raíz, sin JavaScript. */}
        <span
          aria-hidden
          data-scroll-progress
          className="absolute inset-x-0 bottom-0 h-0.5 bg-[image:var(--gradient-signature)]"
        />

        <div className="flex h-[86px] items-center justify-between px-6 sm:px-10 lg:px-[72px]">
          <a href="#inicio" className="font-display text-xl uppercase">
            {site.name}
            <span className="text-magenta">.</span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {headerNavItems.map((item) => {
                const isActive = activeId === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`text-[14.5px] font-semibold transition-colors hover:text-bone ${
                        isActive ? "text-bone" : "text-mist"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2.5 rounded-full bg-bone px-[22px] py-3 text-[14.5px] font-extrabold text-void transition-transform hover:-translate-y-0.5"
                >
                  Hablemos
                  <ArrowUpRight size={14} strokeWidth={2.6} />
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenu("open")}
            aria-label="Abrir el menú"
            aria-expanded={menu === "open"}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-bone/15 bg-raised pr-5 pl-4 text-[12px] font-extrabold tracking-[0.14em] text-bone uppercase transition-colors hover:border-magenta/50 lg:hidden"
          >
            <MenuIcon />
            Menú
          </button>
        </div>
      </header>

      {menu !== "closed" && (
        <MobileNav
          state={menu}
          activeId={activeId}
          onClose={() => setMenu("closing")}
          onExited={() => setMenu("closed")}
        />
      )}
    </>
  );
}
