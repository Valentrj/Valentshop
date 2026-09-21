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
    <article className="group rounded-[1.7rem] bg-[var(--card)] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1b211e]/10">
      <div className={`${product.image.backgroundClass} relative grid aspect-[1.15] place-items-center overflow-hidden rounded-[1.25rem]`}>
        <span className="text-7xl transition duration-300 group-hover:scale-110">{product.image.placeholder}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-black text-[#1b211e]">TESTE 0{index + 1}</span>
      </div>
      <div className="px-1 pb-2 pt-4">
        <p className="text-xs font-bold text-[var(--copy)]">{product.category}</p>
        <h3 className="mt-1 text-xl font-black tracking-[-.04em]">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--copy)]">{product.shortDescription}</p>
        <a href={product.videoLink} className="mt-4 inline-flex items-center gap-1 text-sm font-black text-[#ff5c35]">Ver demonstração <ArrowUpRight /></a>
      </div>
    </article>
  );
}