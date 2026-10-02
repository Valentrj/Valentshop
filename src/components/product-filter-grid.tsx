"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/product-card";
import type { Product } from "@/data/products";

type ProductFilterGridProps = {
  products: Product[];
};

export default function ProductFilterGrid({ products }: ProductFilterGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("busca") ?? "");
  const selectedCategory = searchParams.get("categoria") ?? "Todos";
  const selectedOrder = searchParams.get("ordem") ?? "recentes";
  const categories = ["Todos", ...new Set(products.map((product) => product.category))];

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    const filtered = products.filter((product) =>
      (selectedCategory === "Todos" || product.category === selectedCategory) &&
      (!normalizedQuery || `${product.name} ${product.category}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery)),
    );
    return [...filtered].sort((first, second) => selectedOrder === "az" ? first.name.localeCompare(second.name, "pt-BR") : second.order - first.order);
  }, [products, query, selectedCategory, selectedOrder]);

  function updateFilters(next: { category?: string; order?: string; search?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    const category = next.category ?? selectedCategory;
    const order = next.order ?? selectedOrder;
    const search = next.search ?? query;
    if (category === "Todos") params.delete("categoria"); else params.set("categoria", category);
    if (order === "recentes") params.delete("ordem"); else params.set("ordem", order);
    if (search.trim()) params.set("busca", search.trim()); else params.delete("busca");
    router.replace(`${pathname}${params.size ? `?${params.toString()}` : ""}`, { scroll: false });
  }

  return (
    <>
      <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="product-search">Buscar produto</label>
        <input id="product-search" type="search" value={query} onChange={(event) => { setQuery(event.target.value); updateFilters({ search: event.target.value }); }} placeholder="Buscar produto ou categoria" className="w-full rounded-full border border-(--border) bg-(--card) px-5 py-3 text-sm text-(--ink) outline-none placeholder:text-(--muted) focus:border-[#ff5c35] focus:ring-2 focus:ring-[#ff5c35]/20" />
        <label className="sr-only" htmlFor="product-order">Ordenar produtos</label>
        <select id="product-order" value={selectedOrder} onChange={(event) => updateFilters({ order: event.target.value })} className="rounded-full border border-(--border) bg-(--card) px-5 py-3 text-sm font-bold text-(--ink) outline-none focus:border-[#ff5c35]">
          <option value="recentes">Mais recentes</option><option value="az">A–Z</option>
        </select>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Filtrar produtos por categoria">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            aria-pressed={selectedCategory === category}
            onClick={() => updateFilters({ category })}
            className={`rounded-full px-4 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] ${selectedCategory === category ? "bg-[#ff5c35] text-white" : "border border-(--border) text-(--muted) hover:border-[#ff5c35] hover:text-[#ff5c35]"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
      </div>
      {filteredProducts.length === 0 && <p className="mt-8 rounded-[1.5rem] border border-dashed border-(--border) p-6 text-center text-(--copy)">Nenhum produto encontrado. Tente outro nome ou categoria.</p>}
    </>
  );
}
