import type { ReactNode } from "react";
import Image from "next/image";
import StickyNav from "../components/StickyNav/StickyNav";


import styles from "./page.module.css";

const CONTENT = {
  brand: {
    monogram: "Dr.",
    name: "Prof. Dr. Burçak Tümerdem Ulug",
    role: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
  },

  nav: [
    { label: "Hakkında", href: "#about" },
    { label: "Uzmanlık Alanları", href: "#expertise" },
    { label: "Ameliyatlar", href: "#procedures" },
    { label: "Akademik Çalışmalar", href: "#research" },
    { label: "Hasta Bilgilendirme", href: "#patient-info" },
  ],

  hero: {
    eyebrow: "Plastik ve Estetik Cerrahi · İstanbul",
    prefix: "Prof. Dr.",
    givenName: "Burçak",
    familyName: "Tümerdem Ulug",
    book: "Randevu Al",
    call: "Kliniği Ara",
    phone: "+900000000000",
    imageAlt: "Prof. Dr. Burçak Tümerdem Uluğ",
  },

  credentials: [
    {
      label: "Cerrahi Profesörü",
      detail: "Üniversite öğretim üyesi",
    },
    {
      label: "Uzman Hekim",
      detail: "Plastik ve rekonstrüktif cerrahi",
    },
    {
      label: "Türkçe ve İngilizce",
      detail: "Her iki dilde muayene",
    },
  ],

  procedures: {
    eyebrow: "Cerrahi İşlemler",
    title: "En Sık Uyguladığım Ameliyatlar",
    intro:
      "Her ameliyat, hastanın anatomik özellikleri, ihtiyaçları ve beklentileri doğrultusunda kişiye özel olarak planlanır.",
    readMore: "Detaylı Bilgi",
    items: [],
  },
};

const CREDENTIAL_ICONS: ReactNode[] = [
  <CapIcon />,
  <ShieldIcon />,
  <SpeechIcon />,
];

export default function Home() {
  const { brand, nav, hero, credentials, procedures } = CONTENT;

  return (
    <main className={styles.page}>
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

        <StickyNav monogram={brand.monogram} name={brand.name} items={nav} />


        <header className={styles.header}>
          <a href="/" className={styles.brand}>
            <span className={styles.monogram}>{brand.monogram}</span>

            <span className={styles.brandText}>
              <span className={styles.brandName}>{brand.name}</span>
              <span className={styles.brandRole}>{brand.role}</span>
            </span>
          </a>

          <div className={styles.headerActions}>
            <nav className={styles.nav} aria-label="Ana menü">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              ))}

              <a href="#contact" className={styles.navCta}>
                İletişim
              </a>
            </nav>

            <button
              type="button"
              className={styles.menuButton}
              aria-label="Menüyü aç"
            >
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 1h18M0 6h18M0 11h12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className={styles.heroBody}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className={styles.name}>
            <span className={styles.namePrefix}>{hero.prefix}</span>

            <span className={styles.nameLine}>{hero.givenName}</span>

            <span
              className={`${styles.nameLine} ${styles.nameLineHeavy}`}
            >
              {hero.familyName}
            </span>
          </h1>

          <div className={styles.actions}>
            <a href="#book" className={styles.primaryAction}>
              <span>{hero.book}</span>
              <LongArrow />
            </a>

            <a
              href={`tel:${hero.phone}`}
              className={styles.secondaryAction}
            >
              <PhoneIcon />
              {hero.call}
            </a>
          </div>
        </div>

        <ul className={styles.strip}>
          {credentials.map((item, index) => (
            <li key={item.label} className={styles.credential}>
              <span className={styles.credentialIcon}>
                {CREDENTIAL_ICONS[index]}
              </span>

              <span className={styles.credentialText}>
                <span className={styles.credentialLabel}>
                  {item.label}
                </span>

                <span className={styles.credentialDetail}>
                  {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.procedures} id="procedures">
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>
            {procedures.eyebrow}
          </p>

          <h2 className={styles.sectionTitle}>
            {procedures.title}
          </h2>

          <p className={styles.sectionIntro}>
            {procedures.intro}
          </p>
        </div>

        <div className={styles.procedureGrid}>
          {procedures.items.map((item) => (
            <article key={item.name} className={styles.procedureCard}>
              <div className={styles.procedureMedia}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 46vw, 100vw"
                  className={styles.procedureImage}
                />
              </div>

              <div className={styles.procedureBody}>
                <h3 className={styles.procedureName}>
                  <a
                    href={item.href}
                    className={styles.procedureLink}
                  >
                    {item.name}
                  </a>
                </h3>

                <p className={styles.procedureSummary}>
                  {item.summary}
                </p>

                <span
                  className={styles.procedureMore}
                  aria-hidden="true"
                >
                  {procedures.readMore}
                  <LongArrow />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
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

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4 2 9l10 5 10-5-10-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3l7 3v5.5c0 4.3-2.9 7.6-7 9.5-4.1-1.9-7-5.2-7-9.5V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeechIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 12a7 7 0 0 1-7 7H8l-4 3v-4.6A7 7 0 0 1 4 12a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="M9 11h6M9 14h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}