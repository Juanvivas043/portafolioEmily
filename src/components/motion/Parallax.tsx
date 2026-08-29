import type { CSSProperties, ElementType, ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /**
   * Recorrido en porcentaje de la propia altura, repartido entre la entrada y
   * la salida. Un 10 mueve el elemento desde +10% hasta -10%, o sea una quinta
   * parte de su alto a lo largo de todo el paso por pantalla.
   *
   * Por debajo de 6 no se aprecia. Entre 8 y 18 se nota sin marear.
   */
  shift?: number;
  /** Invierte el sentido: útil para que dos columnas se crucen. */
  reverse?: boolean;
  as?: ElementType;
  className?: string;
};

/**
 * Desplazamiento parallax conducido por `animation-timeline: view()`.
 *
 * Cero JavaScript y cero listeners de scroll: donde no hay soporte el elemento
 * simplemente se queda quieto, que es una degradación perfectamente aceptable.
 *
 * Ojo: si un ancestro recorta con overflow hidden, el recorrido se ve cortado.
 */
export function Parallax({
  children,
  shift = 10,
  reverse = false,
  as: Tag = "div",
  className,
}: ParallaxProps) {
  const from = reverse ? -shift : shift;

  return (
    <Tag
      data-parallax=""
      className={className}
      style={
        {
          "--parallax-from": `${from}%`,
          "--parallax-to": `${-from}%`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
