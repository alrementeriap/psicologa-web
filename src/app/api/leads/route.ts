import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      full_name,
      email,
      phone,
      consultation_reason,
      modality,
      message,
      consent,
    } = body;

    if (!full_name || !email || !message || !consent) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // 1. Guardar en Supabase
    const { error: dbError } = await supabaseAdmin.from("leads").insert([
      {
        full_name,
        email,
        phone,
        consultation_reason,
        modality,
        message,
        consent,
      },
    ]);

    if (dbError) {
      console.error("Error guardando en Supabase:", dbError);
      return NextResponse.json(
        { error: "No se pudo guardar el formulario" },
        { status: 500 }
      );
    }

    // 2. Enviar email de notificación
    const { error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_NOTIFICATION_EMAIL!],
      subject: `Nuevo contacto desde la web: ${full_name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #1f2937; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">Nuevo contacto desde la web</h2>

          <p><strong>Nombre:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
          <p><strong>Motivo principal:</strong> ${consultation_reason || "No indicado"}</p>
          <p><strong>Modalidad:</strong> ${modality || "No indicada"}</p>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-line;">${message}</p>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

          <p style="font-size: 14px; color: #6b7280;">
            Este mensaje se ha enviado automáticamente desde el formulario de la web de Pablo Banski Martínez.
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Error enviando email:", emailError);

      // No rompemos la UX del usuario si el lead ya se guardó
      return NextResponse.json({
        success: true,
        warning: "El formulario se guardó, pero falló el envío del email.",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inesperado:", error);

    return NextResponse.json(
      { error: "Error inesperado del servidor" },
      { status: 500 }
    );
  }
}