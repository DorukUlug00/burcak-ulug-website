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
    slug: "meme-estetigi/meme-kucultme",
    name: "Meme Küçültme / Dikleştirme",
    summary: "Meme küçültme ameliyatı iri ve sarkık memelerin kişinin vücut yapısına uygun şekilde hacminin azaltılarak daha dik ve estetik meme şeklinin oluşturulmasını sağlayan cerrahi girişimlerdir",
    image: "/procedures/meme-kucultme.png",
  },
  {
    slug: "vucut-estetigi/karin-germe",
    name: "Karın Germe",
    summary: "Karın germe ameliyatı karın bölgesindeki cilt, cilt altı dokulardaki sarkıklığın giderilip düz ve gergin bir karın oluşumunu sağlayan cerrahi girişimdir.",
    image: "/procedures/karin-germe.png",
  },
  {
    slug: "meme-estetigi/meme-buyutme",
    name: "Meme Büyütme",
    summary: "Meme büyütme ameliyatı gelişimsel nedenlere, hamileliğe veya kilo kaybına bağlı olarak memelerdeki hacim yetersizliğini düzeltmeye yönelik cerrahi girişimdir.",
    image: "/procedures/meme-buyutme.png",
  },
  {
    slug: "yag-enjeksiyonu",
    name: "Yağ Enjeksiyonu",
    summary: "Hacim kaybı olan bölgeleri kişinin kendi yağı ile doldurur.",
    image: "/procedures/yag-enjeksiyonu.png",
  },
  {
    slug: "vucut-estetigi/liposuction",
    name: "Liposuction",
    summary: "Liposuction / yağ alma ameliyatı vücutta kontür bozukluğuna yol açan bölgesel yağ fazlalıklarının giderilmesini sağlayan cerrahi girişimdir.",
    image: "/procedures/liposuction.png",
  },
  {
    slug: "goz-kapagi-estetigi",
    name: "Göz Kapağı Estetiği",
    summary: "Fazla deri ve torbalanmayı düzelterek bakışları açar.",
    image: "/procedures/goz-kapagi-estetigi.png",
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
            <a href={`/ameliyatlar/${item.slug}`} className={styles.cardLink}>
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