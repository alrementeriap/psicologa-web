const items = [
    "Atención online",
    "Adolescentes y adultos",
    "Acompañamiento individualizado",
    "Primera toma de contacto sencilla",
  ];
  
  export default function TrustBar() {
    return (
      <section className="px-6 py-4 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="card-soft flex flex-col gap-4 px-6 py-5 md:flex-row md:flex-wrap md:items-center md:justify-between">
            {items.map((item) => (
              <p key={item} className="text-sm font-medium text-[#374151]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }