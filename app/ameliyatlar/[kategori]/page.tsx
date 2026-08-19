import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* İçerik, yardımcılar ve sayfa şablonu tek dosyada. */
import {
  CATEGORIES,
  ContentArticle,
  getCategory,
  proceduresOf,
} from "../../../lib/ameliyatlar";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ kategori: category.slug }));
}

/* Next 15'te `params` bir Promise; await etmek eski sürümlerde de
   sorun çıkarmaz (Promise olmayan değeri await etmek onu döndürür). */
type Props = { params: Promise<{ kategori: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const category = getCategory(kategori);

  if (!category) {
    return { title: "Sayfa bulunamadı" };
  }

  return {
    title: `${category.title} | Prof. Dr. Burçak Tümerdem Uluğ`,
    description:
      category.metaDescription ??
      category.lead ??
      category.blurb ??
      `${category.title} hakkında genel bilgilendirme.`,
  };
}

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  const category = getCategory(kategori);

  if (!category) {
    notFound();
  }

  const items = proceduresOf(category.slug);

  return (
    <main>
      <ContentArticle
        content={category}
        crumbs={[
          { label: "Ameliyatlar", href: "/ameliyatlar" },
          { label: category.title },
        ]}
        related={
          items.length > 0
            ? {
                title: "Bu başlık altındaki ameliyatlar",
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