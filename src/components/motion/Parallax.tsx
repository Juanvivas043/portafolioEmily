import type { CSSProperties, ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /**
   * Desplazamiento en porcentaje de la propia altura. Positivo va más lento que
   * el scroll, negativo más rápido. Entre 4 y 12 suele bastar.
   */
  shift?: number;
  className?: string;
};

/**
 * Desplazamiento parallax conducido por `animation-timeline: view()`.
 *
 * Cero JavaScript y cero listeners de scroll: donde no hay soporte el elemento
 * simplemente se queda quieto, que es una degradación perfectamente aceptable.
 */
export function Parallax({ children, shift = 8, className }: ParallaxProps) {
  return (
    <div
      data-parallax=""
      className={className}
      style={
        {
          "--parallax-from": `${shift}%`,
          "--parallax-to": `${-shift}%`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
