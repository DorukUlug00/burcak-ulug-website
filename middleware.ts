import { NextResponse, type NextRequest } from "next/server";

import { DEFAULT_LOCALE, LOCALES, type Locale } from "./i18n/config";

/* DİL YÖNLENDİRMESİ
   ---------------------------------------------------------------
   Ön eki olmayan her adres bir dile yönlendirilir:

     /medya       -> /tr/medya   (tarayıcı Türkçe ise)
     /medya       -> /en/medya   (tarayıcı İngilizce ise)
     /tr/medya    -> dokunulmaz

   Eski adresler (arama motorlarında kayıtlı olanlar) böylece
   kırılmaz, 307 ile doğru dile taşınır.
--------------------------------------------------------------- */

function detectLocale(request: NextRequest): Locale {
  /* 1. Kullanıcı daha önce dil seçtiyse onu hatırla. */
  const saved = request.cookies.get("NEXT_LOCALE")?.value;

  if (saved && (LOCALES as readonly string[]).includes(saved)) {
    return saved as Locale;
  }

  /* 2. Tarayıcı diline bak. "tr-TR,tr;q=0.9,en;q=0.8" gibi gelir. */
  const header = request.headers.get("accept-language") ?? "";

  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());

  for (const code of preferred) {
    if ((LOCALES as readonly string[]).includes(code)) {
      return code as Locale;
    }
  }

  /* 3. Hiçbiri tutmazsa varsayılan dil. */
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* Adres zaten bir dille başlıyorsa karışma. */
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);

  /* Seçimi bir yıl hatırla; kullanıcı dil değiştirdiğinde bu
     çerezi güncellemek gerekir (dil değiştirici bileşende). */
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  /* Statik dosyalar, API rotaları ve dosya uzantılı istekler
     yönlendirmenin dışında kalır. */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|operations|media|photos|ameliyatlar-gorseller|hero.png|.*\\..*).*)",
  ],
};