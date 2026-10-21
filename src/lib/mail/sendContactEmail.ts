import { site } from "@/content/site";
import { getTransporter } from "@/lib/mail/transporter";
import { confirmationEmail, contactEmail } from "@/lib/mail/templates";
import type { ContactInput } from "@/lib/validation/contact";

/**
 * Envía el mensaje del formulario al buzón de Emily y, después, el acuse de
 * recibo a quien escribió.
 *
 * El remitente es siempre la cuenta autenticada: poner ahí el correo de quien
 * escribe haría que Gmail rechazara el envío por SPF. La dirección real del
 * visitante va en Reply-To, que es lo que se usa al pulsar «responder».
 */
export async function sendContactEmail(data: ContactInput) {
  const transporter = getTransporter();
  const from = process.env.SMTP_USER;
  const to = process.env.CONTACT_TO || from;

  const { subject, text, html } = contactEmail(data);

  await transporter.sendMail({
    from: `"Portafolio · ${data.name}" <${from}>`,
    to,
    replyTo: `"${data.name}" <${data.email}>`,
    subject,
    text,
    html,
  });

  // El mensaje importante ya llegó. Si el acuse falla (buzón inexistente,
  // límite de Gmail...), se registra pero no se le dice al visitante que su
  // envío falló, porque no es verdad.
  try {
    const confirmation = confirmationEmail(data);

    await transporter.sendMail({
      from: `"${site.fullName}" <${from}>`,
      to: `"${data.name}" <${data.email}>`,
      replyTo: to,
      ...confirmation,
    });
  } catch (error) {
    console.error("No se pudo enviar el acuse de recibo:", error);
  }
}
