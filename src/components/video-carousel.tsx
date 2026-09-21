"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Product } from "@/data/products";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

type VideoCarouselProps = {
  products: Product[];
};

export default function VideoCarousel({ products }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const product = products[activeIndex];
  const primaryVideo = product.videos[0]?.videoLink;

  function showSlide(index: number) {
    setActiveIndex((index + products.length) % products.length);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 40) {
      showSlide(activeIndex + (distance < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  }

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-[#1b211e] text-white shadow-xl shadow-[#1b211e]/10">
        <article className="grid sm:grid-cols-[.9fr_1.1fr]">
          <div className="relative aspect-3/4 min-h-80">
            <Image
              src={product.image.placeholder}
              alt={product.name}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-contain transition duration-500"
              priority
            />
            <span className="absolute left-4 top-4 rounded-full bg-[#1b211e] px-3 py-1.5 text-[10px] font-black">TESTE 0{activeIndex + 1}</span>
          </div>
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <p className="text-[10px] font-black tracking-[.14em] text-[#ff977d]">{product.category.toUpperCase()}</p>
            <h3 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-tighter sm:text-4xl">{product.name}</h3>
            <p className="mt-4 max-w-md leading-relaxed text-[#c4cec8]">{product.shortDescription}</p>
            <a
              href={primaryVideo}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-1 pt-8 text-sm font-bold text-[#ff977d] underline underline-offset-4 transition hover:text-white"
            >
              Assistir no TikTok <ArrowUpRight />
            </a>
          </div>
        </article>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Produto anterior"
          onClick={() => showSlide(activeIndex - 1)}
          className="grid size-11 place-items-center rounded-full border border-(--border) text-xl transition hover:border-[#ff5c35] hover:text-[#ff5c35]"
        >
          ←
        </button>
        <div className="flex items-center gap-2" aria-label="Selecionar produto">
          {products.map((item, index) => (
            <button
              type="button"
              key={item.id}
              aria-label={`Ir para ${item.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showSlide(index)}
              className={`size-2.5 rounded-full transition ${index === activeIndex ? "bg-[#ff5c35]" : "bg-(--border) hover:bg-[#ff977d]"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo produto"
          onClick={() => showSlide(activeIndex + 1)}
          className="grid size-11 place-items-center rounded-full border border-(--border) text-xl transition hover:border-[#ff5c35] hover:text-[#ff5c35]"
        >
          →
        </button>
      </div>
    </div>
  );
}