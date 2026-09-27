"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, MapPin, Smartphone } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/it/app/meetpuglia/id6808968011";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=it.meetpuglia.app";

export function DownloadRedirect() {
  const [message, setMessage] = useState("Scegli lo store del tuo dispositivo");

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/i.test(userAgent)
      || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (!isAndroid && !isIOS) return;

    const destination = isIOS ? APP_STORE_URL : PLAY_STORE_URL;
    const messageTimer = window.setTimeout(() => {
      setMessage(`Apertura di ${isIOS ? "App Store" : "Google Play"}…`);
    }, 0);

    const redirectTimer = window.setTimeout(() => {
      window.location.replace(destination);
    }, 450);

    return () => {
      window.clearTimeout(messageTimer);
      window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <main className="download-page">
      <section className="download-card">
        <div className="download-brand" aria-hidden="true">
          <span><MapPin size={30} /></span>
        </div>
        <p className="kicker">MEETPUGLIA</p>
        <h1>Vivi la Puglia,<br />un incontro alla volta.</h1>
        <p className="download-message" aria-live="polite">{message}</p>

        <div className="store-actions">
          <a className="store-button" href={APP_STORE_URL}>
            <Smartphone size={22} />
            <span><small>Scarica su</small>App Store</span>
            <ExternalLink size={17} />
          </a>
          <a className="store-button" href={PLAY_STORE_URL}>
            <Smartphone size={22} />
            <span><small>Scarica da</small>Google Play</span>
            <ExternalLink size={17} />
          </a>
        </div>

        <Link className="download-home" href="/">Torna al sito MeetPuglia</Link>
      </section>
    </main>
  );
}
