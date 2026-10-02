import Link from "next/link";
import ThemeToggle from "@/app/theme-toggle";
import SiteFooter from "@/components/site-footer";

const steps = [
  ["01", "Uso real", "O produto é mostrado no uso do dia a dia, sem depender apenas da descrição da loja."],
  ["02", "Pontos importantes", "A demonstração foca no que ajuda você a entender se ele faz sentido para sua necessidade."],
  ["03", "Vídeo para conferir", "Cada teste tem um link para o vídeo original no TikTok, para você ver por conta própria."],
];

export default function HowWeTestPage() {
  return <main className="min-h-screen bg-(--page) text-(--ink)">
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"><Link href="/" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-base font-black text-white">V</span><span className="text-lg font-black tracking-[-0.06em]">Valent Shop</span></Link><div className="flex items-center gap-2"><ThemeToggle /><Link href="/produtos" className="rounded-full bg-[#1b211e] px-4 py-2.5 text-sm font-bold text-white!">Ver testes</Link></div></header>
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-24 lg:px-10"><p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">TRANSPARÊNCIA</p><h1 className="mt-3 max-w-3xl text-5xl font-black leading-[.9] tracking-[-.07em] sm:text-7xl">Como os produtos são testados.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--copy)">O objetivo é simples: mostrar o produto em ação para que você possa decidir com mais clareza.</p><div className="mt-12 grid gap-4 md:grid-cols-3">{steps.map(([number, title, text]) => <article key={number} className="rounded-[1.7rem] border border-(--border) bg-(--card) p-6"><p className="text-xs font-black tracking-[.16em] text-[#ff5c35]">{number}</p><h2 className="mt-8 text-2xl font-black tracking-[-.05em]">{title}</h2><p className="mt-3 leading-relaxed text-(--copy)">{text}</p></article>)}</div><div className="mt-10 rounded-[1.7rem] bg-[#1b211e] p-7 text-white sm:p-10"><h2 className="text-2xl font-black tracking-[-.05em]">Quer conferir um teste?</h2><p className="mt-2 text-[#c4cec8]">Navegue pelos produtos e veja as demonstrações completas.</p><Link href="/produtos" className="mt-5 inline-flex rounded-full bg-[#ff5c35] px-5 py-3 text-sm font-bold">Explorar produtos</Link></div></section>
    <SiteFooter />
  </main>;
}
