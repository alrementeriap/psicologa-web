const steps = [
    {
      title: "Primer contacto",
      text: "Puedes escribirme a través del formulario para contarme brevemente tu situación o plantear tus dudas iniciales.",
    },
    {
      title: "Primera sesión online",
      text: "Tendremos un primer encuentro para conocernos, entender qué necesitas y valorar cómo puedo acompañarte.",
    },
    {
      title: "Proceso terapéutico",
      text: "Si decides continuar, trabajaremos con objetivos realistas y un ritmo adaptado a ti y a tu momento vital.",
    },
  ];
  
  export default function Process() {
    return (
      <section id="proceso" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Cómo trabajo</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#17202b] md:text-4xl">
              Un proceso claro, profesional y adaptado a cada persona
            </h2>
          </div>
  
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="card-soft p-8">
                <p className="eyebrow">Paso {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#17202b]">
                  {step.title}
                </h3>
                <p className="mt-4 leading-8 text-[#4b5563]">{step.text}</p>
              </div>
            ))}
          </div>
  
          <p className="mt-8 max-w-3xl leading-8 text-[#4b5563]">
            No necesitas saber exactamente qué decir ni llegar con todo resuelto. La
            terapia también sirve para poner orden, encontrar palabras y empezar a
            entender mejor lo que te está ocurriendo.
          </p>
        </div>
      </section>
    );
  }