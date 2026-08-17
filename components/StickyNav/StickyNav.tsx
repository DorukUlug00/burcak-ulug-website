"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./StickyNav.module.css";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type Props = {
  monogram: string;
  name: string;
  items: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

/* Dahili rota (/ ile başlayan) ise next/link, değilse normal <a>.
   Böylece #bolum, tel: ve mailto: bağlantıları da çalışır. */
function isRoute(href: string) {
  return href.startsWith("/");
}

export default function StickyNav({
  monogram,
  name,
  items,
  ctaLabel = "İletişim",
  ctaHref = "/iletisim",
}: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* Ana sayfada bar hero geçilince belirir.
     Diğer sayfalarda hero yok, bu yüzden en baştan görünür. */
  const [scrolledPast, setScrolledPast] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only show once the sentinel has left through the TOP of the viewport,
        // never while it's still below the fold.
        setScrolledPast(
          !entry.isIntersecting && entry.boundingClientRect.top < 0,
        );
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome]);

  const visible = !isHome || scrolledPast;

  /* Alt menü: masaüstünde hover, dokunmatikte tıklama ile açılır.
     Açık olan öğenin href'ini tutuyoruz (aynı anda tek menü). */
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  /* Escape ile kapat. */
  useEffect(() => {
    if (!openMenu) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  /* Sayfa değişince açık menüyü kapat. */
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  function isActive(href: string) {
    return (
      isRoute(href) &&
      (pathname === href || pathname.startsWith(`${href}/`))
    );
  }

  function renderLink(item: NavItem, className: string) {
    const active = isActive(item.href);

    return isRoute(item.href) ? (
      <Link
        href={item.href}
        className={className}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    ) : (
      <a href={item.href} className={className}>
        {item.label}
      </a>
    );
  }

  return (
    <>
      {/* Sits exactly where the hero ends. Sadece ana sayfada gerekli. */}
      {isHome ? (
        <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      ) : null}

      <div
        className={`${styles.bar} ${visible ? styles.visible : ""}`}
        // Keeps it out of the tab order and off screen readers while hidden.
        inert={!visible || undefined}
      >
        <Link href="/" className={styles.brand}>
          <span className={styles.monogram}>{monogram}</span>
          <span className={styles.brandName}>{name}</span>
        </Link>

        <nav className={styles.nav} aria-label="Sabit menü">
          {items.map((item) => {
            const active = isActive(item.href);

            const linkClass = `${styles.navLink} ${
              active ? styles.navLinkActive : ""
            }`;

            if (!item.children?.length) {
              return (
                <div key={item.href} className={styles.navItem}>
                  {renderLink(item, linkClass)}
                </div>
              );
            }

            const open = openMenu === item.href;

            return (
              <div
                key={item.href}
                className={styles.navItem}
                /* Masaüstü: fare ile aç/kapat. */
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
                /* Klavye: odak gruptan çıkınca kapat. */
                onFocus={() => setOpenMenu(item.href)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <span className={styles.navItemRow}>
                  {renderLink(item, linkClass)}

                  {/* Dokunmatik ve klavye için ayrı aç/kapat düğmesi.
                      Böylece etiketin kendisi sayfaya gitmeye devam eder. */}
                  <button
                    type="button"
                    className={styles.caretButton}
                    aria-expanded={open}
                    aria-label={`${item.label} alt menüsünü ${
                      open ? "kapat" : "aç"
                    }`}
                    onClick={() => setOpenMenu(open ? null : item.href)}
                  >
                    <CaretIcon />
                  </button>
                </span>

                <div
                  className={`${styles.submenu} ${
                    open ? styles.submenuOpen : ""
                  }`}
                  inert={!open || undefined}
                >
                  <ul className={styles.submenuList}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        {renderLink(
                          child,
                          `${styles.submenuLink} ${
                            isActive(child.href)
                              ? styles.submenuLinkActive
                              : ""
                          }`,
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className={styles.actions}>
          {isRoute(ctaHref) ? (
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          ) : (
            <a href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </a>
          )}

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Menüyü aç"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              aria-hidden="true"
            >
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

function CaretIcon() {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
      <path
        d="m1 1 3.5 3.5L8 1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}