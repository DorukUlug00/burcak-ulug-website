import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HASTA_META, HASTA_NOTE, HASTA_SECTIONS } from "../../lib/hasta";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hasta Bilgilendirme | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "Ameliyat öncesi hazırlık: kesilmesi gereken ilaçlar, paylaşılması gereken sağlık bilgileri, açlık süresi, tetkikler ve sigara.",
};

export default function HastaBilgilendirmePage() {
  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <div className={styles.hero}>
          <header className={styles.head}>
            <p className={styles.eyebrow}>{HASTA_META.eyebrow}</p>

            <h1 className={styles.title}>
              {HASTA_META.title}
              <span className={styles.titleAccent}>
                {HASTA_META.titleAccent}
              </span>
            </h1>

            <p className={styles.intro}>{HASTA_META.intro}</p>
          </header>

          <figure className={styles.heroFigure}>
            <Image
              className={styles.heroImage}
              src={HASTA_META.image}
              alt={HASTA_META.imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 38vw"
              priority
            />
          </figure>
        </div>

        {HASTA_SECTIONS.map((section) => (
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
          <p className={styles.note}>{HASTA_NOTE}</p>

          <p className={styles.contact}>
            Hazırlık süreciyle ilgili sorularınız için{" "}
            <Link href="/iletisim" className={styles.inlineLink}>
              klinikle iletişime geçebilirsiniz
            </Link>
            .
          </p>
        </footer>
      </article>
    </main>
  );
}