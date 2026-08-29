"use client";

import { useEffect } from "react";

/**
 * Respaldo para navegadores sin animaciones de scroll nativas.
 *
 * Se monta una sola vez en la página y observa todos los [data-reveal] con un
 * único IntersectionObserver. Si el navegador soporta `animation-timeline`, no
 * hace absolutamente nada: la animación ya la lleva el CSS.
 */
export function RevealFallback() {
  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: view()");

    if (supportsScrollTimeline) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    // Sin movimiento: se muestran directamente y no se observa nada.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
