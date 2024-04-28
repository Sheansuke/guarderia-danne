import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/molecule/NavBar";
import { nextMetadata } from "@/core/config/nextMetadata";

const dosis = Dosis({
  subsets: ["latin"],
  style: "normal",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = nextMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(`min-h-screen bg-background antialiased bg-orange-200 ${dosis.className}`)}>
        <header>
          <NavBar />
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
