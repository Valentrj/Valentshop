import Image from "next/image";
import Link from "next/link";
import HomeFeaturedProducts from "@/components/home-featured-products";
import { products } from "@/data/products";
import ThemeToggle from "@/app/theme-toggle";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-(--page) text-(--ink)">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-(--muted) md:flex" aria-label="Navegação principal">
          <a className="transition hover:text-[#ff5c35]" href="#achados">Produtos testados</a>
          <a className="transition hover:text-[#ff5c35]" href="#videos">Vídeos</a>
          <a className="transition hover:text-[#ff5c35]" href="#parcerias">Parcerias</a>
        </nav>
        <div className="flex items-center gap-2"><ThemeToggle /><a className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold text-white! transition hover:bg-[#ff5c35] hover:text-white! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] focus-visible:text-white!" href="#achados">Ver testes</a></div>
      </header>

      <section id="inicio" className="relative mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="absolute -right-32 top-0 size-80 rounded-full bg-[#f8c9b8] blur-3xl opacity-45" />
        <div className="absolute left-1/3 top-28 size-56 rounded-full bg-[#cce6dc] blur-3xl opacity-60" />
        <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff5c35]/30 to-transparent" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff5c35]/20 bg-[#fff2ee] px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-[#ff5c35] shadow-sm">
              <span className="size-2 rounded-full bg-[#ff5c35]" />PRODUTOS EM AÇÃO
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.92] tracking-[-0.075em] sm:text-7xl lg:text-8xl">Valent<br /><em className="font-serif font-normal tracking-[-0.09em] text-[#ff5c35]">Shop.</em></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-(--muted) sm:text-xl">Achados, testes e produtos que <strong className="font-extrabold text-(--ink)">valem a pena.</strong></p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-(--copy)">Eu testo, demonstro e mostro cada produto em uso antes de divulgar.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#achados" className="premium-cta inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,92,53,0.28)] hover:bg-[#e34a27]">Ver produtos testados <ArrowUpRight /></a>
              <a href="#videos" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold underline decoration-[#b4beb8] underline-offset-4 transition hover:text-[#ff5c35]">Assistir às demonstrações <span aria-hidden="true">↓</span></a>
            </div>

            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-(--border) bg-(--card)/90 p-3 shadow-[0_10px_25px_rgba(27,33,30,0.04)] backdrop-blur-sm">
                <p className="text-2xl font-black tracking-[-.06em] text-(--ink)">11k+</p>
                <p className="mt-1 text-[10px] font-black tracking-[0.12em] text-(--muted)">SEGUIDORES</p>
              </div>
              <div className="rounded-[1.4rem] border border-(--border) bg-(--card)/90 p-3 shadow-[0_10px_25px_rgba(27,33,30,0.04)] backdrop-blur-sm">
                <p className="text-2xl font-black tracking-[-.06em] text-(--ink)">12</p>
                <p className="mt-1 text-[10px] font-black tracking-[0.12em] text-(--muted)">TESTES</p>
              </div>
              <div className="rounded-[1.4rem] border border-(--border) bg-(--card)/90 p-3 shadow-[0_10px_25px_rgba(27,33,30,0.04)] backdrop-blur-sm">
                <p className="text-2xl font-black tracking-[-.06em] text-(--ink)">100%</p>
                <p className="mt-1 text-[10px] font-black tracking-[0.12em] text-(--muted)">REAL</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.8rem] bg-gradient-to-br from-[#ff5c35]/15 via-transparent to-[#cce6dc]/30 blur-2xl" />
            <div className="relative aspect-[.86] rotate-3 rounded-[2.5rem] bg-[#1b211e] p-4 shadow-[0_28px_60px_rgba(27,33,30,0.22)] sm:p-5">
              <div className="relative flex h-full -rotate-3 flex-col overflow-hidden rounded-4xl bg-[#101512] p-5 sm:p-6">
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#ff5c35]/15 blur-2xl" />
                <span className="relative z-10 self-start rounded-full bg-[#ff5c35] px-3 py-1.5 text-[10px] font-black tracking-widest text-white">POR TRÁS DOS TESTES</span>
                <div className="relative z-10 mx-auto my-auto aspect-square w-full max-w-88 overflow-hidden rounded-full border-8 border-[#ff5c35]/25 shadow-[0_0_45px_rgba(255,92,53,0.25)]">
                  <Image src="/perfil-valent.png" alt="Valent, criador do Valent Shop" fill sizes="(min-width: 1024px) 22rem, 80vw" className="object-contain" priority />
                </div>
                <div className="relative z-10 mt-5 flex flex-wrap gap-2 text-[10px] font-black tracking-wide text-white">
                  <span className="rounded-full border border-[#ff5c35]/60 px-2.5 py-1.5 text-[#ffb59e]">@valentachados</span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1.5">11,4 mil seguidores</span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1.5">Testes reais</span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1.5">TikTok Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achados" className="border-y border-(--border) bg-(--section) py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">TESTADO POR MIM</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl">Produtos que eu testei.</h2>
              <p className="mt-3 max-w-md leading-relaxed text-(--copy)">Veja os produtos que já passaram pelos meus testes.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-(--border) bg-gradient-to-b from-(--card) to-(--section) p-4 shadow-[0_18px_35px_rgba(27,33,30,0.04)] sm:p-5">
            <HomeFeaturedProducts products={products} />
          </div>
        </div>
      </section>

      <section id="videos" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9">
            <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">VÍDEOS DE DEMONSTRAÇÃO</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl">Veja os produtos em ação.</h2>
            <p className="mt-3 max-w-md leading-relaxed text-(--copy)">Testes reais, mostrando os produtos como eles são.</p>
          </div>
          <div className="rounded-[2rem] border border-(--border) bg-(--card)/80 p-3 shadow-[0_18px_35px_rgba(27,33,30,0.04)] sm:p-4">
            <VideoCarousel products={products} />
          </div>
        </div>
      </section>

      <section id="parcerias" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-[#ff5c35] p-7 text-white shadow-[0_24px_50px_rgba(255,92,53,0.22)] sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-xs font-black tracking-[.16em] text-[#ffd1c3]">PARA MARCAS E LOJAS</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-[.95] tracking-[-.06em] sm:text-5xl">Conteúdo que mostra seu produto de verdade.</h2>
          </div>
          <div>
            <p className="leading-relaxed text-[#ffe0d7]">Produzo vídeos de demonstração, testes de produtos, conteúdo para TikTok Shop e divulgação em vídeos e lives.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-black"><a href="#videos" className="rounded-full border border-white/30 px-3 py-2">Demonstração</a><a href="https://www.tiktok.com/@valentachados?lang=pt-BR" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-3 py-2">TikTok Shop</a><a href="https://www.tiktok.com/@valentshoprj" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-3 py-2">Vídeos & lives</a></div>
            <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#1b211e]! transition hover:bg-[#ffe772] hover:text-[#1b211e]! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:text-[#1b211e]!">Falar sobre parceria <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-(--border)"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-(--copy) sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div className="flex items-center gap-2 font-black text-(--ink)"><span className="grid size-6 place-items-center rounded-full bg-[#ff5c35] text-xs text-white">V</span> Valent Shop</div><p>© 2026 Valent Shop. Produtos testados e mostrados em vídeo.</p><div className="flex gap-4 font-semibold"><a href="#">Instagram</a><a href="#">YouTube</a></div></div></footer>

      <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="premium-cta fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]">
        <span aria-hidden="true" className="text-2xl leading-none">✆</span>
      </a>
    </main>
  );
}

import VideoCarousel from "@/components/video-carousel";
