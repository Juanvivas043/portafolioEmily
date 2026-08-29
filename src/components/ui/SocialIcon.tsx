import type { SocialLink } from "@/content/site";

type SocialIconProps = {
  id: SocialLink["id"];
  size?: number;
  className?: string;
};

/**
 * Glifos de redes sociales, dibujados aquí.
 *
 * lucide-react dejó de incluir iconos de marca en la versión 1, así que se
 * dibujan como formas genéricas: mismo trazo que el resto de iconos del sitio y
 * sin reproducir ningún logotipo registrado.
 */
export function SocialIcon({ id, size = 19, className }: SocialIconProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {id === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </>
      )}

      {id === "linkedin" && (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      )}

      {id === "tiktok" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="m10 9 5 3-5 3z" fill="currentColor" />
        </>
      )}

      {id === "behance" && (
        <>
          <path d="M3 6h6a3 3 0 0 1 0 6H3zM3 12h6.5a3 3 0 0 1 0 6H3z" />
          <path d="M15 14h6a3 3 0 0 0-6 0 3 3 0 0 0 5.4 1.8" />
        </>
      )}
    </svg>
  );
}
