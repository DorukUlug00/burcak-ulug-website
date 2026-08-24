import { NextResponse, type NextRequest } from "next/server";

import { DEFAULT_LOCALE, LOCALES, isLocale } from "./lib/i18n";

/* Dil önekinin olmadığı her adres, uygun dile yönlendirilir:
   /ameliyatlar -> /tr/ameliyatlar */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

/* Öncelik sırası: kullanıcının önceki seçimi, tarayıcı dili,
   sonra varsayılan. */
function detectLocale(request: NextRequest): string {
  const saved = request.cookies.get("locale")?.value;
  if (saved && isLocale(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";

  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }

  return DEFAULT_LOCALE;
}

export const config = {
  /* _next, api ve uzantılı dosyalar (görseller, robots.txt…) dışında
     her istek middleware'den geçer. */
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};