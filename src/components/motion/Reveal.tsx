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
 * La animación es una transición normal y no va atada al scroll:
 * <RevealObserver /> la dispara al asomar el elemento y corre en su propio
 * reloj, así que sale suave aunque el scroll vaya a tirones.
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
  /*
   * «clip» y «draw» esconden con clip-path a cero y scaleX(0), que dejan al
   * elemento con área nula — y IntersectionObserver no ve lo que no tiene
   * área, así que nunca se revelarían. Por eso el elemento observado conserva
   * su tamaño y lo que se mueve es un hijo.
   */
  const necesitaInterior = variant === "clip" || variant === "draw";

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
      {necesitaInterior ? <span data-reveal-inner="">{children}</span> : children}
    </Tag>
  );
}
