import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getCv } from "@/lib/cv";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./page.module.css";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { ui } = getCv(locale);

  return {
    title: ui.metaTitle,
    description: ui.metaDescription,
    /* Google'a iki dilin de var olduğunu bildirir. */
    alternates: {
      languages: {
        tr: "/tr/ozgecmis",
        en: "/en/ozgecmis",
      },
    },
  };
}

export default async function OzgecmisPage({ params }: Props) {
  const { locale } = await params;
  const { profile, biography, memberships, ui } = getCv(locale);

  /* Arama sonuçlarında hekim kartı oluşması için yapısal veri.
     PROFILE artık modül düzeyinde olmadığı için bileşenin içinde. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: profile.fullName,
    medicalSpecialty: "PlasticSurgery",
    jobTitle: "Prof. Dr.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "İstanbul Üniversitesi İstanbul Tıp Fakültesi",
    },
    memberOf: memberships.map((name) => ({ "@type": "Organization", name })),
  };

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
          <p className={styles.eyebrow}>{ui.eyebrow}</p>

          <h1 className={styles.title}>
            {profile.displayFirst}
            <span className={styles.titleAccent}>{profile.displayLast}</span>
          </h1>

          <p className={styles.specialty}>{profile.specialty}</p>
        </header>

        <figure className={styles.portraitFrame}>
          <Image
            className={styles.portrait}
            src={profile.portrait}
            alt={profile.portraitAlt}
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            priority
          />
        </figure>

        {/* Ara başlık yok: paragraflar kesintisiz tek metin akar. */}
        <div className={styles.body}>
          <p className={styles.intro}>{profile.intro}</p>

          {biography.map((paragraph) => (
            <p key={paragraph.slice(0, 28)} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          <p className={styles.footNote}>
            {ui.footNoteBefore}
            <Link
              href={withLocale("/iletisim", locale)}
              className={styles.inlineLink}
            >
              {ui.footNoteLink}
            </Link>
            {ui.footNoteAfter}
          </p>
        </div>
      </article>
    </main>
  );
}