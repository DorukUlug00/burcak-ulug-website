/* ÖZGEÇMİŞ METNİ
   Sayfa yalnızca bu dosyayı okur. Metni düzenlemek veya
   paragraf sırasını değiştirmek için burası yeterli.

   Ara başlık YOK: biography düz bir paragraf dizisidir,
   sırayla tek bir metin bloğu olarak dizilir.

   İki dil aynı şekli paylaşır; sayfa getCv(locale) ile okur. */

import type { Locale } from "@/lib/i18n";

export type CvProfile = {
  fullName: string;
  displayFirst: string;
  displayLast: string;
  specialty: string;
  /* Fotoğrafı public/doctor/ klasörüne koy. Dikey kadraj (3:4) uygun. */
  portrait: string;
  portraitAlt: string;
  /* Giriş cümlesi — gövdeden daha iri dizilir. */
  intro: string;
};

export type CvBundle = {
  profile: CvProfile;
  /* Her eleman bir paragraf. */
  biography: string[];
  /* Yalnızca arama motoru için; sayfada liste olarak gösterilmiyor. */
  memberships: string[];
  /* Sayfa başlığı ve üst etiket. */
  ui: {
    eyebrow: string;
    metaTitle: string;
    metaDescription: string;
    footNoteBefore: string;
    footNoteLink: string;
    footNoteAfter: string;
  };
};

/* ---------------- Türkçe ---------------- */

const tr: CvBundle = {
  profile: {
    fullName: "Prof. Dr. Zehra Burçak Tümerdem Uluğ",
    displayFirst: "Prof. Dr. Z. Burçak",
    displayLast: "Tümerdem Uluğ",
    specialty: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    portrait: "/doctor/white-shirt.png",
    portraitAlt: "Prof. Dr. Burçak Tümerdem Uluğ portre fotoğrafı",
    intro:
      "Prof. Dr. Z. Burçak Tümerdem Uluğ, Plastik Rekonstrüktif ve Estetik Cerrahi uzmanıdır.",
  },

  biography: [
    "Prof. Dr. Tümerdem Uluğ, 1989 yılında Kadıköy Anadolu Lisesi'ni bitirdikten sonra 1995 yılında İstanbul Üniversitesi İstanbul Tıp Fakültesi'nden dönem birincisi olarak mezun olmuştur. 1997-2003 yılları arasında aynı fakültede Plastik Rekonstrüktif ve Estetik Cerrahi uzmanlık eğitimini tamamlamıştır. Uzmanlık tezi, İstanbul Tabip Odası tarafından 2003 yılında düzenlenen \u201DDr. Cengiz Çetin-Asistan Tez Yarışması\u201Dnda üçüncülük ödülüne layık görülmüştür.",

    "Prof. Dr. Tümerdem Uluğ; 1999 yılında Londra'da \u201CHarley Clinic\u201Dde Dr. Basim A. Matti, 2001 yılında Boston'da \u201CHarvard Medical School/Massachusetts General Hospital\u201Dda Dr. James W. May, yine aynı yıl Detroit'te \u201CInstitute for Craniofacial and Reconstructive Surgery affiliated with Providence Hospital\u201Dda Dr. Ian T. Jackson, ve 2003 yılında Paris'te \u201CL'Hopital Necker\u201Dde Dr. Daniel Marchac gözetiminde farklı sürelerle \u201CObservership\u201D yapmıştır.",

    "Prof. Dr. Tümerdem Uluğ, 2004-2012 yılları arasında Maltepe Üniversitesi Tıp Fakültesi Plastik Rekonstrüktif ve Estetik Cerrahi Anabilim Dalı'nda öğretim üyesi olarak görev yapmış ve 2010 yılında doçentlik ünvanı almıştır. 2020 yılında profesörlük unvanını aldığı Üsküdar Üniversitesi'nde hâlâ Tıp Fakültesi Plastik Rekonstrüktif ve Estetik Cerrahi Anabilim Dalı'nda anabilim dalı başkanlığını sürdürmektedir.",

    "Prof. Dr. Tümerdem Uluğ'un 28'i uluslararası ve 17'si ulusal olmak üzere 45 adet bilimsel makalesi mevcuttur. Ayrıca Dr. Melvin Shiffman editörlüğünde 2009 yılında basılan \u201CMastopexy and Breast Reduction\u201D isimli uluslararası kitapta bölüm yazarlığı bulunmaktadır.",

    "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği, Türk Rekonstrüktif Mikrocerrahi Derneği ve Estetik Plastik Cerrahi Derneği üyesidir.",

    "Prof. Dr. Tuncay Uluğ ile evli olan Prof. Dr. Tümerdem Uluğ iki çocuk annesidir ve mesleğini serbest olarak devam ettirmektedir.",
  ],

  memberships: [
    "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği",
    "Türk Rekonstrüktif Mikrocerrahi Derneği",
    "Estetik Plastik Cerrahi Derneği",
  ],

  ui: {
    eyebrow: "Özgeçmiş",
    metaTitle: "Özgeçmiş | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "Prof. Dr. Z. Burçak Tümerdem Uluğ'un eğitimi, akademik kariyeri, yurt dışı gözlemci programları ve bilimsel çalışmaları.",
    footNoteBefore: "Danışma ve muayene randevusu için ",
    footNoteLink: "iletişim sayfasına",
    footNoteAfter: " göz atabilirsiniz.",
  },
};

/* ---------------- İngilizce ----------------
   Kurum ve ödül adları özel isim olduğu için çevrilmedi. */

const en: CvBundle = {
  profile: {
    fullName: "Prof. Dr. Zehra Burçak Tümerdem Uluğ",
    displayFirst: "Prof. Dr. Z. Burçak",
    displayLast: "Tümerdem Uluğ",
    specialty: "Plastic, Reconstructive and Aesthetic Surgery",
    portrait: "/doctor/white-shirt.png",
    portraitAlt: "Portrait of Prof. Dr. Burçak Tümerdem Uluğ",
    intro:
      "Prof. Dr. Z. Burçak Tümerdem Uluğ is a specialist in Plastic, Reconstructive and Aesthetic Surgery.",
  },

  biography: [
    "After completing Kadıköy Anatolian High School in 1989, Prof. Dr. Tümerdem Uluğ graduated first in her class from Istanbul University Istanbul Faculty of Medicine in 1995. Between 1997 and 2003 she completed her specialist training in Plastic, Reconstructive and Aesthetic Surgery at the same faculty. Her specialist thesis was awarded third prize in the \u201CDr. Cengiz Çetin Resident Thesis Competition\u201D held by the Istanbul Medical Chamber in 2003.",

    "Prof. Dr. Tümerdem Uluğ undertook observerships of varying length: in 1999 at the Harley Clinic in London under Dr. Basim A. Matti; in 2001 at Harvard Medical School / Massachusetts General Hospital in Boston under Dr. James W. May; in the same year at the Institute for Craniofacial and Reconstructive Surgery affiliated with Providence Hospital in Detroit under Dr. Ian T. Jackson; and in 2003 at L'Hôpital Necker in Paris under Dr. Daniel Marchac.",

    "Between 2004 and 2012 Prof. Dr. Tümerdem Uluğ served as a faculty member in the Department of Plastic, Reconstructive and Aesthetic Surgery at Maltepe University Faculty of Medicine, receiving the title of Associate Professor in 2010. She received the title of Professor in 2020 at Üsküdar University, where she continues to serve as Head of the Department of Plastic, Reconstructive and Aesthetic Surgery at the Faculty of Medicine.",

    "Prof. Dr. Tümerdem Uluğ has 45 scientific articles to her name, 28 international and 17 national. She is also the author of a chapter in the international volume \u201CMastopexy and Breast Reduction\u201D, edited by Dr. Melvin Shiffman and published in 2009.",

    "She is a member of the Turkish Society of Plastic, Reconstructive and Aesthetic Surgeons, the Turkish Society for Reconstructive Microsurgery and the Aesthetic Plastic Surgery Society.",

    "Prof. Dr. Tümerdem Uluğ is married to Prof. Dr. Tuncay Uluğ, is a mother of two, and continues to practise privately.",
  ],

  memberships: [
    "Turkish Society of Plastic, Reconstructive and Aesthetic Surgeons",
    "Turkish Society for Reconstructive Microsurgery",
    "Aesthetic Plastic Surgery Society",
  ],

  ui: {
    eyebrow: "Curriculum Vitae",
    metaTitle: "Curriculum Vitae | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "The education, academic career, international observerships and scientific work of Prof. Dr. Z. Burçak Tümerdem Uluğ.",
    footNoteBefore: "For consultations and appointments, please see the ",
    footNoteLink: "contact page",
    footNoteAfter: ".",
  },
};

const BUNDLES: Record<Locale, CvBundle> = { tr, en };

export function getCv(locale: Locale): CvBundle {
  return BUNDLES[locale];
}