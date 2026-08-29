import { metrics } from "@/content/metrics";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Sticker } from "@/components/ui/Sticker";

const COLOR: Record<string, string> = {
  ember: "#FF7A3D",
  bone: "#F4EAD6",
  violet: "#A855F7",
  magenta: "#FF2E88",
};

/** Curva trazada a mano que sube de izquierda a derecha. */
const CURVE =
  "M 74 448 C 118 442, 154 424, 200 404 C 246 384, 268 396, 306 382 C 350 368, 392 374, 434 364 C 470 356, 496 348, 520 344 C 574 336, 606 320, 648 304 C 692 286, 706 298, 748 286 C 792 274, 820 264, 860 258 C 918 249, 962 232, 1010 212 C 1062 190, 1098 176, 1140 168 C 1178 161, 1212 156, 1245 148 C 1292 138, 1328 122, 1362 104";

/** Dónde va cada cifra respecto a su punto de la curva. */
const LABELS = [
  { id: "cuentas", x: 84, y: 292, size: 62 },
  { id: "roas", x: 452, y: 438, size: 70 },
  { id: "anos", x: 754, y: 164, size: 78 },
  { id: "alcance", x: 1062, y: 286, size: 84 },
];

/**
 * Banda de métricas dibujada a mano alzada.
 *
 * En pantallas medianas y grandes es una sola escena SVG con viewBox fijo, así
 * que escala sin recalcular nada. En móvil ese dibujo sería ilegible, de modo
 * que se sustituye por la misma información apilada.
 */
export function Metrics() {
  return (
    <section
      aria-label="Resultados"
      className="relative z-10 overflow-clip border-y border-bone/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 bg-[repeating-linear-gradient(0deg,rgba(244,234,214,.055)_0_1px,transparent_1px_40px),repeating-linear-gradient(90deg,rgba(244,234,214,.055)_0_1px,transparent_1px_40px)]"
      />

      <div className="relative hidden md:block">
        <svg
          viewBox="0 0 1440 560"
          className="block h-auto w-full"
          role="img"
          aria-label="Curva ascendente con los cuatro resultados principales"
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M 60 502 C 220 508, 360 499, 520 505 C 690 511, 820 500, 980 506 C 1140 512, 1262 501, 1382 505"
              stroke="#A855F7"
              strokeOpacity=".5"
              strokeWidth="2.6"
            />
            <path
              d={CURVE}
              transform="translate(3,8)"
              stroke="#A855F7"
              strokeOpacity=".38"
              strokeWidth="2.4"
            />
            <path d={CURVE} stroke="#FF2E88" strokeWidth="4.6" />
            <path
              d="M 1336 96 L 1364 103 L 1347 130"
              stroke="#FF2E88"
              strokeWidth="4.6"
            />
            <path
              d="M 78 178 C 118 185, 176 171, 306 180"
              stroke="#FF2E88"
              strokeWidth="4.5"
            />
            <path
              d="M 1082 378 C 1120 384, 1190 372, 1252 379"
              stroke="#FF7A3D"
              strokeWidth="4.5"
            />
          </g>

          {metrics.map((metric) => (
            <circle
              key={metric.id}
              cx={metric.point.x}
              cy={metric.point.y}
              r={metric.id === "alcance" ? 9 : 7}
              fill={COLOR[metric.color]}
            />
          ))}

          {LABELS.map((label) => {
            const metric = metrics.find((item) => item.id === label.id);
            if (!metric) return null;

            return (
              <g key={label.id}>
                <text
                  x={label.x}
                  y={label.y}
                  fontFamily="var(--font-display)"
                  fontSize={label.size}
                  fill={COLOR[metric.color]}
                  style={{ textTransform: "uppercase" }}
                >
                  {metric.value}
                </text>
                <text
                  x={label.x}
                  y={label.y + 28}
                  fontFamily="var(--font-sans)"
                  fontSize="15"
                  fontWeight="700"
                  fill="#F4EAD6"
                >
                  {metric.label}
                </text>
                {metric.note && (
                  <text
                    x={label.x}
                    y={label.y + 50}
                    fontFamily="var(--font-sans)"
                    fontSize="13"
                    fill="#9A92A8"
                  >
                    {metric.note}
                  </text>
                )}
              </g>
            );
          })}

          <text
            x="84"
            y="120"
            fontFamily="var(--font-display)"
            fontSize="44"
            fill="#F4EAD6"
          >
            LA CURVA
          </text>
          <text
            x="84"
            y="146"
            fontFamily="var(--font-sans)"
            fontSize="13"
            fill="#B9B2C4"
          >
            trazada a mano, dato a dato
          </text>
        </svg>

        {/* Las pegatinas se mueven bastante más que el dibujo, y en sentidos
            opuestos: es lo que separa los planos y hace visible la profundidad. */}
        <Parallax
          shift={26}
          className="pointer-events-none absolute bottom-[6%] left-[13%]"
        >
          <Sticker variant="mancha" size={112} rotate={-9} />
        </Parallax>
        <Parallax
          shift={22}
          reverse
          className="pointer-events-none absolute top-[14%] right-[6%]"
        >
          <Sticker variant="nube" fill="#FF7A3D" size={116} rotate={7} />
        </Parallax>
      </div>

      <div className="relative flex flex-col gap-8 px-6 py-16 sm:px-10 md:hidden">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-4xl uppercase">La curva</h2>
          <p className="text-[13px] text-mist">trazada a mano, dato a dato</p>
        </div>

        <ul className="flex flex-col gap-7">
          {metrics.map((metric, index) => (
            <Reveal as="li" key={metric.id} delay={index * 0.06}>
              <p
                className="font-display text-5xl leading-none"
                style={{ color: COLOR[metric.color] }}
              >
                {metric.value}
              </p>
              <p className="mt-1.5 text-[15px] font-bold text-bone">
                {metric.label}
              </p>
              {metric.note && (
                <p className="text-[13px] text-muted">{metric.note}</p>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
