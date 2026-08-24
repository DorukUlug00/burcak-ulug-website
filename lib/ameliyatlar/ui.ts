import type { Locale } from "@/lib/i18n";

/* ContentArticle içindeki sabit metinler. İçerikten ayrı
   tutuluyor: bunlar çeviriye gitmez, arayüz metnidir. */

type UiStrings = {
  breadcrumbLabel: string;
  faqTitle: string;
  pendingBefore: string;
  pendingLink: string;
  pendingAfter: string;
  note: string;
};

export const UI: Record<Locale, UiStrings> = {
  tr: {
    breadcrumbLabel: "Konum",
    faqTitle: "Sık sorulan sorular",
    pendingBefore: "Bu sayfanın içeriği hazırlanıyor. Bilgi almak için ",
    pendingLink: "klinikle iletişime geçebilirsiniz",
    pendingAfter: ".",
    note: "Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; hekim muayenesi, tanı veya tedavinin yerine geçmez. Uygulanacak yöntem ve sonuçlar kişiden kişiye değişir.",
  },
  en: {
    breadcrumbLabel: "Breadcrumb",
    faqTitle: "Frequently asked questions",
    pendingBefore: "This page is being prepared. For information, please ",
    pendingLink: "contact the clinic",
    pendingAfter: ".",
    note: "The information on this page is for general guidance only; it does not replace a medical examination, diagnosis or treatment. The method used and the results vary from person to person.",
  },
};