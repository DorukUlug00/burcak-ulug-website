import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Abril_Fatface, Archivo } from "next/font/google";

import "../globals.css";
import StickyNav from "@/components/StickyNav/StickyNav";
import Footer from "@/components/Footer/Footer";
import { BRAND, NAV } from "@/lib/site";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n";

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

/* Her iki dil de derleme sırasında üretilir. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
  description: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  /* /fr gibi tanımsız bir dil kodu 404 verir. */
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className={`${abril.variable} ${archivo.variable}`}>
        <StickyNav
          locale={locale as Locale}
          name={BRAND.name}
          items={NAV}
        />

        {children}

        <Footer />
      </body>
    </html>
  );
}