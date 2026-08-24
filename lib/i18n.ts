/* DİL AYARLARI
   Yeni dil eklemek için LOCALES'e kod eklemen yeterli;
   middleware ve layout otomatik uyum sağlar. */

export const LOCALES = ["tr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/* Öneksiz bir adres istendiğinde ve tarayıcı dili
   anlaşılamadığında kullanılır. */
export const DEFAULT_LOCALE: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

/* "/tr/ameliyatlar" -> "tr" */
export function localeFrom(pathname: string): Locale {
  const first = pathname.split("/")[1] ?? "";
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/* "/tr/ameliyatlar" -> "/ameliyatlar"
   Dil karşılaştırmaları ve aktif bağlantı kontrolü için. */
export function stripLocale(pathname: string): string {
  const first = pathname.split("/")[1] ?? "";
  if (!isLocale(first)) return pathname;

  const rest = pathname.slice(first.length + 1);
  return rest || "/";
}

/* "/ameliyatlar" + "en" -> "/en/ameliyatlar"
   Dış bağlantılar (tel:, mailto:, https:) olduğu gibi döner. */
export function withLocale(href: string, locale: Locale): string {
  if (!href.startsWith("/")) return href;

  const clean = stripLocale(href);
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}