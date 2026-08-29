/**
 * Validación del formulario de contacto.
 *
 * A mano y sin dependencias, para no meter una librería de esquemas por seis
 * campos. Vive aquí para que cliente y servidor apliquen exactamente las mismas
 * reglas: el cliente para dar respuesta inmediata, el servidor porque es el
 * único sitio donde la validación de verdad cuenta.
 */

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  consent: boolean;
  /** Trampa para robots: si viene con algo, es spam. */
  website: string;
  /** Marca de tiempo en que se pintó el formulario. */
  renderedAt: number;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 2000;
/** Un humano no rellena y envía el formulario en menos de esto. */
export const MIN_FILL_MS = 3000;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export function validateContact(raw: unknown): {
  data: ContactInput;
  errors: ContactErrors;
} {
  const input = (raw ?? {}) as Record<string, unknown>;

  const data: ContactInput = {
    name: asString(input.name),
    email: asString(input.email),
    company: asString(input.company),
    topic: asString(input.topic),
    message: asString(input.message),
    consent: input.consent === true || input.consent === "true",
    website: asString(input.website),
    renderedAt: Number(input.renderedAt) || 0,
  };

  const errors: ContactErrors = {};

  if (data.name.length < 2) {
    errors.name = "Dime cómo te llamas.";
  } else if (data.name.length > 80) {
    errors.name = "Ese nombre es demasiado largo.";
  }

  if (!EMAIL.test(data.email)) {
    errors.email = "Revisa el correo, no me cuadra.";
  } else if (data.email.length > 160) {
    errors.email = "Ese correo es demasiado largo.";
  }

  if (data.company.length > 120) {
    errors.company = "El nombre de la empresa es demasiado largo.";
  }

  if (data.message.length < MESSAGE_MIN) {
    errors.message = `Cuéntame un poco más, al menos ${MESSAGE_MIN} caracteres.`;
  } else if (data.message.length > MESSAGE_MAX) {
    errors.message = `Máximo ${MESSAGE_MAX} caracteres.`;
  }

  if (!data.consent) {
    errors.consent = "Necesito tu permiso para responderte.";
  }

  return { data, errors };
}

export const hasErrors = (errors: ContactErrors) =>
  Object.keys(errors).length > 0;

/**
 * Comprobaciones antispam. Van aparte de la validación porque no se le enseñan
 * al usuario: a un bot se le responde igual que a una persona para no darle
 * pistas sobre qué le delató.
 */
export function looksAutomated(data: ContactInput, now: number) {
  if (data.website !== "") return true;
  if (data.renderedAt > 0 && now - data.renderedAt < MIN_FILL_MS) return true;
  return false;
}
