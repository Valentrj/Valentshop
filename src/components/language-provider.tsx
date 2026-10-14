"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "pt-BR" | "en" | "zh-CN";

export const languageNames: Record<Locale, string> = {
  "pt-BR": "PT",
  en: "EN",
  "zh-CN": "中文",
};

const messages = {
  "pt-BR": {
    "nav.products": "Produtos testados",
    "nav.brands": "Marcas",
    "nav.partnerships": "Parcerias",
    "nav.seeTests": "Ver testes",
    "hero.eyebrow": "PRODUTOS EM AÇÃO",
    "hero.description": "Produtos reais, testados na prática e aprovados antes de recomendar.",
    "hero.detail": "Eu testo, uso e mostro cada produto de verdade antes de indicar para você.",
    "hero.cta": "Ver produtos testados",
    "hero.whatsapp": "Falar no WhatsApp",
    "hero.brands": "Conheça as marcas em destaque",
    "brands.eyebrow": "MARCAS EM DESTAQUE",
    "brands.title": "Explore por marca.",
    "brands.description": "Vídeos e produtos de cada marca reunidos em um só lugar.",
    "brands.hint": "Toque para explorar ↗",
    "recent.eyebrow": "REVIEW EM DESTAQUE",
    "recent.title": "O teste mais recente.",
    "recent.all": "Ver todos",
    "recent.new": "NOVO TESTE",
    "recent.watch": "Assistir review",
    "recent.product": "Ver produto",
    "recent.also": "TAMBÉM RECENTE",
    "tested.eyebrow": "TESTADO POR MIM",
    "tested.title": "Produtos que passei a testar e aprovar.",
    "tested.description": "Veja os produtos que já passaram pelos meus testes e revisão real.",
    "partners.eyebrow": "PARA MARCAS E LOJAS",
    "partners.title": "Conteúdo que mostra seu produto com clareza e impacto.",
    "partners.description": "Produzo vídeos de demonstração, testes reais e conteúdo para TikTok Shop, com foco em mostrar valor e gerar confiança.",
    "partners.cta": "Quero anunciar meu produto",
    "footer.description": "Produtos testados e mostrados em vídeo.",
  },
  en: {
    "nav.products": "Tested products",
    "nav.brands": "Brands",
    "nav.partnerships": "Partnerships",
    "nav.seeTests": "See reviews",
    "hero.eyebrow": "PRODUCTS IN ACTION",
    "hero.description": "Real products, tested in practice and approved before being recommended.",
    "hero.detail": "I test, use and show every product for real before recommending it to you.",
    "hero.cta": "See tested products",
    "hero.whatsapp": "Chat on WhatsApp",
    "hero.brands": "Discover featured brands",
    "brands.eyebrow": "FEATURED BRANDS",
    "brands.title": "Explore by brand.",
    "brands.description": "Videos and products from each brand in one place.",
    "brands.hint": "Tap to explore ↗",
    "recent.eyebrow": "FEATURED REVIEW",
    "recent.title": "The latest review.",
    "recent.all": "See all",
    "recent.new": "NEW REVIEW",
    "recent.watch": "Watch review",
    "recent.product": "View product",
    "recent.also": "ALSO RECENT",
    "tested.eyebrow": "TESTED BY ME",
    "tested.title": "Products I tested and approved.",
    "tested.description": "See the products that have already gone through my real testing and review.",
    "partners.eyebrow": "FOR BRANDS AND STORES",
    "partners.title": "Content that shows your product with clarity and impact.",
    "partners.description": "I produce product demos, real reviews and content for TikTok Shop, focused on showing value and building trust.",
    "partners.cta": "Promote my product",
    "footer.description": "Products tested and shown on video.",
  },
  "zh-CN": {
    "nav.products": "测评产品",
    "nav.brands": "品牌",
    "nav.partnerships": "合作",
    "nav.seeTests": "查看测评",
    "hero.eyebrow": "产品实测",
    "hero.description": "真实产品，经过实际测试并认可后才会推荐。",
    "hero.detail": "我会亲自测试、使用并展示每件产品，再推荐给您。",
    "hero.cta": "查看测评产品",
    "hero.whatsapp": "WhatsApp 联系我",
    "hero.brands": "查看精选品牌",
    "brands.eyebrow": "精选品牌",
    "brands.title": "按品牌探索。",
    "brands.description": "在一个地方查看每个品牌的视频和产品。",
    "brands.hint": "点击探索 ↗",
    "recent.eyebrow": "精选测评",
    "recent.title": "最新测评。",
    "recent.all": "查看全部",
    "recent.new": "最新测评",
    "recent.watch": "观看测评",
    "recent.product": "查看产品",
    "recent.also": "近期内容",
    "tested.eyebrow": "亲测产品",
    "tested.title": "我亲自测试并认可的产品。",
    "tested.description": "查看已经通过实际测试和评测的产品。",
    "partners.eyebrow": "面向品牌和商店",
    "partners.title": "清晰、有影响力地展示您的产品。",
    "partners.description": "我为 TikTok Shop 制作产品演示、真实测评和内容，帮助展示价值并建立信任。",
    "partners.cta": "推广我的产品",
    "footer.description": "产品均经过测试并以视频展示。",
  },
} as const;

export type TranslationKey = keyof (typeof messages)["pt-BR"];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "valent-shop-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt-BR");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey) as Locale | null;
    if (savedLocale && savedLocale in messages) setLocale(savedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: (key: TranslationKey) => messages[locale][key],
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function T({ id }: { id: TranslationKey }) {
  const { t } = useLanguage();
  return <>{t(id)}</>;
}
