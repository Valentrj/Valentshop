import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ThemeToggle from "@/app/theme-toggle";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-(--page) text-(--ink)">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold text-white! transition hover:bg-[#ff5c35] hover:text-white! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] focus-visible:text-white!" href="/#achados">Ver testes</Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-10">
        <div className={`${product.image.backgroundClass} relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-[#1b211e]/15 sm:p-4`}>
          <Image
            src={product.image.placeholder}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="rounded-[1.25rem] object-cover"
          />
        </div>

        <div className="max-w-xl">
          <Link href="/#achados" className="text-sm font-bold text-(--muted) underline underline-offset-4 transition hover:text-[#ff5c35]">← Voltar para produtos</Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-black tracking-[.16em]">
            <p className="text-[#ff5c35]">{product.status.toUpperCase()}</p>
            <span className="size-1 rounded-full bg-[#ff5c35]" />
            <p className="text-(--muted)">{product.category.toUpperCase()}</p>
          </div>
          <h1 className="mt-2 text-4xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">{product.name}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-(--copy)">{product.shortDescription}</p>
          <div className="mt-8 border-y border-(--border) py-5">
            <h2 className="text-sm font-black tracking-[.12em]">CARACTERÍSTICAS</h2>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs font-bold text-(--muted)">Categoria</dt>
                <dd className="mt-1 text-sm font-black">{product.category}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold text-(--muted)">Status</dt>
                <dd className="mt-1 text-sm font-black">{product.status}</dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={product.videoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e34a27]">🎥 Ver demonstração no TikTok ↗</a>
            <a href={product.productLink} className="inline-flex items-center justify-center rounded-full bg-[#1b211e] px-5 py-3.5 text-sm font-bold text-white! transition hover:bg-[#ff5c35] hover:text-white! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] focus-visible:text-white!">Ver produto</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-(--border)"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-(--copy) sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div className="flex items-center gap-2 font-black text-(--ink)"><span className="grid size-6 place-items-center rounded-full bg-[#ff5c35] text-xs text-white">V</span> Valent Shop</div><p>© 2026 Valent Shop. Produtos testados e mostrados em vídeo.</p><div className="flex gap-4 font-semibold"><a href="#">Instagram</a><a href="#">YouTube</a></div></div></footer>
    </main>
  );
}