import type { Metadata } from "next";
import Link from "next/link";

import { groupedProcedures } from "../../lib/ameliyatlar";
import styles from "./ameliyatlar.module.css";

export const metadata: Metadata = {
  title: "Ameliyatlar | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "Yüz, burun, kulak, meme ve vücut estetiği ameliyatları ile ameliyatsız yöntemler hakkında bilgilendirme.",
};

export default function AmeliyatlarPage() {
  const groups = groupedProcedures();

  return (
    <main className={styles.page}>
      <header className={styles.indexHead}>
        <p className={styles.eyebrow}>Ameliyatlar</p>

        <h1 className={styles.indexTitle}>
          Uygulanan
          <span className={styles.titleAccent}>işlemler</span>
        </h1>

        <p className={styles.indexIntro}>
          Aşağıdaki başlıklar genel bilgilendirme içindir. Hangi yöntemin size
          uygun olduğu, muayene sonrasında birlikte kararlaştırılır.
        </p>
      </header>

      {groups.map(({ category, items }) => (
        <section key={category.slug} id={category.slug} className={styles.group}>
          {/* Sol sütun masaüstünde sabit kalır, sağdaki liste akar. */}
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>{category.title}</h2>

            {category.blurb ? (
              <p className={styles.groupBlurb}>{category.blurb}</p>
            ) : null}

            <Link
              href={`/ameliyatlar/${category.slug}`}
              className={styles.generalLink}
            >
              <span>Genel bilgi</span>
              <Arrow />
            </Link>
          </div>

          <ul className={styles.list}>
            {items.length > 0 ? (
              items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/ameliyatlar/${category.slug}/${item.slug}`}
                    className={styles.row}
                  >
                    <span className={styles.rowText}>
                      <span className={styles.rowTitle}>{item.title}</span>

                      {item.lead ? (
                        <span className={styles.rowLead}>{item.lead}</span>
                      ) : null}
                    </span>

                    <span className={styles.rowArrow} aria-hidden="true">
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              /* Alt sayfası olmayan kategoriler — içerik kategori
                 sayfasının kendisinde. */
              <li>
                <Link
                  href={`/ameliyatlar/${category.slug}`}
                  className={styles.row}
                >
                  <span className={styles.rowText}>
                    <span className={styles.rowTitle}>{category.title}</span>

                    {category.lead ? (
                      <span className={styles.rowLead}>{category.lead}</span>
                    ) : null}
                  </span>

                  <span className={styles.rowArrow} aria-hidden="true">
                    <Arrow />
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </section>
      ))}
    </main>
  );
}

function Arrow() {
  return (
    <svg width="30" height="8" viewBox="0 0 34 8" fill="none" aria-hidden="true">
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