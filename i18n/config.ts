/* ÇOK DİLLİLİK — TEMEL AYARLAR
   ---------------------------------------------------------------
   Dil listesi burada. Yeni bir dil eklemek istediğinde:
     1. LOCALES dizisine kodunu ekle,
     2. dictionaries/ altında o dilin dosyasını oluştur,
     3. getDictionary.ts içindeki haritaya ekle.
--------------------------------------------------------------- */

export const LOCALES = ["tr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/* Ön eki olmayan adresler bu dile yönlendirilir. */
export const DEFAULT_LOCALE: Locale = "tr";

/* <html lang="..."> ve hreflang etiketleri için. */
export const HTML_LANG: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en",
};

/* Dil değiştirme düğmesinde görünecek adlar. */
export const LOCALE_LABELS: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

/* Kısa gösterim (TR / EN). */
export const LOCALE_SHORT: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/* Adresin başındaki dil kodunu okur: "/en/medya" -> "en" */
export function localeFromPath(pathname: string): Locale | null {
  const first = pathname.split("/").filter(Boolean)[0];

  return first && isLocale(first) ? first : null;
}

/* Dil ön eki ekler. href("en", "/medya") -> "/en/medya"
   Zaten ön ekli ya da dış bağlantı (http, tel:, mailto:, #) ise
   olduğu gibi bırakır. */
export function href(locale: Locale, path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  if (localeFromPath(path)) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/* Dil değiştirici için: bulunulan sayfanın öteki dildeki karşılığı.
   Slug'lar iki dilde aynı olduğu için yalnızca ön ek değişiyor. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const current = localeFromPath(pathname);

  if (!current) {
    return href(next, pathname);
  }

  const rest = pathname.slice(`/${current}`.length) || "/";

  return href(next, rest);
}