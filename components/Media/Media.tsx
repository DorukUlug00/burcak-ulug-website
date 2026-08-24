import Image from "next/image";
import Link from "next/link";

import { withLocale, type Locale } from "@/lib/i18n";
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

   BAŞLIKLAR iki dillidir: { tr, en }. Kanal adı (`source`) özel
   isim olduğu için tek metindir.
------------------------------------------------------------------ */

type Localized = { tr: string; en: string };

export type MediaItem = {
  video: string;
  title: Localized;
  source?: string;
  date?: string;
  thumbnail?: string;
};

export const MEDIA_ITEMS: MediaItem[] = [
  {
    video: "jNWNQ2pAB3Q",
    title: {
      tr: "Meme Küçültme Ameliyatı — Bölüm 1",
      en: "Breast Reduction Surgery — Part 1",
    },
    source: "Kanal D DOKTORUM Programı",
    date: "2012",
  },
  {
    video: "iPM1NgZRO0c",
    title: {
      tr: "Meme Küçültme Ameliyatı — Bölüm 2",
      en: "Breast Reduction Surgery — Part 2",
    },
    source: "Kanal D DOKTORUM Programı",
    date: "2012",
  },
  {
    video: "HSJdaeaxnhQ",
    title: {
      tr: "Meme Küçültme Ameliyatı — Bölüm 3",
      en: "Breast Reduction Surgery — Part 3",
    },
    source: "Kanal D DOKTORUM Programı",
    date: "2012",
  },
];

const FALLBACK_THUMBNAIL = "/media/default.jpg";

const YOUTUBE_ID = /^[\w-]{11}$/;

/* Tam bağlantıdan da, çıplak kimlikten de video kimliğini çıkarır. */
function parseYoutubeId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;

  /* Zaten çıplak kimlik ise (11 karakter) doğrudan kullan. */
  if (YOUTUBE_ID.test(value)) return value;

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.slice(1);
      return YOUTUBE_ID.test(id) ? id : null;
    }

    if (host.endsWith("youtube.com")) {
      const fromQuery = url.searchParams.get("v");
      if (fromQuery && YOUTUBE_ID.test(fromQuery)) return fromQuery;

      /* /embed/ID, /shorts/ID, /live/ID */
      const fromPath = url.pathname.split("/").filter(Boolean).pop() ?? "";
      return YOUTUBE_ID.test(fromPath) ? fromPath : null;
    }
  } catch {
    return null;
  }

  return null;
}

type Copy = {
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  watchLabel: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    eyebrow: "Medya",
    title: "Video ve Basın",
    intro:
      "Televizyon programları, söyleşiler ve hasta bilgilendirme videolarından bir seçki.",
    cta: "Tüm Medya İçerikleri",
    watchLabel: "YouTube'da izle",
  },
  en: {
    eyebrow: "Media",
    title: "Video and Press",
    intro:
      "A selection of television programmes, interviews and patient information videos.",
    cta: "All media content",
    watchLabel: "watch on YouTube",
  },
};

const CTA_HREF = "/medya";

type MediaProps = {
  locale: Locale;
  items?: MediaItem[];
};

export default function Media({ locale, items = MEDIA_ITEMS }: MediaProps) {
  const t = COPY[locale];
  const ctaHref = withLocale(CTA_HREF, locale);

  return (
    <section className={styles.section} id="media">
      <div className={styles.head}>
        <div className={styles.headText}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>

          <h2 className={styles.title}>{t.title}</h2>

          <p className={styles.intro}>{t.intro}</p>
        </div>

        {/* Sayfa içi geçiş: <a> değil <Link>, tam yeniden yükleme yapmaz. */}
        <Link href={ctaHref} className={styles.cta}>
          <span>{t.cta}</span>
          <LongArrow />
        </Link>
      </div>

      <ul className={styles.grid}>
        {items.map((item, index) => {
          const id = parseYoutubeId(item.video);
          const title = item.title[locale];

          const thumbnail =
            item.thumbnail ??
            (id
              ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
              : FALLBACK_THUMBNAIL);

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

                <h3 className={styles.cardTitle}>{title}</h3>
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
                  aria-label={`${title} — ${t.watchLabel}`}
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

      <Link href={ctaHref} className={styles.ctaMobile}>
        <span>{t.cta}</span>
        <LongArrow />
      </Link>
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