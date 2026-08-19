import Link from "next/link";

import { CONTACT, MAPS_URL } from "../../lib/site";
import styles from "./Contact.module.css";

/* ------------------------------------------------------------------
   Ana sayfanın kapanış bölümü. Media bölümünün hemen altına gelir.

   Telefon, adres ve saatler lib/site.ts'ten okunur — burada elle
   yazılı bir iletişim bilgisi yok, tek yerden güncellenir.
------------------------------------------------------------------ */

const COPY = {
  eyebrow: "İletişim",
  title: "Randevu ve",
  titleAccent: "iletişim",
  intro:
    "Estetik, plastik ve rekonstrüktif cerrahi alanına giren her konuda danışma, muayene ve ameliyat bilgisi için klinikle doğrudan iletişime geçebilirsiniz.",
  whatsappLabel: "WhatsApp'tan yazın",
  ctaLabel: "Tüm iletişim bilgileri",
  ctaHref: "/iletisim",
};

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        {/* ---------------- Sol: çağrı ---------------- */}
        <div className={styles.head}>
          <p className={styles.eyebrow}>{COPY.eyebrow}</p>

          <h2 className={styles.title}>
            {COPY.title}
            <span className={styles.titleAccent}>{COPY.titleAccent}</span>
          </h2>

          <p className={styles.intro}>{COPY.intro}</p>

          <div className={styles.actions}>
            {/* Tek eylem: WhatsApp. Telefon numarası sağdaki künyede
                aranabilir bağlantı olarak duruyor. */}
            <a
              href={CONTACT.whatsappUrl}
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              <span>{COPY.whatsappLabel}</span>
            </a>
          </div>
        </div>

        {/* ---------------- Sağ: künye ---------------- */}
        <dl className={styles.details}>
          <div className={styles.detail}>
            <dt className={styles.label}>Telefon</dt>

            <dd className={styles.value}>
              <a /*href={`tel:${CONTACT.phoneRaw}`}*/ className={styles.link}>
                {CONTACT.phoneDisplay}
              </a>
            </dd>
          </div>

          <div className={styles.detail}>
            <dt className={styles.label}>E-posta</dt>

            <dd className={styles.value}>
              <a href={`mailto:${CONTACT.emails[0]}`} className={styles.link}>
                {CONTACT.emails[0]}
              </a>
            </dd>
          </div>

          <div className={styles.detail}>
            <dt className={styles.label}>Adres</dt>

            <dd className={styles.value}>
              <a
                href={MAPS_URL}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.address.line}
                <br />
                {CONTACT.address.district}
              </a>
            </dd>
          </div>

          <div className={styles.detail}>
            <dt className={styles.label}>Çalışma saatleri</dt>

            <dd className={styles.value}>
              {CONTACT.hours.map((slot) => (
                <span key={slot.days} className={styles.hours}>
                  <span>{slot.days}</span>
                  <span className={styles.hoursTime}>{slot.time}</span>
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <Link href={COPY.ctaHref} className={styles.cta}>
        <span>{COPY.ctaLabel}</span>
        <LongArrow />
      </Link>
    </section>
  );
}

/* ---------------- Grafikler ---------------- */

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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