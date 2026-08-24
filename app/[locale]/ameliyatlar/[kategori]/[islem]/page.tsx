import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ContentArticle,
  allProcedurePaths,
  getCategory,
  getProcedure,
  proceduresOf,
} from "@/lib/ameliyatlar";
import { LOCALES, type Locale } from "@/lib/i18n";

/* Sayfaya özel sabit metinler. */
type PageStrings = {
  crumbRoot: string;
  notFound: string;
  fallbackDescription: (title: string) => string;
};

const UI: Record<Locale, PageStrings> = {
  tr: {
    crumbRoot: "Ameliyatlar",
    notFound: "Sayfa bulunamadı",
    fallbackDescription: (title) => `${title} hakkında genel bilgilendirme.`,
  },
  en: {
    crumbRoot: "Procedures",
    notFound: "Page not found",
    fallbackDescription: (title) => `General information about ${title}.`,
  },
};

/* Bütün ameliyat sayfaları her iki dilde derleme anında üretilir.
   Slug'lar diller arasında aynı olduğu için tek listeden çarpılır. */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allProcedurePaths().map((path) => ({
      locale,
      kategori: path.category,
      islem: path.slug,
    })),
  );
}

type Props = {
  params: Promise<{ locale: Locale; kategori: string; islem: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, kategori, islem } = await params;
  const t = UI[locale];
  const procedure = getProcedure(locale, kategori, islem);

  if (!procedure) {
    return { title: t.notFound };
  }

  return {
    title: `${procedure.title} | Prof. Dr. Z. Burçak Tümerdem Uluğ`,
    description:
      procedure.metaDescription ??
      procedure.lead ??
      t.fallbackDescription(procedure.title),
    /* Slug'lar iki dilde aynı olduğu için karşılık adresi
       doğrudan kurulabiliyor. */
    alternates: {
      languages: {
        tr: `/tr/ameliyatlar/${kategori}/${islem}`,
        en: `/en/ameliyatlar/${kategori}/${islem}`,
      },
    },
  };
}

export default async function AmeliyatPage({ params }: Props) {
  const { locale, kategori, islem } = await params;
  const t = UI[locale];

  /* getProcedure kategoriyi de doğruluyor: yanlış kategori altındaki
     doğru slug (örn. /kulak-estetigi/liposuction) 404 verir. */
  const procedure = getProcedure(locale, kategori, islem);
  const category = getCategory(locale, kategori);

  if (!procedure || !category) {
    notFound();
  }

  const siblings = proceduresOf(locale, kategori).filter(
    (item) => item.slug !== procedure.slug,
  );

  return (
    <main>
      {/* href'ler öneksiz veriliyor; ContentArticle withLocale ile
          dil önekini kendisi ekliyor. */}
      <ContentArticle
        locale={locale}
        content={procedure}
        crumbs={[
          { label: t.crumbRoot, href: "/ameliyatlar" },
          { label: category.title, href: `/ameliyatlar/${category.slug}` },
          { label: procedure.title },
        ]}
        related={
          siblings.length > 0
            ? {
                title: category.title,
                items: siblings.map((item) => ({
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