"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Especialidades", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(23,32,43,0.06)] bg-[rgba(250,247,242,0.85)] backdrop-blur-xl">
      <div className="container-page px-6 py-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-[0.03em] text-[#17202b]"
          >
            Pablo Banski Martínez
          </a>

          {/* NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-[#5b6472] transition-colors hover:text-[#17202b]"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="#contacto"
            className="btn-primary text-sm"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            Primera sesión
          </motion.a>

        </div>
      </div>
    </header>
  );
}