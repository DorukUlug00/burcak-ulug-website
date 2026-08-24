import Image from "next/image";
import Link from "next/link";

import Procedures from "@/components/Procedures/Procedures";
import Cv from "@/components/CV/Cv";
import Media from "@/components/Media/Media";
import Contact from "@/components/Contact/Contact";

import { CONTACT } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./page.module.css";

type HeroCopy = {
  eyebrow: string;
  prefix: string;
  givenName: string;
  familyName: string;
  whatsapp: string;
  contact: string;
  imageAlt: string;
};

const CONTENT: Record<Locale, { hero: HeroCopy }> = {
  tr: {
    hero: {
      eyebrow: "Plastik ve Estetik Cerrahi · İstanbul",
      prefix: "Prof. Dr.",
      givenName: "Z. Burçak",
      familyName: "Tümerdem Uluğ",
      /* Birincil eylem WhatsApp'a gider; numara lib/site.ts'ten
         okunur, burada elle yazılı telefon yok. */
      whatsapp: "WhatsApp'tan yazın",
      contact: "İletişim bilgileri",
      imageAlt: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
    },
  },
  en: {
    hero: {
      eyebrow: "Plastic and Aesthetic Surgery · Istanbul",
      prefix: "Prof. Dr.",
      givenName: "Z. Burçak",
      familyName: "Tümerdem Uluğ",
      whatsapp: "Message on WhatsApp",
      contact: "Contact details",
      imageAlt: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
    },
  },
};

/* params bir Promise: sayfa async olmak ve await etmek zorunda. */
type Props = { params: Promise<{ locale: Locale }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { hero } = CONTENT[locale];

  return (
    <main className={styles.page}>
      {/* Navbar artık hero'nun DIŞINDA: sayfa boyunca sabit kalır
          ve hiçbir bölüm üzerine binemez. */}

      <section className={styles.hero}>
        <div className={styles.media}>
          <Image
            src="/hero.png"
            alt={hero.imageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.scrim} aria-hidden="true" />

        <div className={styles.heroBody}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className={styles.name}>
            <span className={styles.namePrefix}>{hero.prefix}</span>

            <span className={styles.nameLine}>{hero.givenName}</span>

            <span className={`${styles.nameLine} ${styles.nameLineHeavy}`}>
              {hero.familyName}
            </span>
          </h1>

          <div className={styles.actions}>
            <a
              href={CONTACT.whatsappUrl}
              className={styles.primaryAction}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{hero.whatsapp}</span>
              <LongArrow />
            </a>

            {/* Sayfa içi geçiş olduğu için <a> değil <Link>:
                tam yeniden yükleme yapmaz. */}
            <Link
              href={withLocale("/iletisim", locale)}
              className={styles.secondaryAction}
            >
              <WhatsAppIcon />
              {hero.contact}
            </Link>
          </div>
        </div>
      </section>

      <Procedures/>
      <Cv/>
      <Media/>
      <Contact locale={locale} />
    </main>
  );
}

/* ---------------- Grafikler ---------------- */

function LongArrow() {
  return (
    <svg
      className={styles.longArrow}
      width="46"
      height="8"
      viewBox="0 0 46 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 4h44m-5-3.5L44 4l-5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 20.5 4.9 16A8.2 8.2 0 1 1 8 19.1l-4.5 1.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M9 8.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.4 1-1l-1.6-.8-.9 1a6 6 0 0 1-2.7-2.7l1-.9L10.5 8c-.6 0-1.5-.1-1.5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}