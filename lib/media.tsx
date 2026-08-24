"use client";

/* MEDYA — İÇERİK VE GALERİ
   ---------------------------------------------------------------
   Bu dosya iki bölümden oluşuyor:

     1. İÇERİK  — video ve fotoğraf listesi. Düzenlemen gereken yer
                  burası; dosyanın en üstünde duruyor.
     2. GALERİ  — sayfayı çizen bileşen. İçerik eklemek için buraya
                  dokunmana gerek yok.

   İKİ DİL: Yapısal alanlar (id, youtubeId, src, date, outlet) tek
   kayıtta ortak durur; yalnızca metin alanları { tr, en } nesnesidir.
   Böylece bir videonun kimliği veya tarihi diller arasında ayrışamaz.

   Dosya "use client" ile başlıyor çünkü galeri süzgeç, oynatma ve
   büyütme için tarayıcıda çalışmak zorunda. Bu yüzden sayfanın
   `metadata` çıktısı app/[locale]/medya/page.tsx içinde kalıyor ve
   `locale` bileşene prop olarak iniyor. */

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { Locale } from "@/lib/i18n";
import styles from "../app/[locale]/medya/page.module.css";

/* ===============================================================
   1. İÇERİK — video ve fotoğraflar
   =============================================================== */

/* Dile göre değişen metin alanı. */
type Localized = { tr: string; en: string };

type MediaBase = {
  /* Benzersiz olmalı — React anahtarı olarak kullanılıyor. */
  id: string;
  title?: Localized;
  /* Kanal, program ya da dergi adı. Özel isim olduğu için
     çevrilmez, tek metindir. */
  outlet?: string;
  /* ISO biçim. Yalnızca sıralama için kullanılır; ay belli değilse
     ayın ilk gününü yaz. */
  date?: string;
  /* Ekranda görünecek tarih. Boş bırakılırsa `date` biçimlenir.
     Dergi sayıları gibi "Mayıs – Haziran 2014" durumları için var. */
  dateLabel?: Localized;
  summary?: Localized;
  /* Kendi ızgarasında iki sütun kaplar — öne çıkarmak için. */
  size?: "wide";
};

export type VideoItem = MediaBase & {
  type: "video";
  /* youtube.com/watch?v=XXXXXXXXXXX adresindeki XXXXXXXXXXX kısmı. */
  youtubeId: string;
  /* İsteğe bağlı: YouTube'un kapak görseli yerine kendi görselin. */
  poster?: string;
};

export type PhotoItem = MediaBase & {
  type: "foto";
  src: string;
  /* Görme engelli kullanıcılar ve arama motorları için zorunlu. */
  alt: Localized;
};

export type MediaItem = VideoItem | PhotoItem;

export const MEDIA: MediaItem[] = [
  /* ---------------- Televizyon programları ---------------- */

  {
    id: "doktorum-karin-germe-1",
    type: "video",
    youtubeId: "IzysY2PP4fE",
    title: {
      tr: "Karın germe ve meme dikleştirme ameliyatı — Bölüm 1",
      en: "Tummy tuck and breast lift surgery — Part 1",
    },
    outlet: "Kanal D — Doktorum",
    date: "2013-09-24",
    size: "wide",
  },
  {
    id: "doktorum-karin-germe-2",
    type: "video",
    youtubeId: "8jBYxD5uy4U",
    title: {
      tr: "Karın germe ve meme dikleştirme ameliyatı — Bölüm 2",
      en: "Tummy tuck and breast lift surgery — Part 2",
    },
    outlet: "Kanal D — Doktorum",
    date: "2013-09-24",
  },
  {
    id: "doktorum-meme-kucultme-2013",
    type: "video",
    youtubeId: "xeXa2292dMs",
    title: {
      tr: "Meme küçültme ameliyatı",
      en: "Breast reduction surgery",
    },
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-goz-cevresi-1",
    type: "video",
    youtubeId: "jQKRQK9So-A",
    title: {
      tr: "Göz çevresi estetiği — Bölüm 1",
      en: "Eye area aesthetics — Part 1",
    },
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-goz-cevresi-2",
    type: "video",
    youtubeId: "fOckQs1MGcs",
    title: {
      tr: "Göz çevresi estetiği — Bölüm 2",
      en: "Eye area aesthetics — Part 2",
    },
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-goz-cevresi-3",
    type: "video",
    youtubeId: "h1K_9CfReaM",
    title: {
      tr: "Göz çevresi estetiği — Bölüm 3",
      en: "Eye area aesthetics — Part 3",
    },
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-meme-kucultme-1",
    type: "video",
    youtubeId: "jNWNQ2pAB3Q",
    title: {
      tr: "Meme küçültme ameliyatı — Bölüm 1",
      en: "Breast reduction surgery — Part 1",
    },
    outlet: "Kanal D — Doktorum",
    date: "2012-10-31",
  },
  {
    id: "doktorum-meme-kucultme-2",
    type: "video",
    youtubeId: "iPM1NgZRO0c",
    title: {
      tr: "Meme küçültme ameliyatı — Bölüm 2",
      en: "Breast reduction surgery — Part 2",
    },
    outlet: "Kanal D — Doktorum",
    date: "2012-10-31",
  },
  {
    id: "doktorum-meme-kucultme-3",
    type: "video",
    youtubeId: "HSJdaeaxnhQ",
    title: {
      tr: "Meme küçültme ameliyatı — Bölüm 3",
      en: "Breast reduction surgery — Part 3",
    },
    outlet: "Kanal D — Doktorum",
    date: "2012-10-31",
  },

  /* ---------------- Basında ----------------
     Başlıklar basılı manşetin kendisidir; İngilizce karşılıkları
     anlaşılması için verilmiş çevirilerdir. */

  {
    id: "abc-dunyasi-1",
    type: "foto",
    src: "/media/photos/medya-y2a-buyuk.jpg",
    title: {
      tr: "Meme estetiği hayal değil!",
      en: "Breast aesthetics is not a dream!",
    },
    outlet: "Abç Dünyası",
    date: "2014-05-01",
    dateLabel: { tr: "Mayıs – Haziran 2014", en: "May – June 2014" },
    alt: {
      tr: "Abç Dünyası dergisindeki röportajın birinci sayfası",
      en: "First page of the interview in Abç Dünyası magazine",
    },
  },
  {
    id: "abc-dunyasi-2",
    type: "foto",
    src: "/media/photos/medya-y2b-buyuk.jpg",
    title: {
      tr: "Meme estetiği hayal değil!",
      en: "Breast aesthetics is not a dream!",
    },
    outlet: "Abç Dünyası",
    date: "2014-05-01",
    dateLabel: { tr: "Mayıs – Haziran 2014", en: "May – June 2014" },
    alt: {
      tr: "Abç Dünyası dergisindeki röportajın ikinci sayfası",
      en: "Second page of the interview in Abç Dünyası magazine",
    },
  },
  {
    id: "abc-dunyasi-3",
    type: "foto",
    src: "/media/photos/medya-y2c-buyuk.jpg",
    title: {
      tr: "Meme estetiği hayal değil!",
      en: "Breast aesthetics is not a dream!",
    },
    outlet: "Abç Dünyası",
    date: "2014-05-01",
    dateLabel: { tr: "Mayıs – Haziran 2014", en: "May – June 2014" },
    alt: {
      tr: "Abç Dünyası dergisindeki röportajın üçüncü sayfası",
      en: "Third page of the interview in Abç Dünyası magazine",
    },
  },
  {
    id: "aktuel-1",
    type: "foto",
    src: "/media/photos/medya-y1a-buyuk.jpg",
    title: {
      tr: "Bütün yaz karnınızı saklamakla geçmesin",
      en: "Don't spend the whole summer hiding your stomach",
    },
    outlet: "Aktüel",
    date: "2014-04-30",
    dateLabel: { tr: "Mayıs 2014", en: "May 2014" },
    alt: {
      tr: "Aktüel dergisindeki röportajın birinci sayfası",
      en: "First page of the interview in Aktüel magazine",
    },
  },
  {
    id: "aktuel-2",
    type: "foto",
    src: "/media/photos/medya-y1b-buyuk.jpg",
    title: {
      tr: "Bütün yaz karnınızı saklamakla geçmesin",
      en: "Don't spend the whole summer hiding your stomach",
    },
    outlet: "Aktüel",
    date: "2014-04-30",
    dateLabel: { tr: "Mayıs 2014", en: "May 2014" },
    alt: {
      tr: "Aktüel dergisindeki röportajın ikinci sayfası",
      en: "Second page of the interview in Aktüel magazine",
    },
  },
];

/* Dile göre metin seçer; alan boşsa null döner. */
function pick(field: Localized | undefined, locale: Locale): string | null {
  return field ? field[locale] : null;
}

/* Tarihi olan kayıtlar yeniden eskiye sıralanır; aynı tarihli
   bölümler dosyadaki sırasını korur (Bölüm 1, 2, 3 bozulmaz). */
export function sortedMedia(items: MediaItem[] = MEDIA): MediaItem[] {
  return [...items].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

/* Gün belliyse "24 Eylül 2013" / "24 September 2013"; belli değilse
   dateLabel devreye girer. */
export function formatMediaDate(
  item: MediaItem,
  locale: Locale,
): string | null {
  const label = pick(item.dateLabel, locale);
  if (label) {
    return label;
  }

  if (!item.date) {
    return null;
  }

  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(item.date));
}

/* ===============================================================
   2. GALERİ — sayfayı çizen bileşen
   =============================================================== */

type Filter = "hepsi" | "video" | "foto";

/* Arayüz metinleri. İçerikten ayrı: bunlar galerinin kendi
   etiketleri, medya kayıtlarının başlıkları değil. */
type GalleryStrings = {
  filterGroup: string;
  filterAll: string;
  filterVideo: string;
  filterPress: string;
  groupVideo: string;
  groupPress: string;
  emptyBefore: string;
  emptyAfter: string;
  play: string;
  zoom: string;
  fallbackVideo: string;
  fallbackPhoto: string;
  close: string;
  prev: string;
  next: string;
};

const UI: Record<Locale, GalleryStrings> = {
  tr: {
    filterGroup: "Medya türü",
    filterAll: "Tümü",
    filterVideo: "Video",
    filterPress: "Basında",
    groupVideo: "Televizyon programları",
    groupPress: "Basında",
    emptyBefore: "Bu bölümde henüz içerik yok. Video ve fotoğraflar bu dosyanın üst yarısındaki ",
    emptyAfter: " dizisine eklenir.",
    play: "oynat",
    zoom: "büyüt",
    fallbackVideo: "Video",
    fallbackPhoto: "Fotoğraf",
    close: "Kapat",
    prev: "Önceki sayfa",
    next: "Sonraki sayfa",
  },
  en: {
    filterGroup: "Media type",
    filterAll: "All",
    filterVideo: "Video",
    filterPress: "In the press",
    groupVideo: "Television programmes",
    groupPress: "In the press",
    emptyBefore: "There is no content in this section yet. Videos and photographs are added to the ",
    emptyAfter: " array in the upper half of this file.",
    play: "play",
    zoom: "enlarge",
    fallbackVideo: "Video",
    fallbackPhoto: "Photograph",
    close: "Close",
    prev: "Previous page",
    next: "Next page",
  },
};

type Props = { locale: Locale };

export default function MediaGallery({ locale }: Props) {
  const t = UI[locale];
  const items = useMemo(() => sortedMedia(), []);

  const [filter, setFilter] = useState<Filter>("hepsi");
  /* Oynatılan videonun id'si. Kart tıklanana kadar YouTube yüklenmez. */
  const [playing, setPlaying] = useState<string | null>(null);
  /* Büyütülen fotoğrafın, fotoğraflar dizisindeki sırası. */
  const [lightbox, setLightbox] = useState<number | null>(null);

  const FILTERS: { value: Filter; label: string }[] = [
    { value: "hepsi", label: t.filterAll },
    { value: "video", label: t.filterVideo },
    { value: "foto", label: t.filterPress },
  ];

  const videos = useMemo(
    () => items.filter((i): i is VideoItem => i.type === "video"),
    [items],
  );

  const photos = useMemo(
    () => items.filter((i): i is PhotoItem => i.type === "foto"),
    [items],
  );

  const step = useCallback(
    (delta: number) =>
      setLightbox((current) =>
        current === null
          ? null
          : (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  /* Klavye: Esc kapatır, oklar fotoğraflar arasında gezer. */
  useEffect(() => {
    if (lightbox === null) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, step]);

  const active = lightbox === null ? null : photos[lightbox];

  /* Video ve dergi sayfası aynı karo şeklinde iyi durmuyor: biri
     16:9, diğeri dik bir dergi sayfası. Bu yüzden her tür kendi
     ızgarasında, kendi en-boy oranıyla diziliyor. */
  const renderTile = (item: MediaItem) => {
    const title = pick(item.title, locale);
    const dateText = formatMediaDate(item, locale);
    const meta = [item.outlet, dateText].filter(Boolean);
    const isVideo = item.type === "video";

    return (
      <li
        key={item.id}
        className={`${isVideo ? styles.videoTile : styles.photoTile} ${
          item.size === "wide" ? styles.wide : ""
        }`}
      >
        {isVideo && playing === item.id ? (
          <iframe
            className={styles.player}
            /* nocookie alan adı, izleyici oynatmadan önce
               reklam çerezi bırakmaz. */
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={title ?? t.fallbackVideo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={styles.surface}
            onClick={() =>
              item.type === "video"
                ? setPlaying(item.id)
                : setLightbox(photos.findIndex((p) => p.id === item.id))
            }
            aria-label={
              item.type === "video"
                ? `${title ?? t.fallbackVideo} — ${t.play}`
                : `${title ?? t.fallbackPhoto} — ${t.zoom}`
            }
          >
            {item.type === "video" ? (
              <VideoThumb youtubeId={item.youtubeId} poster={item.poster} />
            ) : (
              <Image
                className={styles.media}
                src={item.src}
                alt=""
                fill
                sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
              />
            )}

            <span className={styles.scrim} aria-hidden="true" />

            {item.type === "video" ? (
              <span className={styles.playBadge} aria-hidden="true">
                <svg width="15" height="17" viewBox="0 0 16 18" fill="none">
                  <path d="M2 1.6 14.4 9 2 16.4V1.6Z" fill="currentColor" />
                </svg>
              </span>
            ) : (
              <span className={styles.zoomBadge} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.8 10.8 15 15M7 5v4M5 7h4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            )}
          </button>
        )}

        {/* Künye görselin üstünde; tıklamayı yutmasın diye
            pointer-events kapalı. */}
        {title || meta.length > 0 ? (
          <div className={styles.caption} aria-hidden={playing === item.id}>
            {meta.length > 0 ? (
              <p className={styles.kicker}>{meta.join(" · ")}</p>
            ) : null}

            {title ? <h3 className={styles.cardTitle}>{title}</h3> : null}
          </div>
        ) : null}
      </li>
    );
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.filters} role="tablist" aria-label={t.filterGroup}>
          {FILTERS.map((option) => {
            const selected = filter === option.value;
            const count =
              option.value === "hepsi"
                ? items.length
                : option.value === "video"
                  ? videos.length
                  : photos.length;

            return (
              <button
                key={option.value}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? styles.filterActive : styles.filter}
                onClick={() => {
                  setFilter(option.value);
                  setPlaying(null);
                }}
              >
                {option.label}
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {filter !== "foto" && videos.length > 0 ? (
        <section className={styles.group} aria-labelledby="grup-video">
          <h2 className={styles.groupTitle} id="grup-video">
            {t.groupVideo}
          </h2>

          <ul className={styles.videoGrid}>{videos.map(renderTile)}</ul>
        </section>
      ) : null}

      {filter !== "video" && photos.length > 0 ? (
        <section className={styles.group} aria-labelledby="grup-basin">
          <h2 className={styles.groupTitle} id="grup-basin">
            {t.groupPress}
          </h2>

          <ul className={styles.photoGrid}>{photos.map(renderTile)}</ul>
        </section>
      ) : null}

      {items.length === 0 ? (
        <p className={styles.empty}>
          {t.emptyBefore}
          <code className={styles.code}>MEDIA</code>
          {t.emptyAfter}
        </p>
      ) : null}

      {/* ---------------- Büyütülmüş fotoğraf ---------------- */}
      {active ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={pick(active.title, locale) ?? t.fallbackPhoto}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setLightbox(null)}
            aria-label={t.close}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1l16 16M17 1 1 17"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                className={styles.prev}
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                aria-label={t.prev}
              >
                <Chevron />
              </button>

              <button
                type="button"
                className={styles.next}
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                aria-label={t.next}
              >
                <Chevron />
              </button>
            </>
          ) : null}

          <figure
            className={styles.lightboxFigure}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              className={styles.lightboxImage}
              src={active.src}
              alt={active.alt[locale]}
              fill
              sizes="90vw"
              priority
            />

            <figcaption className={styles.lightboxCaption}>
              {pick(active.title, locale) ? (
                <strong>{pick(active.title, locale)}</strong>
              ) : null}

              {formatMediaDate(active, locale) ? (
                <span>
                  {[active.outlet, formatMediaDate(active, locale)]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              ) : null}

              {photos.length > 1 ? (
                <span className={styles.counter}>
                  {(lightbox ?? 0) + 1} / {photos.length}
                </span>
              ) : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}

/* Kapak görseli olarak hqdefault kullanılıyor: her videoda var.
   maxresdefault daha keskin ama yalnızca HD yüklenen videolarda
   bulunuyor ve yoksa 404 dönüyor — sayfa sunucuda render edildiği
   için o 404, React hydration'dan ÖNCE gerçekleşir ve onError ile
   yakalanamaz. Bu yüzden yedekli zincir yerine garanti olan dosya.

   hqdefault 4:3 ve siyah bantlı geldiğinden görsel hafifçe
   büyütülüyor; bantlar 16:9 çerçevenin dışında kalıyor.

   Daha keskin kapak istersen görseli indirip public/ altına koy ve
   ilgili kayda `poster: "/media/kapak/xxx.jpg"` yaz. */
function VideoThumb({
  youtubeId,
  poster,
}: {
  youtubeId: string;
  poster?: string;
}) {
  return (
    <Image
      className={poster ? styles.media : styles.mediaCropped}
      src={poster ?? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
      alt=""
      fill
      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
    />
  );
}

function Chevron() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
      <path
        d="M10 1 2 10l8 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}