import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/tr";

/* Sözlükler dinamik import ile yükleniyor: kullanıcı yalnızca
   kendi dilinin metinlerini indiriyor, ikisini birden değil. */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  tr: () => import("./dictionaries/tr").then((module) => module.tr),
  en: () => import("./dictionaries/en").then((module) => module.en),
};

/* Sunucu bileşenlerinde kullanılır:
     const t = await getDictionary(locale);
     <h1>{t.contact.title}</h1>                                  */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };