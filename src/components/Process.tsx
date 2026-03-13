import ScrollLinked from "@/components/ScrollLinked";

const steps = [
  {
    title: "Primer contacto",
    text: "Puedes escribirme a través del formulario, por email o por WhatsApp para contarme brevemente tu situación o resolver tus dudas iniciales.",
  },
  {
    title: "Primera sesión",
    text: "La primera sesión es gratuita y sin compromiso. Nos servirá para conocernos, explorar qué te preocupa y valorar si este proceso puede encajar contigo.",
  },
  {
    title: "Continuidad del proceso",
    text: "Si decides continuar, trabajaremos con un ritmo adaptado a tu momento y a tus necesidades. La frecuencia de las sesiones se valora de forma individual.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[50, 0, -18]}
          opacityRange={[0.45, 1, 1]}
          scaleRange={[0.985, 1, 1]}
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Cómo trabajo</p>
            <h2 className="section-title">
              Un proceso claro, profesional y adaptado a cada persona
            </h2>
          </div>
        </ScrollLinked>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollLinked
              key={step.title}
              yRange={[70 + index * 6, 0, -18]}
              opacityRange={[0.3, 1, 1]}
              scaleRange={[0.96, 1, 1]}
            >
              <div className="card-soft hover-lift p-8">
                <p className="eyebrow">Paso {index + 1}</p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#17202b]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-[#4b5563]">{step.text}</p>
              </div>
            </ScrollLinked>
          ))}
        </div>
      </div>
    </section>
  );
}