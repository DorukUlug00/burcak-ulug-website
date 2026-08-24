/* Tek kaynak: marka, iletişim bilgisi ve menü.
   Bu dosyayı düzenlediğinde tüm sayfalar güncellenir.

   MENÜ: Ameliyat ve kategori etiketleri BURADA YAZILMAZ —
   lib/ameliyatlar/tr.ts ve en.ts'ten türetilir. Yeni bir ameliyat
   eklediğinde menüde kendiliğinden görünür. */

import {
  categoriesOf,
  proceduresOf,
} from "@/lib/ameliyatlar";
import type { Locale } from "@/lib/i18n";

/* Dile göre değişen metin. */
type Localized = { tr: string; en: string };

export const BRAND = {
  name: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
  role: {
    tr: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    en: "Plastic, Reconstructive and Aesthetic Surgery",
  } satisfies Localized,
};

export const CONTACT = {
  /* tel: ve wa.me için boşluksuz biçim gerekir. */
  phoneRaw: "+905312973172",
  phoneDisplay: "+90 531 297 31 72",

  whatsappUrl: "https://wa.me/905312973172",

  instagramHandle: "burcaktumerdemulug",
  instagramUrl: "https://www.instagram.com/burcaktumerdemulug",

  facebookHandle: "burcaktumerdemulug",
  facebookUrl: "https://www.facebook.com/burcaktumerdemulug",

  emails: ["info@burcaktumerdemulug.com"],

  address: {
    /* Sokak adı özel isim: çevrilmez. */
    line: "Osmanağa Mh. Mürver Çiçeği Sk. No:10/3 K:1",
    district: {
      tr: "Kadıköy — İstanbul",
      en: "Kadıköy — Istanbul",
    } satisfies Localized,
  },

  hours: [
    {
      days: {
        tr: "Hafta içi ve Cumartesi",
        en: "Weekdays and Saturday",
      } satisfies Localized,
      time: "10.00 – 18.00",
    },
  ],
};

/* Adresi Google Haritalar aramasına çevirir — API anahtarı gerektirmez.
   Semt adı Türkçe yazılır: harita araması için doğru olan bu. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CONTACT.address.line} ${CONTACT.address.district.tr}`,
)}`;

export type NavItem = {
  label: string;
  href: string;
  /* Varsa, üzerine gelindiğinde açılan alt menü.
     Menü üç seviyeye kadar destekler:
     Ameliyatlar → Yüz Estetiği → Yüz Germe */
  children?: NavItem[];
};

/* Ameliyatlar dışındaki başlıklar. */
const STATIC_ITEMS: { label: Localized; href: string }[] = [
  { label: { tr: "Özgeçmiş", en: "About" }, href: "/ozgecmis" },
  { label: { tr: "Medya", en: "Media" }, href: "/medya" },
];

const TRAILING_ITEMS: { label: Localized; href: string }[] = [
  {
    label: { tr: "Hasta Bilgilendirme", en: "Patient Information" },
    href: "/hasta-bilgilendirme",
  },
  {
    label: { tr: "KVKK", en: "Privacy" },
    href: "/kvkk",
  },
];

const PROCEDURES_LABEL: Localized = {
  tr: "Ameliyatlar",
  en: "Procedures",
};

/* Her kategorinin ilk alt satırı kendi sayfasına gider. */
const OVERVIEW_LABEL: Localized = {
  tr: "Genel Bilgi",
  en: "Overview",
};

/* Menüyü dile göre kurar. Kategori ve ameliyat başlıkları
   lib/ameliyatlar içeriğinden okunur; burada elle yazılmaz. */
export function getNav(locale: Locale): NavItem[] {
  const procedureTree: NavItem = {
    label: PROCEDURES_LABEL[locale],
    href: "/ameliyatlar",
    children: categoriesOf(locale).map((category) => {
      const base = `/ameliyatlar/${category.slug}`;

      return {
        label: category.title,
        href: base,
        children: [
          { label: OVERVIEW_LABEL[locale], href: base },
          ...proceduresOf(locale, category.slug).map((procedure) => ({
            label: procedure.title,
            href: `${base}/${procedure.slug}`,
          })),
        ],
      };
    }),
  };

  return [
    ...STATIC_ITEMS.map((item) => ({
      label: item.label[locale],
      href: item.href,
    })),
    procedureTree,
    ...TRAILING_ITEMS.map((item) => ({
      label: item.label[locale],
      href: item.href,
    })),
  ];
}