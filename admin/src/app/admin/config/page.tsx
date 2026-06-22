"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function ConfigAdmin() {
  const { lang } = useLang();
  const [contentLang, setContentLang] = useState("en");
  const [config, setConfig] = useState<Record<string, unknown>>({});

  useEffect(() => {
    fetch(`/api/config?lang=${contentLang}`).then(r => r.json()).then(d => setConfig(d));
  }, [contentLang]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t("config.title", lang)}</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex gap-2 mb-4">
          {CONTENT_LANGS.map(l => (
            <button key={l} onClick={() => setContentLang(l)}
              className={"px-3 py-1.5 rounded text-sm " + (contentLang === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {Object.entries(config).filter(([k]) => !["id","created_at","updated_at"].includes(k)).map(([key, val]) => (
            <div key={key}>
              <label className="text-xs text-gray-500 font-medium">{key}</label>
              <div className="mt-1">
                {typeof val === "string" && val.length > 100 ? (
                  <textarea defaultValue={String(val)} rows={3} className="w-full border rounded px-3 py-1.5 text-sm" />
                ) : (
                  <input defaultValue={String(val)} className="w-full border rounded px-3 py-1.5 text-sm" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
