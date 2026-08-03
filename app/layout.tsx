import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";

/**
 * Avenir Next is a licensed Monotype face — present on macOS and iOS, absent on
 * Windows and Android, with no free web version. Nunito Sans is the closest
 * freely licensed match and carries the design everywhere Avenir Next is
 * missing.
 *
 * With an Avenir Next web licence, add the @font-face rules in globals.css —
 * the family already sits first in the stack, so licensed files take over with
 * no other change.
 */
const sans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prof. Dr. Burçak Uluğ — Plastic Surgery, Istanbul",
  description:
    "Unhurried plastic and aesthetic surgery consultations in Istanbul, handled personally from your first examination through to follow-up.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={sans.variable}>{children}</body>
    </html>
  );
}