import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

/**
 * Transporte SMTP.
 *
 * Se crea una sola vez y se reutiliza: nodemailer mantiene el pool de
 * conexiones, así que construir uno por petición sería tirar ese pool a la
 * basura en cada envío.
 */
let cached: Transporter | null = null;

export class MailConfigError extends Error {
  constructor(missing: string[]) {
    super(`Faltan variables de entorno para el correo: ${missing.join(", ")}`);
    this.name = "MailConfigError";
  }
}

export function getTransporter(): Transporter {
  if (cached) return cached;

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_APP_PASSWORD,
  } = process.env;

  const missing = Object.entries({
    SMTP_HOST,
    SMTP_USER,
    SMTP_APP_PASSWORD,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) throw new MailConfigError(missing);

  const port = Number(SMTP_PORT ?? 465);

  cached = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // El 465 va cifrado desde el saludo; el 587 arranca en claro y sube con
    // STARTTLS, que nodemailer negocia solo cuando secure es false.
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_APP_PASSWORD },
    pool: true,
    maxConnections: 2,
  });

  return cached;
}
