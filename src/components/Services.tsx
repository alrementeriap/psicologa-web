import Image from "next/image";
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
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <ScrollLinked
            yRange={[50, 0, -18]}
            opacityRange={[0.16, 1, 1]}
            scaleRange={[0.985, 1, 1]}
          >
            <div className="max-w-xl">
              <p className="eyebrow">Especialidades</p>
              <h2 className="section-title">Áreas en las que puedo acompañarte</h2>

              <p className="body-copy mt-6">
                El proceso terapéutico se adapta a la persona y al momento vital que
                está atravesando, poniendo el foco en comprender lo que ocurre y en
                construir herramientas que tengan sentido para su realidad.
              </p>
            </div>
          </ScrollLinked>

          <ScrollLinked
            yRange={[60, 0, -18]}
            opacityRange={[0.14, 1, 1]}
            scaleRange={[0.98, 1, 1]}
          >
            <div className="relative overflow-hidden rounded-[26px] hover-lift">
              <Image
                src="/images/cta-texture.jpg"
                alt="Composición abstracta decorativa"
                width={1600}
                height={900}
                className="art-image-soft h-[240px] w-full object-cover"
              />
            </div>
          </ScrollLinked>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollLinked
              key={service.title}
              yRange={[65 + index * 5, 0, -16]}
              opacityRange={[0.14, 1, 1]}
              scaleRange={[0.98, 1, 1]}
            >
              <div className="card-soft hover-lift h-full p-8">
                <div className="flex items-start gap-5">
                  <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-[#cfd8c7]" />

                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold leading-tight text-[#17202b]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[#4b5563]">{service.text}</p>
                  </div>
                </div>
              </div>
            </ScrollLinked>
          ))}
        </div>
      </div>
    </section>
  );
}