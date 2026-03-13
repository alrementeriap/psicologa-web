import ScrollLinked from "@/components/ScrollLinked";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 md:px-12 lg:px-24">
      <div className="container-page">
        <ScrollLinked
          yRange={[35, 0, -8]}
          opacityRange={[0.55, 1, 1]}
          scaleRange={[0.995, 1, 1]}
        >
          <div className="border-t border-[#d9d2c8] pt-8 text-sm text-[#5b6472]">
            <p className="font-semibold text-[#17202b]">Pablo Banski Martínez</p>
            <p className="mt-2">
              Psicólogo sanitario · Colegiado M-40879 · Atención online desde España
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
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

            <p className="mt-4">Contacto legal: pr.banski@gmail.com</p>
          </div>
        </ScrollLinked>
      </div>
    </footer>
  );
}