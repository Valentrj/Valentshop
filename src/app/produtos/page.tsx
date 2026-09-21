import Link from "next/link";
import ProductCard from "@/components/product-card";
import { products } from "@/data/products";
import ThemeToggle from "@/app/theme-toggle";

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-(--page) text-(--ink)">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold text-white! transition hover:bg-[#ff5c35] hover:text-white!" href="/#achados">Voltar para início</Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10">
        <Link href="/#achados" className="text-sm font-bold text-(--muted) underline underline-offset-4 transition hover:text-[#ff5c35]">← Voltar para produtos</Link>
        <div className="mt-8">
          <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">PRODUTOS TESTADOS</p>
          <h1 className="mt-2 text-4xl font-black tracking-[-.06em] sm:text-6xl">Todos os testes.</h1>
          <p className="mt-3 max-w-md leading-relaxed text-(--copy)">Veja todos os produtos que já passaram pelos testes.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
        </div>
      </section>

      <footer className="border-t border-(--border)"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-(--copy) sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div className="flex items-center gap-2 font-black text-(--ink)"><span className="grid size-6 place-items-center rounded-full bg-[#ff5c35] text-xs text-white">V</span> Valent Shop</div><p>© 2026 Valent Shop. Produtos testados e mostrados em vídeo.</p><div className="flex gap-4 font-semibold"><a href="#">Instagram</a><a href="#">YouTube</a></div></div></footer>
    </main>
  );
}