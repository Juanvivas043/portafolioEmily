import { site } from "@/content/site";

/**
 * Texto de la política de privacidad.
 *
 * ⚠️ PENDIENTE DE REVISIÓN
 * Es un texto genérico, ajustado a lo que el sitio hace de verdad (un
 * formulario que llega por correo y nada de cookies de seguimiento). No es
 * asesoría legal: conviene que alguien lo revise antes de publicar, sobre todo
 * si se añade analítica o se trabaja con clientes de la UE.
 */

export type PrivacySection = {
  id: string;
  title: string;
  /** Cada cadena es un párrafo. */
  paragraphs: string[];
  /** Lista opcional que va después de los párrafos. */
  items?: string[];
};

/** Se muestra bajo el título. Cámbiala cada vez que edites el texto. */
export const privacyUpdatedAt = "21 de octubre de 2026";

export const privacySections: PrivacySection[] = [
  {
    id: "responsable",
    title: "Quién trata tus datos",
    paragraphs: [
      `La responsable de este sitio y de los datos que envías a través de él es ${site.fullName}, ${site.roleLong.toLowerCase()}, con base en ${site.location}.`,
      `Para cualquier cosa relacionada con tu información puedes escribirme a ${site.email}.`,
    ],
  },
  {
    id: "datos",
    title: "Qué datos recojo",
    paragraphs: [
      "Solo los que tú escribes en el formulario de contacto:",
    ],
    items: [
      "Nombre.",
      "Correo electrónico.",
      "Empresa o marca, si la indicas.",
      "El tema que eliges y el mensaje que escribes.",
    ],
  },
  {
    id: "finalidad",
    title: "Para qué los uso",
    paragraphs: [
      "Para leer tu mensaje, responderte y, si llegamos a trabajar juntas o juntos, mantener la conversación sobre el proyecto. Al enviar el formulario también recibes un correo automático que confirma que tu mensaje llegó.",
      "No los uso para enviarte publicidad, no creo perfiles con ellos y no los vendo ni los cedo a nadie.",
    ],
  },
  {
    id: "base",
    title: "Por qué puedo usarlos",
    paragraphs: [
      "Porque me das tu consentimiento al marcar la casilla del formulario. Sin esa casilla el mensaje no se envía.",
    ],
  },
  {
    id: "terceros",
    title: "Quién más interviene",
    paragraphs: [
      "El formulario se envía por correo electrónico a través de Gmail (Google), así que tu mensaje queda guardado en ese buzón. Google actúa como proveedor del servicio de correo y aplica su propia política de privacidad.",
      "El sitio está alojado en Vercel, que como cualquier servidor puede registrar datos técnicos de la visita (como la dirección IP) por motivos de seguridad y funcionamiento.",
    ],
  },
  {
    id: "conservacion",
    title: "Cuánto tiempo los guardo",
    paragraphs: [
      "Mientras dure la conversación o la relación profesional, y después solo el tiempo razonable por si necesitas retomar el contacto. Si me pides que los borre, lo hago.",
    ],
  },
  {
    id: "derechos",
    title: "Tus derechos",
    paragraphs: [
      `Puedes pedirme en cualquier momento que te diga qué datos tengo, que los corrija o que los elimine, y retirar el consentimiento que diste. Basta con escribirme a ${site.email} desde el correo que usaste en el formulario.`,
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "Este sitio no usa cookies de seguimiento, publicidad ni analítica. Las tipografías y las imágenes se sirven desde el propio dominio, sin llamadas a servicios externos que te rastreen.",
    ],
  },
  {
    id: "cambios",
    title: "Cambios en esta política",
    paragraphs: [
      "Si cambio la forma en que trato tus datos, actualizaré esta página y la fecha de arriba.",
    ],
  },
];
