"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ProductVideoContextValue = {
  activeVideoUrl: string;
  setActiveVideoUrl: (url: string) => void;
};

const ProductVideoContext = createContext<ProductVideoContextValue | null>(null);

type ProductVideoProviderProps = {
  initialVideoUrl: string;
  children: ReactNode;
};

export function ProductVideoProvider({ initialVideoUrl, children }: ProductVideoProviderProps) {
  const [activeVideoUrl, setActiveVideoUrl] = useState(initialVideoUrl);

  return (
    <ProductVideoContext.Provider value={{ activeVideoUrl, setActiveVideoUrl }}>
      {children}
    </ProductVideoContext.Provider>
  );
}

export function useProductVideo() {
  const context = useContext(ProductVideoContext);

  if (!context) {
    throw new Error("useProductVideo must be used inside ProductVideoProvider");
  }

  return context;
}