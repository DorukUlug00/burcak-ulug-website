"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LOCALE_COOKIE, localeLabels, localeNames, locales, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

type Props = {
  current: Locale;
  label: string;
};

/** One year, in seconds. */
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export default function LanguageSwitcher({ current, label }: Props) {
  const pathname = usePathname();

  /** Same path, different locale segment. */
  function hrefFor(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  function remember(locale: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; sameSite=lax`;
  }

  return (
    <nav className={styles.toggle} aria-label={label}>
      {locales.map((locale) => {
        const isCurrent = locale === current;

        return (
          <Link
            key={locale}
            href={hrefFor(locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={isCurrent ? "true" : undefined}
            className={isCurrent ? `${styles.option} ${styles.active}` : styles.option}
            onClick={() => remember(locale)}
          >
            <span aria-hidden="true">{localeLabels[locale]}</span>
            <span className={styles.srOnly}>{localeNames[locale]}</span>
          </Link>
        );
      })}
    </nav>
  );
}