import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/NavBar";

const lato = Dosis({
  subsets: ["latin-ext"],
  style: "normal",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Guarderia De Danne",
  applicationName: "Guarderia De Danne",
  description: "¡Donde cada niño encuentra su mundo de juego y aprendizaje!",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Jean Suero", url: "https://www.linkedin.com/in/sheansuke/" },
    { name: "Sheansuke", url: "https://github.com/Sheansuke" },
  ],
  publisher: "Jean Suero",
  icons: {
    icon: "/images/favicon.ico",
  },
  keywords: [
    "Guardería infantil",
    "Cuidado infantil",
    "Preescolar",
    "Jardín de infancia",
    "Educación temprana",
    "Desarrollo infantil",
    "Actividades para niños",
    "Aprendizaje temprano",
    "Crianza de niños",
    "Juegos educativos",
    "Estimulación temprana",
    "Ambiente seguro",
    "Aprendizaje creativo",
    "Exploración y descubrimiento",
    "Apoyo emocional",
    "Actividades al aire libre",
    "Programa educativo",
    "Comunidad infantil",
    "Preparación escolar",
    "Integración social",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={cn("min-h-screen bg-background font-sans antialiased", lato.className)}>
        <header>
          <NavBar />
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
