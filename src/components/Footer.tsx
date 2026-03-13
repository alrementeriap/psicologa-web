import ScrollLinked from "@/components/ScrollLinked";

export default function Footer() {
  return (
    <footer className="px-6 pb-12 pt-4 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[35, 0, -8]}
          opacityRange={[0.55, 1, 1]}
          scaleRange={[0.995, 1, 1]}
        >
          <div className="rounded-[28px] border border-[#d9d2c8] bg-white px-6 py-8 text-sm text-[#5b6472] md:px-8">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-semibold text-[#17202b]">Pablo Banski Martínez</p>
                <p className="mt-3 max-w-xl leading-7">
                  Psicólogo sanitario · Colegiado M-40879 · Atención online desde
                  España.
                </p>
                <p className="mt-3 max-w-xl leading-7">
                  Un espacio terapéutico profesional, cercano y adaptado a cada
                  persona.
                </p>
              </div>

              <div>
                <p className="font-medium text-[#17202b]">Contacto</p>
                <div className="mt-3 space-y-2 leading-7">
                  <p>pr.banski@gmail.com</p>
                  <p>+34 633944311</p>
                  <p>Lunes a sábado · 9:00–20:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#eee7de] pt-6">
              <a href="#" className="transition hover:text-[#17202b]">
                Aviso legal
              </a>
              <a href="#" className="transition hover:text-[#17202b]">
                Política de privacidad
              </a>
              <a href="#contacto" className="transition hover:text-[#17202b]">
                Contacto
              </a>
            </div>
          </div>
        </ScrollLinked>
      </div>
    </footer>
  );
}