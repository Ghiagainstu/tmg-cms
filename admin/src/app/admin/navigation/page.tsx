"use client";
import { useState, useEffect } from "react";

const LANGS = ["en", "ja", "ko"];

export default function NavigationAdmin() {
  const [lang, setLang] = useState("en");
  const [items, setItems] = useState("[]");

  useEffect(() => {
    fetch(`/api/navigation?lang=${lang}`).then(r => r.json()).then(d => {
      setItems(JSON.stringify(d.items || [], null, 2));
    });
  }, [lang]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Navigation</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex gap-2 mb-4">
          {LANGS.map(l => (
            <button key={l} onClick={() => setLang(l)}
              className={"px-3 py-1.5 rounded text-sm " + (lang === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-3">Navigation items (JSON format). Edit via API for now; visual editor coming in Phase 2.</p>
        <textarea value={items} onChange={e => setItems(e.target.value)} rows={20}
          className="w-full border rounded px-3 py-2 font-mono text-xs" />
      </div>
    </div>
  );
}
