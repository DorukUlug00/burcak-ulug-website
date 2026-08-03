import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { isLocale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type NavKey = keyof Dictionary["nav"];
type CredentialKey = keyof Dictionary["credentials"];

const NAV_ITEMS: { key: NavKey; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "expertise", href: "#expertise" },
  { key: "conditions", href: "#conditions" },
  { key: "research", href: "#research" },
  { key: "patientInfo", href: "#patient-info" },
];

const CREDENTIAL_ITEMS: { key: CredentialKey; icon: ReactNode }[] = [
  { key: "professor", icon: <CapIcon /> },
  { key: "board", icon: <ShieldIcon /> },
  { key: "languages", icon: <SpeechIcon /> },
];

const CLINIC_PHONE = "+900000000000";

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.media}>
          <Image
            src="/hero.jpg"
            alt={t.a11y.portraitAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.scrim} aria-hidden="true" />

        <header className={styles.header}>
          <a href={`/${locale}`} className={styles.brand}>
            <span className={styles.monogram}>BU</span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Prof. Dr. Burçak Uluğ</span>
              <span className={styles.brandRole}>{t.brand.role}</span>
            </span>
          </a>

          <div className={styles.headerActions}>
            <nav className={styles.nav} aria-label={t.a11y.primaryNav}>
              {NAV_ITEMS.map((item) => (
                <a key={item.key} href={item.href} className={styles.navLink}>
                  {t.nav[item.key]}
                </a>
              ))}
              <a href="#contact" className={styles.navCta}>
                {t.nav.contact}
              </a>
            </nav>

            <LanguageSwitcher current={locale} label={t.a11y.changeLanguage} />

            <button type="button" className={styles.menuButton} aria-label={t.a11y.openMenu}>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path
                  d="M0 1h18M0 6h18M0 11h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className={styles.heroBody}>
          <p className={styles.eyebrow}>
            <span className={styles.pulseDot} aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <h1 className={styles.name}>
            <span className={styles.namePrefix}>{t.hero.prefix}</span>
            <span className={styles.nameLine}>{t.hero.givenName}</span>
            <span className={`${styles.nameLine} ${styles.nameLineHeavy}`}>
              {t.hero.familyName}
            </span>
          </h1>

          <PulseRule />

          <p className={styles.lede}>{t.hero.lede}</p>

          <div className={styles.actions}>
            <a href="#book" className={styles.primaryAction}>
              {t.hero.book}
              <ArrowIcon />
            </a>

            <a href={`tel:${CLINIC_PHONE}`} className={styles.secondaryAction}>
              <span className={styles.secondaryIcon}>
                <PhoneIcon />
              </span>
              {t.hero.call}
            </a>
          </div>
        </div>

        <ul className={styles.strip}>
          {CREDENTIAL_ITEMS.map((item) => (
            <li key={item.key} className={styles.credential}>
              <span className={styles.credentialIcon}>{item.icon}</span>
              <span className={styles.credentialText}>
                <span className={styles.credentialLabel}>
                  {t.credentials[item.key].label}
                </span>
                <span className={styles.credentialDetail}>
                  {t.credentials[item.key].detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

/* ---------------- graphics ---------------- */

function PulseRule() {
  return (
    <svg
      className={styles.pulseRule}
      viewBox="0 0 420 24"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 12h150l8-9 7 18 8-14 9 5h12l6-8 6 8h214"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4 2 9l10 5 10-5-10-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5.5c0 4.3-2.9 7.6-7 9.5-4.1-1.9-7-5.2-7-9.5V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeechIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 12a7 7 0 0 1-7 7H8l-4 3v-4.6A7 7 0 0 1 4 12a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 11h6M9 14h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}