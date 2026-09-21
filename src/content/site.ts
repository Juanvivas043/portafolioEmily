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

/**
 * URL pública del sitio, para canonical, sitemap y Open Graph.
 *
 * `metadataBase` la parsea en build y revienta el despliegue entero si no es
 * una URL absoluta válida, así que aquí no vale un hueco entre corchetes ni
 * confiar en que la variable esté bien puesta.
 *
 * Dos cosas que ya han fallado y por eso están cubiertas:
 *
 * 1. Una variable declarada pero VACÍA. `??` solo cae al valor por defecto con
 *    null o undefined, no con "", así que la cadena vacía se colaba hasta
 *    `new URL("")`. Por eso se comprueba el contenido, no la existencia.
 * 2. Un dominio sin protocolo, tipo "miweb.com", que tampoco es URL válida.
 *    Se le antepone https:// en lugar de romper el build.
 *
 * Si no hay nada configurado, se usa el dominio que asigna Vercel, de modo que
 * un despliegue recién creado funciona sin tocar ninguna variable.
 */
function resolveSiteUrl(): string {
  const normalizar = (valor: string) => {
    const limpio = valor.trim().replace(/\/+$/, "");
    if (!limpio) return null;
    return /^https?:\/\//i.test(limpio) ? limpio : `https://${limpio}`;
  };

  const explicita = normalizar(process.env.NEXT_PUBLIC_SITE_URL ?? "");
  if (explicita) return explicita;

  // Vercel expone el dominio sin protocolo. El de producción es estable entre
  // despliegues; VERCEL_URL cambia en cada uno, así que solo vale de reserva.
  const vercel =
    normalizar(process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "") ??
    normalizar(process.env.VERCEL_URL ?? "");
  if (vercel) return vercel;

  return "http://localhost:3000";
}

export const site = {
  name: "Emily",
  /** Apellido u ocupación larga para el pie y los metadatos. */
  fullName: "Emily Silva Valero",
  role: "Ejecutiva de cuentas",
  roleLong: "Ejecutiva de cuentas y creadora de contenido",
  tagline: "Del brief al post que funciona",
  /** Frase de una línea para metadatos y para el pie. */
  summary:
    "Llevo la cuenta, escribo el brief y produzco el contenido. Un solo interlocutor entre tu marca y el equipo creativo.",

  email: "emilysilvav2001@gmail.com",
  phone: "0414 112 8221",
  location: "Caracas, Venezuela",
  /** Se muestra junto a la ubicación: «Caracas, Venezuela · disponible en remoto». */
  availability: "disponible en remoto",
  /** Aparece en el formulario y en la sección de contacto. */
  responseTime: "24 h",
  workingHours: "9:00 – 18:00",
  workingDays: "Lunes a viernes",

  /** Se usa en canonical, sitemap y Open Graph. Ver resolveSiteUrl. */
  url: resolveSiteUrl(),
  locale: "es_VE",
} as const;

export const socials: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "emily-silva-valero",
    href: "https://www.linkedin.com/in/emily-silva-valero-b3b283258",
  },
];
