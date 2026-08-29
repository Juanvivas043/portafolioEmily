type StickerVariant = "corazon" | "estrella" | "mancha" | "nube";

type StickerProps = {
  variant: StickerVariant;
  /** Relleno de la forma. Los rasgos siempre van en crema o tinta. */
  fill?: string;
  size?: number;
  className?: string;
  /** Grados de rotación, para que no queden todas rectas. */
  rotate?: number;
};

const STROKE = "#F4EAD6";
const INK = "#15111C";

/**
 * Pegatinas dibujadas a mano.
 *
 * Son decorativas, así que van con aria-hidden: la información nunca depende de
 * ellas. Trazo grueso y contornos ligeramente irregulares a propósito, para que
 * no parezcan un pack de iconos.
 */
export function Sticker({
  variant,
  fill = "#FF2E88",
  size = 104,
  className,
  rotate = 0,
}: StickerProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 112 112"
      className={className}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {variant === "corazon" && (
        <path
          d="M56 102 C18 74 8 49 20 33 C32 17 52 21 56 37 C60 21 82 17 94 33 C106 49 94 74 56 102 Z"
          fill={fill}
          stroke={STROKE}
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
      )}

      {variant === "estrella" && (
        <path
          d="M56 6 L73 42 L112 47 L84 74 L91 112 L56 92 L21 112 L28 74 L0 47 L39 42 Z"
          fill={fill}
          stroke={STROKE}
          strokeWidth="4.2"
          strokeLinejoin="round"
        />
      )}

      {variant === "mancha" && (
        <path
          d="M56 4 C78 2 104 26 104 52 C104 80 82 104 55 104 C28 104 4 82 5 53 C6 27 32 6 56 4 Z"
          fill={fill}
          stroke={STROKE}
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      )}

      {variant === "nube" && (
        <path
          d="M22 10 C60 4 92 6 106 20 C116 32 112 70 106 92 C100 110 60 114 30 108 C12 104 2 84 4 54 C6 28 10 12 22 10 Z"
          fill={fill}
          stroke={STROKE}
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      )}

      <g fill={INK}>
        <circle cx="42" cy="50" r="5" />
        <circle cx="72" cy="48" r="5" />
      </g>
      <path
        d="M43 68 C51 80 70 79 76 66"
        fill="none"
        stroke={INK}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
