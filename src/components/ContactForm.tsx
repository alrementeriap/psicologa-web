"use client";

import { useState } from "react";
import ScrollLinked from "@/components/ScrollLinked";

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
        <ScrollLinked
          yRange={[65, 0, -18]}
          opacityRange={[0.35, 1, 1]}
          scaleRange={[0.975, 1, 1]}
        >
          <div className="card-soft p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="eyebrow">Contacto</p>
                <h2 className="section-title">
                  Solicita una primera sesión o escríbeme si tienes dudas
                </h2>
                <p className="body-copy mt-4">
                  Puedes completar este formulario y me pondré en contacto contigo
                  lo antes posible.
                </p>

                <ScrollLinked
                  yRange={[40, 0, -10]}
                  opacityRange={[0.5, 1, 1]}
                  scaleRange={[0.99, 1, 1]}
                >
                  <div className="mt-8 space-y-5 rounded-[24px] border border-[var(--line)] bg-[var(--warm-soft)] p-6 hover-lift">
                    <div>
                      <p className="text-sm font-medium text-[#17202b]">Email</p>
                      <p className="mt-1 text-[#4b5563]">pr.banski@gmail.com</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#17202b]">WhatsApp / Teléfono</p>
                      <p className="mt-1 text-[#4b5563]">+34 633944311</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#17202b]">
                        Horario de respuesta
                      </p>
                      <p className="mt-1 text-[#4b5563]">
                        Lunes a sábado, de 9:00 a 20:00
                      </p>
                    </div>
                  </div>
                </ScrollLinked>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-[#374151]">
                    Nombre completo
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    placeholder="Tu nombre completo"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#374151]">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="tuemail@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#374151]">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Opcional"
                    value={form.phone}
                    onChange={handleChange}
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="consultation_reason" className="mb-2 block text-sm font-medium text-[#374151]">
                    Motivo principal de consulta
                  </label>
                  <input
                    id="consultation_reason"
                    type="text"
                    name="consultation_reason"
                    placeholder="Por ejemplo: duelo, ansiedad, gestión emocional"
                    value={form.consultation_reason}
                    onChange={handleChange}
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="modality" className="mb-2 block text-sm font-medium text-[#374151]">
                    Modalidad
                  </label>
                  <select
                    id="modality"
                    name="modality"
                    value={form.modality}
                    onChange={handleChange}
                    className="field"
                  >
                    <option value="online">Online</option>
                    <option value="presencial">Presencial</option>
                    <option value="indiferente">Indiferente</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#374151]">
                    Cuéntame brevemente en qué puedo ayudarte
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Puedes explicarme brevemente tu situación o tu motivo de consulta"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="field min-h-[160px]"
                  />
                </div>

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
                  <p className="text-sm font-medium text-[var(--success)]">
                    Tu mensaje se ha enviado correctamente.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-medium text-[var(--error)]">
                    Ha ocurrido un error al enviar el formulario.
                  </p>
                )}
              </form>
            </div>
          </div>
        </ScrollLinked>
      </div>
    </section>
  );
}