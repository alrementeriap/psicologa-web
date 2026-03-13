"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ScrollLinked from "@/components/ScrollLinked";
import ParallaxShape from "@/components/ParallaxShape";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20 md:px-12 lg:px-24 lg:pt-24">
      <ParallaxShape
        className="hero-art-shape hidden md:block md:h-[180px] md:w-[280px] md:rounded-[999px] md:left-[-60px] md:bottom-[30px]"
        yRange={[20, -30]}
        rotateRange={[4, -4]}
      />
      <ParallaxShape
        className="abstract-ring hidden md:block md:right-[4%] md:bottom-[14%] md:h-[180px] md:w-[180px]"
        yRange={[-15, 25]}
        rotateRange={[-3, 3]}
      />

      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <ScrollLinked
            className="relative z-10 max-w-3xl"
            yRange={[55, 0, -18]}
            opacityRange={[0.15, 1, 1]}
            scaleRange={[0.985, 1, 1]}
          >
            <p className="eyebrow">Psicología online para adolescentes y adultos</p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#17202b] md:text-6xl">
              Un espacio profesional para acompañarte en procesos de duelo,
              ansiedad y gestión emocional
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
              Trabajo contigo desde un enfoque integrador con base humanista,
              ofreciendo un espacio seguro, cercano y profesional para comprender
              lo que estás viviendo y avanzar a tu ritmo.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#374151]">
              Primera sesión gratuita y sin compromiso
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#contacto"
                className="btn-primary"
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.2 }}
              >
                Solicitar primera sesión
              </motion.a>

              <motion.a
                href="#faq"
                className="btn-secondary"
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.2 }}
              >
                Resolver dudas
              </motion.a>
            </div>
          </ScrollLinked>

          <ScrollLinked
            className="relative"
            yRange={[70, 0, -24]}
            opacityRange={[0.12, 1, 1]}
            scaleRange={[0.97, 1, 1]}
          >
            <div className="hero-art-glow hidden md:block" />

            <motion.div
              className="card-soft relative overflow-hidden p-8 md:p-10"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.24 }}
            >
              <div className="absolute right-6 top-6 z-10 hidden md:block">
  <ParallaxShape
    className="relative h-[72px] w-[72px]"
    yRange={[-16, 18]}
    rotateRange={[-5, 5]}
  >
    <div />
  </ParallaxShape>

  <Image
    src="/images/hero-circle.jpg"
    alt="Elemento artístico abstracto"
    width={72}
    height={72}
    className="art-image-soft h-[72px] w-[72px] rounded-full object-cover opacity-95"
  />
</div>

<p className="eyebrow pr-20 md:pr-24">Consulta online desde España</p>

<h2 className="mt-4 pr-20 text-2xl font-semibold text-[#17202b] md:pr-24 md:text-3xl">
                Pablo Banski Martínez
              </h2>

              <p className="mt-2 pr-20 text-sm font-medium text-[#5f6875] md:pr-24">
                Psicólogo sanitario · Colegiado M-40879
              </p>

              <p className="mt-4 pr-20 leading-7 text-[#4b5563] md:pr-24">
                Especializado en duelo, ansiedad y gestión emocional, con atención
                online para adolescentes y adultos.
              </p>

              <div className="mt-8 rounded-3xl bg-[var(--warm-soft)] p-6">
                <p className="font-medium text-[#17202b]">Qué encontrarás en este espacio</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4b5563]">
                  <li>• Sesiones individuales de 50–55 minutos</li>
                  <li>• Primera sesión gratuita y sin compromiso</li>
                  <li>• Posibilidad futura de sesiones presenciales en Madrid</li>
                </ul>
              </div>

              <div className="mt-6">
                <motion.a
                  href="#contacto"
                  className="btn-secondary"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  Escribir para una primera sesión
                </motion.a>
              </div>
            </motion.div>
          </ScrollLinked>
        </div>
      </div>
    </section>
  );
}