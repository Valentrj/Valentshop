"use client";

import { useEffect, useState } from "react";
import type { LiveStatus as LiveStatusData } from "@/lib/live-status";

export default function LiveStatus() {
  const [status, setStatus] = useState<LiveStatusData | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function refreshStatus() {
      try {
        const response = await fetch("/api/live-status", { cache: "no-store" });
        if (response.ok && isMounted) setStatus(await response.json());
      } catch {
        // O aviso fica oculto se a leitura da configuração não estiver disponível.
      }
    }

    refreshStatus();
    const interval = window.setInterval(refreshStatus, 60_000);
    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  if (!status?.isLive) return null;

  return (
    <a
      href={status.url}
      target="_blank"
      rel="noreferrer"
      className="absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-red-300/40 bg-red-500 px-3 py-2 text-[10px] font-black tracking-[.12em] text-white shadow-[0_8px_20px_rgba(239,68,68,0.35)] transition hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
    >
      <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-white" /></span>
      AO VIVO
    </a>
  );
}
