"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LocaleSwitch from "@/components/LocaleSwitch/LocaleSwitch";
import { stripLocale, withLocale, type Locale } from "@/lib/i18n";
import styles from "./StickyNav.module.css";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type Props = {
  /* Bağlantılara eklenecek dil öneki: /tr/ameliyatlar */
  locale: Locale;
  /* SVG logo. next/image yerel .svg dosyalarını optimize etmeden
     olduğu gibi sunar; ek config gerekmez. */
  logoSrc?: string;
  name: string;
  items: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  /* Çekmecede, alt menüsü olan bir başlığın kendi sayfasına giden
     ilk satırın etiketi. */
  overviewLabel?: string;
};

/* Dahili rota (/ ile başlayan) ise next/link, değilse normal <a>.
   Böylece #bolum, tel: ve mailto: bağlantıları da çalışır. */
function isRoute(href: string) {
  return href.startsWith("/");
}

export default function StickyNav({
  locale,
  logoSrc = "/logo/logo.svg",
  name,
  items,
  ctaLabel = "İletişim",
  ctaHref = "/iletisim",
  overviewLabel = "Genel bilgi",
}: Props) {
  const rawPathname = usePathname();

  /* Karşılaştırmalar dil öneki olmadan yapılır:
     /tr/ameliyatlar ile /en/ameliyatlar aynı sayfadır. */
  const pathname = stripLocale(rawPathname);
  const isHome = pathname === "/";

  /* Bar HER ZAMAN görünür. Değişen tek şey görünümü:
       - ana sayfada hero üzerindeyken saydam, yazılar krem
       - hero geçildikten sonra ve diğer sayfalarda krem zemin,
         koyu yazı */
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
     yoksa gizlenir ama gövde kilidi üzerinde kalırdı.
     Değer CSS'teki 1000px eşiğiyle aynı olmalı. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1001px)");

    function onChange(event: MediaQueryListEvent) {
      if (event.matches) closeMobile();
    }

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  /* Sayfa değişince hem masaüstü menüsünü hem çekmeceyi kapat.
     rawPathname dinleniyor: dil değişince de kapansın. */
  useEffect(() => {
    closeAll();
    closeMobile();
  }, [rawPathname]);

  function isActive(href: string) {
    return (
      isRoute(href) && (pathname === href || pathname.startsWith(`${href}/`))
    );
  }

  function renderLink(item: NavItem, className: string) {
    const active = isActive(item.href);

    return isRoute(item.href) ? (
      <Link
        href={withLocale(item.href, locale)}
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

  /* Çekmecede alt menüsü olan başlığın kendi sayfasına giden satır.
     Başlığın kendisi artık gezinmediği için bu satır şart. */
  function renderOverview(item: NavItem, className: string) {
    if (!isRoute(item.href)) return null;

    return (
      <li>
        <Link
          href={withLocale(item.href, locale)}
          className={`${className} ${styles.drawerOverview} ${
            pathname === item.href ? styles.drawerLinkActive : ""
          }`}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {overviewLabel}
        </Link>
      </li>
    );
  }

  return (
    <>
      {/* Hero'nun bittiği noktayı işaretler; bar burayı geçince
          katı zemine döner. Sadece ana sayfada gerekli. */}
      {isHome ? (
        <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      ) : null}

      <div className={`${styles.bar} ${solid ? styles.solid : ""}`}>
        <Link href={`/${locale}`} className={styles.brand}>
          {/* Logo dekoratif: erişilebilir ad zaten yandaki isimden gelir. */}
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
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => closeAll()}
                onFocus={() => setOpenMenu(item.href)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    closeAll();
                  }
                }}
              >
                <span className={styles.navItemRow}>
                  {renderLink(item, linkClass)}

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
          <LocaleSwitch locale={locale} />

          {isRoute(ctaHref) ? (
            <Link href={withLocale(ctaHref, locale)} className={styles.cta}>
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
          Alt menüsü OLAN başlıklar bağlantı değil, düğmedir:
          dokununca yalnızca akordeon açılır. O başlığın kendi
          sayfasına, açılan listenin ilk satırından gidilir. */}
      <div
        id="mobil-menu"
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        inert={!mobileOpen || undefined}
      >
        <nav className={styles.drawerNav} aria-label="Mobil menü">
          <ul className={styles.drawerList}>
            {items.map((item) => {
              /* Alt menüsü yok: doğrudan bağlantı. */
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
                  <button
                    type="button"
                    className={`${styles.drawerToggle} ${
                      isActive(item.href) ? styles.drawerLinkActive : ""
                    }`}
                    aria-expanded={sectionOpen}
                    onClick={() => {
                      setMobileSub(null);
                      setMobileSection(sectionOpen ? null : item.href);
                    }}
                  >
                    <span>{item.label}</span>

                    <span className={styles.drawerCaret} aria-hidden="true">
                      <CaretIcon />
                    </span>
                  </button>

                  {sectionOpen ? (
                    <ul className={styles.drawerSubList}>
                      {renderOverview(item, styles.drawerSubLink)}

                      {item.children.map((category) => {
                        /* Kategorinin alt işlemi yoksa doğrudan bağlantı. */
                        if (!category.children?.length) {
                          return (
                            <li key={category.href}>
                              {renderLink(
                                category,
                                `${styles.drawerSubLink} ${
                                  isActive(category.href)
                                    ? styles.drawerLinkActive
                                    : ""
                                }`,
                              )}
                            </li>
                          );
                        }

                        const catOpen = mobileSub === category.href;

                        return (
                          <li key={category.href}>
                            <button
                              type="button"
                              className={`${styles.drawerSubToggle} ${
                                isActive(category.href)
                                  ? styles.drawerLinkActive
                                  : ""
                              }`}
                              aria-expanded={catOpen}
                              onClick={() =>
                                setMobileSub(catOpen ? null : category.href)
                              }
                            >
                              <span>{category.label}</span>

                              <span
                                className={styles.drawerCaret}
                                aria-hidden="true"
                              >
                                <CaretIcon />
                              </span>
                            </button>

                            {catOpen ? (
                              <ul className={styles.drawerLeafList}>
                                {renderOverview(
                                  category,
                                  styles.drawerLeafLink,
                                )}

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
            <Link
              href={withLocale(ctaHref, locale)}
              className={styles.drawerCta}
            >
              {ctaLabel}
            </Link>
          ) : (
            <a href={ctaHref} className={styles.drawerCta}>
              {ctaLabel}
            </a>
          )}

          <div className={styles.drawerLocale}>
            <LocaleSwitch locale={locale} variant="drawer" />
          </div>
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