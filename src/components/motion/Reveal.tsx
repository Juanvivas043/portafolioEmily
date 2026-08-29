import type { CSSProperties, ElementType, ReactNode } from "react";

/** "up" es el valor por defecto y se escribe como cadena vacía. */
export type RevealVariant =
  | "up"
  | "fade"
  | "left"
  | "right"
  | "scale"
  | "tilt"
  /** Barrido de máscara de abajo arriba. Para titulares. */
  | "clip"
  /** Se dibuja de izquierda a derecha. Para filetes y reglas. */
  | "draw";

type RevealProps = {
  children?: ReactNode;
  variant?: RevealVariant;
  /** Retardo en segundos, para escalonar hermanos. */
  delay?: number;
  /** Grados de giro de partida. Solo aplica a la variante "tilt". */
  tilt?: number;
  as?: ElementType;
  className?: string;
  /** Lo demás va tal cual al elemento: aria-hidden, id, role... */
  [key: string]: unknown;
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
  variant = "up",
  delay = 0,
  tilt,
  as: Tag = "div",
  className,
  ...rest
}: RevealProps) {
  return (
    <Tag
      {...rest}
      data-reveal={variant === "up" ? "" : variant}
      className={className}
      style={
        {
          "--reveal-delay": `${delay}s`,
          ...(tilt !== undefined ? { "--reveal-tilt": `${tilt}deg` } : {}),
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
