import Image from "next/image";
import ScrollLinked from "@/components/ScrollLinked";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[60, 0, -18]}
          opacityRange={[0.14, 1, 1]}
          scaleRange={[0.98, 1, 1]}
        >
          <div className="card-soft relative overflow-hidden p-6 md:p-8 lg:p-10">
            <div className="absolute inset-0 opacity-[0.07]">
              <Image
                src="/images/about-art2.jpg"
                alt="Textura abstracta decorativa"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-[30px] bg-[#dfe4e8]">
                  <Image
                    src="/images/banski.jpeg"
                    alt="Pablo Banski Martínez"
                    width={900}
                    height={1200}
                    className="h-[420px] w-full object-cover object-center md:h-[520px]"
                  />
                </div>

                <div className="rounded-[24px] bg-white/84 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f6875]">
                    Información profesional
                  </p>

                  <div className="mt-4 space-y-3 text-sm leading-7 text-[#4b5563]">
                    <p>
                      <span className="font-semibold text-[#17202b]">Nº de colegiado:</span>{" "}
                      M-40879
                    </p>
                    <p>
                      <span className="font-semibold text-[#17202b]">Sesiones:</span>{" "}
                      50–55 minutos
                    </p>
                    <p>
                      <span className="font-semibold text-[#17202b]">Atención:</span>{" "}
                      online desde España
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 max-w-[620px]">
                <p className="eyebrow">Sobre mí</p>
                <h2 className="editorial-title">Hola, soy Pablo Banski Martínez</h2>

                <p className="body-copy mt-8">
                  Soy <strong>psicólogo sanitario</strong> y acompaño a adolescentes y
                  personas adultas que están atravesando procesos de{" "}
                  <strong>duelo</strong>, <strong>ansiedad</strong> o dificultades
                  relacionadas con la <strong>gestión emocional</strong>.
                </p>

                <p className="body-copy mt-4">
                  Trabajo desde un <strong>enfoque integrador con base humanista</strong>.
                  La relación terapéutica, la empatía y la comprensión profunda de tu
                  experiencia ocupan un lugar central en el proceso.
                </p>

                <p className="body-copy mt-4">
                  A partir de esa base, integro herramientas de otros modelos cuando
                  pueden resultar útiles y adaptarse a tus necesidades, buscando que el
                  acompañamiento tenga sentido para ti y para el momento que estás viviendo.
                </p>

                <div className="mt-8 max-w-2xl border-l-2 border-[rgba(111,138,114,0.35)] pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f6875]">
                    Enfoque terapéutico
                  </p>

                  <p className="mt-3 text-xl font-semibold leading-snug text-[#17202b]">
                    Un acompañamiento cercano, flexible y centrado en tu experiencia
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#4b5563]">
                    El proceso se construye desde la escucha, la empatía y una mirada
                    adaptada a lo que necesitas en este momento, integrando herramientas
                    útiles cuando pueden aportar claridad o sostén.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollLinked>
      </div>
    </section>
  );
}