import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import ThemeToggle from "@/app/theme-toggle";
import { brands } from "@/data/brands";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export default async function BrandPage({ params }: PageProps<"/marcas/[slug]">) {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-(--page) text-(--ink)">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </Link>
        <div className="flex items-center gap-2"><ThemeToggle /><Link className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold text-white!" href="/#marcas">Ver marcas</Link></div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10">
        <Link href="/#marcas" className="text-sm font-bold text-(--muted) underline underline-offset-4 hover:text-[#ff5c35]">← Voltar para marcas</Link>
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-(--border) bg-(--card)">
          {brand.banner ? (
            <div className="relative aspect-[2.5/1] min-h-48">
              <Image src={brand.banner} alt={`Banner ${brand.name}`} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
            </div>
          ) : (
            <div className="flex min-h-52 items-center bg-gradient-to-br from-[#ff5c35]/15 via-(--card) to-[#cce6dc]/50 px-7 py-10 sm:px-12">
              <div><p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">DESTAQUE DA MARCA</p><h1 className="mt-2 text-4xl font-black tracking-[-.06em] sm:text-6xl">{brand.name}</h1></div>
            </div>
          )}
          <div className="p-6 sm:p-10">
            <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">VÍDEOS DA MARCA</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-.05em] sm:text-3xl">Veja a {brand.name} em ação.</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-(--copy)">{brand.description}</p>
            {brand.videos.length ? (
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {brand.videos.map((video) => <article key={video.videoLink} className="rounded-2xl border border-(--border) bg-(--section) p-5"><h3 className="font-black">{video.title}</h3><a href={video.videoLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-[#ff5c35] px-4 py-2.5 text-sm font-bold text-white">Assistir no TikTok ↗</a></article>)}
              </div>
            ) : (
              <div className="mt-7 rounded-2xl border border-dashed border-(--border) bg-(--section) p-5 text-sm leading-relaxed text-(--muted)">
                Os vídeos desta marca aparecerão aqui. Adicione os links e títulos em <code className="font-bold text-(--ink)">src/data/brands.ts</code> e, para trocar o banner, coloque a imagem em <code className="font-bold text-(--ink)">public/marcas</code> e informe o caminho no cadastro da marca.
              </div>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
