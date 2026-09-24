"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type Consent = "accepted" | "rejected" | null;

export default function CookieConsent({
  locale,
}: {
  locale: string;
}) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    }

    setReady(true);
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  }

  function rejectCookies() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
  }

  if (!ready) return null;

  const isTurkish = locale === "tr";

  return (
    <>
      {/* Google Analytics only loads after consent */}
      {consent === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TK3ZSVHC2N"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });

              gtag('js', new Date());

              gtag('consent', 'update', {
                analytics_storage: 'granted'
              });

              gtag('config', 'G-TK3ZSVHC2N');
            `}
          </Script>
        </>
      )}

      {/* Cookie banner */}
      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t bg-white p-5 shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm text-gray-700">
              {isTurkish
                ? "Web sitemizi geliştirmek ve ziyaretçi kullanımını analiz etmek için Google Analytics kullanıyoruz. Analitik çerezler yalnızca onayınızdan sonra kullanılacaktır."
                : "We use Google Analytics to understand how visitors use our website and to improve it. Analytics cookies will only be used after you give consent."}
            </p>

            <div className="flex gap-3">
              <button
                onClick={rejectCookies}
                className="rounded border border-gray-300 px-5 py-2 text-sm font-medium"
              >
                {isTurkish ? "Reddet" : "Reject"}
              </button>

              <button
                onClick={acceptCookies}
                className="rounded bg-black px-5 py-2 text-sm font-medium text-white"
              >
                {isTurkish ? "Kabul Et" : "Accept"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}