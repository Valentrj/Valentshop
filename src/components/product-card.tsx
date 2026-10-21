import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import FavoriteButton from "@/components/favorite-button";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const primaryVideo = product.videos[0]?.videoLink;
  const image = product.image;

  return (
    <article className="premium-card group overflow-hidden rounded-[1.7rem] border border-(--border) bg-(--card) p-4 shadow-[0_14px_28px_rgba(27,33,30,0.05)]">
      <div className={`${image?.backgroundClass ?? "bg-(--section)"} relative grid aspect-3/4 place-items-center overflow-hidden rounded-[1.25rem] ring-1 ring-black/5`}>
        <a href={primaryVideo} target="_blank" rel="noreferrer" aria-label={`Assistir demonstração de ${product.name} no TikTok`} className="group/image absolute inset-0 block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff5c35]">
          {image ? (
            <Image src={image.placeholder} alt={product.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 ease-out group-hover/image:scale-105" />
          ) : (
            <div className="flex h-full items-end bg-gradient-to-br from-[#ff5c35]/15 via-transparent to-[#cce6dc]/40 p-5"><span className="text-sm font-black tracking-[-.04em] text-(--ink)">{product.name}</span></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20" />
          <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-black text-[#1b211e] shadow-sm backdrop-blur-sm">TESTE 0{index + 1}</span>
          {product.bestSeller && (
            <span className="absolute bottom-3 left-3 rounded-full bg-[#ff5c35] px-2.5 py-1 text-[10px] font-black tracking-[.08em] text-white shadow-md">MAIS COMPRADO</span>
          )}
        </a>
        <FavoriteButton productId={product.id} productName={product.name} />
      </div>
      <div className="px-1 pb-2 pt-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-[0.12em] text-(--copy)"><span>{product.category}</span><span aria-hidden="true">•</span><span className="text-[#ff5c35]">{product.verdict ?? "TESTADO"}</span></div>
        <h3 className="mt-2 text-xl font-black tracking-[-.05em]">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-(--copy)">{product.shortDescription}</p>
        <Link href={`/produtos/${product.id}`} className="premium-link mt-4 inline-flex items-center gap-1 text-sm font-black text-[#ff5c35]">Ver demonstração <ArrowUpRight /></Link>
      </div>
    </article>
  );
}
