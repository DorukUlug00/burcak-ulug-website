"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./StickyNav.module.css";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type Props = {
  /* Raster logo (jpg/png). Daireye kırpılır. Şeffaf PNG ya da SVG
     kullanılırsa .monogram'daki background kaldırılabilir. */
  logoSrc?: string;
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
  logoSrc = "/logo/logo.svg",
  name,
  items,
  ctaLabel = "İletişim",
  ctaHref = "/iletisim",
}: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* Bar HER ZAMAN görünür. Değişen tek şey görünümü:
       - ana sayfada hero üzerindeyken saydam, yazılar krem
       - hero geçildikten sonra ve diğer sayfalarda krem zemin,
         koyu yazı
     Böylece menü hiçbir noktada kaybolmuyor ama hero görselini
     de kapatmıyor. */
  const [scrolledPast, setScrolledPast] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        /* Yalnızca sentinel ekranın ÜSTÜNDEN çıktığında katı hâle
           geçer; henüz aşağıdayken değil. */
        setScrolledPast(
          !entry.isIntersecting && entry.boundingClientRect.top < 0,
        );
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome]);

  const solid = !isHome || scrolledPast;

  /* Açık menüler: 1. seviye (Ameliyatlar) ve 2. seviye (Yüz Estetiği).
     Aynı anda her seviyeden tek menü açık olur. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);

  function closeAll() {
    setOpenMenu(null);
    setOpenSub(null);
  }

  /* Escape ile kapat. */
  useEffect(() => {
    if (!openMenu) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeAll();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  /* Dışarı tıklayınca kapat (dokunmatik için). */
  useEffect(() => {
    if (!openMenu) return;

    function onPointerDown(event: PointerEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.navItem}`)) closeAll();
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  /* Sayfa değişince açık menüyü kapat. */
  useEffect(() => {
    closeAll();
  }, [pathname]);

  function isActive(href: string) {
    return (
      isRoute(href) && (pathname === href || pathname.startsWith(`${href}/`))
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
      {/* Hero'nun bittiği noktayı işaretler; bar burayı geçince
          katı zemine döner. Sadece ana sayfada gerekli. */}
      {isHome ? (
        <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      ) : null}

      {/* inert YOK: bar her zaman görünür ve her zaman erişilebilir. */}
      <div className={`${styles.bar} ${solid ? styles.solid : ""}`}>
        <Link href="/" className={styles.brand}>
          {/* Logo dekoratif: erişilebilir ad zaten yandaki isimden gelir,
              bu yüzden alt="" bırakıldı. */}
          <span className={styles.monogram}>
            <Image
              src={logoSrc}
              alt=""
              width={64}
              height={64}
              priority
              className={styles.monogramMark}
            />
          </span>

          <span className={styles.brandName}>{name}</span>
        </Link>

        <nav className={styles.nav} aria-label="Sabit menü">
          {items.map((item) => {
            const linkClass = `${styles.navLink} ${
              isActive(item.href) ? styles.navLinkActive : ""
            }`;

            /* Alt menüsü olmayan basit öğe. */
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
                onMouseLeave={() => closeAll()}
                /* Klavye: odak gruptan çıkınca kapat. */
                onFocus={() => setOpenMenu(item.href)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    closeAll();
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
                    onClick={() => {
                      setOpenSub(null);
                      setOpenMenu(open ? null : item.href);
                    }}
                  >
                    <CaretIcon />
                  </button>
                </span>

                {/* ---------- 2. seviye: kategoriler (yatay şerit) ---------- */}
                <div
                  className={`${styles.submenu} ${
                    open ? styles.submenuOpen : ""
                  }`}
                  inert={!open || undefined}
                >
                  <ul className={styles.submenuList}>
                    {item.children.map((category) => {
                      const subOpen = openSub === category.href;

                      const categoryClass = `${styles.submenuLink} ${
                        isActive(category.href) ? styles.submenuLinkActive : ""
                      }`;

                      return (
                        <li
                          key={category.href}
                          className={styles.subItem}
                          onMouseEnter={() => setOpenSub(category.href)}
                        >
                          <span className={styles.subItemRow}>
                            {renderLink(category, categoryClass)}

                            {category.children?.length ? (
                              <button
                                type="button"
                                className={styles.subCaret}
                                aria-expanded={subOpen}
                                aria-label={`${category.label} işlemlerini ${
                                  subOpen ? "kapat" : "aç"
                                }`}
                                onClick={() =>
                                  setOpenSub(subOpen ? null : category.href)
                                }
                              >
                                <CaretIcon />
                              </button>
                            ) : null}
                          </span>

                          {/* ---------- 3. seviye: işlemler (dikey liste) ---------- */}
                          {category.children?.length ? (
                            <div
                              className={`${styles.subPanel} ${
                                subOpen ? styles.subPanelOpen : ""
                              }`}
                              inert={!subOpen || undefined}
                            >
                              <ul className={styles.subPanelList}>
                                {category.children.map((leaf) => (
                                  <li key={`${category.href}-${leaf.href}`}>
                                    {renderLink(
                                      leaf,
                                      `${styles.leafLink} ${
                                        pathname === leaf.href
                                          ? styles.leafLinkActive
                                          : ""
                                      }`,
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </li>
                      );
                    })}
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