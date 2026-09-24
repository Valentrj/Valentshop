"use client";

import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/product-card";
import type { Product } from "@/data/products";

type HomeFeaturedProductsProps = {
  products: Product[];
};

export default function HomeFeaturedProducts({ products }: HomeFeaturedProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", ...new Set(products.map((product) => product.category))];
  const filteredProducts =
    selectedCategory === "Todos"
      ? products
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
            className={`rounded-full px-4 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] ${selectedCategory === category ? "bg-[#ff5c35] text-white" : "border border-(--border) text-(--muted) hover:border-[#ff5c35] hover:text-[#ff5c35]"}`}
          >
            {category}
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
