"use client";

import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/product-card";
import type { Product } from "@/data/products";
import { useCategoryLabel } from "@/components/language-provider";

type HomeFeaturedProductsProps = {
  products: Product[];
};

export default function HomeFeaturedProducts({ products }: HomeFeaturedProductsProps) {
  const categoryLabel = useCategoryLabel();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", "Mais comprados", ...new Set(products.map((product) => product.category))];
  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : selectedCategory === "Mais comprados"
        ? products.filter((product) => product.bestSeller)
        : products.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, 3);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2" aria-label="Filtrar produtos por categoria na página inicial">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            className={`premium-filter rounded-full px-4 py-2.5 text-sm font-bold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] ${selectedCategory === category ? "bg-[#ff5c35] text-white shadow-[#ff5c35]/20" : "border border-(--border) bg-(--card) text-(--muted) hover:border-[#ff5c35] hover:text-[#ff5c35]"}`}
          >
            {categoryLabel(category)}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {visibleProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Link href="/produtos" className="text-sm font-bold underline underline-offset-4 transition hover:text-[#ff5c35]">
          Ver todos os testes
        </Link>
      </div>
    </>
  );
}
