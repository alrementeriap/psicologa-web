export default function FinalCTA() {
    return (
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="rounded-[32px] bg-[#3e6b61] px-8 py-12 text-white md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                Dar el primer paso
              </p>
  
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                No necesitas tenerlo todo claro para empezar a pedir ayuda
              </h2>
  
              <p className="mt-5 leading-8 text-white/85">
                La primera sesión puede ser un espacio para entender qué estás
                viviendo, resolver tus dudas y valorar si este acompañamiento encaja
                contigo en este momento.
              </p>
  
              <div className="mt-8">
                <a
                  href="#contacto"
                  className="inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-[#1f2937] transition hover:opacity-90"
                >
                  Solicitar primera sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }