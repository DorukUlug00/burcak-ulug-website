export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

/** Name of each language, written in that language. */
export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

/** Short label used in the header toggle. */
export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

/** BCP 47 tags for the html lang attribute and any Intl formatting. */
export const localeTags: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-GB",
};

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}