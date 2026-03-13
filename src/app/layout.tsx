import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pablo Banski Martínez | Psicólogo sanitario online",
  description:
    "Psicólogo sanitario online para adolescentes y adultos. Acompañamiento en duelo, ansiedad y gestión emocional. Primera sesión gratuita y sin compromiso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}