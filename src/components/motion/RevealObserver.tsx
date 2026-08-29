"use client";

import { useEffect } from "react";

/**
 * Dispara las entradas cuando el elemento asoma por pantalla.
 *
 * Se monta una sola vez por página y observa todos los [data-reveal] con un
 * único IntersectionObserver, que deja de observar cada elemento en cuanto lo
 * marca: no hay trabajo por fotograma ni oyentes de scroll.
 *
 * Marcar y soltar es deliberado. Atar la entrada al scroll con
 * `animation-timeline` parece más elegante, pero se ve a tirones —la rueda
 * avanza a saltos— y deja los elementos congelados a medias si paras. Aquí la
 * transición corre en su propio reloj y siempre termina.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const mostrarTodo = () =>
      targets.forEach((el) => el.setAttribute("data-visible", "true"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      mostrarTodo();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      mostrarTodo();
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
      // El margen inferior negativo evita que algo se dé por «visto» cuando
      // apenas asoma un par de píxeles por el borde de abajo.
      { rootMargin: "0px 0px -40px 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
