import ScrollLinked from "@/components/ScrollLinked";

const services = [
  {
    title: "Duelo y procesos de pérdida",
    text: "El duelo puede aparecer tras una muerte, una ruptura o un cambio vital importante. Contar con apoyo psicológico puede ayudarte a sostener y comprender mejor este proceso.",
  },
  {
    title: "Ansiedad y preocupación constante",
    text: "Si sientes tensión, saturación, dificultad para desconectar o pensamientos repetitivos, la terapia puede ayudarte a entender lo que está ocurriendo y a regularlo de forma más saludable.",
  },
  {
    title: "Gestión emocional",
    text: "Cuando cuesta identificar lo que se siente, expresarlo o gestionarlo sin desbordarse, el proceso terapéutico puede aportar claridad, lenguaje y herramientas útiles.",
  },
  {
    title: "Acompañamiento a adolescentes y adultos",
    text: "Cada etapa vital tiene necesidades diferentes. El acompañamiento se adapta a la persona, a su momento y a la forma en que vive lo que le ocurre.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          className="max-w-2xl"
          yRange={[50, 0, -20]}
          opacityRange={[0.4, 1, 1]}
          scaleRange={[0.98, 1, 1]}
        >
          <p className="eyebrow">Especialidades</p>
          <h2 className="section-title">Áreas en las que puedo acompañarte</h2>
        </ScrollLinked>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollLinked
              key={service.title}
              yRange={[60 + index * 6, 0, -18]}
              opacityRange={[0.3, 1, 1]}
              scaleRange={[0.96, 1, 1]}
            >
              <div className="card-soft p-8 hover-lift">
                <h3 className="text-xl font-semibold text-[#17202b]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-8 text-[#4b5563]">{service.text}</p>
              </div>
            </ScrollLinked>
          ))}
        </div>
      </div>
    </section>
  );
}