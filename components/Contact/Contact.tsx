import Link from "next/link";

import { CONTACT, MAPS_URL } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./Contact.module.css";

/* ------------------------------------------------------------------
   Ana sayfanın kapanış bölümü. Media bölümünün hemen altına gelir.

   Telefon, adres ve saatler lib/site.ts'ten okunur — burada elle
   yazılı bir iletişim bilgisi yok, tek yerden güncellenir.
------------------------------------------------------------------ */

type Copy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  whatsappLabel: string;
  ctaLabel: string;
  labelPhone: string;
  labelEmail: string;
  labelAddress: string;
  labelHours: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    eyebrow: "İletişim",
    title: "Randevu ve",
    titleAccent: "iletişim",
    intro:
      "Estetik, plastik ve rekonstrüktif cerrahi alanına giren her konuda danışma, muayene ve ameliyat bilgisi için klinikle doğrudan iletişime geçebilirsiniz.",
    whatsappLabel: "WhatsApp'tan yazın",
    ctaLabel: "Tüm iletişim bilgileri",
    labelPhone: "Telefon",
    labelEmail: "E-posta",
    labelAddress: "Adres",
    labelHours: "Çalışma saatleri",
  },
  en: {
    eyebrow: "Contact",
    title: "Appointments and",
    titleAccent: "enquiries",
    intro:
      "You can contact the clinic directly for consultations, examinations and information on surgery in any area of aesthetic, plastic and reconstructive surgery.",
    whatsappLabel: "Message on WhatsApp",
    ctaLabel: "All contact details",
    labelPhone: "Telephone",
    labelEmail: "Email",
    labelAddress: "Address",
    labelHours: "Opening hours",
  },
};

const CTA_HREF = "/iletisim";

type Props = {
  locale: Locale;
};

export default function Contact({ locale }: Props) {
  const t = COPY[locale];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        {/* ---------------- Sol: çağrı ---------------- */}
        <div className={styles.head}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>

          <h2 className={styles.title}>
            {t.title}
            <span className={styles.titleAccent}>{t.titleAccent}</span>
          </h2>

          <p className={styles.intro}>{t.intro}</p>

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
              <span>{t.whatsappLabel}</span>
            </a>
          </div>
        </div>

        {/* ---------------- Sağ: künye ---------------- */}
        <dl className={styles.details}>
          <div className={styles.detail}>
            <dt className={styles.label}>{t.labelPhone}</dt>

            <dd className={styles.value}>
              <a /*href={`tel:${CONTACT.phoneRaw}`}*/ className={styles.link}>
                {CONTACT.phoneDisplay}
              </a>
            </dd>
          </div>

          <div className={styles.detail}>
            <dt className={styles.label}>{t.labelEmail}</dt>

            <dd className={styles.value}>
              <a href={`mailto:${CONTACT.emails[0]}`} className={styles.link}>
                {CONTACT.emails[0]}
              </a>
            </dd>
          </div>

          <div className={styles.detail}>
            <dt className={styles.label}>{t.labelAddress}</dt>

            <dd className={styles.value}>
              <a
                href={MAPS_URL}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.address.line}
                <br />
                {CONTACT.address.district[locale]}
              </a>
            </dd>
          </div>

          <div className={styles.detail}>
            <dt className={styles.label}>{t.labelHours}</dt>

            <dd className={styles.value}>
              {CONTACT.hours.map((slot) => (
                /* Anahtar dilden bağımsız olsun diye saat kullanılıyor;
                   slot.days artık bir nesne, anahtar olamaz. */
                <span key={slot.time} className={styles.hours}>
                  <span>{slot.days[locale]}</span>
                  <span className={styles.hoursTime}>{slot.time}</span>
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <Link href={withLocale(CTA_HREF, locale)} className={styles.cta}>
        <span>{t.ctaLabel}</span>
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