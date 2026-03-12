const items = [
    "Personas que están atravesando una pérdida reciente o antigua",
    "Adolescentes que viven momentos de bloqueo, confusión o malestar emocional",
    "Adultos con ansiedad, saturación mental o dificultad para regular lo que sienten",
    "Personas que sienten que necesitan un espacio profesional donde poder ordenar lo que les pasa",
  ];
  
  export default function WhoItsFor() {
    return (
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Para quién es este espacio</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#17202b] md:text-4xl">
                Un acompañamiento pensado para personas que necesitan comprender lo
                que están viviendo
              </h2>
            </div>
  
            <div className="card-soft p-8">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#ebe4da] bg-[#fcfaf7] px-5 py-4"
                  >
                    <p className="leading-7 text-[#4b5563]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }