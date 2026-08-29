import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Retardo en segundos, para escalonar hermanos. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Aparición al entrar en pantalla.
 *
 * No lleva JavaScript: la animación la conduce `animation-timeline: view()` en
 * globals.css, que corre en el compositor. Donde el navegador no lo soporta
 * entra <RevealFallback />, que es el único trozo de cliente de todo esto.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
