import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ContentArticle,
  allCategorySlugs,
  getCategory,
  proceduresOf,
} from "@/lib/ameliyatlar";
import { LOCALES, type Locale } from "@/lib/i18n";

/* Sayfaya özel sabit metinler. */
type PageStrings = {
  crumbRoot: string;
  relatedTitle: string;
  notFound: string;
  fallbackDescription: (title: string) => string;
};

const UI: Record<Locale, PageStrings> = {
  tr: {
    crumbRoot: "Ameliyatlar",
    relatedTitle: "Bu başlık altındaki ameliyatlar",
    notFound: "Sayfa bulunamadı",
    fallbackDescription: (title) => `${title} hakkında genel bilgilendirme.`,
  },
  en: {
    crumbRoot: "Procedures",
    relatedTitle: "Procedures in this category",
    notFound: "Page not found",
    fallbackDescription: (title) => `General information about ${title}.`,
  },
};

/* Kategori sayfaları her iki dilde derleme anında üretilir.
   Slug'lar diller arasında aynı olduğu için tek listeden çarpılır. */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allCategorySlugs().map((kategori) => ({ locale, kategori })),
  );
}

/* Next 15'te `params` bir Promise; await etmek eski sürümlerde de
   sorun çıkarmaz (Promise olmayan değeri await etmek onu döndürür). */
type Props = { params: Promise<{ locale: Locale; kategori: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, kategori } = await params;
  const t = UI[locale];
  const category = getCategory(locale, kategori);

  if (!category) {
    return { title: t.notFound };
  }

  return {
    title: `${category.title} | Prof. Dr. Z. Burçak Tümerdem Uluğ`,
    description:
      category.metaDescription ??
      category.lead ??
      category.blurb ??
      t.fallbackDescription(category.title),
    /* Slug'lar iki dilde aynı olduğu için karşılık adresi
       doğrudan kurulabiliyor. */
    alternates: {
      languages: {
        tr: `/tr/ameliyatlar/${kategori}`,
        en: `/en/ameliyatlar/${kategori}`,
      },
    },
  };
}

export default async function KategoriPage({ params }: Props) {
  const { locale, kategori } = await params;
  const t = UI[locale];
  const category = getCategory(locale, kategori);

  if (!category) {
    notFound();
  }

  const items = proceduresOf(locale, category.slug);

  return (
    <main>
      {/* href'ler öneksiz veriliyor; ContentArticle withLocale ile
          dil önekini kendisi ekliyor. */}
      <ContentArticle
        locale={locale}
        content={category}
        crumbs={[
          { label: t.crumbRoot, href: "/ameliyatlar" },
          { label: category.title },
        ]}
        related={
          items.length > 0
            ? {
                title: t.relatedTitle,
                items: items.map((item) => ({
                  label: item.title,
                  href: `/ameliyatlar/${category.slug}/${item.slug}`,
                })),
              }
            : undefined
        }
      />
    </main>
  );
}