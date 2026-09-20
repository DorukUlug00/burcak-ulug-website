import Image from "next/image";

import { type Locale } from "@/lib/i18n";
import styles from "./Certificate.module.css";

type Copy = {
  eyebrow: string;
  heading: string;
  paragraph: string;
  /* Belgenin kapsadığı başlıklar — kısa tutulur, cümle değil. */
  items: string[];
  imageAlt: string;
};

const CONTENT: Record<Locale, Copy> = {
  tr: {
    eyebrow: "Uluslararası Sağlık Turizmi",
    heading: "Sağlık Bakanlığı Yetki Belgesi",
    paragraph:
      "T.C. Sağlık Bakanlığı tarafından düzenlenen bu belge, yurt dışından gelen hastalara hizmet verebilmek için aranan resmî izindir. Hekimin yetkinliği, muayenehane koşulları ve hasta takip süreçleri denetlendikten sonra verilir.",
    items: [
      "Bakanlık denetiminden geçmiş muayenehane",
      "Yabancı dilde hasta bilgilendirme ve takip",
      "Tedavi öncesi ve sonrası kayıtların izlenebilirliği",
    ],
    imageAlt:
      "T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi",
  },
  en: {
    eyebrow: "International Health Tourism",
    heading: "Ministry of Health Authorisation",
    paragraph:
      "Issued by the Turkish Ministry of Health, this certificate is the official permit required to treat patients travelling from abroad. It is granted after an inspection of the surgeon's credentials, the practice itself and patient follow-up procedures.",
    items: [
      "Practice inspected by the Ministry",
      "Patient information and follow-up in your language",
      "Traceable records before and after treatment",
    ],
    imageAlt:
      "International Health Tourism Authorisation Certificate, Turkish Ministry of Health",
  },
};

const IMAGE_SRC = "/general/health-turkiye-sertifika.jpg";

type Props = {
  locale: Locale;
};

export default function Certificate({ locale }: Props) {
  const { eyebrow, heading, paragraph, items, imageAlt } = CONTENT[locale];

  return (
    <section className={styles.section} id="belge">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h2 className={styles.heading}>{heading}</h2>
        </header>

        {/* Belge sağda ve iki satır boyunca uzanır. */}
        <figure className={styles.media}>
          <Image
            src={IMAGE_SRC}
            alt={imageAlt}
            fill
            sizes="(min-width: 900px) 46vw, min(100vw, 24rem)"
            className={styles.image}
          />
        </figure>

        <div className={styles.body}>
          <p className={styles.paragraph}>{paragraph}</p>

          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.slice(0, 28)} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}