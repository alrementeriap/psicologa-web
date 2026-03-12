import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pablo Banski Martínez | Psicólogo sanitario online",
  description:
    "Acompañamiento psicológico online para adolescentes y adultos. Especializado en duelo, ansiedad y gestión emocional.",
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