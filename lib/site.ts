/* Tek kaynak: marka, iletişim bilgisi ve menü.
   Bu dosyayı düzenlediğinde tüm sayfalar güncellenir. */

export const BRAND = {
  monogram: "Dr.",
  name: "Prof. Dr. Burçak Tümerdem Uluğ",
  role: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
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

  emails: ["burcaktumerdemulug@gmail.com", "info@burcaktumerdemulug.com"],

  address: {
    line: "Osmanağa Mh. Mürver Çiçeği Sk. No:10/3 K:1",
    district: "Kadıköy — İstanbul",
  },

  hours: [{ days: "Hafta içi ve Cumartesi", time: "10.00 – 18.00" }],
};

/* Adresi Google Haritalar aramasına çevirir — API anahtarı gerektirmez. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CONTACT.address.line} ${CONTACT.address.district}`,
)}`;

export type NavItem = {
  label: string;
  href: string;
  /* Varsa, üzerine gelindiğinde açılan alt menü.
     Menü üç seviyeye kadar destekler:
     Ameliyatlar → Yüz Estetiği → Yüz Germe */
  children?: NavItem[];
};

/* "Genel Bilgi" her zaman kategorinin kendi sayfasına gider. */
export const NAV: NavItem[] = [
  { label: "Özgeçmiş", href: "/ozgecmis" },
  { label: "Medya", href: "/medya" },
  {
    label: "Ameliyatlar",
    href: "/ameliyatlar",
    children: [
      {
        label: "Yüz Estetiği",
        href: "/ameliyatlar/yuz-estetigi",
        children: [
          { label: "Genel Bilgi", href: "/ameliyatlar/yuz-estetigi" },
          {
            label: "Yüz Germe",
            href: "/ameliyatlar/yuz-estetigi/yuz-germe",
          },
          {
            label: "Alın Germe",
            href: "/ameliyatlar/yuz-estetigi/alin-germe",
          },
          {
            label: "Göz Estetiği",
            href: "/ameliyatlar/yuz-estetigi/goz-estetigi",
          },
          {
            label: "Kaş Kaldırma",
            href: "/ameliyatlar/yuz-estetigi/kas-kaldirma",
          },
          {
            label: "Yüz İmplantları",
            href: "/ameliyatlar/yuz-estetigi/yuz-implantlari",
          },
        ],
      },
      {
        label: "Burun Estetiği",
        href: "/ameliyatlar/burun-estetigi",
        children: [
          { label: "Genel Bilgi", href: "/ameliyatlar/burun-estetigi" },
        ],
      },
      {
        label: "Kulak Estetiği",
        href: "/ameliyatlar/kulak-estetigi",
        children: [
          { label: "Genel Bilgi", href: "/ameliyatlar/kulak-estetigi" },
        ],
      },
      {
        label: "Meme Estetiği",
        href: "/ameliyatlar/meme-estetigi",
        children: [
          { label: "Genel Bilgi", href: "/ameliyatlar/meme-estetigi" },
          {
            label: "Meme Büyütme",
            href: "/ameliyatlar/meme-estetigi/meme-buyutme",
          },
          {
            label: "Meme Küçültme",
            href: "/ameliyatlar/meme-estetigi/meme-kucultme",
          },
          {
            label: "Meme Dikleştirme",
            href: "/ameliyatlar/meme-estetigi/meme-diklestirme",
          },
          {
            label: "Meme Rekonstrüksiyonu",
            href: "/ameliyatlar/meme-estetigi/meme-rekonstruksiyonu",
          },
          {
            label: "Jinekomasti",
            href: "/ameliyatlar/meme-estetigi/jinekomasti",
          },
        ],
      },
      {
        label: "Vücut Estetiği",
        href: "/ameliyatlar/vucut-estetigi",
        children: [
          { label: "Genel Bilgi", href: "/ameliyatlar/vucut-estetigi" },
          {
            label: "Liposuction",
            href: "/ameliyatlar/vucut-estetigi/liposuction",
          },
          {
            label: "Karın Germe",
            href: "/ameliyatlar/vucut-estetigi/karin-germe",
          },
          {
            label: "Bacak İçi Germe",
            href: "/ameliyatlar/vucut-estetigi/bacak-ici-germe",
          },
          {
            label: "Kol Germe",
            href: "/ameliyatlar/vucut-estetigi/kol-germe",
          },
        ],
      },
      {
        label: "Ameliyatsız Yöntemler",
        href: "/ameliyatlar/ameliyatsiz-yontemler",
        children: [
          {
            label: "Genel Bilgi",
            href: "/ameliyatlar/ameliyatsiz-yontemler",
          },
          {
            label: "Botoks",
            href: "/ameliyatlar/ameliyatsiz-yontemler/botoks",
          },
          {
            label: "Dolgu",
            href: "/ameliyatlar/ameliyatsiz-yontemler/dolgu",
          },
        ],
      },
    ],
  },
  { label: "Hasta Bilgilendirme", href: "/hasta-bilgilendirme" },
  { label: "KVKK", href: "/kvkk" },
];