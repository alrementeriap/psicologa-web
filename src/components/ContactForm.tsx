"use client";

import { useState } from "react";

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  consultation_reason: string;
  modality: string;
  message: string;
  consent: boolean;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    full_name: "",
    email: "",
    phone: "",
    consultation_reason: "",
    modality: "online",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");
      setForm({
        full_name: "",
        email: "",
        phone: "",
        consultation_reason: "",
        modality: "online",
        message: "",
        consent: false,
      });
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return (
    <section id="contacto" className="px-6 pb-24 pt-6 md:px-12 lg:px-24">
      <div className="container-page">
        <div className="card-soft p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#17202b] md:text-4xl">
              Solicita una primera sesión o escríbeme si tienes dudas
            </h2>
            <p className="mt-4 leading-8 text-[#4b5563]">
              Puedes completar este formulario y me pondré en contacto contigo lo
              antes posible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              type="text"
              name="full_name"
              placeholder="Nombre completo"
              value={form.full_name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-[#d8d3cb] bg-white px-4 py-3 text-[#17202b] outline-none transition focus:border-[#3e6b61] focus:ring-2 focus:ring-[#dfeae6]"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-[#d8d3cb] bg-white px-4 py-3 text-[#17202b] outline-none transition focus:border-[#3e6b61] focus:ring-2 focus:ring-[#dfeae6]"
            />

            <input
              type="text"
              name="phone"
              placeholder="Teléfono (opcional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#d8d3cb] bg-white px-4 py-3 text-[#17202b] outline-none transition focus:border-[#3e6b61] focus:ring-2 focus:ring-[#dfeae6]"
            />

            <input
              type="text"
              name="consultation_reason"
              placeholder="Motivo principal de consulta"
              value={form.consultation_reason}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#d8d3cb] bg-white px-4 py-3 text-[#17202b] outline-none transition focus:border-[#3e6b61] focus:ring-2 focus:ring-[#dfeae6]"
            />

            <select
              name="modality"
              value={form.modality}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#d8d3cb] bg-white px-4 py-3 text-[#17202b] outline-none transition focus:border-[#3e6b61] focus:ring-2 focus:ring-[#dfeae6]"
            >
              <option value="online">Online</option>
              <option value="presencial">Presencial</option>
              <option value="indiferente">Indiferente</option>
            </select>

            <textarea
              name="message"
              placeholder="Cuéntame brevemente en qué puedo ayudarte"
              value={form.message}
              onChange={handleChange}
              required
              className="min-h-[160px] w-full rounded-2xl border border-[#d8d3cb] bg-white px-4 py-3 text-[#17202b] outline-none transition focus:border-[#3e6b61] focus:ring-2 focus:ring-[#dfeae6]"
            />

            <label className="flex items-start gap-3 text-sm leading-6 text-[#4b5563]">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <span>
                He leído y acepto la política de privacidad y consiento el
                tratamiento de mis datos.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary border-0 disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-700">
                Tu mensaje se ha enviado correctamente.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-700">
                Ha ocurrido un error al enviar el formulario.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}