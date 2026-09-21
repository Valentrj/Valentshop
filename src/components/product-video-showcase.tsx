"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import type { ProductVideo } from "@/data/products";

declare global {
  interface Window {
    tiktok?: {
      embed?: {
        lib?: {
          render: () => void;
        };
      };
    };
  }
}

type ProductVideoShowcaseProps = {
  videos: ProductVideo[];
};

export default function ProductVideoShowcase({ videos }: ProductVideoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videos[activeIndex];

  useEffect(() => {
    window.tiktok?.embed?.lib?.render();
  }, [activeIndex]);

  if (!activeVideo) return null;

  return (
    <div className="mt-10">
      {videos.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2" aria-label="Selecionar vídeo">
          {videos.map((video, index) => (
            <button
              type="button"
              key={video.url}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${index === activeIndex ? "bg-[#ff5c35] text-white" : "border border-(--border) text-(--muted) hover:border-[#ff5c35] hover:text-[#ff5c35]"}`}
            >
              {video.label}
            </button>
          ))}
        </div>
      )}
      <p className="mb-4 text-lg font-black tracking-[-.03em]">{activeVideo.label}</p>
      <div className="overflow-hidden rounded-[1.7rem] bg-(--section) p-4 sm:p-6">
        <blockquote
          key={activeVideo.url}
          className="tiktok-embed"
          cite={activeVideo.url}
          data-video-id={activeVideo.id}
          style={{ maxWidth: "605px", minWidth: "325px", margin: "0 auto" }}
        />
      </div>
      <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" onLoad={() => window.tiktok?.embed?.lib?.render()} />
    </div>
  );
}