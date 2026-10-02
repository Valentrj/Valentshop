const socialLinks = [
  { label: "TikTok Shop", href: "https://www.tiktok.com/@valentachados?lang=pt-BR" },
  { label: "Vídeos & lives", href: "https://www.tiktok.com/@valentshoprj" },
  { label: "WhatsApp", href: "https://wa.me/5521994270888" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-(--border)">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-(--copy) sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex items-center gap-2 font-black text-(--ink)"><span className="grid size-6 place-items-center rounded-full bg-[#ff5c35] text-xs text-white">V</span> Valent Shop</div>
        <p>© {new Date().getFullYear()} Valent Shop. Produtos testados e mostrados em vídeo.</p>
        <div className="flex flex-wrap gap-4 font-semibold">
          <Link href="/como-testo" className="transition hover:text-[#ff5c35]">Como testo</Link>
          {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-[#ff5c35]">{link.label}</a>)}
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
