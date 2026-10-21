import { site } from "@/content/site";
import type { ContactInput } from "@/lib/validation/contact";

/** Todo lo que venga del formulario se escapa: acaba dentro de un HTML. */
const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function contactEmail(data: ContactInput) {
  const company = data.company || "—";
  const topic = data.topic || "—";

  const subject = `Nuevo mensaje de ${data.name}${
    data.company ? ` (${data.company})` : ""
  }`;

  const text = [
    `Nombre: ${data.name}`,
    `Correo: ${data.email}`,
    `Empresa: ${company}`,
    `Tema: ${topic}`,
    "",
    data.message,
  ].join("\n");

  const rows = [
    ["Nombre", data.name],
    ["Correo", data.email],
    ["Empresa", company],
    ["Tema", topic],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 16px 6px 0;color:#6b6478;font-size:13px;">${label}</td>
          <td style="padding:6px 0;color:#15111c;font-size:14px;font-weight:600;">${escape(
            value,
          )}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="background:#f5f1ea;padding:28px;font-family:-apple-system,Segoe UI,system-ui,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;padding:28px;">
        <p style="margin:0 0 18px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#a1198f;font-weight:800;">
          Formulario del portafolio
        </p>
        <table style="border-collapse:collapse;margin-bottom:20px;">${rows}</table>
        <div style="border-top:1px solid #e6e1d8;padding-top:18px;">
          <p style="margin:0;color:#15111c;font-size:15px;line-height:1.6;white-space:pre-line;">${escape(
            data.message,
          )}</p>
        </div>
      </div>
    </div>`;

  return { subject, text, html };
}

/**
 * Acuse de recibo para quien escribe.
 *
 * Le confirma que el mensaje llegó, cuándo puede esperar respuesta y le
 * devuelve una copia de lo que envió, por si quiere tenerlo a mano.
 */
export function confirmationEmail(data: ContactInput) {
  const firstName = data.name.split(/\s+/)[0];

  const subject = `Recibí tu mensaje, ${firstName}`;

  const text = [
    `Hola, ${firstName}:`,
    "",
    `Gracias por escribirme. Tu mensaje me llegó bien y te respondo en menos de ${site.responseTime}, de ${site.workingDays.toLowerCase()} (${site.workingHours}).`,
    "",
    "Esto es lo que me enviaste:",
    "",
    data.message,
    "",
    `— ${site.fullName}`,
    site.roleLong,
  ].join("\n");

  const html = `
    <div style="background:#0a090c;padding:28px;font-family:-apple-system,Segoe UI,system-ui,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:#16121c;border-radius:18px;overflow:hidden;">
        <div style="height:4px;background:linear-gradient(120deg,#ff7a3d,#ff2e88 52%,#a855f7);"></div>
        <div style="padding:30px 28px;">
          <p style="margin:0 0 6px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#ff2e88;font-weight:800;">
            Mensaje recibido
          </p>
          <h1 style="margin:0 0 18px;font-size:26px;line-height:1.1;color:#f4ead6;text-transform:uppercase;">
            Hola, ${escape(firstName)}
          </h1>
          <p style="margin:0 0 14px;color:#b9b2c4;font-size:15px;line-height:1.65;">
            Gracias por escribirme. Tu mensaje me llegó bien y te respondo en
            menos de <strong style="color:#f4ead6;">${site.responseTime}</strong>,
            de ${site.workingDays.toLowerCase()} (${site.workingHours}).
          </p>
          <p style="margin:22px 0 8px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#9a92a8;font-weight:800;">
            Lo que me enviaste
          </p>
          <div style="border-left:3px solid #a855f7;background:#1e1926;border-radius:0 12px 12px 0;padding:14px 16px;">
            <p style="margin:0;color:#f4ead6;font-size:14px;line-height:1.6;white-space:pre-line;">${escape(
              data.message,
            )}</p>
          </div>
          <p style="margin:26px 0 0;color:#f4ead6;font-size:15px;font-weight:700;">${site.fullName}</p>
          <p style="margin:2px 0 0;color:#9a92a8;font-size:13px;">${site.roleLong}</p>
        </div>
      </div>
      <p style="max-width:560px;margin:14px auto 0;color:#6b6478;font-size:11.5px;line-height:1.5;text-align:center;">
        Recibes este correo porque usaste el formulario de ${site.url.replace(/^https?:\/\//, "")}.
        Si no fuiste tú, puedes ignorarlo.
      </p>
    </div>`;

  return { subject, text, html };
}
