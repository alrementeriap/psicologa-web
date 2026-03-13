import Image from "next/image";
import ScrollLinked from "@/components/ScrollLinked";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <ScrollLinked
            yRange={[65, 0, -20]}
            opacityRange={[0.12, 1, 1]}
            scaleRange={[0.97, 1, 1]}
          >
            <div className="card-soft relative overflow-hidden p-4 md:p-5">
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(246,241,234,0.05),rgba(246,241,234,0))]" />
              <Image
                src="/images/about-art.jpg"
                alt="Arte abstracto orgánico"
                width={900}
                height={1100}
                className="art-image-soft h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </ScrollLinked>

          <ScrollLinked
            yRange={[55, 0, -18]}
            opacityRange={[0.16, 1, 1]}
            scaleRange={[0.985, 1, 1]}
          >
            <div className="card-soft p-8 md:p-12">
              <p className="eyebrow">Sobre mí</p>
              <h2 className="section-title">Hola, soy Pablo Banski Martínez</h2>

              <p className="body-copy mt-6">
                Soy psicólogo sanitario y acompaño a adolescentes y personas adultas
                que están atravesando procesos de duelo, ansiedad o dificultades
                relacionadas con la gestión emocional.
              </p>

              <p className="body-copy mt-4">
                Trabajo desde un enfoque integrador con base humanista. Esto
                significa que la relación terapéutica, la empatía y la comprensión
                profunda de tu experiencia ocupan un lugar central en el proceso.
              </p>

              <p className="body-copy mt-4">
                A partir de esa base, integro herramientas de otros modelos cuando
                pueden resultar útiles y adaptarse a tus necesidades, buscando que
                el acompañamiento tenga sentido para ti y para el momento que estás
                viviendo.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-[#4b5563] sm:grid-cols-2">
                <p>• Enfoque integrador con base humanista</p>
                <p>• Atención online desde España</p>
                <p>• Nº de colegiado M-40879</p>
                <p>• Sesiones de 50–55 minutos</p>
              </div>
            </div>
          </ScrollLinked>
        </div>
      </div>
    </section>
  );
}