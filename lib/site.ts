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
  /* Varsa, üzerine gelindiğinde açılan alt menü. */
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Özgeçmiş", href: "/ozgecmis" },
  { label: "Medya", href: "/medya" },
  {
    label: "Ameliyatlar",
    href: "/ameliyatlar",
    children: [
      { label: "Yüz Estetiği", href: "/ameliyatlar/yuz-estetigi" },
      { label: "Burun Estetiği", href: "/ameliyatlar/burun-estetigi" },
      { label: "Kulak Estetiği", href: "/ameliyatlar/kulak-estetigi" },
      { label: "Meme Estetiği", href: "/ameliyatlar/meme-estetigi" },
      { label: "Vücut Estetiği", href: "/ameliyatlar/vucut-estetigi" },
    ],
  },
  { label: "Hasta Bilgilendirme", href: "/hasta-bilgilendirme" },
  { label: "KVKK", href: "/kvkk" },
  { label: "İletişim", href: "/iletisim" },
];