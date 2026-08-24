import Image from "next/image";
import Link from "next/link";

import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./Cv.module.css";

type Copy = {
  quote: string;
  /* Sözü söyleyen — alıntının altındaki künye. */
  attribution: string;
  cta: string;
  imageAlt: string;
};

const CONTENT: Record<Locale, Copy> = {
  tr: {
    quote:
      "Plastik ve Estetik Cerrahide en iyi sonuçlar, kişinin beklentileri ile tıbben mümkün olanın doğru noktada buluşmasıyla elde edilir. Doğallığı koruyan, güvenli ve kişiye özel bir yaklaşım; bilimsel bilgi, cerrahi deneyim, karşılıklı güven ve açık iletişim üzerine kuruludur. Çünkü başarılı bir sonuç, yalnızca görünümü değiştirmek değil; kişinin kendine özgü özelliklerini koruyarak doğal, dengeli ve uyumlu bir görünüm elde etmektir.",
    attribution: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
    cta: "Özgeçmiş",
    imageAlt: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
  },
  en: {
    quote:
      "In plastic and aesthetic surgery, the best results come when a person's expectations meet what is medically possible at exactly the right point. An approach that preserves what is natural — safe and tailored to the individual — rests on scientific knowledge, surgical experience, mutual trust and open communication. Because a successful result is not simply changing how someone looks; it is achieving a natural, balanced and harmonious appearance while preserving what is distinctive about that person.",
    attribution: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
    cta: "Curriculum Vitae",
    imageAlt: "Prof. Dr. Z. Burçak Tümerdem Uluğ",
  },
};

const IMAGE_SRC = "/doctor/white-shirt.png";
const CTA_HREF = "/ozgecmis";

type Props = {
  locale: Locale;
};

export default function Cv({ locale }: Props) {
  const { quote, attribution, cta, imageAlt } = CONTENT[locale];

  return (
    <section className={styles.section} id="cv">
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src={IMAGE_SRC}
            alt={imageAlt}
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

          <figcaption className={styles.attribution}>{attribution}</figcaption>

          {/* Sayfa içi geçiş: <a> değil <Link>. */}
          <Link href={withLocale(CTA_HREF, locale)} className={styles.cta}>
            <span>{cta}</span>
            <LongArrow />
          </Link>
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