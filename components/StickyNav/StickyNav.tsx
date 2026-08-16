"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StickyNav.module.css";

type NavItem = { label: string; href: string };

type Props = {
  monogram: string;
  name: string;
  items: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function StickyNav({
  monogram,
  name,
  items,
  ctaLabel = "İletişim",
  ctaHref = "#contact",
}: Props) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only show once the sentinel has left through the TOP of the viewport,
        // never while it's still below the fold.
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sits exactly where the hero ends. */}
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />

      <div
        className={`${styles.bar} ${visible ? styles.visible : ""}`}
        // Keeps it out of the tab order and off screen readers while hidden.
        inert={!visible || undefined}
      >
        <a href="#top" className={styles.brand}>
          <span className={styles.monogram}>{monogram}</span>
          <span className={styles.brandName}>{name}</span>
        </a>

        <nav className={styles.nav} aria-label="Sabit menü">
          {items.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </a>

          <button type="button" className={styles.menuButton} aria-label="Menüyü aç">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path
                d="M0 1h18M0 6h18M0 11h12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}