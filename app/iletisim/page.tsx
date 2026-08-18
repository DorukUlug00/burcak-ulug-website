import type { Metadata } from "next";

import { BRAND, CONTACT, MAPS_URL } from "../../lib/site";
import OpenStatus from "./OpenStatus";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "İletişim | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "Danışma, muayene ve ameliyat bilgisi için telefon, WhatsApp, e-posta ve klinik adresi. Kadıköy, İstanbul.",
};

const INTRO =
  "Estetik, Plastik ve Rekonstrüktif Cerrahi alanına giren her konuda danışma, muayene, girişim ve ameliyatlarla ilgili bilgi için aşağıdaki kanallardan ulaşabilirsiniz.";

/* DOLDURULACAK: gerçek yürüme tarifi. Örn. hangi iskeleye/metro çıkışına
   kaç dakika, otopark var mı. Uydurmadım — bilgiyi sen ver. */
const DIRECTIONS = "DOLDURULACAK: Toplu taşıma ve otopark bilgisi.";

/* Adres araması, anahtar gerektirmeyen gömme biçiminde. */
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${CONTACT.address.line} ${CONTACT.address.district}`,
)}&z=16&output=embed`;

/* Google'ın yerel işletme kartı için okuduğu yapısal veri.
   url alanını kendi alan adınla doğrula. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: BRAND.name,
  medicalSpecialty: "PlasticSurgery",
  url: "https://www.burcaktumerdemulug.com/iletisim",
  telephone: CONTACT.phoneRaw,
  email: CONTACT.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.line,
    addressLocality: "Kadıköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [CONTACT.instagramUrl, CONTACT.facebookUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
  ],
};

export default function IletisimPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------------- Başlık ---------------- */}
      <header className={styles.head}>
        <div className={styles.headMain}>
          <p className={styles.eyebrow}>İletişim</p>

          <h1 className={styles.title}>
            Randevu ve
            <span className={styles.titleAccent}>iletişim</span>
          </h1>
        </div>

        <div className={styles.headAside}>
          <p className={styles.intro}>{INTRO}</p>

          <OpenStatus />
        </div>
      </header>

      {/* ---------------- Birincil kanallar ---------------- */}
      <section className={styles.actions} aria-label="Hızlı iletişim">
        <a href={`tel:${CONTACT.phoneRaw}`} className={styles.tile}>
          <span className={styles.tileIcon} aria-hidden="true">
            <PhoneIcon />
          </span>

          <span className={styles.tileLabel}>Telefon</span>

          <span className={styles.tileValue}>{CONTACT.phoneDisplay}</span>

          <span className={styles.tileNote}>Randevu ve bilgi için arayın</span>
        </a>

        <a
          href={CONTACT.whatsappUrl}
          className={styles.tile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.tileIcon} aria-hidden="true">
            <WhatsAppIcon />
          </span>

          <span className={styles.tileLabel}>WhatsApp</span>

          <span className={styles.tileValue}>{CONTACT.phoneDisplay}</span>

          <span className={styles.tileNote}>Yazılı görüşmeyi tercih edenler için</span>
        </a>

        <a href={`mailto:${CONTACT.emails[0]}`} className={styles.tile}>
          <span className={styles.tileIcon} aria-hidden="true">
            <MailIcon />
          </span>

          <span className={styles.tileLabel}>E-posta</span>

          <span className={styles.tileValue}>{CONTACT.emails[0]}</span>

          <span className={styles.tileNote}>Ayrıntılı sorular ve belgeler</span>
        </a>
      </section>

      <div className={styles.grid}>
        {/* ---------------- Harita ve adres ---------------- */}
        <section className={styles.mapPanel} aria-label="Klinik konumu">
          <iframe
            className={styles.map}
            src={MAP_EMBED}
            title="Klinik konumu — Google Haritalar"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className={styles.addressCard}>
            <h2 className={styles.blockTitle}>Adres</h2>

            <address className={styles.address}>
              {CONTACT.address.line}
              <br />
              {CONTACT.address.district}
            </address>

            <p className={styles.directions}>{DIRECTIONS}</p>

            <a
              href={MAPS_URL}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Yol tarifi al</span>
              <LongArrow />
            </a>
          </div>
        </section>

        {/* ---------------- Saatler ve diğer kanallar ---------------- */}
        <aside className={styles.side}>
          <div className={styles.card}>
            <h2 className={styles.blockTitle}>Çalışma saatleri</h2>

            <ul className={styles.hours}>
              {CONTACT.hours.map((slot) => (
                <li key={slot.days} className={styles.hoursRow}>
                  <span>{slot.days}</span>
                  <span className={styles.hoursTime}>{slot.time}</span>
                </li>
              ))}

              <li className={styles.hoursRow}>
                <span>Pazar</span>
                <span className={styles.hoursTime}>Kapalı</span>
              </li>
            </ul>

            <p className={styles.cardNote}>
              Muayene randevu ile yapılır. Ameliyat günlerinde telefonla
              ulaşmakta güçlük yaşarsanız WhatsApp üzerinden mesaj bırakın.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.blockTitle}>Sosyal medya</h2>

            <ul className={styles.linkList}>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  className={styles.linkRow}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                  <span>{CONTACT.instagramHandle}</span>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.facebookUrl}
                  className={styles.linkRow}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                  <span>{CONTACT.facebookHandle}</span>
                </a>
              </li>

              {CONTACT.emails.slice(1).map((mail) => (
                <li key={mail}>
                  <a href={`mailto:${mail}`} className={styles.linkRow}>
                    <MailIcon />
                    <span>{mail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.privacy}>
            İlettiğiniz kişisel veriler yalnızca randevu ve bilgilendirme
            amacıyla işlenir. Ayrıntı için{" "}
            <a href="/kvkk" className={styles.inlineLink}>
              KVKK Aydınlatma Metni
            </a>
            .
          </p>
        </aside>
      </div>
    </main>
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