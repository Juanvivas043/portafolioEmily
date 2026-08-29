"use client";

import { useEffect } from "react";

/**
 * Bloquea el scroll del documento mientras haya una capa abierta encima.
 *
 * Compensa el ancho de la barra de desplazamiento con padding para que el
 * contenido no dé un salto lateral al bloquearse, que es el fallo clásico de
 * hacer esto solo con overflow: hidden.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [locked]);
}
