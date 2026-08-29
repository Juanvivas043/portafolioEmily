import type { CSSProperties, ElementType, ReactNode } from "react";

type AssembleProps = {
  children: ReactNode;
  /** Desplazamiento horizontal en rem al llegar y al salir. */
  x?: number;
  /** Desplazamiento vertical en rem. */
  y?: number;
  /** Giro en grados con el que llega y con el que se va. */
  rotate?: number;
  /** Escala de partida y de salida. 1 es sin encoger. */
  scale?: number;
  /** Invierte el sentido, para que dos piezas vecinas no viajen igual. */
  reverse?: boolean;
  as?: ElementType;
  className?: string;
};

/**
 * La pieza llega descolocada, se asienta y se vuelve a descolocar al salir.
 *
 * Va atada al scroll a propósito, al revés que <Reveal />: el desarmado al
 * salir depende de dónde estás en la página, no de cuánto tiempo ha pasado, y
 * eso solo lo puede conducir el scroll.
 *
 * Ojo con anidarlo dentro de <Parallax />: los dos escriben transform sobre el
 * mismo elemento y el segundo gana. Si hacen falta ambos, van en niveles
 * distintos.
 */
export function Assemble({
  children,
  x = 0,
  y = 2.5,
  rotate = 5,
  scale = 0.94,
  reverse = false,
  as: Tag = "div",
  className,
}: AssembleProps) {
  const signo = reverse ? -1 : 1;

  return (
    <Tag
      data-assemble=""
      className={className}
      style={
        {
          "--asm-x": `${x * signo}rem`,
          "--asm-y": `${y * signo}rem`,
          "--asm-rotate": `${rotate * signo}deg`,
          "--asm-scale": scale,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
