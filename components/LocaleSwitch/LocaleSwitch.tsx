"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LOCALES, stripLocale, type Locale } from "@/lib/i18n";
import styles from "./LocaleSwitch.module.css";

const LABELS: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

type Props = {
  locale: Locale;
  /* Çekmecede daha büyük dokunma hedefi için. */
  variant?: "bar" | "drawer";
};

export default function LocaleSwitch({ locale, variant = "bar" }: Props) {
  const pathname = usePathname();

  /* Aynı sayfada kal, yalnızca öneki değiştir:
     /tr/ameliyatlar -> /en/ameliyatlar */
  const rest = stripLocale(pathname);

  /* Seçim çereze yazılır; middleware bir sonraki öneksiz
     istekte (örneğin doğrudan siteye girişte) bunu okur. */
  function remember(next: Locale) {
    document.cookie = `locale=${next};path=/;max-age=31536000;samesite=lax`;
  }

  return (
    <div
      className={`${styles.wrap} ${variant === "drawer" ? styles.drawer : ""}`}
      role="group"
      aria-label="Dil seçimi"
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        const href = rest === "/" ? `/${code}` : `/${code}${rest}`;

        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            className={`${styles.option} ${active ? styles.active : ""}`}
            aria-current={active ? "true" : undefined}
            onClick={() => remember(code)}
          >
            {LABELS[code]}
          </Link>
        );
      })}
    </div>
  );
}