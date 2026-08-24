/* HASTA BİLGİLENDİRME İÇERİĞİ
   Sayfa yalnızca bu dosyayı okur. Yeni bölüm eklemek için diziye
   yeni bir kayıt eklemen yeterli.

   `when` alanı bölümün başındaki zaman etiketidir; boş bırakılırsa
   etiket gösterilmez. Bölümler zaman sırasına göre dizildi.

   Metin hekimin verdiği hâliyle korunmuştur; yalnızca zaman
   etiketleri ve başlıklar sayfa düzeni için eklenmiştir.

   İki dil aynı şekli paylaşır; sayfa getHasta(locale) ile okur. */

import type { Locale } from "@/lib/i18n";

export type InfoSection = {
  when?: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  after?: string[];
};

export type HastaMeta = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  /* Giriş paragrafı yok: sayfa doğrudan bölümlerle başlar.
     Boş bırakılırsa sayfada hiç görünmez. */
  intro: string;
  /* Görseli public/hasta-bilgilendirme/ klasörüne koy.
     Dikey ya da kareye yakın kadraj uygun. */
  image: string;
  /* Görsel yalnızca süs değilse açıklamayı buna göre yaz;
     tamamen dekoratifse boş bırak (alt=""). */
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
};

export type HastaBundle = {
  meta: HastaMeta;
  sections: InfoSection[];
  note: string;
};

/* ---------------- Türkçe ---------------- */

const tr: HastaBundle = {
  meta: {
    eyebrow: "Hasta bilgilendirme",
    title: "Ameliyat öncesi",
    titleAccent: "yapılması gerekenler",
    intro: "",
    image: "/hasta-bilgilendirme/hazirlik.jpg",
    imageAlt: "Muayenehanede hasta görüşmesi",
    metaTitle:
      "Hasta Bilgilendirme | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "Ameliyat öncesi hazırlık süreci: sağlık geçmişi, kesilmesi gereken ilaçlar, tetkikler ve aç kalma süresi.",
  },

  sections: [
    {
      when: "İlk görüşmede",
      heading: "Sağlık geçmişinizi paylaşın",
      paragraphs: [
        "Yüksek tansiyon, şeker hastalığı, mide rahatsızlıkları (gastrit, reflü, ülser), tiroid fonksiyon bozuklukları (geçirilmiş tiroid ameliyatı, hipo/hipertiroidi), kullanılan düzenli ilaçlar, alerji, geçirilmiş ameliyatlar, Hepatit B, C veya HIV taşıyıcılığı gibi bütün sağlık problemleri mutlaka paylaşılmalıdır.",
      ],
    },
    {
      when: "En az 2 hafta önce",
      heading: "Sigarayı bırakın",
      paragraphs: [
        "Sigara kullanımı dokuların kanlanmasını ve oksijenizasyonunu olumsuz etkilediği için komplikasyon oranını arttırır. Sigara içen kişi ameliyattan en az 2 hafta önce sigarayı bırakmalı ve ameliyattan sonra da 2-3 hafta boyunca içmemelidir.",
      ],
    },
    {
      when: "1 hafta önce",
      heading: "Bazı ilaç ve takviyeler kesilir",
      paragraphs: [
        "Bir hafta öncesinde kanı sulandıran aspirin ve benzeri ilaçlar, antienflamatuarlar, gingko biloba, ginseng gibi beslenme desteği olarak kullanılan maddeler, vitamin E ve yeşil çay kullanımı kesilmelidir.",
      ],
    },
    {
      when: "1 gün önce ya da aynı gün",
      heading: "Tetkikler ve anestezi değerlendirmesi",
      paragraphs: [
        "Herhangi bir sağlık problemi yoksa ameliyattan bir gün önce veya aynı gün rutin kan tetkikleri ve gerekirse radyolojik tetkikler yapılır. Anestezi uzmanlarının kontrolüyle ameliyata hazırlanılır.",
      ],
    },
    {
      when: "Ameliyat günü",
      heading: "Aç kalma süresi",
      paragraphs: [
        "Genel anestezi ve sedasyon anestezisi alacak olan kişiler ameliyat saatinden en az 6-8 saat öncesinde yemek ve içmeyi keserler. Düzenli olarak kullanılan ilaçlar hekimin bilgisi dâhilinde çok az bir su ile alınabilir.",
        "Lokal anestezi alacak olanlar ise işlemden 3-4 saat önce hafif bir kahvaltı edebilirler.",
      ],
    },
  ],

  note: "Bu sayfadaki bilgiler genel hazırlık sürecini anlatır ve hekim muayenesinin yerine geçmez. Size özel talimatlar farklılık gösterebilir; her durumda hekiminizin verdiği talimatlar geçerlidir.",
};

/* ---------------- İngilizce ---------------- */

const en: HastaBundle = {
  meta: {
    eyebrow: "Patient information",
    title: "Before surgery:",
    titleAccent: "what you need to do",
    intro: "",
    image: "/hasta-bilgilendirme/hazirlik.jpg",
    imageAlt: "A patient consultation at the practice",
    metaTitle: "Patient Information | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "Preparing for surgery: medical history, medication to stop, tests, and how long to fast.",
  },

  sections: [
    {
      when: "At the first consultation",
      heading: "Share your medical history",
      paragraphs: [
        "All health problems must be disclosed, including high blood pressure, diabetes, stomach conditions (gastritis, reflux, ulcer), thyroid dysfunction (previous thyroid surgery, hypo- or hyperthyroidism), any regular medication, allergies, previous operations, and carrier status for Hepatitis B, Hepatitis C or HIV.",
      ],
    },
    {
      when: "At least 2 weeks before",
      heading: "Stop smoking",
      paragraphs: [
        "Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications. A person who smokes should stop at least 2 weeks before surgery and should not smoke for 2-3 weeks afterwards.",
      ],
    },
    {
      when: "1 week before",
      heading: "Certain medications and supplements are stopped",
      paragraphs: [
        "One week beforehand, blood-thinning medication such as aspirin and similar drugs, anti-inflammatories, nutritional supplements such as ginkgo biloba and ginseng, vitamin E and green tea should all be stopped.",
      ],
    },
    {
      when: "1 day before or the same day",
      heading: "Tests and anaesthetic assessment",
      paragraphs: [
        "If there are no health problems, routine blood tests and, where necessary, radiological tests are carried out one day before surgery or on the same day. Preparation for surgery is then completed under the supervision of the anaesthetists.",
      ],
    },
    {
      when: "Day of surgery",
      heading: "How long to fast",
      paragraphs: [
        "Those receiving general anaesthesia or sedation stop eating and drinking at least 6-8 hours before the time of surgery. Regular medication may be taken with a very small amount of water, with the physician's knowledge.",
        "Those receiving local anaesthesia may have a light breakfast 3-4 hours before the procedure.",
      ],
    },
  ],

  note: "The information on this page describes the general preparation process and does not replace a medical examination. Instructions specific to you may differ; in every case the instructions given by your physician apply.",
};

const BUNDLES: Record<Locale, HastaBundle> = { tr, en };

export function getHasta(locale: Locale): HastaBundle {
  return BUNDLES[locale];
}