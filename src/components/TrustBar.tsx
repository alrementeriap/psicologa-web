import ScrollLinked from "@/components/ScrollLinked";

const items = [
  "Primera sesión gratuita",
  "Atención online desde España",
  "Adolescentes y adultos",
  "Enfoque integrador con base humanista",
];

export default function TrustBar() {
  return (
    <section className="px-6 py-4 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[35, 0, -12]}
          opacityRange={[0.5, 1, 1]}
          scaleRange={[0.985, 1, 1]}
        >
          <div className="card-soft flex flex-col gap-4 px-6 py-5 md:flex-row md:flex-wrap md:items-center md:justify-between">
            {items.map((item, index) => (
              <p key={item} className="text-sm font-medium text-[#374151]">
                {item}
              </p>
            ))}
          </div>
        </ScrollLinked>
      </div>
    </section>
  );
}