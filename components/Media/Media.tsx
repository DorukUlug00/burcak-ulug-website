import Image from "next/image";

import styles from "./Media.module.css";

/* ------------------------------------------------------------------
   `video` alanına YouTube bağlantısını olduğu gibi yapıştırabilirsin.
   Aşağıdaki biçimlerin hepsi çalışır:

     https://www.youtube.com/watch?v=AbCdEf12345
     https://youtu.be/AbCdEf12345
     https://www.youtube.com/embed/AbCdEf12345
     https://www.youtube.com/shorts/AbCdEf12345
     AbCdEf12345

   Kapak görseli otomatik olarak YouTube'dan çekilir. Kendi kapak
   görselini kullanmak istersen `thumbnail` alanını doldur.
------------------------------------------------------------------ */

export type MediaItem = {
  video: string;
  title: string;
  source?: string;
  date?: string;
  thumbnail?: string;
};

export const MEDIA_ITEMS: MediaItem[] = [
  {
    video: "jNWNQ2pAB3Q",
    title: "Meme Küçültme Ameliyatı - Bölüm 1 / Doç. Dr. Burçak Tümerden ULUĞ",
    source: "Kanal D DOKTORUM Programı",
    date: "2012",
  },
  {
    video: "iPM1NgZRO0c",
    title: "Meme Küçültme Ameliyatı - Bölüm 2 / Doç. Dr. Burçak Tümerden ULUĞ",
    source: "Kanal D DOKTORUM Programı",
    date: "2012",
  },
  {
    video: "HSJdaeaxnhQ",
    title: "Meme Küçültme Ameliyatı - Bölüm 3 / Doç. Dr. Burçak Tümerden ULUĞ",
    source: "Kanal D DOKTORUM Programı",
    date: "2012",
  },
];

const FALLBACK_THUMBNAIL = "/media/default.jpg";

/* Tam bağlantıdan da, çıplak kimlikten de video kimliğini çıkarır. */
function parseYoutubeId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;

  /* Zaten çıplak kimlik ise (11 karakter) doğrudan kullan. */
  if (/^[\w-]{11}$/.test(value)) return value;

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.slice(1);
      return /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host.endsWith("youtube.com")) {
      const fromQuery = url.searchParams.get("v");
      if (fromQuery && /^[\w-]{11}$/.test(fromQuery)) return fromQuery;

      /* /embed/ID, /shorts/ID, /live/ID */
      const fromPath = url.pathname.split("/").filter(Boolean).pop() ?? "";
      return /^[\w-]{11}$/.test(fromPath) ? fromPath : null;
    }
  } catch {
    return null;
  }

  return null;
}

const COPY = {
  eyebrow: "Medya",
  title: "Video ve Basın",
  intro:
    "Televizyon programları, söyleşiler ve hasta bilgilendirme videolarından bir seçki.",
  cta: "Tüm Medya İçerikleri",
  ctaHref: "/medya",
  watchLabel: "YouTube'da izle",
};

type MediaProps = {
  items?: MediaItem[];
};

export default function Media({ items = MEDIA_ITEMS }: MediaProps) {
  return (
    <section className={styles.section} id="media">
      <div className={styles.head}>
        <div className={styles.headText}>
          <p className={styles.eyebrow}>{COPY.eyebrow}</p>

          <h2 className={styles.title}>{COPY.title}</h2>

          <p className={styles.intro}>{COPY.intro}</p>
        </div>

        <a href={COPY.ctaHref} className={styles.cta}>
          <span>{COPY.cta}</span>
          <LongArrow />
        </a>
      </div>

      <ul className={styles.grid}>
        {items.map((item, index) => {
          const id = parseYoutubeId(item.video);

          const thumbnail =
            item.thumbnail ??
            (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : FALLBACK_THUMBNAIL);

          const meta = [item.source, item.date].filter(Boolean).join(" · ");

          const card = (
            <>
              <div className={styles.media}>
                <Image
                  src={thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 31vw, 100vw"
                  className={styles.image}
                />

                <span className={styles.play} aria-hidden="true">
                  <PlayIcon />
                </span>
              </div>

              <div className={styles.body}>
                {meta ? <p className={styles.meta}>{meta}</p> : null}

                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </>
          );

          return (
            <li key={id ?? `video-${index}`}>
              {id ? (
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} — ${COPY.watchLabel}`}
                >
                  {card}
                </a>
              ) : (
                /* Kimlik çözülemediyse tıklanamayan kart olarak göster. */
                <div className={`${styles.card} ${styles.cardEmpty}`}>
                  {card}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <a href={COPY.ctaHref} className={styles.ctaMobile}>
        <span>{COPY.cta}</span>
        <LongArrow />
      </a>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
      <path d="M17 10 0 20V0l17 10Z" fill="currentColor" />
    </svg>
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