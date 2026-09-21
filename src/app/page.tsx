const videos = [
  { duration: "08:42", label: "TESTEI POR 7 DIAS", title: "Vale mesmo ter uma cafeteira em casa?", color: "bg-[#e5e0d5]" },
  { duration: "12:10", label: "DEMONSTRAÇÃO REAL", title: "O que eu usaria de novo depois do teste", color: "bg-[#bdd9d0]" },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--page)] text-[var(--ink)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Valent Shop, início">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white">V</span>
          <span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--muted)] md:flex" aria-label="Navegação principal">
          <a className="transition hover:text-[#ff5c35]" href="#achados">Produtos testados</a>
          <a className="transition hover:text-[#ff5c35]" href="#videos">Vídeos</a>
          <a className="transition hover:text-[#ff5c35]" href="#parcerias">Parcerias</a>
        </nav>
        <div className="flex items-center gap-2"><ThemeToggle /><a className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold !text-white transition hover:bg-[#ff5c35] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] focus-visible:!text-white" href="#achados">Ver testes</a></div>
      </header>

      <section id="inicio" className="relative mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="absolute -right-32 top-0 size-80 rounded-full bg-[#f8c9b8] blur-3xl opacity-45" />
        <div className="absolute left-1/3 top-28 size-56 rounded-full bg-[#cce6dc] blur-3xl opacity-60" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-black tracking-[0.16em] text-[#ff5c35]"><span className="size-2 rounded-full bg-[#ff5c35]" />PRODUTOS EM AÇÃO</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[.92] tracking-[-0.075em] sm:text-7xl lg:text-8xl">Valent<br /><em className="font-serif font-normal tracking-[-0.09em] text-[#ff5c35]">Shop.</em></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--muted)] sm:text-xl">Achados, testes e produtos que <strong className="font-extrabold text-[var(--ink)]">valem a pena.</strong></p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--copy)]">Eu testo, demonstro e mostro cada produto em uso antes de divulgar.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#achados" className="inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e34a27]">Ver produtos testados <ArrowUpRight /></a>
              <a href="#videos" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold underline decoration-[#b4beb8] underline-offset-4 transition hover:text-[#ff5c35]">Assistir às demonstrações <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[.86] rotate-3 rounded-[2.5rem] bg-[#1b211e] p-4 shadow-2xl shadow-[#1b211e]/20 sm:p-5">
              <div className="flex h-full rotate-[-3deg] flex-col rounded-[2rem] bg-[#d7f1e8] p-6">
                <div className="flex items-start justify-between"><span className="rounded-full bg-[#1b211e] px-3 py-1.5 text-[10px] font-black tracking-widest text-white">TESTADO</span><span className="font-serif text-4xl italic text-[#ff5c35]">01</span></div>
                <div className="relative my-auto grid aspect-square place-items-center rounded-full border-[14px] border-[var(--page)] bg-[#ffb59e] shadow-lg"><span className="text-8xl drop-shadow-md sm:text-9xl">☕</span><span className="absolute -right-5 bottom-4 grid size-14 place-items-center rounded-full bg-[#ff5c35] text-2xl text-white">▶</span></div>
                <p className="mt-5 text-xs font-black tracking-[.14em] text-[#60766e]">TESTE EM VÍDEO</p><p className="mt-1 text-xl font-black tracking-[-.05em]">Produto em uso, opinião sem roteiro.</p>
              </div>
            </div>
            <span className="absolute -bottom-5 -left-5 -rotate-12 rounded-full bg-[#ffe772] px-5 py-3 text-sm font-black shadow-lg">teste real ✓</span>
          </div>
        </div>
      </section>

      <section id="achados" className="border-y border-[var(--border)] bg-[var(--section)] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between gap-5"><div><p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">TESTADO POR MIM</p><h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl">Produtos que eu testei.</h2><p className="mt-3 max-w-md leading-relaxed text-[var(--copy)]">Veja os produtos que já passaram pelos meus testes.</p></div><a href="#" className="hidden text-sm font-bold underline underline-offset-4 sm:block">Ver todos os testes</a></div>
          <div className="grid gap-4 md:grid-cols-3">{products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div>
        </div>
      </section>

      <section id="videos" className="py-16 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10"><div className="mb-9"><p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">VÍDEOS DE DEMONSTRAÇÃO</p><h2 className="mt-2 text-3xl font-black tracking-[-.06em] sm:text-4xl">Testes de verdade,<br />sem roteiro de vendedor.</h2><p className="mt-3 max-w-md leading-relaxed text-[var(--copy)]">Vídeos reais mostrando os produtos em uso e o que eu achei de cada um.</p></div><div className="grid gap-5 lg:grid-cols-2">{videos.map((video) => <article className="group grid overflow-hidden rounded-[1.7rem] bg-[#1b211e] text-white sm:grid-cols-[.9fr_1.1fr]" key={video.title}><div className={`${video.color} relative grid min-h-56 place-items-center`}><div className="grid size-16 place-items-center rounded-full bg-[#ff5c35] pl-1 text-xl shadow-xl transition group-hover:scale-110">▶</div><span className="absolute bottom-4 left-4 rounded-full bg-[#1b211e] px-3 py-1.5 text-[10px] font-black">{video.duration}</span></div><div className="flex flex-col p-6"><p className="text-[10px] font-black tracking-[.14em] text-[#ff977d]">{video.label}</p><h3 className="mt-3 text-2xl font-black leading-tight tracking-[-.05em]">{video.title}</h3><a href="#" className="mt-auto pt-6 text-sm font-bold underline underline-offset-4">Assistir demonstração</a></div></article>)}</div></div></section>

      <section id="parcerias" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10"><div className="grid gap-8 rounded-[2rem] bg-[#ff5c35] p-7 text-white sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><p className="text-xs font-black tracking-[.16em] text-[#ffd1c3]">PARA MARCAS E LOJAS</p><h2 className="mt-3 max-w-xl text-3xl font-black leading-[.95] tracking-[-.06em] sm:text-5xl">Conteúdo que mostra seu produto de verdade.</h2></div><div><p className="leading-relaxed text-[#ffe0d7]">Produzo vídeos de demonstração, testes de produtos, conteúdo para TikTok Shop e divulgação em vídeos e lives.</p><div className="mt-5 flex flex-wrap gap-2 text-xs font-black"><span className="rounded-full border border-white/30 px-3 py-2">Demonstração</span><span className="rounded-full border border-white/30 px-3 py-2">TikTok Shop</span><span className="rounded-full border border-white/30 px-3 py-2">Vídeos & lives</span></div><a href="mailto:oi@valentshop.com" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black !text-[#1b211e] transition hover:bg-[#ffe772] hover:!text-[#1b211e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:!text-[#1b211e]">Falar sobre parceria <ArrowUpRight /></a></div></div></section>

      <footer className="border-t border-[var(--border)]"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-[var(--copy)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div className="flex items-center gap-2 font-black text-[var(--ink)]"><span className="grid size-6 place-items-center rounded-full bg-[#ff5c35] text-xs text-white">V</span> Valent Shop</div><p>© 2026 Valent Shop. Produtos testados e mostrados em vídeo.</p><div className="flex gap-4 font-semibold"><a href="#">Instagram</a><a href="#">YouTube</a></div></div></footer>
    </main>
  );
}
import ProductCard from "@/components/product-card";
import { products } from "@/data/products";
import ThemeToggle from "./theme-toggle";
