"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve el id de la sección que domina la pantalla.
 *
 * Un solo IntersectionObserver para todas las secciones, con una banda de
 * detección centrada en el viewport: así la sección activa cambia cuando de
 * verdad estás leyéndola, no en cuanto asoma un píxel.
 */
export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
