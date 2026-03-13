import Image from "next/image";
import ScrollLinked from "@/components/ScrollLinked";

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[65, 0, -20]}
          opacityRange={[0.14, 1, 1]}
          scaleRange={[0.975, 1, 1]}
        >
          <div className="relative overflow-hidden rounded-[36px] bg-[#416b62] px-8 py-12 text-white md:px-12 md:py-14 hover-lift">
            <div className="absolute inset-0 opacity-[0.12]">
              <Image
                src="/images/cta-texture.jpg"
                alt="Textura abstracta decorativa"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -right-8 -top-8 hidden h-40 w-40 rounded-full bg-[rgba(255,255,255,0.08)] md:block" />
            <div className="absolute bottom-0 left-0 hidden h-24 w-24 rounded-tr-[28px] bg-[rgba(255,255,255,0.06)] md:block" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                  Dar el primer paso
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  No necesitas tenerlo todo claro para empezar
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-white/85">
                  Puedes escribirme, contarme brevemente qué te preocupa y valorar
                  con calma si este acompañamiento puede ayudarte en este momento.
                </p>
              </div>

              <div className="self-end rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/90">
                  Qué puedes esperar
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
                  <li>• Un primer espacio para conocernos</li>
                  <li>• Explorar qué te preocupa</li>
                  <li>• Resolver tus dudas iniciales</li>
                  <li>• Valorar si el proceso es adecuado para ti</li>
                </ul>

                <div className="mt-6">
                  <a
                    href="#contacto"
                    className="inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-[#1f2937] transition hover:opacity-90"
                  >
                    Escribir para una primera sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollLinked>
      </div>
    </section>
  );
}