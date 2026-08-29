/**
 * Datos de identidad y contacto del sitio.
 *
 * ⚠️ PENDIENTE DE DATOS REALES
 * Los valores de abajo son de relleno: se ven como definitivos en la web, pero
 * NINGUNO está confirmado por Emily. Antes de publicar hay que sustituir el
 * correo, el teléfono, la ciudad, el horario y los usuarios de redes.
 *
 * Este archivo es el único sitio donde vive esta información: ni los
 * componentes ni las secciones la repiten.
 */

export type SocialLink = {
  /** Identificador estable, usado como key y para elegir el icono. */
  id: "instagram" | "linkedin" | "tiktok" | "behance";
  label: string;
  /** Lo que se muestra: el usuario, no la URL completa. */
  handle: string;
  href: string;
};

export const site = {
  name: "Emily",
  /** Apellido u ocupación larga para el pie y los metadatos. */
  fullName: "Emily",
  role: "Ejecutiva de cuentas",
  roleLong: "Ejecutiva de cuentas y creadora de contenido",
  tagline: "Del brief al post que funciona",
  /** Frase de una línea para metadatos y para el pie. */
  summary:
    "Llevo la cuenta, escribo el brief y produzco el contenido. Un solo interlocutor entre tu marca y el equipo creativo.",

  email: "hola@emily.com",
  phone: "+58 412 123 4567",
  location: "Caracas, Venezuela",
  /** Se muestra junto a la ubicación: «Caracas, Venezuela · disponible en remoto». */
  availability: "disponible en remoto",
  /** Aparece en el formulario y en la sección de contacto. */
  responseTime: "24 h",
  workingHours: "9:00 – 18:00",
  workingDays: "Lunes a viernes",

  /**
   * Se usa en canonical, sitemap y Open Graph. Tiene que ser una URL válida
   * (metadataBase la parsea en build), así que el hueco no puede ir entre
   * corchetes: se rellena con NEXT_PUBLIC_SITE_URL al desplegar.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafolio-emily.example.com",
  locale: "es_VE",
} as const;

export const socials: SocialLink[] = [
  { id: "instagram", label: "Instagram", handle: "@emily", href: "https://instagram.com/emily" },
  { id: "linkedin", label: "LinkedIn", handle: "emily", href: "https://linkedin.com/in/emily" },
  { id: "tiktok", label: "TikTok", handle: "@emily", href: "https://tiktok.com/@emily" },
];
