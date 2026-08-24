import type { Metadata } from "next";

/* İçerik ve galeri tek dosyada: lib/media.tsx
   Video ve fotoğraf eklemek için o dosyanın üst yarısını düzenle. */
import MediaGallery from "@/lib/media";
import type { Locale } from "@/lib/i18n";
import styles from "./page.module.css";

/* Sayfa başlığı ve üst etiket. Medya kayıtlarının kendi başlıkları
   lib/media.tsx içinde, her kayıtta { tr, en } olarak duruyor. */
type PageStrings = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  /* Boş bırakılabilir: doluysa başlığın yanında görünür. */
  intro: string;
  metaTitle: string;
  metaDescription: string;
};

const UI: Record<Locale, PageStrings> = {
  tr: {
    eyebrow: "Medya",
    titleLead: "Televizyon Programları ve",
    titleAccent: " Basın",
    intro: "",
    metaTitle: "Medya | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription: "Televizyon programları, gazete ve basın.",
  },
  en: {
    eyebrow: "Media",
    titleLead: "Television Programmes and",
    titleAccent: " Press",
    intro: "",
    metaTitle: "Media | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription: "Television programmes, newspapers and press coverage.",
  },
};

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = UI[locale];

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    /* Google'a iki dilin de var olduğunu bildirir. */
    alternates: {
      languages: {
        tr: "/tr/medya",
        en: "/en/medya",
      },
    },
  };
}

export default async function MedyaPage({ params }: Props) {
  const { locale } = await params;
  const t = UI[locale];

  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>{t.eyebrow}</p>

          <h1 className={styles.title}>
            {t.titleLead}
            <span className={styles.titleAccent}>{t.titleAccent}</span>
          </h1>
        </div>

        {/* intro boş bırakılabilir; boşsa ızgarada yer kaplamasın. */}
        {t.intro ? <p className={styles.intro}>{t.intro}</p> : null}
      </header>

      <MediaGallery locale={locale} />
    </main>
  );
}