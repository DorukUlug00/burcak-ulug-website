import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BIOGRAPHY, MEMBERSHIPS, PROFILE } from "../../lib/cv";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Özgeçmiş | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "Prof. Dr. Z. Burçak Tümerdem Uluğ'un eğitimi, akademik kariyeri, yurt dışı gözlemci programları ve bilimsel çalışmaları.",
};

/* Arama sonuçlarında hekim kartı oluşması için yapısal veri. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: PROFILE.fullName,
  medicalSpecialty: "PlasticSurgery",
  jobTitle: "Prof. Dr.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "İstanbul Üniversitesi İstanbul Tıp Fakültesi",
  },
  memberOf: MEMBERSHIPS.map((name) => ({ "@type": "Organization", name })),
};

export default function OzgecmisPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sıra bilinçli: başlık, portre, gövde.
          Masaüstünde ızgara portreyi sağa alır; telefonda ise
          fotoğraf başlığın hemen altına düşer, metnin sonuna değil. */}
      <article className={styles.layout}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>Özgeçmiş</p>

          <h1 className={styles.title}>
            {PROFILE.displayFirst}
            <span className={styles.titleAccent}>{PROFILE.displayLast}</span>
          </h1>

          <p className={styles.specialty}>{PROFILE.specialty}</p>
        </header>

        <figure className={styles.portraitFrame}>
          <Image
            className={styles.portrait}
            src={PROFILE.portrait}
            alt={PROFILE.portraitAlt}
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            priority
          />
        </figure>

        <div className={styles.body}>
          <p className={styles.intro}>{PROFILE.intro}</p>

          {BIOGRAPHY.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.heading}>{section.heading}</h2>

              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <p className={styles.footNote}>
            Danışma ve muayene randevusu için{" "}
            <Link href="/iletisim" className={styles.inlineLink}>
              iletişim sayfasına
            </Link>{" "}
            göz atabilirsiniz.
          </p>
        </div>
      </article>
    </main>
  );
}