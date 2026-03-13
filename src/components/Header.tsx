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
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[rgba(23,32,43,0.06)] bg-[rgba(255,255,255,0.82)] backdrop-blur-xl">
      <div className="container-page px-6 py-3 md:px-12 lg:px-24">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-[0.03em] text-[#17202b]"
          >
            Pablo Banski Martínez
          </a>

          <nav className="hidden items-center gap-7 md:flex">
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

          <motion.a
            href="#contacto"
            className="inline-flex min-h-[42px] items-center justify-center rounded-[16px] border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[#17202b] shadow-sm transition hover:bg-[#faf7f2]"
            whileHover={{ y: -1 }}
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