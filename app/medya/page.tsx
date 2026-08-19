import type { Metadata } from "next";

/* İçerik ve galeri tek dosyada: lib/media.tsx
   Video ve fotoğraf eklemek için o dosyanın üst yarısını düzenle. */
import MediaGallery from "../../lib/media";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Medya | Prof. Dr. Burçak Tümerdem Uluğ",
  description:
    "Televizyon programları, söyleşiler, kongre ve klinik fotoğrafları.",
};

const INTRO =
  "Televizyon ve gazete söyleşileri, bilimsel kongre sunumları ve klinikten kareler.";

export default function MedyaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Medya</p>

          <h1 className={styles.title}>
            Söyleşiler ve
            <span className={styles.titleAccent}>kareler</span>
          </h1>
        </div>

        <p className={styles.intro}>{INTRO}</p>
      </header>

      <MediaGallery />
    </main>
  );
}