import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }

  return new Resend(apiKey);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resend = getResendClient();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pr.banski@gmail.com",
      subject: "Nueva solicitud desde la web",
      html: `
        <h2>Nueva solicitud</h2>
        <p><strong>Nombre:</strong> ${body.full_name || ""}</p>
        <p><strong>Email:</strong> ${body.email || ""}</p>
        <p><strong>Teléfono:</strong> ${body.phone || ""}</p>
        <p><strong>Motivo:</strong> ${body.consultation_reason || ""}</p>
        <p><strong>Modalidad:</strong> ${body.modality || ""}</p>
        <p><strong>Mensaje:</strong> ${body.message || ""}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en /api/leads:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el formulario" },
      { status: 500 }
    );
  }
}