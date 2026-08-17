import Image from "next/image";

import styles from "./Cv.module.css";

/* ------------------------------------------------------------------
   DOLDURULACAK: Aşağıdaki metinler yer tutucudur.
   Gerçek özgeçmiş bilgisiyle değiştir.
------------------------------------------------------------------ */

const CONTENT = {
  eyebrow: "Özgeçmiş",
  title: "Eğitim ve Akademik Kariyer",

  paragraphs: [
    "Bu alana hekimin kısa tanıtım metni gelecek: eğitim geçmişi, uzmanlık alanı ve akademik kariyerine dair birkaç cümle.",
    "İkinci paragraf isteğe bağlıdır; klinik yaklaşımını veya hasta ile kurduğu iletişimi anlatan kısa bir bölüm eklenebilir.",
  ],

  cta: "Tüm Özgeçmişi Gör",
  ctaHref: "/ozgecmis",

  image: {
    src: "/cv-portrait.png",
    alt: "Prof. Dr. Burçak Tümerdem Uluğ",
  },
};

export default function Cv() {
  const { eyebrow, title, paragraphs, cta, ctaHref, image } = CONTENT;

  return (
    <section className={styles.section} id="cv">
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h2 className={styles.title}>{title}</h2>

          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className={styles.paragraph}>
              {text}
            </p>
          ))}

          <a href={ctaHref} className={styles.cta}>
            <span>{cta}</span>
            <LongArrow />
          </a>
        </div>
      </div>
    </section>
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