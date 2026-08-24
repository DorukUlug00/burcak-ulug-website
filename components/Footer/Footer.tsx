import Link from "next/link";

import { BRAND, CONTACT, MAPS_URL, getNav } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./Footer.module.css";

/* Yasal metinler burada duruyor — site.ts'e koymadım çünkü
   bu metinlerin bir hukuk danışmanı tarafından gözden geçirilmesi gerekir.
   Değişiklik yapmak istediğinde tek yer burası.

   İngilizce metin bilgilendirme amaçlıdır; bağlayıcı olan Türkçesidir. */
type LegalStrings = {
  noticeTitle: string;
  notice: string[];
  rights: string;
  ip: string;
};

const LEGAL: Record<Locale, LegalStrings> = {
  tr: {
    noticeTitle: "Yasal uyarı",
    notice: [
      "Bu internet sitesinin tüm hakları saklıdır, siteden alıntı yapılamaz. Bu site T.C. ve uluslararası fikir hakları kanunları ile korunmaktadır. Bu sitede yer alan bilgiler bilgilendirme amaçlıdır; hastalıkların tanı ve tedavisinde kullanılmaz, bu konuda herhangi bir sorumluluk kabul edilmez.",
    ],
    rights: "Tüm hakları saklıdır.",
    ip: "Sitedeki metin, görsel ve tasarımlar izinsiz kullanılamaz, kopyalanamaz ve çoğaltılamaz.",
  },
  en: {
    noticeTitle: "Legal notice",
    notice: [
      "All rights to this website are reserved; no part of it may be reproduced. This site is protected by Turkish and international intellectual property law. The information on this site is for general guidance only; it is not to be used for the diagnosis or treatment of medical conditions, and no liability is accepted in this regard.",
    ],
    rights: "All rights reserved.",
    ip: "The text, images and designs on this site may not be used, copied or reproduced without permission.",
  },
};

/* Footer'ın kendi etiketleri. */
type FooterStrings = {
  sitemapLabel: string;
  pages: string;
  contact: string;
  /* "Muayenehane: Kadıköy — İstanbul. Randevu ve ..." */
  brandNote: (district: string) => string;
  kvkkLink: string;
};

const UI: Record<Locale, FooterStrings> = {
  tr: {
    sitemapLabel: "Site haritası",
    pages: "Sayfalar",
    contact: "İletişim",
    brandNote: (district) =>
      `Muayenehane: ${district}. Randevu ve sorularınız için telefon veya WhatsApp üzerinden ulaşabilirsiniz.`,
    kvkkLink: "KVKK Aydınlatma Metni",
  },
  en: {
    sitemapLabel: "Site map",
    pages: "Pages",
    contact: "Contact",
    brandNote: (district) =>
      `Practice: ${district}. For appointments and enquiries you can reach us by telephone or WhatsApp.`,
    kvkkLink: "Data Protection Notice",
  },
};

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const t = UI[locale];
  const legal = LEGAL[locale];
  const nav = getNav(locale);

  /* Sunucuda render edilir. Sayfa tamamen statik derleniyorsa
     bu yıl derleme anında sabitlenir — sorun olursa sayfaya
     `export const revalidate = 86400;` ekle. */
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          {/* ---- marka ---- */}
          <div className={styles.brandCol}>
            <Link href={`/${locale}`} className={styles.brandLink}>
              <span>
                <span className={styles.brandName}>{BRAND.name}</span>
                <span className={styles.brandRole}>{BRAND.role[locale]}</span>
              </span>
            </Link>

            <p className={styles.brandNote}>
              {t.brandNote(CONTACT.address.district[locale])}
            </p>
          </div>

          {/* ---- site haritası ----
              Yalnızca üst seviye: alt menü ağacı footer'da fazla derin. */}
          <nav className={styles.col} aria-label={t.sitemapLabel}>
            <h2 className={styles.colTitle}>{t.pages}</h2>

            <ul className={styles.list}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={withLocale(item.href, locale)}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- iletişim ---- */}
          <div className={styles.col}>
            <h2 className={styles.colTitle}>{t.contact}</h2>

            <ul className={styles.list}>
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className={styles.link}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>

              {CONTACT.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className={styles.link}>
                    {email}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={MAPS_URL}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT.address.line}, {CONTACT.address.district[locale]}
                </a>
              </li>
            </ul>

            <ul className={styles.social}>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.facebookUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- yasal uyarı ---- */}
        <section className={styles.notice} aria-labelledby="footer-legal">
          <h2 className={styles.noticeTitle} id="footer-legal">
            {legal.noticeTitle}
          </h2>

          <div className={styles.noticeBody}>
            {legal.notice.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ---- telif satırı ---- */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {BRAND.name}. {legal.rights}
            <span className={styles.ip}>{legal.ip}</span>
          </p>

          <ul className={styles.bottomLinks}>
            <li>
              <Link
                href={withLocale("/kvkk", locale)}
                className={styles.link}
              >
                {t.kvkkLink}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}