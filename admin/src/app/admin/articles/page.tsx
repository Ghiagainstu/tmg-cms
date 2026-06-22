"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

interface Article {
  id: number; slug: string; lang: string; title: string;
  excerpt: string; category: string; status: string;
  publish_date: string; author: string; updated_at: string;
}

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function ArticlesAdmin() {
  const { lang } = useLang();
  const [articles, setArticles] = useState<Article[]>([]);
  const [filterLang, setFilterLang] = useState("");

  async function load() {
    const q = filterLang ? `?lang=${filterLang}` : "";
    const res = await fetch(`/api/articles${q}`);
    const data = await res.json();
    setArticles(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, [filterLang]);

  async function handleDelete(id: number) {
    if (!confirm(t("articles.deleteConfirm", lang))) return;
    await fetch(`/admin/api/articles?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t("articles.title", lang)}</h1>
        <div className="flex gap-2">
          <select value={filterLang} onChange={(e) => setFilterLang(e.target.value)} className="border rounded px-3 py-1.5 text-sm">
            <option value="">{t("articles.allLangs", lang)}</option>
            {CONTENT_LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
          <a href="/admin/articles/new" className="px-4 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700">{t("articles.new", lang)}</a>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("articles.th.slug", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("articles.th.lang", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("articles.th.title", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("articles.th.category", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("articles.th.status", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("articles.th.date", lang)}</th>
              <th className="text-right px-4 py-2 font-medium text-gray-600">{t("articles.th.actions", lang)}</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.slug + "-" + a.lang} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 font-mono text-xs">{a.slug}</td>
                <td className="px-4 py-2"><span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{a.lang.toUpperCase()}</span></td>
                <td className="px-4 py-2">{a.title}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{a.category}</td>
                <td className="px-4 py-2">
                  <span className={"text-xs px-2 py-0.5 rounded-full " + (a.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700")}>
                    {a.status === "published" ? t("status.published", lang) : t("status.draft", lang)}
                  </span>
                </td>
                <td className="px-4 py-2 text-xs text-gray-500">{a.publish_date}</td>
                <td className="px-4 py-2 text-right">
                  <button onClick={() => handleDelete(a.id)} className="text-red-600 hover:underline text-xs">{t("btn.delete", lang)}</button>
                </td>
              </tr>
            ))}
            {!articles.length && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">{t("articles.empty", lang)}</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Articles Guide */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">{t("guide.articles.title", lang)}</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• {t("guide.articles.1", lang)}</li>
          <li>• {t("guide.articles.2", lang)}</li>
          <li>• {t("guide.articles.3", lang)}</li>
        </ul>
        <p className="text-xs text-blue-600 mt-2">{t("guide.articles.tip", lang)}</p>
      </div>

    </div>
  );
}
