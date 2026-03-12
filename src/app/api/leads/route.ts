import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

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

    const { error } = await supabaseAdmin.from("leads").insert([
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

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "No se pudo guardar el formulario" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error inesperado del servidor" },
      { status: 500 }
    );
  }
}