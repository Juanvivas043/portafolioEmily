type PortraitPlaceholderProps = {
  /** Pie visible sobre el hueco, entre corchetes hasta tener la foto. */
  caption?: string;
  className?: string;
};

/**
 * Hueco reservado para una foto que todavía no existe.
 *
 * Se dibuja en SVG en vez de cargar un archivo: escala a cualquier tamaño, no
 * cuesta ninguna petición y deja claro que es un marcador, no una foto de banco
 * de imágenes. Cuando llegue el material real, este componente se sustituye por
 * <Image /> y no cambia nada más.
 */
export function PortraitPlaceholder({
  caption = "[ Retrato ]",
  className,
}: PortraitPlaceholderProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-surface ${className ?? ""}`}>
      <svg
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
        role="img"
        aria-label="Espacio reservado para una fotografía"
      >
        <defs>
          <linearGradient id="retrato-fondo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E2340" />
            <stop offset="48%" stopColor="#1A1425" />
            <stop offset="100%" stopColor="#3C1832" />
          </linearGradient>
          <linearGradient id="retrato-figura" x1="0.15" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#5A4770" />
            <stop offset="100%" stopColor="#372A47" />
          </linearGradient>
        </defs>

        <rect width="300" height="400" fill="url(#retrato-fondo)" />
        <path d="M0 400 L300 150 L300 400 Z" fill="#A855F7" opacity=".1" />
        <rect x="126" y="176" width="48" height="96" rx="18" fill="#40314F" />
        <path
          d="M14 400 C14 300 66 236 150 236 C234 236 286 300 286 400 Z"
          fill="url(#retrato-figura)"
        />
        <ellipse cx="150" cy="140" rx="78" ry="82" fill="#574468" />
        <ellipse cx="150" cy="148" rx="65" ry="70" fill="url(#retrato-figura)" />
      </svg>

      <span className="absolute bottom-4 left-4 rounded-full bg-void/80 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-mist uppercase">
        {caption}
      </span>
    </div>
  );
}
