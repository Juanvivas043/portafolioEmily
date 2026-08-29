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
