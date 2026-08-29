import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/mail/sendContactEmail";
import { MailConfigError } from "@/lib/mail/transporter";
import { rateLimit } from "@/lib/rate-limit";
import {
  hasErrors,
  looksAutomated,
  validateContact,
} from "@/lib/validation/contact";

/** nodemailer abre sockets: esto no puede correr en el runtime de edge. */
export const runtime = "nodejs";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "desconocido";
}

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request));
  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Has enviado varios mensajes seguidos. Prueba en un rato.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "No he podido leer el formulario." },
      { status: 400 },
    );
  }

  const { data, errors } = validateContact(payload);

  if (hasErrors(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // A un bot se le contesta que todo fue bien: si le decimos que le hemos
  // pillado, solo aprende a esquivar la trampa la próxima vez.
  if (looksAutomated(data, Date.now())) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail(data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof MailConfigError) {
      console.error(error.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "El envío de correo todavía no está configurado. Escríbeme directamente mientras tanto.",
        },
        { status: 503 },
      );
    }

    console.error("Fallo al enviar el correo de contacto:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "No he podido enviar el mensaje. Inténtalo otra vez o escríbeme por correo.",
      },
      { status: 502 },
    );
  }
}
