"use client";

import { useState } from "react";
import type { ProductVideo } from "@/data/products";
import { useProductVideo } from "@/components/product-video-context";

type ProductVideoShowcaseProps = {
  videos: ProductVideo[];
};

export default function ProductVideoShowcase({ videos }: ProductVideoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setActiveVideoUrl } = useProductVideo();
  const activeVideo = videos[activeIndex];

  if (!activeVideo) return null;

  return (
    <div className="mt-6">
      {videos.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2" aria-label="Selecionar vídeo">
          {videos.map((video, index) => (
            <a
              href={video.videoLink}
              target="_blank"
              rel="noreferrer"
              key={video.videoLink}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => {
                setActiveIndex(index);
                setActiveVideoUrl(video.videoLink);
              }}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${index === activeIndex ? "bg-[#ff5c35] text-white" : "border border-(--border) text-(--muted) hover:border-[#ff5c35] hover:text-[#ff5c35]"}`}
            >
              {video.title}
            </a>
          ))}
        </div>
      )}
      <div className="rounded-[1.7rem] bg-(--section) p-6 sm:p-8">
        <p className="text-lg font-black tracking-[-.03em]">{activeVideo.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-(--copy)">Assista à demonstração diretamente no TikTok.</p>
      </div>
    </div>
  );
}