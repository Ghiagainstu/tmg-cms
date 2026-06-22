"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "./i18n";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "zh", toggle: () => {}, setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const toggle = useCallback(() => setLang((l) => (l === "zh" ? "en" : "zh")), []);
  return (
    <LangContext.Provider value={{ lang, toggle, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
