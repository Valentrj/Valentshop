import Image from "next/image";
import type { Product } from "@/data/products";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="premium-card group rounded-[1.7rem] bg-(--card) p-4 ring-1 ring-black/5">
      <div className={`${product.image.backgroundClass} relative grid aspect-3/4 place-items-center overflow-hidden rounded-[1.25rem]`}>
        <Image
          src={product.image.placeholder}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-black text-[#1b211e] shadow-sm backdrop-blur-sm">TESTE 0{index + 1}</span>
      </div>
      <div className="px-1 pb-2 pt-4">
        <p className="text-xs font-bold text-(--copy)">{product.category}</p>
        <h3 className="mt-1 text-xl font-black tracking-[-.04em]">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-(--copy)">{product.shortDescription}</p>
        <a href={`/produtos/${product.id}`} className="premium-link mt-4 inline-flex items-center gap-1 text-sm font-black text-[#ff5c35]">Ver demonstração <ArrowUpRight /></a>
      </div>
    </article>
  );
}