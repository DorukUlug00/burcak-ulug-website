import type { Metadata } from "next";

import { KVKK_META, KVKK_SECTIONS } from "../../lib/kvkk";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan aydınlatma metni.",
};

const updated = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Istanbul",
}).format(new Date(KVKK_META.updatedAt));

export default function KvkkPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>KVKK</p>

          <h1 className={styles.title}>{KVKK_META.title}</h1>

          <p className={styles.updated}>
            Son güncelleme: <time dateTime={KVKK_META.updatedAt}>{updated}</time>
          </p>
        </header>

        <p className={styles.intro}>{KVKK_META.intro}</p>

        {KVKK_SECTIONS.map((section) => (
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