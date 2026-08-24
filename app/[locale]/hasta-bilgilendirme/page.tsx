import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getHasta } from "@/lib/hasta";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./page.module.css";

/* Sayfaya özel sabit metinler; içerik lib/hasta.ts'ten gelir. */
type PageStrings = {
  contactBefore: string;
  contactLink: string;
  contactAfter: string;
};

const UI: Record<Locale, PageStrings> = {
  tr: {
    contactBefore: "Hazırlık süreciyle ilgili sorularınız için ",
    contactLink: "klinikle iletişime geçebilirsiniz",
    contactAfter: ".",
  },
  en: {
    contactBefore: "If you have questions about preparing for surgery, ",
    contactLink: "please contact the clinic",
    contactAfter: ".",
  },
};

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { meta } = getHasta(locale);

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    /* Google'a iki dilin de var olduğunu bildirir. */
    alternates: {
      languages: {
        tr: "/tr/hasta-bilgilendirme",
        en: "/en/hasta-bilgilendirme",
      },
    },
  };
}

export default async function HastaBilgilendirmePage({ params }: Props) {
  const { locale } = await params;
  const { meta, sections, note } = getHasta(locale);
  const t = UI[locale];

  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <div className={styles.hero}>
          <header className={styles.head}>
            <p className={styles.eyebrow}>{meta.eyebrow}</p>

            <h1 className={styles.title}>
              {meta.title}
              <span className={styles.titleAccent}>{meta.titleAccent}</span>
            </h1>

            {/* intro boş bırakılabilir; boşsa hiç basılmaz. */}
            {meta.intro ? (
              <p className={styles.intro}>{meta.intro}</p>
            ) : null}
          </header>

          <figure className={styles.heroFigure}>
            <Image
              className={styles.heroImage}
              src={meta.image}
              alt={meta.imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 38vw"
              priority
            />
          </figure>
        </div>

        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            {/* Zaman etiketi başlığın solunda, geniş ekranda kenar
                boşluğuna taşıyor; dar ekranda başlığın üstüne düşüyor. */}
            {section.when ? (
              <p className={styles.when}>{section.when}</p>
            ) : null}

            <div className={styles.sectionBody}>
              <h2 className={styles.heading}>{section.heading}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              {section.items ? (
                <ul className={styles.list}>
                  {section.items.map((item) => (
                    <li key={item.slice(0, 28)} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.after?.map((paragraph) => (
                <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <footer className={styles.foot}>
          <p className={styles.note}>{note}</p>

          <p className={styles.contact}>
            {t.contactBefore}
            <Link
              href={withLocale("/iletisim", locale)}
              className={styles.inlineLink}
            >
              {t.contactLink}
            </Link>
            {t.contactAfter}
          </p>
        </footer>
      </article>
    </main>
  );
}