import Image from "next/image";

import styles from "./Cv.module.css";

const CONTENT = {
  quote:
    "Plastik ve Estetik Cerrahide en iyi sonuçlar, kişinin beklentileri ile tıbben mümkün olanın doğru noktada buluşmasıyla elde edilir. Doğallığı koruyan, güvenli ve kişiye özel bir yaklaşım; bilimsel bilgi, cerrahi deneyim, karşılıklı güven ve açık iletişim üzerine kuruludur. Çünkü başarılı bir sonuç, yalnızca görünümü değiştirmek değil; kişinin kendine özgü özelliklerini koruyarak doğal, dengeli ve uyumlu bir görünüm elde etmektir.",

  /* Sözü söyleyen — alıntının altındaki künye. */
  attribution: "Prof. Dr. Z. Burçak Tümerdem Uluğ",

  cta: "Özgeçmiş",
  ctaHref: "/ozgecmis",

  image: {
    src: "/doctor/white-shirt.png",
    alt: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
  },
};

export default function Cv() {
  const { quote, attribution, cta, ctaHref, image } = CONTENT;

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

        <figure className={styles.body}>
          {/* Tırnaklar dekoratif: ekran okuyucu blockquote'u zaten
              alıntı olarak duyurur, iki kez okunmasın. */}
          <span className={styles.markOpen} aria-hidden="true">
            &ldquo;
          </span>

          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>{quote}</p>
          </blockquote>

          <span className={styles.markClose} aria-hidden="true">
            &rdquo;
          </span>

          <figcaption className={styles.attribution}>
            {attribution}
          </figcaption>

          <a href={ctaHref} className={styles.cta}>
            <span>{cta}</span>
            <LongArrow />
          </a>
        </figure>
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