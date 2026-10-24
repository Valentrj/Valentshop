"use client";

import { useState } from "react";
import { languageNames, type Locale, useLanguage } from "@/components/language-provider";

const languages: Locale[] = ["pt-BR", "en", "zh-CN"];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Selecionar idioma"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 items-center gap-1.5 rounded-full border border-(--border) bg-(--card) px-3 text-xs font-black text-(--ink) transition hover:border-[#c45037] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45037]"
      >
        <span aria-hidden="true">文</span>{languageNames[locale]}<span aria-hidden="true" className="text-[9px]">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+.5rem)] z-50 min-w-32 overflow-hidden rounded-2xl border border-(--border) bg-(--card) p-1.5 shadow-xl">
          {languages.map((language) => (
            <button
              type="button"
              key={language}
              onClick={() => { setLocale(language); setOpen(false); }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-bold transition ${locale === language ? "bg-[#c45037] text-white" : "text-(--ink) hover:bg-(--section)"}`}
            >
              {language === "pt-BR" ? "Português" : language === "en" ? "English" : "中文"}
              <span className="text-xs opacity-75">{languageNames[language]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
