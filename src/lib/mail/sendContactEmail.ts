import { getTransporter } from "@/lib/mail/transporter";
import { contactEmail } from "@/lib/mail/templates";
import type { ContactInput } from "@/lib/validation/contact";

/**
 * Envía el mensaje del formulario al buzón de Emily.
 *
 * El remitente es siempre la cuenta autenticada: poner ahí el correo de quien
 * escribe haría que Gmail rechazara el envío por SPF. La dirección real del
 * visitante va en Reply-To, que es lo que se usa al pulsar «responder».
 */
export async function sendContactEmail(data: ContactInput) {
  const transporter = getTransporter();
  const from = process.env.SMTP_USER;
  const to = process.env.CONTACT_TO ?? from;

  const { subject, text, html } = contactEmail(data);

  await transporter.sendMail({
    from: `"Portafolio · ${data.name}" <${from}>`,
    to,
    replyTo: `"${data.name}" <${data.email}>`,
    subject,
    text,
    html,
  });
}
