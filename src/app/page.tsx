import Image from "next/image";
import Link from "next/link";
import HomeFeaturedProducts from "@/components/home-featured-products";
import { products } from "@/data/products";
import ThemeToggle from "@/app/theme-toggle";
import SiteFooter from "@/components/site-footer";
import { brands } from "@/data/brands";
import LiveStatus from "@/components/live-status";
import LanguageSelector from "@/components/language-selector";
import { T } from "@/components/language-provider";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

const stats = [
  { value: "11k+", label: "SEGUIDORES" },
  { value: String(products.length), label: "TESTES" },
  { value: "100%", label: "REAL" },
];

const recentVideos = products
  .flatMap((product) =>
    product.videos.map((video, index) => ({
      product,
      video,
      index,
      videoId: video.id ?? video.videoLink.match(/\/video\/(\d+)/)?.[1],
    })),
  )
  .sort((first, second) => {
    if (first.videoId && second.videoId) {
      const firstId = BigInt(first.videoId);
      const secondId = BigInt(second.videoId);
      if (firstId !== secondId) return firstId > secondId ? -1 : 1;
    } else if (first.videoId) {
      return -1;
    } else if (second.videoId) {
      return 1;
    }

    return second.product.order - first.product.order || second.index - first.index;
  })
  .slice(0, 3);
const featuredRecentVideo = recentVideos[0];
const supportingRecentVideos = recentVideos.slice(1);

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-(--page) text-(--ink)">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white shadow-[0_10px_20px_rgba(255,92,53,0.25)]">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-(--muted) md:flex" aria-label="Navegação principal">
          <a className="transition hover:text-[#ff5c35]" href="#achados"><T id="nav.products" /></a>
          <a className="transition hover:text-[#ff5c35]" href="#marcas"><T id="nav.brands" /></a>
          <a className="transition hover:text-[#ff5c35]" href="#parcerias"><T id="nav.partnerships" /></a>
        </nav>
        <div className="flex items-center gap-2"><LanguageSelector /><ThemeToggle /><a className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold text-white! transition hover:bg-[#ff5c35] hover:text-white! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] focus-visible:text-white!" href="#achados"><T id="nav.seeTests" /></a></div>
      </header>

      <section id="inicio" className="relative mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="absolute -right-32 top-0 size-80 rounded-full bg-[#f8c9b8] blur-3xl opacity-45" />
        <div className="absolute left-1/3 top-28 size-56 rounded-full bg-[#cce6dc] blur-3xl opacity-60" />
        <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff5c35]/30 to-transparent" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff5c35]/20 bg-[#fff2ee] px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-[#ff5c35] shadow-sm">
              <span className="size-2 rounded-full bg-[#ff5c35]" /><T id="hero.eyebrow" />
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.82] tracking-[-0.082em] sm:text-7xl lg:text-8xl">Valent<br /><em className="font-serif font-normal tracking-[-0.09em] text-[#ff5c35]">Shop.</em></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-(--muted) sm:text-xl"><T id="hero.description" /></p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-(--copy)"><T id="hero.detail" /></p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#achados" className="premium-cta inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,92,53,0.28)] hover:bg-[#e34a27]"><T id="hero.cta" /> <ArrowUpRight /></a>
              <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" className="premium-cta inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card)/80 px-5 py-3.5 text-sm font-bold text-(--ink) shadow-[0_10px_22px_rgba(27,33,30,0.04)] hover:border-[#ff5c35] hover:text-[#ff5c35]"><T id="hero.whatsapp" /></a>
            </div>
            <a href="#marcas" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ff5c35] transition hover:text-[#e34a27]"><T id="hero.brands" /> <span aria-hidden="true">↓</span></a>

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
                <LiveStatus />
                <div className="relative z-10 mx-auto my-auto aspect-square w-full max-w-88 overflow-hidden rounded-full border border-white/15 shadow-[0_0_45px_rgba(255,92,53,0.25)]">
                  <Image src="/perfil-valent3.png" alt="Valent, criador do Valent Shop" fill sizes="(min-width: 1024px) 22rem, 80vw" className="object-contain object-center" priority />
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
              <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]"><T id="brands.eyebrow" /></p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl"><T id="brands.title" /></h2>
              <p className="mt-2 max-w-md leading-relaxed text-(--copy)"><T id="brands.description" /></p>
            </div>
            <span className="hidden shrink-0 text-sm font-semibold text-(--muted) sm:block"><T id="brands.hint" /></span>
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
            <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]"><T id="recent.eyebrow" /></p>
            <h2 className="mt-1 text-2xl font-black tracking-[-.05em] sm:text-3xl"><T id="recent.title" /></h2>
          </div>
          <a href="#achados" className="text-sm font-bold text-(--muted) underline underline-offset-4 transition hover:text-[#ff5c35]"><T id="recent.all" /></a>
        </div>
        {featuredRecentVideo && (
          <article className="overflow-hidden rounded-[2rem] border border-(--border) bg-[#1b211e] text-white shadow-[0_20px_45px_rgba(27,33,30,0.14)]">
            <div className="grid lg:grid-cols-[.82fr_1.18fr]">
              <a href={featuredRecentVideo.video.videoLink} target="_blank" rel="noreferrer" aria-label={`Assistir ${featuredRecentVideo.video.title} de ${featuredRecentVideo.product.name} no TikTok`} className="group relative min-h-72 overflow-hidden border-b border-white/10 bg-[#101512] sm:min-h-88 lg:min-h-full lg:border-b-0 lg:border-r">
                {featuredRecentVideo.product.image ? (
                  <Image src={featuredRecentVideo.product.image.placeholder} alt={featuredRecentVideo.product.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]" />
                ) : (
                  <div className="flex h-full items-end bg-gradient-to-br from-[#ff5c35]/15 via-transparent to-[#cce6dc]/40 p-7 text-3xl font-black tracking-[-.06em]">{featuredRecentVideo.product.name}</div>
                )}
                <span className="absolute left-5 top-5 rounded-full bg-[#ff5c35] px-3 py-1.5 text-[10px] font-black tracking-[.12em] text-white"><T id="recent.new" /></span>
              </a>
              <div className="flex flex-col p-7 sm:p-10">
                <p className="text-[10px] font-black tracking-[.16em] text-[#ff977d]">{featuredRecentVideo.product.category.toUpperCase()}</p>
                <h3 className="mt-3 max-w-xl text-3xl font-black leading-[.95] tracking-[-.06em] sm:text-5xl">{featuredRecentVideo.product.name}</h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#c4cec8]">{featuredRecentVideo.video.title}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={featuredRecentVideo.video.videoLink} target="_blank" rel="noreferrer" className="premium-cta inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#e34a27]"><T id="recent.watch" /> <ArrowUpRight /></a>
                  <Link href={`/produtos/${featuredRecentVideo.product.id}`} className="premium-cta inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#ff977d] hover:text-[#ff977d]"><T id="recent.product" /> <ArrowUpRight /></Link>
                </div>
              </div>
            </div>
          </article>
        )}
        {supportingRecentVideos.length > 0 && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {supportingRecentVideos.map(({ product, video }) => (
              <a key={video.videoLink} href={video.videoLink} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-(--border) bg-(--card) p-3 shadow-[0_8px_20px_rgba(27,33,30,0.04)] transition hover:-translate-y-0.5 hover:border-[#ff5c35]/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35]">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-(--section)">
                  {product.image ? (
                    <Image src={product.image.placeholder} alt={product.name} fill sizes="64px" className="object-cover transition duration-300 group-hover:scale-105" />
                  ) : (
                    <span className="grid h-full place-items-center px-2 text-center text-[9px] font-black leading-tight">{product.name}</span>
                  )}
                </div>
                <div className="min-w-0"><p className="text-[10px] font-black tracking-[.12em] text-[#ff5c35]"><T id="recent.also" /></p><h3 className="mt-1 line-clamp-2 text-sm font-black leading-snug">{product.name} — {video.title}</h3></div>
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
              <p className="text-xs font-black tracking-[.16em] text-[#ff5c35]"><T id="tested.eyebrow" /></p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl"><T id="tested.title" /></h2>
              <p className="mt-3 max-w-md leading-relaxed text-(--copy)"><T id="tested.description" /></p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-(--border) bg-gradient-to-b from-(--card) to-(--section) p-4 shadow-[0_18px_35px_rgba(27,33,30,0.04)] sm:p-5">
            <HomeFeaturedProducts products={products} />
          </div>
        </div>
      </section>

      <section id="parcerias" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-[#ff5c35] p-7 text-white shadow-[0_24px_50px_rgba(255,92,53,0.22)] sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-xs font-black tracking-[.16em] text-[#ffd1c3]"><T id="partners.eyebrow" /></p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-[.95] tracking-[-.06em] sm:text-5xl"><T id="partners.title" /></h2>
          </div>
          <div>
            <p className="leading-relaxed text-[#ffe0d7]"><T id="partners.description" /></p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-black"><a href="#achados" className="rounded-full border border-white/30 px-3 py-2">Produtos testados</a><a href="https://www.tiktok.com/@valentachados?lang=pt-BR" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-3 py-2">TikTok Shop</a><a href="https://www.tiktok.com/@valentshoprj" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-3 py-2">Vídeos & lives</a></div>
            <a href="https://wa.me/5521994270888" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#1b211e]! transition hover:bg-[#ffe772] hover:text-[#1b211e]! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:text-[#1b211e]!"><T id="partners.cta" /> <ArrowUpRight /></a>
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
