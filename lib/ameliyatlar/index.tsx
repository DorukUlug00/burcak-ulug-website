/* AMELİYAT SAYFALARI — YARDIMCILAR VE ŞABLON
   ---------------------------------------------------------------
   İçerik burada DEĞİL: tr.ts ve en.ts dosyalarında.
   Metin düzenlemek için o dosyalara git.

   Adres yapısı:
     /tr/ameliyatlar
     /tr/ameliyatlar/meme-estetigi
     /tr/ameliyatlar/meme-estetigi/jinekomasti

   Slug'lar iki dilde de aynıdır; yalnızca metin değişir.
--------------------------------------------------------------- */

import Image from "next/image";
import Link from "next/link";

import { withLocale, type Locale } from "@/lib/i18n";
import styles from "@/app/[locale]/ameliyatlar/ameliyatlar.module.css";

import { CONTENT_TR } from "./tr";
import { CONTENT_EN } from "./en";
import { UI } from "./ui";
import type { Category, Content, ContentBundle, Procedure } from "./types";

export type { Category, Content, Faq, Procedure, Section } from "./types";

const BUNDLES: Record<Locale, ContentBundle> = {
  tr: CONTENT_TR,
  en: CONTENT_EN,
};

/* ---------------- Yardımcılar ----------------
   Hepsi artık ilk parametre olarak dil alıyor. */

export function categoriesOf(locale: Locale): Category[] {
  return BUNDLES[locale].categories;
}

export function getCategory(
  locale: Locale,
  slug: string,
): Category | undefined {
  return BUNDLES[locale].categories.find((item) => item.slug === slug);
}

export function proceduresOf(
  locale: Locale,
  categorySlug: string,
): Procedure[] {
  return BUNDLES[locale].procedures.filter(
    (item) => item.category === categorySlug,
  );
}

/* Kategori de doğrulanır: /kulak-estetigi/liposuction 404 verir. */
export function getProcedure(
  locale: Locale,
  categorySlug: string,
  slug: string,
): Procedure | undefined {
  console.log("getProcedure locale:", locale);
  return BUNDLES[locale].procedures.find(
    (item) => item.slug === slug && item.category === categorySlug,
  );
}

export function groupedProcedures(locale: Locale): {
  category: Category;
  items: Procedure[];
}[] {
  return BUNDLES[locale].categories.map((category) => ({
    category,
    items: proceduresOf(locale, category.slug),
  }));
}

/* Statik yol üretimi için: dilden bağımsız, slug'lar aynı. */
export function allCategorySlugs(): string[] {
  return CONTENT_TR.categories.map((item) => item.slug);
}

export function allProcedurePaths(): { category: string; slug: string }[] {
  return CONTENT_TR.procedures.map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

/* Sayfada gösterilecek bir içerik var mı? */
export function hasContent(content: Content): boolean {
  return Boolean(
    content.lead || content.sections?.length || content.faq?.length,
  );
}

/* ===============================================================
   ŞABLON — kategori ve ameliyat sayfalarını çizen bileşen
   =============================================================== */

export type Crumb = { label: string; href?: string };
export type RelatedLink = { label: string; href: string };

type Props = {
  locale: Locale;
  content: Content;
  crumbs: Crumb[];
  related?: { title: string; items: RelatedLink[] };
};

export function ContentArticle({ locale, content, crumbs, related }: Props) {
  const t = UI[locale];

  /* Görseli olan sayfalarda başlık, fotoğrafın üzerine biner;
     olmayanlarda sade başlık kullanılır. */
  const hasHero = Boolean(content.image);

  const crumbTrail = crumbs.map((crumb, index) => (
    <span key={crumb.label} className={styles.crumb}>
      {index > 0 ? (
        <span className={styles.crumbSep} aria-hidden="true">
          /
        </span>
      ) : null}

      {crumb.href ? (
        <Link
          href={withLocale(crumb.href, locale)}
          className={styles.crumbLink}
        >
          {crumb.label}
        </Link>
      ) : (
        /* Bulunulan sayfa — bağlantı değil, beyaz. */
        <span className={styles.crumbCurrent} aria-current="page">
          {crumb.label}
        </span>
      )}
    </span>
  ));

  return (
    <article className={styles.detail}>
      {hasHero ? (
        <header className={styles.hero}>
          <Image
            className={styles.heroImage}
            src={content.image as string}
            alt={content.imageAlt ?? ""}
            fill
            sizes="100vw"
            priority
          />

          {/* Yazının okunması için alttan yukarı koyulaşan perde. */}
          <span className={styles.heroScrim} aria-hidden="true" />

          <nav
            className={`${styles.crumbs} ${styles.crumbsHero}`}
            aria-label={t.breadcrumbLabel}
          >
            {crumbTrail}
          </nav>

          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{content.title}</h1>

            {content.lead ? (
              <p className={styles.heroLead}>{content.lead}</p>
            ) : null}
          </div>
        </header>
      ) : (
        <header className={styles.plainHead}>
          <nav className={styles.crumbs} aria-label={t.breadcrumbLabel}>
            {crumbTrail}
          </nav>

          <h1 className={styles.detailTitle}>{content.title}</h1>

          {content.lead ? <p className={styles.lead}>{content.lead}</p> : null}
        </header>
      )}

      <div className={styles.body}>
        {content.sections?.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>

            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {content.faq?.length ? (
          <section className={styles.section}>
            <h2 className={styles.heading}>{t.faqTitle}</h2>

            <dl className={styles.faq}>
              {content.faq.map((entry) => (
                <div key={entry.question} className={styles.faqItem}>
                  <dt className={styles.question}>{entry.question}</dt>
                  <dd className={styles.answer}>{entry.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {/* İçerik henüz girilmemişse sayfa boş kalmasın. */}
        {!hasContent(content) ? (
          <p className={styles.pending}>
            {t.pendingBefore}
            <Link
              href={withLocale("/iletisim", locale)}
              className={styles.inlineLink}
            >
              {t.pendingLink}
            </Link>
            {t.pendingAfter}
          </p>
        ) : null}

        <footer className={styles.detailFoot}>
          {/* Her sayfaya otomatik ekleniyor; unutulma ihtimali kalmıyor. */}
          <p className={styles.note}>{t.note}</p>

          {related && related.items.length > 0 ? (
            <div className={styles.siblings}>
              <p className={styles.siblingsTitle}>{related.title}</p>

              <ul className={styles.siblingList}>
                {related.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={withLocale(item.href, locale)}
                      className={styles.siblingLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </footer>
      </div>
    </article>
  );
}