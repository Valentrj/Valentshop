"use client";

import { useState } from "react";

const storageKey = "valent-shop-favorites";

function getFavorites() {
  try {
    return new Set<string>(JSON.parse(window.localStorage.getItem(storageKey) ?? "[]"));
  } catch {
    return new Set<string>();
  }
}

export default function FavoriteButton({ productId, productName }: { productId: string; productName: string }) {
  const [isFavorite, setIsFavorite] = useState(() => typeof window !== "undefined" && getFavorites().has(productId));

  function toggleFavorite() {
    const favorites = getFavorites();
    if (favorites.has(productId)) favorites.delete(productId);
    else favorites.add(productId);
    window.localStorage.setItem(storageKey, JSON.stringify([...favorites]));
    setIsFavorite(favorites.has(productId));
  }

  return (
    <button type="button" onClick={toggleFavorite} aria-pressed={isFavorite} aria-label={`${isFavorite ? "Remover" : "Salvar"} ${productName} nos favoritos`} className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full shadow-sm backdrop-blur-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] ${isFavorite ? "bg-[#ff5c35] text-white" : "bg-white/85 text-[#1b211e] hover:text-[#ff5c35]"}`}>
      <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
    </button>
  );
}
