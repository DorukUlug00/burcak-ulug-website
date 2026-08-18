"use client";

import { useEffect, useState } from "react";

import styles from "./page.module.css";

/* Çalışma saatleri burada makine tarafından okunabilir biçimde duruyor.
   CONTACT.hours'taki metin insan için, bu ise hesap için —
   birini değiştirirsen diğerini de güncelle. */
const SCHEDULE = {
  openDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  opensAt: 10 * 60, // 10.00
  closesAt: 18 * 60, // 18.00
};

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Istanbul",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function isOpenNow(): boolean {
  const parts = Object.fromEntries(
    formatter.formatToParts(new Date()).map((part) => [part.type, part.value]),
  );

  /* hour12:false gece yarısını bazı ortamlarda "24" olarak verir. */
  const minutes = (Number(parts.hour) % 24) * 60 + Number(parts.minute);

  return (
    SCHEDULE.openDays.includes(parts.weekday) &&
    minutes >= SCHEDULE.opensAt &&
    minutes < SCHEDULE.closesAt
  );
}

export default function OpenStatus() {
  /* null = henüz tarayıcıda hesaplanmadı. Sunucu ve tarayıcı saatleri
     farklı olabileceği için ilk render'da hiçbir şey basmıyoruz;
     böylece hydration uyuşmazlığı çıkmaz. */
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setOpen(isOpenNow());

    tick();

    const timer = window.setInterval(tick, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  if (open === null) {
    return null;
  }

  return (
    <p className={open ? styles.statusOpen : styles.statusClosed}>
      <span className={styles.statusDot} aria-hidden="true" />

      {open ? "Şu anda açık" : "Şu anda kapalı"}

      <span className={styles.statusHint}>
        Hafta içi ve Cumartesi 10.00 – 18.00
      </span>
    </p>
  );
}