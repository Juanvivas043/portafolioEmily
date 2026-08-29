import { Children, type ElementType, type ReactNode } from "react";

import { Reveal, type RevealVariant } from "@/components/motion/Reveal";

type StaggerProps = {
  children: ReactNode;
  variant?: RevealVariant;
  /** Segundos entre un hijo y el siguiente. */
  step?: number;
  /** Retardo del primero. */
  start?: number;
  /** Etiqueta del contenedor y de cada hijo envuelto. */
  as?: ElementType;
  itemAs?: ElementType;
  className?: string;
  itemClassName?: string;
};

/**
 * Envuelve cada hijo en un <Reveal /> con un retardo creciente.
 *
 * Es lo que hace que una lista se monte pieza a pieza en vez de aparecer de
 * golpe. Escalonar a mano cada elemento es justo el tipo de repetición que
 * acaba descuadrada en cuanto se añade o quita uno.
 */
export function Stagger({
  children,
  variant = "up",
  step = 0.09,
  start = 0,
  as: Tag = "div",
  itemAs,
  className,
  itemClassName,
}: StaggerProps) {
  return (
    <Tag className={className}>
      {Children.map(children, (child, index) => (
        <Reveal
          variant={variant}
          delay={start + index * step}
          as={itemAs}
          className={itemClassName}
        >
          {child}
        </Reveal>
      ))}
    </Tag>
  );
}
