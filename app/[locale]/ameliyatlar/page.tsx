import type { Metadata } from "next";
import Link from "next/link";

import { groupedProcedures } from "@/lib/ameliyatlar";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./ameliyatlar.module.css";

/* Bu sayfaya özel sabit metinler. İçerik (kategori ve ameliyat
   başlıkları) lib/ameliyatlar/tr.ts ve en.ts'ten gelir. */
type PageStrings = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  general: string;
  metaTitle: string;
  metaDescription: string;
};

const UI: Record<Locale, PageStrings> = {
  tr: {
    eyebrow: "Ameliyatlar",
    titleLead: "Uygulanan",
    titleAccent: "işlemler",
    intro:
      "Aşağıdaki başlıklar genel bilgilendirme içindir. Hangi yöntemin size uygun olduğu, muayene sonrasında birlikte kararlaştırılır.",
    general: "Genel bilgi",
    metaTitle: "Ameliyatlar | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "Yüz, burun, kulak, meme ve vücut estetiği ameliyatları ile ameliyatsız yöntemler hakkında bilgilendirme.",
  },
  en: {
    eyebrow: "Procedures",
    titleLead: "Treatments",
    titleAccent: "offered",
    intro:
      "The topics below are for general information. Which method is right for you is decided together, following an examination.",
    general: "Overview",
    metaTitle: "Procedures | Prof. Dr. Z. Burçak Tümerdem Uluğ",
    metaDescription:
      "Information on facial, nasal, ear, breast and body contouring surgery, and on non-surgical treatments.",
  },
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = UI[locale];

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    /* Google'a iki dilin de var olduğunu bildirir. */
    alternates: {
      languages: {
        tr: "/tr/ameliyatlar",
        en: "/en/ameliyatlar",
      },
    },
  };
}

export default async function AmeliyatlarPage({ params }: Props) {
  const { locale } = await params;
  const t = UI[locale];
  const groups = groupedProcedures(locale);

  return (
    <main className={styles.page}>
      <header className={styles.indexHead}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>

        <h1 className={styles.indexTitle}>
          {t.titleLead}
          <span className={styles.titleAccent}>{t.titleAccent}</span>
        </h1>

        <p className={styles.indexIntro}>{t.intro}</p>
      </header>

      {groups.map(({ category, items }) => (
        <section key={category.slug} id={category.slug} className={styles.group}>
          {/* Sol sütun masaüstünde sabit kalır, sağdaki liste akar. */}
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>{category.title}</h2>

            {category.blurb ? (
              <p className={styles.groupBlurb}>{category.blurb}</p>
            ) : null}

            <Link
              href={withLocale(`/ameliyatlar/${category.slug}`, locale)}
              className={styles.generalLink}
            >
              <span>{t.general}</span>
              <Arrow />
            </Link>
          </div>

          <ul className={styles.list}>
            {items.length > 0 ? (
              items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={withLocale(
                      `/ameliyatlar/${category.slug}/${item.slug}`,
                      locale,
                    )}
                    className={styles.row}
                  >
                    <span className={styles.rowText}>
                      <span className={styles.rowTitle}>{item.title}</span>

                      {item.lead ? (
                        <span className={styles.rowLead}>{item.lead}</span>
                      ) : null}
                    </span>

                    <span className={styles.rowArrow} aria-hidden="true">
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              /* Alt sayfası olmayan kategoriler — içerik kategori
                 sayfasının kendisinde. */
              <li>
                <Link
                  href={withLocale(`/ameliyatlar/${category.slug}`, locale)}
                  className={styles.row}
                >
                  <span className={styles.rowText}>
                    <span className={styles.rowTitle}>{category.title}</span>

                    {category.lead ? (
                      <span className={styles.rowLead}>{category.lead}</span>
                    ) : null}
                  </span>

                  <span className={styles.rowArrow} aria-hidden="true">
                    <Arrow />
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </section>
      ))}
    </main>
  );
}

function Arrow() {
  return (
    <svg width="30" height="8" viewBox="0 0 34 8" fill="none" aria-hidden="true">
      <path
        d="M0 4h32m-5-3.5L32 4l-5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}