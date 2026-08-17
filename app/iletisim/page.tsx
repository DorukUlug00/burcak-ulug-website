import type { Metadata } from "next";

import { CONTACT, MAPS_URL } from "../../lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "İletişim | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "Danışma, muayene ve ameliyat bilgisi için telefon, WhatsApp, e-posta ve klinik adresi. Kadıköy, İstanbul.",
};

const INTRO =
  "Estetik, Plastik ve Rekonstrüktif Cerrahi alanına giren her konuda danışma, muayene, girişim ve ameliyatlarla ilgili bilgi için:";

export default function IletisimPage() {
  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>İletişim</p>

        <h1 className={styles.title}>Randevu ve İletişim</h1>

        <p className={styles.intro}>{INTRO}</p>
      </header>

      <div className={styles.grid}>
        {/* ---------------- Sol: iletişim kanalları ---------------- */}
        <section className={styles.channels} aria-label="İletişim bilgileri">
          <Row label="Tel" icon={<PhoneIcon />}>
            <a href={`tel:${CONTACT.phoneRaw}`} className={styles.value}>
              {CONTACT.phoneDisplay}
            </a>
          </Row>

          <Row label="WhatsApp" icon={<WhatsAppIcon />}>
            <a
              href={CONTACT.whatsappUrl}
              className={styles.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.phoneDisplay}
            </a>
          </Row>

          <Row label="Instagram" icon={<InstagramIcon />}>
            <a
              href={CONTACT.instagramUrl}
              className={styles.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.instagramHandle}
            </a>
          </Row>

          <Row label="Facebook" icon={<FacebookIcon />}>
            <a
              href={CONTACT.facebookUrl}
              className={styles.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.facebookHandle}
            </a>
          </Row>

          <Row label="E-posta" icon={<MailIcon />}>
            {CONTACT.emails.map((mail) => (
              <a key={mail} href={`mailto:${mail}`} className={styles.value}>
                {mail}
              </a>
            ))}
          </Row>
        </section>

        {/* ---------------- Sağ: adres ve saatler ---------------- */}
        <aside className={styles.card}>
          <div className={styles.cardBlock}>
            <h2 className={styles.cardTitle}>Adres</h2>

            <address className={styles.address}>
              {CONTACT.address.line}
              <br />
              {CONTACT.address.district}
            </address>

            <a
              href={MAPS_URL}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Haritada Aç</span>
              <LongArrow />
            </a>
          </div>

          <div className={styles.cardBlock}>
            <h2 className={styles.cardTitle}>Çalışma Saatleri</h2>

            <ul className={styles.hours}>
              {CONTACT.hours.map((slot) => (
                <li key={slot.days} className={styles.hoursRow}>
                  <span>{slot.days}</span>
                  <span className={styles.hoursTime}>{slot.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href={`tel:${CONTACT.phoneRaw}`} className={styles.cta}>
            <PhoneIcon />
            <span>Kliniği Ara</span>
          </a>
        </aside>
      </div>
    </main>
  );
}

/* ---------------- Satır ---------------- */

function Row({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.row}>
      <span className={styles.rowIcon} aria-hidden="true">
        {icon}
      </span>

      <div className={styles.rowBody}>
        <p className={styles.label}>{label}</p>

        <div className={styles.values}>{children}</div>
      </div>
    </div>
  );
}

/* ---------------- Grafikler ---------------- */

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.6V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H8.5V13h2.8v8h3.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m3.5 7 8.5 6 8.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LongArrow() {
  return (
    <svg
      className={styles.arrow}
      width="34"
      height="8"
      viewBox="0 0 34 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 4h32m-5-3.5L32 4l-5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}