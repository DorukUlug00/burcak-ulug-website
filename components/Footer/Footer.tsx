import Link from "next/link";

import { BRAND, CONTACT, MAPS_URL, NAV } from "../../lib/site";
import styles from "./Footer.module.css";

/* Yasal metinler burada duruyor — site.ts'e koymadım çünkü
   bu metinlerin bir hukuk danışmanı tarafından gözden geçirilmesi gerekir.
   Değişiklik yapmak istediğinde tek yer burası. */
const LEGAL = {
  noticeTitle: "Yasal uyarı",
  notice: [
    "Bu sitede yer alan içerikler yalnızca genel bilgilendirme amaçlıdır; hekim muayenesi, tanı veya tedavinin yerine geçmez. Cerrahi sonuçlar kişiden kişiye değişir ve hiçbir sonuç taahhüt edilmez. Şikâyetleriniz için lütfen bir hekime başvurun.",
    "1219 sayılı Kanun ve Sağlık Bakanlığı'nın tanıtım mevzuatı uyarınca bu sitede tedavi edici sağlık hizmetlerine yönelik reklam ve yönlendirici içerik bulunmamaktadır.",
  ],
  rights: "Tüm hakları saklıdır.",
  ip: "Sitedeki metin, görsel ve tasarımlar izinsiz kullanılamaz, kopyalanamaz ve çoğaltılamaz.",
};

export default function Footer() {
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
            <Link href="/" className={styles.brandLink}>
              <span className={styles.monogram} aria-hidden="true">
                {BRAND.monogram}
              </span>
              <span>
                <span className={styles.brandName}>{BRAND.name}</span>
                <span className={styles.brandRole}>{BRAND.role}</span>
              </span>
            </Link>

            <p className={styles.brandNote}>
              Muayenehane: {CONTACT.address.district}. Randevu ve sorularınız
              için telefon veya WhatsApp üzerinden ulaşabilirsiniz.
            </p>
          </div>

          {/* ---- site haritası ---- */}
          <nav className={styles.col} aria-label="Site haritası">
            <h2 className={styles.colTitle}>Sayfalar</h2>

            <ul className={styles.list}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- iletişim ---- */}
          <div className={styles.col}>
            <h2 className={styles.colTitle}>İletişim</h2>

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
                  {CONTACT.address.line}, {CONTACT.address.district}
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
            {LEGAL.noticeTitle}
          </h2>

          <div className={styles.noticeBody}>
            {LEGAL.notice.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ---- telif satırı ---- */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {BRAND.name}. {LEGAL.rights}
            <span className={styles.ip}>{LEGAL.ip}</span>
          </p>

          <ul className={styles.bottomLinks}>
            <li>
              <Link href="/kvkk" className={styles.link}>
                KVKK Aydınlatma Metni
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}