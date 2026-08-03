import "server-only";

import type { Locale } from "./config";
import en from "./dictionaries/en.json";

/**
 * English is the source of truth for the shape. Turkish is checked against this
 * type, so a missing or misspelled key fails the build instead of rendering
 * blank on the page.
 */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  tr: () => import("./dictionaries/tr.json").then((m) => m.default as Dictionary),
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}