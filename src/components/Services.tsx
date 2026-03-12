const services = [
    {
      title: "Duelo y procesos de pérdida",
      text: "El duelo no aparece solo ante una muerte. También puede surgir tras una ruptura, un cambio importante o una pérdida vital. Tener acompañamiento puede ayudarte a sostener el proceso y comprender lo que se mueve en ti.",
    },
    {
      title: "Ansiedad y preocupación constante",
      text: "Si sientes tensión, alerta, dificultad para desconectar o pensamientos repetitivos, la terapia puede ayudarte a identificar qué está activando ese malestar y cómo regularlo mejor.",
    },
    {
      title: "Gestión emocional",
      text: "Cuando cuesta poner nombre a lo que se siente, expresar emociones o manejarlas sin desbordarse, el proceso terapéutico puede aportar claridad, lenguaje y herramientas.",
    },
    {
      title: "Acompañamiento adaptado a cada etapa",
      text: "Adolescentes y adultos atraviesan retos distintos. El acompañamiento se adapta al momento vital, al lenguaje y a las necesidades concretas de cada persona.",
    },
  ];
  
  export default function Services() {
    return (
      <section id="servicios" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Especialidades</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#17202b] md:text-4xl">
              Áreas en las que puedo acompañarte
            </h2>
          </div>
  
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="card-soft p-8">
                <h3 className="text-xl font-semibold text-[#17202b]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-8 text-[#4b5563]">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }