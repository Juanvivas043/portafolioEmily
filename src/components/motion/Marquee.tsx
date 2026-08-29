import type { CSSProperties } from "react";

type MarqueeProps = {
  items: string[];
  /** Segundos que tarda en dar una vuelta completa. */
  duration?: number;
  className?: string;
};

const SEPARATOR_COLORS = ["text-magenta", "text-ember", "text-violet"];

/**
 * Cinta de texto en bucle, solo CSS.
 *
 * La lista se duplica y la animación desplaza exactamente un 50%, así que el
 * salto es invisible. El duplicado va con aria-hidden para que no se lea dos
 * veces.
 */
export function Marquee({ items, duration = 42, className }: MarqueeProps) {
  const track = (
    <ul className="flex shrink-0 items-center gap-9 pr-9">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-9 whitespace-nowrap">
          <span>{item}</span>
          <span
            aria-hidden
            className={SEPARATOR_COLORS[index % SEPARATOR_COLORS.length]}
          >
            ✳
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`flex overflow-hidden ${className ?? ""}`}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div data-marquee="" className="flex min-w-max">
        {track}
        <div aria-hidden className="flex">
          {track}
        </div>
      </div>
    </div>
  );
}
