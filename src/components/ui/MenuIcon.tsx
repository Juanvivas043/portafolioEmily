type MenuIconProps = {
  /** Con el panel abierto se dibuja el aspa en lugar de las rayas. */
  open?: boolean;
  size?: number;
  className?: string;
};

/**
 * Icono del menú, trazado a mano.
 *
 * Las tres rayas rectas de manual desentonaban con el resto del sitio, que va
 * todo dibujado: stickers, subrayados, la curva de métricas. Estas ondulan
 * ligeramente y la del medio va más corta y en magenta, así que el icono se
 * lee como parte del mismo lenguaje y no como un pictograma de librería.
 */
export function MenuIcon({ open = false, size = 22, className }: MenuIconProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      className={className}
    >
      {open ? (
        <>
          <path d="M6.2 6.4 C10 10.6, 14.2 13.6, 17.9 17.8" />
          <path d="M17.8 6.2 C13.9 10.5, 10.1 13.7, 6.3 17.9" stroke="#FF2E88" />
        </>
      ) : (
        <>
          <path d="M3.4 7.2 C8.2 6.3, 15.4 8.1, 20.6 6.9" />
          <path d="M3.4 12.1 C6.9 11.4, 10.8 12.6, 13.9 11.9" stroke="#FF2E88" />
          <path d="M3.4 17 C9.1 16.1, 16.2 17.6, 20.6 16.5" />
        </>
      )}
    </svg>
  );
}
