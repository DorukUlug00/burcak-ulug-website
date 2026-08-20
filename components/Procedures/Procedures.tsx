import Image from "next/image";

import styles from "./Procedures.module.css";

/* Geçici görsel. Her işleme ait fotoğraf hazır oldukça
   aşağıdaki listede `image` alanını tek tek değiştirmen yeterli. */
const DEFAULT_IMAGE = "/procedures/default.jpg";

export type Procedure = {
  slug: string;
  name: string;
  summary?: string;
  image?: string;
};

export const PROCEDURES: Procedure[] = [
  {
    slug: "meme-kucultme-diklestirme",
    name: "Meme Küçültme / Dikleştirme",
    summary: "Sırt, boyun ve omuz yükünü hafifletir.",
    image: "/procedures/meme-kucultme.jpg",
  },
  {
    slug: "karin-germe",
    name: "Karın Germe",
    summary: "Sarkan cildi ve gevşeyen karın kaslarını onarır.",
    image: DEFAULT_IMAGE,
  },
  {
    slug: "meme-buyutme",
    name: "Meme Büyütme",
    summary: "İmplant ya da kendi yağ dokusu ile hacim kazandırır.",
    image: DEFAULT_IMAGE,
  },
  {
    slug: "liposuction",
    name: "Liposuction",
    summary: "Bölgesel yağ fazlasını alarak vücut hatlarını belirginleştirir.",
    image: DEFAULT_IMAGE,
  },
  {
    slug: "yag-enjeksiyonu",
    name: "Yağ Enjeksiyonu",
    summary: "Hacim kaybı olan bölgeleri kişinin kendi yağı ile doldurur.",
    image: DEFAULT_IMAGE,
  },
  {
    slug: "goz-kapagi",
    name: "Göz Kapağı",
    summary: "Fazla deri ve torbalanmayı düzelterek bakışları açar.",
    image: DEFAULT_IMAGE,
  },
];

const COPY = {
  eyebrow: "",
  title: "Cerrahi İşlemler",
  intro:
    "Her ameliyat, hastanın anatomik özellikleri, ihtiyaçları ve beklentileri doğrultusunda kişiye özel olarak planlanır.",
  readMore: "Detaylı Bilgi",
};

type ProceduresProps = {
  items?: Procedure[];
};

export default function Procedures({ items = PROCEDURES }: ProceduresProps) {
  return (
    <section className={styles.section} id="procedures">
      <div className={styles.head}>
        <p className={styles.eyebrow}>{COPY.eyebrow}</p>

        <h2 className={styles.title}>{COPY.title}</h2>

        <p className={styles.intro}>{COPY.intro}</p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.slug} className={styles.card}>
            <a href={`/islemler/${item.slug}`} className={styles.cardLink}>
              <Image
                src={item.image ?? DEFAULT_IMAGE}
                alt=""
                fill
                sizes="(min-width: 900px) 44vw, 46vw"
                className={styles.image}
              />

              <div className={styles.scrim} aria-hidden="true" />

              <div className={styles.body}>
                <h3 className={styles.name}>{item.name}</h3>

                {item.summary ? (
                  <p className={styles.summary}>{item.summary}</p>
                ) : null}

                <span className={styles.more} aria-hidden="true">
                  {COPY.readMore}
                  <LongArrow />
                </span>
              </div>
            </a>
          </article>
        ))}
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