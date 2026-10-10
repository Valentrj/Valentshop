import Image from "next/image";
import Link from "next/link";
import HomeFeaturedProducts from "@/components/home-featured-products";
import VideoCarousel from "@/components/video-carousel";
import { products } from "@/data/products";
import ThemeToggle from "@/app/theme-toggle";
import SiteFooter from "@/components/site-footer";
import { brands } from "@/data/brands";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

const stats = [
  { value: "11k+", label: "SEGUIDORES" },
  { value: String(products.length), label: "TESTES" },
  { value: "100%", label: "REAL" },
];

const recentProducts = [...products]
  .sort((first, second) => second.order - first.order)
  .slice(0, 3);
const featuredReview = recentProducts[0];
const supportingRecentProducts = recentProducts.slice(1);

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-(--page) text-(--ink)">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white shadow-[0_10px_20px_rgba(255,92,53,0.25)]">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-(--muted) md:flex" aria-label="Navegação principal">
          <a className="transition hover:text-[#ff5c35]" href="#achados">Produtos testados</a>
          <a className="transition hover:text-[#ff5c35]" href="#videos">Vídeos</a>
          <a className="transition hover:text-[#ff5c35]" href="#marcas">Marcas</a>
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
            <h1 className="max-w-3xl text-5xl font-black leading-[0.82] tracking-[-0.082em] sm:text-7xl lg:text-8xl">Valent<br /><em className="font-serif font-normal tracking-[-0.09em] text-[#ff5c35]">Shop.</em></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-(--muted) sm:text-xl">Produtos reais, testados na prática e <strong className="font-extrabold text-(--ink)">aprovados antes de recomendar.</strong></p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-(--copy)">Eu testo, uso e mostro cada produto de verdade antes de indicar para você.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#achados" className="premium-cta inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,92,53,0.28)] hover:bg-[#e34a27]">Ver produtos testados <ArrowUpRight /></a>
              <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" className="premium-cta inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card)/80 px-5 py-3.5 text-sm font-bold text-(--ink) shadow-[0_10px_22px_rgba(27,33,30,0.04)] hover:border-[#ff5c35] hover:text-[#ff5c35]">Falar no WhatsApp</a>
            </div>
            <a href="#marcas" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ff5c35] transition hover:text-[#e34a27]">Conheça as marcas em destaque <span aria-hidden="true">↓</span></a>

            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.4rem] border border-(--border) bg-(--card)/90 p-3 shadow-[0_10px_25px_rgba(27,33,30,0.04)] backdrop-blur-sm">
                  <p className="text-2xl font-black tracking-[-.06em] text-(--ink)">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-black tracking-[0.12em] text-(--muted)">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.8rem] bg-gradient-to-br from-[#ff5c35]/15 via-transparent to-[#cce6dc]/30 blur-2xl" />
            <div className="relative aspect-[.86] rotate-3 rounded-[2.5rem] bg-[#1b211e] p-4 shadow-[0_28px_60px_rgba(27,33,30,0.22)] sm:p-5">
              <div className="relative flex h-full -rotate-3 flex-col overflow-hidden rounded-4xl bg-[#101512] p-5 sm:p-6">
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#ff5c35]/15 blur-2xl" />
                <span className="relative z-10 self-start rounded-full bg-[#ff5c35] px-3 py-1.5 text-[10px] font-black tracking-widest text-white">POR TRÁS DOS TESTES</span>
                <div className="relative z-10 mx-auto my-auto aspect-square w-full max-w-88 overflow-hidden rounded-full border-8 border-[#ff5c35]/25 shadow-[0_0_45px_rgba(255,92,53,0.25)]">
                  <Image src="/perfil-valent2.png" alt="Valent, criador do Valent Shop" fill sizes="(min-width: 1024px) 22rem, 80vw" className="object-cover object-top" priority />
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

      <section id="marcas" className="border-y border-(--border) bg-(--section) py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div>
              <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">MARCAS EM DESTAQUE</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl">Explore por marca.</h2>
              <p className="mt-2 max-w-md leading-relaxed text-(--copy)">Vídeos e produtos de cada marca reunidos em um só lugar.</p>
            </div>
            <span className="hidden shrink-0 text-sm font-semibold text-(--muted) sm:block">Toque para explorar ↗</span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-3">
            {brands.map((brand) => (
              <a key={brand.slug} href={`/marcas/${brand.slug}`} aria-label={`Ver vídeos e destaques da marca ${brand.name}`} className="group relative block aspect-video overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-[0_12px_28px_rgba(27,33,30,0.08)] transition hover:-translate-y-1 hover:border-[#ff5c35]/60 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35]">
                <Image src={brand.banner} alt={`Banner ${brand.name}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <span aria-hidden="true" className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/95 text-lg font-bold text-[#1b211e] shadow-sm transition group-hover:bg-[#ff5c35] group-hover:text-white">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">REVIEW EM DESTAQUE</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-.05em] sm:text-3xl">O teste mais recente.</h2>
          </div>
          <a href="#achados" className="text-sm font-bold text-(--muted) underline underline-offset-4 transition hover:text-[#ff5c35]">Ver todos</a>
        </div>
        {featuredReview && (
          <article className="overflow-hidden rounded-[2rem] border border-(--border) bg-[#1b211e] text-white shadow-[0_20px_45px_rgba(27,33,30,0.14)]">
            <div className="grid lg:grid-cols-[.82fr_1.18fr]">
              <a href={featuredReview.videos[0]?.videoLink} target="_blank" rel="noreferrer" aria-label={`Assistir review de ${featuredReview.name} no TikTok`} className={`${featuredReview.image.backgroundClass} group relative min-h-72 overflow-hidden sm:min-h-88 lg:min-h-full`}>
                <Image src={featuredReview.image.placeholder} alt={featuredReview.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]" />
                <span className="absolute left-5 top-5 rounded-full bg-[#ff5c35] px-3 py-1.5 text-[10px] font-black tracking-[.12em] text-white">NOVO TESTE</span>
              </a>
              <div className="flex flex-col p-7 sm:p-10">
                <p className="text-[10px] font-black tracking-[.16em] text-[#ff977d]">{featuredReview.category.toUpperCase()}</p>
                <h3 className="mt-3 max-w-xl text-3xl font-black leading-[.95] tracking-[-.06em] sm:text-5xl">{featuredReview.name}</h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#c4cec8]">{featuredReview.shortDescription}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={featuredReview.videos[0]?.videoLink} target="_blank" rel="noreferrer" className="premium-cta inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#e34a27]">Assistir review <ArrowUpRight /></a>
                  <Link href={`/produtos/${featuredReview.id}`} className="premium-cta inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#ff977d] hover:text-[#ff977d]">Ver produto <ArrowUpRight /></Link>
                </div>
              </div>
            </div>
          </article>
        )}
        {supportingRecentProducts.length > 0 && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {supportingRecentProducts.map((product) => (
              <a key={product.id} href={product.videos[0]?.videoLink} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-(--border) bg-(--card) p-3 shadow-[0_8px_20px_rgba(27,33,30,0.04)] transition hover:-translate-y-0.5 hover:border-[#ff5c35]/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35]">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-(--section)">
                  <Image src={product.image.placeholder} alt={product.name} fill sizes="64px" className="object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="min-w-0"><p className="text-[10px] font-black tracking-[.12em] text-[#ff5c35]">TAMBÉM RECENTE</p><h3 className="mt-1 line-clamp-2 text-sm font-black leading-snug">{product.name}</h3></div>
                <span aria-hidden="true" className="ml-auto text-lg text-[#ff5c35]">↗</span>
              </a>
            ))}
          </div>
        )}
      </section>

      <section id="achados" className="border-y border-(--border) bg-(--section) py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">TESTADO POR MIM</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl">Produtos que passei a testar e aprovar.</h2>
              <p className="mt-3 max-w-md leading-relaxed text-(--copy)">Veja os produtos que já passaram pelos meus testes e revisão real.</p>
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
            <p className="mt-3 max-w-md leading-relaxed text-(--copy)">Testes reais, mostrando como eles funcionam na prática.</p>
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
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-[.95] tracking-[-.06em] sm:text-5xl">Conteúdo que mostra seu produto com clareza e impacto.</h2>
          </div>
          <div>
            <p className="leading-relaxed text-[#ffe0d7]">Produzo vídeos de demonstração, testes reais e conteúdo para TikTok Shop, com foco em mostrar valor e gerar confiança.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-black"><a href="#videos" className="rounded-full border border-white/30 px-3 py-2">Demonstração</a><a href="https://www.tiktok.com/@valentachados?lang=pt-BR" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-3 py-2">TikTok Shop</a><a href="https://www.tiktok.com/@valentshoprj" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-3 py-2">Vídeos & lives</a></div>
            <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#1b211e]! transition hover:bg-[#ffe772] hover:text-[#1b211e]! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:text-[#1b211e]!">Quero anunciar meu produto <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="premium-cta fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]">
        <span aria-hidden="true" className="text-2xl leading-none">✆</span>
      </a>
    </main>
  );
}
