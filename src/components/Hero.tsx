"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ScrollLinked from "@/components/ScrollLinked";
import ParallaxShape from "@/components/ParallaxShape";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-20 md:px-12 lg:px-24 lg:pt-24">
      <ParallaxShape
        className="hero-art-shape hidden md:block md:h-[180px] md:w-[280px] md:rounded-[999px] md:left-[-60px] md:bottom-[30px]"
        yRange={[20, -30]}
        rotateRange={[4, -4]}
      />
      <ParallaxShape
        className="abstract-ring hidden md:block md:right-[3%] md:bottom-[10%] md:h-[180px] md:w-[180px]"
        yRange={[-15, 25]}
        rotateRange={[-3, 3]}
      />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <ScrollLinked
            className="relative z-10 max-w-3xl"
            yRange={[55, 0, -18]}
            opacityRange={[0.15, 1, 1]}
            scaleRange={[0.985, 1, 1]}
          >
            <p className="eyebrow">Psicología online para adolescentes y adultos</p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-[#17202b] md:text-6xl">
              Un espacio profesional para acompañarte en procesos de{" "}
              <span className="text-[#6f8a72]">duelo</span>,{" "}
              <span className="text-[#6f8a72]">ansiedad</span> y{" "}
              <span className="text-[#6f8a72]">gestión emocional</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
              Trabajo contigo desde un{" "}
              <strong>enfoque integrador con base humanista</strong>, ofreciendo un
              espacio seguro, cercano y profesional para comprender lo que estás
              viviendo y avanzar a tu ritmo.
            </p>

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

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4b5563]">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                <strong>Primera sesión gratuita</strong>
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                <strong>50–55 min</strong>
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                <strong>Online desde España</strong>
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Adolescentes y adultos
              </span>
            </div>
          </ScrollLinked>

          <ScrollLinked
            className="relative"
            yRange={[70, 0, -24]}
            opacityRange={[0.12, 1, 1]}
            scaleRange={[0.97, 1, 1]}
          >
            <motion.div
              className="card-soft relative overflow-hidden p-8 md:p-10"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.24 }}
            >
              <div className="absolute inset-0 opacity-[0.08]">
                <Image
                  src="/images/cta-texture.jpg"
                  alt="Textura abstracta decorativa"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-5 top-5 z-10">
                <div className="rounded-[22px] bg-[var(--warm-soft)] p-2">
                  <Image
                    src="/images/hero-circle.jpg"
                    alt="Elemento artístico abstracto"
                    width={62}
                    height={62}
                    className="h-[62px] w-[62px] rounded-full object-cover opacity-95"
                  />
                </div>
              </div>

              <div className="relative z-10 pr-20">
                <p className="eyebrow">Consulta online desde España</p>

                <h2 className="mt-4 max-w-[320px] text-3xl font-semibold leading-[1.02] text-[#17202b] md:text-[2.8rem]">
                  Pablo Banski Martínez
                </h2>

                <p className="mt-3 text-sm font-medium text-[#5f6875]">
                  Psicólogo sanitario · Colegiado M-40879
                </p>

                <p className="mt-6 leading-7 text-[#4b5563]">
                  Especializado en <strong>duelo</strong>, <strong>ansiedad</strong> y{" "}
                  <strong>gestión emocional</strong>.
                </p>
              </div>

              <div className="relative z-10 mt-8 rounded-[24px] border border-[var(--line)] bg-white/90 p-5 backdrop-blur-sm">
                <p className="text-sm font-medium text-[#17202b]">
                  Contacto directo
                </p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-[#4b5563]">
                  <p>
                    <strong>Email:</strong> pr.banski@gmail.com
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +34 633944311
                  </p>
                  <p>
                    <strong>Horario:</strong> L-S, 9:00–20:00
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollLinked>
        </div>
      </div>
    </section>
  );
}