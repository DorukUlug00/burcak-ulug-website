import type { Metadata } from "next";

import { getKvkk } from "@/lib/kvkk";
import type { Locale } from "@/lib/i18n";
import styles from "./page.module.css";

/* Tarih biçimi de dile bağlı: 19 Ağustos 2026 / 19 August 2026 */
const DATE_LOCALE: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-GB",
};

/* Üst etiket — kısaltma Türkçe mevzuata ait olduğu için
   İngilizcede açık yazıldı. */
const EYEBROW: Record<Locale, string> = {
  tr: "KVKK",
  en: "Data protection",
};

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { meta } = getKvkk(locale);

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    /* Google'a iki dilin de var olduğunu bildirir. */
    alternates: {
      languages: {
        tr: "/tr/kvkk",
        en: "/en/kvkk",
      },
    },
  };
}

export default async function KvkkPage({ params }: Props) {
  const { locale } = await params;
  const { meta, sections } = getKvkk(locale);

  /* Modül düzeyinde değil burada: biçim dile göre değişiyor. */
  const updated = new Intl.DateTimeFormat(DATE_LOCALE[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(meta.updatedAt));

  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>{EYEBROW[locale]}</p>

          <h1 className={styles.title}>{meta.title}</h1>

          <p className={styles.updated}>
            {meta.updatedLabel}:{" "}
            <time dateTime={meta.updatedAt}>{updated}</time>
          </p>
        </header>

        <p className={styles.intro}>{meta.intro}</p>

        {/* Yalnızca İngilizcede dolu: çevirinin bağlayıcı olmadığı notu. */}
        {meta.disclaimer ? (
          <p className={styles.disclaimer}>{meta.disclaimer}</p>
        ) : null}

        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}