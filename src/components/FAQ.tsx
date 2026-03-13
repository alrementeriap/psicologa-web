import ScrollLinked from "@/components/ScrollLinked";

const faqs = [
  {
    question: "¿Las sesiones son online?",
    answer:
      "Sí. Actualmente las sesiones se realizan online. En el futuro podría existir la posibilidad de hacer sesiones presenciales en Madrid.",
  },
  {
    question: "¿Atiendes a adolescentes y adultos?",
    answer:
      "Sí. El acompañamiento está dirigido a adolescentes y personas adultas, adaptando el proceso terapéutico al momento vital y a las necesidades de cada caso.",
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "Las sesiones tienen una duración aproximada de 50 a 55 minutos.",
  },
  {
    question: "¿Cada cuánto se realizan las sesiones?",
    answer:
      "La frecuencia se valora de forma individual, según el momento y las necesidades de cada persona.",
  },
  {
    question: "¿Qué enfoque terapéutico utilizas?",
    answer:
      "Trabajo desde un enfoque integrador con base humanista, donde la relación terapéutica, la empatía y la comprensión profunda de tu experiencia ocupan un lugar central.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[50, 0, -18]}
          opacityRange={[0.45, 1, 1]}
          scaleRange={[0.985, 1, 1]}
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="section-title">Dudas habituales antes de empezar</h2>
            <p className="body-copy mt-5">
              Aquí encontrarás respuestas breves a algunas de las preguntas más
              habituales antes de iniciar el proceso.
            </p>
          </div>
        </ScrollLinked>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq, index) => (
            <ScrollLinked
              key={faq.question}
              yRange={[55 + index * 4, 0, -16]}
              opacityRange={[0.3, 1, 1]}
              scaleRange={[0.97, 1, 1]}
            >
              <div className="card-soft p-8">
                <h3 className="text-xl font-semibold leading-tight text-[#17202b]">
                  {faq.question}
                </h3>
                <p className="mt-4 max-w-4xl leading-8 text-[#4b5563]">
                  {faq.answer}
                </p>
              </div>
            </ScrollLinked>
          ))}
        </div>
      </div>
    </section>
  );
}