import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ContextProviders from "@/components/ContextProviders";
import LightDarkToggle from "@/components/LightDarkToggle";
import Navbar from "@/sections/navbar/Navbar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codielectro | Inicio",
  description: "Electricidad, Electrónica y Programación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(roboto.className, "dark")}>
        <ContextProviders>
          <Navbar />
          <main className="container px-4 mx-auto mt-16">{children}</main>
          <LightDarkToggle className="fixed right-4 top-1/2 -translate-y-1/2" />
        </ContextProviders>
      </body>
    </html>
  );
}
