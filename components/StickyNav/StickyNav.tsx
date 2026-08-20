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
  /* SVG logo. next/image yerel .svg dosyalarını optimize etmeden
     olduğu gibi sunar; ek config gerekmez. Renk uyumu CSS'teki
     filter kurallarıyla sağlanır (bkz. .monogramMark). */
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

  /* Mobil çekmece açıkken bar her zaman katı görünür, yoksa
     krem panelin üstündeki krem yazılar okunmaz. */
  const [mobileOpen, setMobileOpen] = useState(false);
  const solid = !isHome || scrolledPast || mobileOpen;

  /* ---------- Masaüstü açılır menüler ---------- */

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

  /* ---------- Mobil çekmece ---------- */

  /* Masaüstü menüsünden ayrı tutuluyor: ikisi aynı anda görünmüyor,
     durumlarının karışması gereksiz hatalara yol açıyordu. */
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  function closeMobile() {
    setMobileOpen(false);
    setMobileSection(null);
    setMobileSub(null);
  }

  /* Çekmece açıkken arkadaki sayfa kaymasın. */
  useEffect(() => {
    if (!mobileOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  /* Escape ile kapat. */
  useEffect(() => {
    if (!mobileOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMobile();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  /* Ekran masaüstü genişliğine çıkarsa çekmece açık kalmasın:
     yoksa gizlenir ama gövde kilidi üzerinde kalırdı. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)");

    function onChange(event: MediaQueryListEvent) {
      if (event.matches) closeMobile();
    }

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  /* Sayfa değişince hem masaüstü menüsünü hem çekmeceyi kapat. */
  useEffect(() => {
    closeAll();
    closeMobile();
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
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            aria-controls="mobil-menu"
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            {mobileOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      {/* ============ MOBİL ÇEKMECE ============
          900px altında hamburger'ın açtığı tam ekran panel.
          Masaüstünde CSS ile tamamen gizli. */}
      <div
        id="mobil-menu"
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        inert={!mobileOpen || undefined}
      >
        <nav className={styles.drawerNav} aria-label="Mobil menü">
          <ul className={styles.drawerList}>
            {items.map((item) => {
              /* Alt menüsü olmayan basit öğe: doğrudan bağlantı. */
              if (!item.children?.length) {
                return (
                  <li key={item.href} className={styles.drawerItem}>
                    {renderLink(
                      item,
                      `${styles.drawerLink} ${
                        isActive(item.href) ? styles.drawerLinkActive : ""
                      }`,
                    )}
                  </li>
                );
              }

              const sectionOpen = mobileSection === item.href;

              return (
                <li key={item.href} className={styles.drawerItem}>
                  <div className={styles.drawerRow}>
                    {renderLink(
                      item,
                      `${styles.drawerLink} ${
                        isActive(item.href) ? styles.drawerLinkActive : ""
                      }`,
                    )}

                    {/* Etiket sayfaya gider, düğme akordeonu açar. */}
                    <button
                      type="button"
                      className={styles.drawerCaret}
                      aria-expanded={sectionOpen}
                      aria-label={`${item.label} alt menüsünü ${
                        sectionOpen ? "kapat" : "aç"
                      }`}
                      onClick={() => {
                        setMobileSub(null);
                        setMobileSection(sectionOpen ? null : item.href);
                      }}
                    >
                      <CaretIcon />
                    </button>
                  </div>

                  {sectionOpen ? (
                    <ul className={styles.drawerSubList}>
                      {item.children.map((category) => {
                        const catOpen = mobileSub === category.href;

                        return (
                          <li key={category.href}>
                            <div className={styles.drawerRow}>
                              {renderLink(
                                category,
                                `${styles.drawerSubLink} ${
                                  isActive(category.href)
                                    ? styles.drawerLinkActive
                                    : ""
                                }`,
                              )}

                              {category.children?.length ? (
                                <button
                                  type="button"
                                  className={styles.drawerCaret}
                                  aria-expanded={catOpen}
                                  aria-label={`${category.label} işlemlerini ${
                                    catOpen ? "kapat" : "aç"
                                  }`}
                                  onClick={() =>
                                    setMobileSub(catOpen ? null : category.href)
                                  }
                                >
                                  <CaretIcon />
                                </button>
                              ) : null}
                            </div>

                            {catOpen && category.children?.length ? (
                              <ul className={styles.drawerLeafList}>
                                {category.children.map((leaf) => (
                                  <li key={`${category.href}-${leaf.href}`}>
                                    {renderLink(
                                      leaf,
                                      `${styles.drawerLeafLink} ${
                                        pathname === leaf.href
                                          ? styles.drawerLinkActive
                                          : ""
                                      }`,
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA masaüstünde barda, mobilde çekmecenin dibinde. */}
        <div className={styles.drawerFooter}>
          {isRoute(ctaHref) ? (
            <Link href={ctaHref} className={styles.drawerCta}>
              {ctaLabel}
            </Link>
          ) : (
            <a href={ctaHref} className={styles.drawerCta}>
              {ctaLabel}
            </a>
          )}
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

function BurgerIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <path
        d="M0 1h18M0 6h18M0 11h12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M1 1l12 12M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}