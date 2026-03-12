const faqs = [
    {
      question: "¿Las sesiones son online?",
      answer:
        "Sí. Actualmente el acompañamiento se realiza en formato online, lo que facilita la continuidad y la flexibilidad del proceso.",
    },
    {
      question: "¿Atiendes a adolescentes y adultos?",
      answer:
        "Sí. El espacio está dirigido a adolescentes y personas adultas, adaptando el proceso terapéutico al momento vital y a las necesidades de cada caso.",
    },
    {
      question: "¿Puedo acudir si estoy atravesando un duelo?",
      answer:
        "Sí. El duelo puede generar dolor, confusión, bloqueo o una intensa desregulación emocional. Contar con apoyo psicológico puede ayudarte a sostener y comprender el proceso.",
    },
    {
      question: "¿Cuánto dura una sesión?",
      answer: "Las sesiones tienen una duración aproximada de 50 minutos.",
    },
    {
      question: "¿Qué pasa si no sé explicar bien lo que me ocurre?",
      answer:
        "No pasa nada. Muchas personas llegan a terapia con malestar pero sin saber ponerlo en palabras. Ese también es un buen punto de partida.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section id="faq" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#17202b] md:text-4xl">
              Dudas habituales antes de empezar
            </h2>
          </div>
  
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-soft p-8">
                <h3 className="text-xl font-semibold text-[#17202b]">
                  {faq.question}
                </h3>
                <p className="mt-4 leading-8 text-[#4b5563]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }