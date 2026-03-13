import ScrollLinked from "@/components/ScrollLinked";

const items = [
  "Psicólogo sanitario colegiado",
  "Sesiones de 50–55 minutos",
  "Atención online",
  "Adolescentes y adultos",
];

export default function TrustBar() {
  return (
    <section className="px-6 py-8 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[35, 0, -12]}
          opacityRange={[0.5, 1, 1]}
          scaleRange={[0.985, 1, 1]}
        >
          <div className="card-soft px-8 py-6 md:px-10">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:flex-wrap md:justify-between md:gap-x-12 md:gap-y-4">
              {items.map((item) => (
                <p key={item} className="text-sm font-medium text-[#374151]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </ScrollLinked>
      </div>
    </section>
  );
}