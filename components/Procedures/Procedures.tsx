import Image from "next/image";
import Link from "next/link";

import { getProcedure } from "@/lib/ameliyatlar";
import { withLocale, type Locale } from "@/lib/i18n";
import styles from "./Procedures.module.css";

/* ------------------------------------------------------------------
   Ana sayfadaki öne çıkan işlemler şeridi.

   Başlık ve özet metni BURADA YAZILMAZ: lib/ameliyatlar içeriğinden
   okunur, böylece bir metni düzelttiğinde iki yerde değişmez.
   Burada yalnızca hangi işlemin gösterileceği ve kart görseli var.
------------------------------------------------------------------ */

/* Geçici görsel. Her işleme ait fotoğraf hazır oldukça
   aşağıdaki listede `image` alanını tek tek değiştirmen yeterli. */
const DEFAULT_IMAGE = "/procedures/default.jpg";

type FeaturedItem = {
  /* lib/ameliyatlar içindeki kategori ve işlem slug'ları. */
  category: string;
  slug: string;
  image?: string;
  /* İçerikteki lead çok uzunsa kartta gösterilecek kısa metin.
     Boş bırakılırsa lead'in kendisi kullanılır. */
  summary?: { tr: string; en: string };
};

const FEATURED: FeaturedItem[] = [
  {
    category: "meme-estetigi",
    slug: "meme-kucultme",
    image: "/procedures/meme-kucultme.png",
    summary: {
      tr: "Meme küçültme ameliyatı iri ve sarkık memelerin kişinin vücut yapısına uygun şekilde hacminin azaltılarak daha dik ve estetik meme şeklinin oluşturulmasını sağlayan cerrahi girişimlerdir.",
      en: "Breast reduction covers the surgical procedures that reduce the volume of large, sagging breasts in proportion to the person's body structure, creating a more elevated and aesthetic breast shape.",
    },
  },
  {
    category: "vucut-estetigi",
    slug: "karin-germe",
    image: "/procedures/karin-germe.png",
    summary: {
      tr: "Karın germe ameliyatı karın bölgesindeki cilt, cilt altı dokulardaki sarkıklığın giderilip düz ve gergin bir karın oluşumunu sağlayan cerrahi girişimdir.",
      en: "A tummy tuck is a surgical procedure that removes laxity in the skin and subcutaneous tissue of the abdominal region, creating a flat and firm abdomen.",
    },
  },
  {
    category: "meme-estetigi",
    slug: "meme-buyutme",
    image: "/procedures/meme-buyutme.png",
    summary: {
      tr: "Meme büyütme ameliyatı gelişimsel nedenlere, hamileliğe veya kilo kaybına bağlı olarak memelerdeki hacim yetersizliğini düzeltmeye yönelik cerrahi girişimdir.",
      en: "Breast augmentation is a surgical procedure to correct insufficient breast volume arising from developmental causes, pregnancy or weight loss.",
    },
  },
  {
    category: "yuz-estetigi",
    slug: "yag-enjeksiyonu",
    image: "/procedures/yag-enjeksiyonu.png",
    summary: {
      tr: "Yağ enjeksiyonu, kişinin kendi vücudundan alınan yağ dokusunun özel işlemlerden geçirilerek yüz veya vücudun ihtiyaç duyulan bölgelerine aktarılması işlemidir.",
      en: "Fat injection is the transfer of fatty tissue taken from the person's own body, after special processing, to areas of the face or body where it is needed.",
    },
  },
  {
    category: "vucut-estetigi",
    slug: "liposuction",
    image: "/procedures/liposuction.png",
    summary: {
      tr: "Liposuction / yağ alma ameliyatı vücutta kontür bozukluğuna yol açan bölgesel yağ fazlalıklarının giderilmesini sağlayan cerrahi girişimdir.",
      en: "Liposuction is a surgical procedure that removes localised excess fat causing contour irregularities in the body.",
    },
  },
  {
    category: "yuz-estetigi",
    slug: "goz-kapagi-estetigi",
    image: "/procedures/goz-kapagi-estetigi.png",
    summary: {
      tr: "Göz kapağı estetiği (blefaroplasti), üst ve/veya alt göz kapaklarında zamanla oluşan deri fazlalığı, gevşeme ve yağ dokusu belirginliğinin düzeltilmesini amaçlayan cerrahi bir işlemdir.",
      en: "Eyelid surgery (blepharoplasty) aims to correct the excess skin, laxity and prominence of fatty tissue that develop over time in the upper and/or lower eyelids.",
    },
  },
];

type Copy = {
  eyebrow: string;
  title: string;
  intro: string;
  readMore: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    eyebrow: "",
    title: "Cerrahi İşlemler",
    intro:
      "Her ameliyat, hastanın anatomik özellikleri, ihtiyaçları ve beklentileri doğrultusunda kişiye özel olarak planlanır.",
    readMore: "Detaylı Bilgi",
  },
  en: {
    eyebrow: "",
    title: "Surgical Procedures",
    intro:
      "Every operation is planned individually, in line with the patient's anatomy, needs and expectations.",
    readMore: "Read more",
  },
};

type ProceduresProps = {
  locale: Locale;
  items?: FeaturedItem[];
};

export default function Procedures({
  locale,
  items = FEATURED,
}: ProceduresProps) {
  const t = COPY[locale];

  /* Başlıklar içerikten geliyor; bulunamayan kayıt atlanır. */
  const cards = items
    .map((item) => {
      const content = getProcedure(locale, item.category, item.slug);
      if (!content) return null;

      return {
        key: `${item.category}/${item.slug}`,
        href: `/ameliyatlar/${item.category}/${item.slug}`,
        name: content.title,
        summary: item.summary?.[locale] ?? content.lead,
        image: item.image ?? DEFAULT_IMAGE,
      };
    })
    .filter((card): card is NonNullable<typeof card> => card !== null);

  return (
    <section className={styles.section} id="procedures">
      <div className={styles.head}>
        {/* eyebrow boş bırakılabilir; boşsa hiç basılmaz. */}
        {t.eyebrow ? <p className={styles.eyebrow}>{t.eyebrow}</p> : null}

        <h2 className={styles.title}>{t.title}</h2>

        <p className={styles.intro}>{t.intro}</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.key} className={styles.card}>
            {/* Sayfa içi geçiş: <a> değil <Link>. */}
            <Link
              href={withLocale(card.href, locale)}
              className={styles.cardLink}
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 900px) 44vw, 46vw"
                className={styles.image}
              />

              <div className={styles.scrim} aria-hidden="true" />

              <div className={styles.body}>
                <h3 className={styles.name}>{card.name}</h3>

                {card.summary ? (
                  <p className={styles.summary}>{card.summary}</p>
                ) : null}

                <span className={styles.more} aria-hidden="true">
                  {t.readMore}
                  <LongArrow />
                </span>
              </div>
            </Link>
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