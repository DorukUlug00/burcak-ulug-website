/* Her iki dil de aynı şekli paylaşır: tr.ts ve en.ts
   birebir aynı slug'lara sahip olmalı. */

export type Section = {
  heading: string;
  /* Her eleman bir paragraf. */
  body: string[];
};

export type Faq = { question: string; answer: string };

export type Content = {
  title: string;
  /* Arama sonuçlarında görünen açıklama. Boşsa `lead` kullanılır. */
  metaDescription?: string;
  /* Başlığın altındaki giriş paragrafı. */
  lead?: string;
  sections?: Section[];
  faq?: Faq[];
  /* Görsel yolu diller arasında aynıdır. */
  image?: string;
  imageAlt?: string;
};

export type Category = Content & {
  /* URL'de görünen ad. İKİ DİLDE DE AYNI olmalı. */
  slug: string;
  blurb?: string;
};

export type Procedure = Content & {
  slug: string;
  /* CATEGORIES içindeki bir slug olmalı. */
  category: string;
};

/* Bir dilin tüm içeriği. */
export type ContentBundle = {
  categories: Category[];
  procedures: Procedure[];
};