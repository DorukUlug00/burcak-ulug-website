"use client";

/* MEDYA — İÇERİK VE GALERİ
   ---------------------------------------------------------------
   Bu dosya iki bölümden oluşuyor:

     1. İÇERİK  — video ve fotoğraf listesi. Düzenlemen gereken yer
                  burası; dosyanın en üstünde duruyor.
     2. GALERİ  — sayfayı çizen bileşen. İçerik eklemek için buraya
                  dokunmana gerek yok.

   Dosya "use client" ile başlıyor çünkü galeri süzgeç, oynatma ve
   büyütme için tarayıcıda çalışmak zorunda. Bu yüzden sayfanın
   `metadata` çıktısı app/medya/page.tsx içinde kalıyor. */

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import styles from "../app/medya/page.module.css";

/* ===============================================================
   1. İÇERİK — video ve fotoğraflar
   =============================================================== */

type MediaBase = {
  /* Benzersiz olmalı — React anahtarı olarak kullanılıyor. */
  id: string;
  title?: string;
  /* Kanal, program ya da dergi adı. */
  outlet?: string;
  /* ISO biçim. Yalnızca sıralama için kullanılır; ay belli değilse
     ayın ilk gününü yaz. */
  date?: string;
  /* Ekranda görünecek tarih. Boş bırakılırsa `date` biçimlenir.
     Dergi sayıları gibi "Mayıs – Haziran 2014" durumları için var. */
  dateLabel?: string;
  summary?: string;
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
  alt: string;
};

export type MediaItem = VideoItem | PhotoItem;

export const MEDIA: MediaItem[] = [
  /* ---------------- Televizyon programları ---------------- */

  {
    id: "doktorum-karin-germe-1",
    type: "video",
    youtubeId: "IzysY2PP4fE",
    title: "Karın germe ve meme dikleştirme ameliyatı — Bölüm 1",
    outlet: "Kanal D — Doktorum",
    date: "2013-09-24",
    size: "wide",
  },
  {
    id: "doktorum-karin-germe-2",
    type: "video",
    youtubeId: "8jBYxD5uy4U",
    title: "Karın germe ve meme dikleştirme ameliyatı — Bölüm 2",
    outlet: "Kanal D — Doktorum",
    date: "2013-09-24",
  },
  {
    id: "doktorum-meme-kucultme-2013",
    type: "video",
    youtubeId: "xeXa2292dMs",
    title: "Meme küçültme ameliyatı",
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-goz-cevresi-1",
    type: "video",
    youtubeId: "jQKRQK9So-A",
    title: "Göz çevresi estetiği — Bölüm 1",
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-goz-cevresi-2",
    type: "video",
    youtubeId: "fOckQs1MGcs",
    title: "Göz çevresi estetiği — Bölüm 2",
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-goz-cevresi-3",
    type: "video",
    youtubeId: "h1K_9CfReaM",
    title: "Göz çevresi estetiği — Bölüm 3",
    outlet: "Kanal D — Doktorum",
    date: "2013-02-19",
  },
  {
    id: "doktorum-meme-kucultme-1",
    type: "video",
    youtubeId: "jNWNQ2pAB3Q",
    title: "Meme küçültme ameliyatı — Bölüm 1",
    outlet: "Kanal D — Doktorum",
    date: "2012-10-31",
  },
  {
    id: "doktorum-meme-kucultme-2",
    type: "video",
    youtubeId: "iPM1NgZRO0c",
    title: "Meme küçültme ameliyatı — Bölüm 2",
    outlet: "Kanal D — Doktorum",
    date: "2012-10-31",
  },
  {
    id: "doktorum-meme-kucultme-3",
    type: "video",
    youtubeId: "HSJdaeaxnhQ",
    title: "Meme küçültme ameliyatı — Bölüm 3",
    outlet: "Kanal D — Doktorum",
    date: "2012-10-31",
  },

  /* ---------------- Basında ---------------- */

  {
    id: "abc-dunyasi-1",
    type: "foto",
    src: "/media/photos/medya-y2a-buyuk.jpg",
    title: "Meme estetiği hayal değil!",
    outlet: "Abç Dünyası",
    date: "2014-05-01",
    dateLabel: "Mayıs – Haziran 2014",
    alt: "Abç Dünyası dergisindeki röportajın birinci sayfası",
  },
  {
    id: "abc-dunyasi-2",
    type: "foto",
    src: "/media/photos/medya-y2b-buyuk.jpg",
    title: "Meme estetiği hayal değil!",
    outlet: "Abç Dünyası",
    date: "2014-05-01",
    dateLabel: "Mayıs – Haziran 2014",
    alt: "Abç Dünyası dergisindeki röportajın ikinci sayfası",
  },
  {
    id: "abc-dunyasi-3",
    type: "foto",
    src: "/media/photos/medya-y2c-buyuk.jpg",
    title: "Meme estetiği hayal değil!",
    outlet: "Abç Dünyası",
    date: "2014-05-01",
    dateLabel: "Mayıs – Haziran 2014",
    alt: "Abç Dünyası dergisindeki röportajın üçüncü sayfası",
  },
  {
    id: "aktuel-1",
    type: "foto",
    src: "/media/photos/medya-y1a-buyuk.jpg",
    title: "Bütün yaz karnınızı saklamakla geçmesin",
    outlet: "Aktüel",
    date: "2014-04-30",
    dateLabel: "Mayıs 2014",
    alt: "Aktüel dergisindeki röportajın birinci sayfası",
  },
  {
    id: "aktuel-2",
    type: "foto",
    src: "/media/photos/medya-y1b-buyuk.jpg",
    title: "Bütün yaz karnınızı saklamakla geçmesin",
    outlet: "Aktüel",
    date: "2014-04-30",
    dateLabel: "Mayıs 2014",
    alt: "Aktüel dergisindeki röportajın ikinci sayfası",
  },
];

/* Tarihi olan kayıtlar yeniden eskiye sıralanır; aynı tarihli
   bölümler dosyadaki sırasını korur (Bölüm 1, 2, 3 bozulmaz). */
export function sortedMedia(items: MediaItem[] = MEDIA): MediaItem[] {
  return [...items].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

/* Gün belliyse "24 Eylül 2013", değilse dateLabel devreye girer. */
export function formatMediaDate(item: MediaItem): string | null {
  if (item.dateLabel) {
    return item.dateLabel;
  }

  if (!item.date) {
    return null;
  }

  return new Intl.DateTimeFormat("tr-TR", {
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

const FILTERS: { value: Filter; label: string }[] = [
  { value: "hepsi", label: "Tümü" },
  { value: "video", label: "Video" },
  { value: "foto", label: "Basında" },
];

export default function MediaGallery() {
  const items = useMemo(() => sortedMedia(), []);

  const [filter, setFilter] = useState<Filter>("hepsi");
  /* Oynatılan videonun id'si. Kart tıklanana kadar YouTube yüklenmez. */
  const [playing, setPlaying] = useState<string | null>(null);
  /* Büyütülen fotoğrafın, fotoğraflar dizisindeki sırası. */
  const [lightbox, setLightbox] = useState<number | null>(null);

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
    const dateText = formatMediaDate(item);
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
            title={item.title ?? "Video"}
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
                ? `${item.title ?? "Video"} — oynat`
                : `${item.title ?? "Fotoğraf"} — büyüt`
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
        {item.title || meta.length > 0 ? (
          <div className={styles.caption} aria-hidden={playing === item.id}>
            {meta.length > 0 ? (
              <p className={styles.kicker}>{meta.join(" · ")}</p>
            ) : null}

            {item.title ? (
              <h3 className={styles.cardTitle}>{item.title}</h3>
            ) : null}
          </div>
        ) : null}
      </li>
    );
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.filters} role="tablist" aria-label="Medya türü">
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
            Televizyon programları
          </h2>

          <ul className={styles.videoGrid}>{videos.map(renderTile)}</ul>
        </section>
      ) : null}

      {filter !== "video" && photos.length > 0 ? (
        <section className={styles.group} aria-labelledby="grup-basin">
          <h2 className={styles.groupTitle} id="grup-basin">
            Basında
          </h2>

          <ul className={styles.photoGrid}>{photos.map(renderTile)}</ul>
        </section>
      ) : null}

      {items.length === 0 ? (
        <p className={styles.empty}>
          Bu bölümde henüz içerik yok. Video ve fotoğraflar bu dosyanın
          üst yarısındaki <code className={styles.code}>MEDIA</code> dizisine
          eklenir.
        </p>
      ) : null}

      {/* ---------------- Büyütülmüş fotoğraf ---------------- */}
      {active ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={active.title ?? "Fotoğraf"}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
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
                aria-label="Önceki sayfa"
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
                aria-label="Sonraki sayfa"
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
              alt={active.alt}
              fill
              sizes="90vw"
              priority
            />

            <figcaption className={styles.lightboxCaption}>
              {active.title ? <strong>{active.title}</strong> : null}

              {formatMediaDate(active) ? (
                <span>
                  {[active.outlet, formatMediaDate(active)]
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