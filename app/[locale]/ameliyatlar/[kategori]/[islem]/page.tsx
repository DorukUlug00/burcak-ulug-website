import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* İçerik, yardımcılar ve sayfa şablonu tek dosyada. */
import {
  ContentArticle,
  getCategory,
  getProcedure,
  proceduresOf,
  PROCEDURES,
} from "../../../../../lib/ameliyatlar";

/* Bütün ameliyat sayfaları derleme anında üretilir. */
export function generateStaticParams() {
  return PROCEDURES.map((procedure) => ({
    kategori: procedure.category,
    islem: procedure.slug,
  }));
}

type Props = { params: Promise<{ kategori: string; islem: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori, islem } = await params;
  const procedure = getProcedure(kategori, islem);

  if (!procedure) {
    return { title: "Sayfa bulunamadı" };
  }

  return {
    title: `${procedure.title} | Prof. Dr. Burçak Tümerdem Uluğ`,
    description:
      procedure.metaDescription ??
      procedure.lead ??
      `${procedure.title} hakkında genel bilgilendirme.`,
  };
}

export default async function AmeliyatPage({ params }: Props) {
  const { kategori, islem } = await params;

  /* getProcedure kategoriyi de doğruluyor: yanlış kategori altındaki
     doğru slug (örn. /kulak-estetigi/liposuction) 404 verir. */
  const procedure = getProcedure(kategori, islem);
  const category = getCategory(kategori);

  if (!procedure || !category) {
    notFound();
  }

  const siblings = proceduresOf(kategori).filter(
    (item) => item.slug !== procedure.slug,
  );

  return (
    <main>
      <ContentArticle
        content={procedure}
        crumbs={[
          { label: "Ameliyatlar", href: "/ameliyatlar" },
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