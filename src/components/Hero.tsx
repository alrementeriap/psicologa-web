export default function Hero() {
    return (
      <section className="px-6 pb-16 pt-20 md:px-12 lg:px-24 lg:pt-24">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="eyebrow">Psicología online para adolescentes y adultos</p>
  
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#17202b] md:text-6xl">
                Un espacio profesional para acompañarte en procesos de duelo,
                ansiedad y gestión emocional
              </h1>
  
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
                Acompaño a adolescentes y personas adultas que están atravesando
                momentos de malestar, pérdida, preocupación constante o dificultad
                para sostener lo que sienten, ofreciendo un espacio cercano, claro y
                seguro para empezar a comprender lo que ocurre.
              </p>
  
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contacto" className="btn-primary">
                  Solicitar primera sesión
                </a>
                <a href="#faq" className="btn-secondary">
                  Resolver dudas
                </a>
              </div>
            </div>
  
            <div className="card-soft p-8 md:p-10">
              <p className="eyebrow">Consulta online</p>
  
              <h2 className="mt-4 text-2xl font-semibold text-[#17202b] md:text-3xl">
                Pablo Banski Martínez
              </h2>
  
              <p className="mt-3 leading-7 text-[#4b5563]">
                Psicólogo sanitario especializado en duelo, ansiedad y gestión
                emocional, con atención online para adolescentes y adultos.
              </p>
  
              <div className="mt-8 rounded-3xl bg-[#f4efe8] p-6">
                <p className="font-medium text-[#17202b]">Este espacio puede ayudarte si:</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4b5563]">
                  <li>• Estás atravesando una pérdida o un proceso de duelo</li>
                  <li>• Sientes ansiedad, saturación o pensamientos repetitivos</li>
                  <li>• Te cuesta entender, expresar o regular lo que sientes</li>
                </ul>
              </div>
  
              <div className="mt-6">
                <a href="#contacto" className="btn-secondary">
                  Escribir para una primera sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }