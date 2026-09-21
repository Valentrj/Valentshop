"use client";

import { useProductVideo } from "@/components/product-video-context";

export default function ProductVideoTopLink() {
  const { activeVideoUrl } = useProductVideo();

  return (
    <a href={activeVideoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e34a27]">
      🎥 Ver demonstração no TikTok ↗
    </a>
  );
}