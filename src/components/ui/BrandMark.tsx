import Image from "next/image";

import type { Project } from "@/content/projects";

type BrandMarkProps = {
  project: Pick<Project, "title" | "logo">;
  /**
   * Caja del logo. Manda el alto y el ancho máximo; el logo se encaja dentro
   * con object-contain, así uno cuadrado (Toyota) y uno apaisado (Iberia)
   * quedan con un peso visual parecido.
   */
  className?: string;
  /** Ancho real en pantalla, para que next/image elija la variante justa. */
  sizes: string;
  /**
   * En las tarjetas el nombre ya va escrito debajo, así que el logo es
   * decorativo y no debe leerse dos veces.
   */
  decorative?: boolean;
  /** Para cuando el logo es lo primero que se ve, como en la página del caso. */
  preload?: boolean;
};

/**
 * Logo de una marca, o su nombre en tipografía display si aún no hay logo.
 *
 * Los logos se preparan en crema y sobre transparente, de modo que encajan
 * encima de cualquiera de los degradados de las tarjetas sin tocarlos.
 */
export function BrandMark({
  project,
  className,
  sizes,
  decorative = false,
  preload = false,
}: BrandMarkProps) {
  if (!project.logo) {
    return (
      <span
        aria-hidden={decorative || undefined}
        className="max-w-[80%] text-center font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[0.95] text-bone uppercase text-balance drop-shadow-[0_6px_18px_rgba(10,9,12,0.35)]"
      >
        {project.title}
      </span>
    );
  }

  return (
    <span className={`relative block ${className ?? ""}`}>
      <Image
        src={project.logo}
        alt={decorative ? "" : `Logo de ${project.title}`}
        fill
        sizes={sizes}
        preload={preload}
        quality={90}
        className="object-contain drop-shadow-[0_6px_18px_rgba(10,9,12,0.35)]"
      />
    </span>
  );
}
