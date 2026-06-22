"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function NavigationAdmin() {
  const { lang } = useLang();
  const [contentLang, setContentLang] = useState("en");
  const [items, setItems] = useState("[]");

  useEffect(() => {
    fetch(`/api/navigation?lang=${contentLang}`).then(r => r.json()).then(d => {
      setItems(JSON.stringify(d.items || [], null, 2));
    });
  }, [contentLang]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t("navigation.title", lang)}</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex gap-2 mb-4">
          {CONTENT_LANGS.map(l => (
            <button key={l} onClick={() => setContentLang(l)}
              className={"px-3 py-1.5 rounded text-sm " + (contentLang === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-3">{t("navigation.desc", lang)}</p>
        <textarea value={items} onChange={e => setItems(e.target.value)} rows={20}
          className="w-full border rounded px-3 py-2 font-mono text-xs" />
      </div>
    </div>
  );
}
