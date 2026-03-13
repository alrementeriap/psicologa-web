import ScrollLinked from "@/components/ScrollLinked";

const items = [
  "Personas que están atravesando un proceso de duelo o una pérdida significativa",
  "Adolescentes que viven momentos de bloqueo, confusión o malestar emocional",
  "Adultos con ansiedad, saturación mental o dificultad para sostener lo que sienten",
  "Personas que quieren un espacio terapéutico cercano, profesional y adaptado a sus necesidades",
];

export default function WhoItsFor() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollLinked
            yRange={[50, 0, -18]}
            opacityRange={[0.45, 1, 1]}
            scaleRange={[0.985, 1, 1]}
          >
            <div>
              <p className="eyebrow">Para quién es este espacio</p>
              <h2 className="section-title">
                Un acompañamiento pensado para personas que necesitan comprender lo
                que están viviendo
              </h2>
            </div>
          </ScrollLinked>

          <ScrollLinked
            yRange={[70, 0, -22]}
            opacityRange={[0.35, 1, 1]}
            scaleRange={[0.97, 1, 1]}
          >
            <div className="card-soft p-8">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <ScrollLinked
                    key={item}
                    yRange={[40 + index * 4, 0, -12]}
                    opacityRange={[0.4, 1, 1]}
                    scaleRange={[0.985, 1, 1]}
                  >
                    <div className="rounded-2xl border border-[#ebe4da] bg-[#fcfaf7] px-5 py-4 hover-lift">
                      <p className="leading-7 text-[#4b5563]">{item}</p>
                    </div>
                  </ScrollLinked>
                ))}
              </div>
            </div>
          </ScrollLinked>
        </div>
      </div>
    </section>
  );
}