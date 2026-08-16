import type { Metadata } from "next";
import { Abril_Fatface, Archivo } from "next/font/google";
import "./globals.css";

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-abril",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prof. Dr. Burçak Tümerdem Uluğ",
  description: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${abril.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}