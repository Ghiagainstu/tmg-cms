"use client";
import { useState, useEffect } from "react";

interface Article {
  id: number; slug: string; lang: string; title: string;
  excerpt: string; category: string; status: string;
  publish_date: string; author: string; updated_at: string;
}

const LANGS = ["en", "ja", "ko"];

export default function ArticlesAdmin() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filterLang, setFilterLang] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    const q = filterLang ? `?lang=${filterLang}` : "";
    const res = await fetch(`/api/articles${q}`);
    const data = await res.json();
    setArticles(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, [filterLang]);

  async function handleDelete(id: number) {
    if (!confirm("Delete this article?")) return;
    await fetch(`/admin/api/articles?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
        <div className="flex gap-2">
          <select value={filterLang} onChange={(e) => setFilterLang(e.target.value)} className="border rounded px-3 py-1.5 text-sm">
            <option value="">All Languages</option>
            {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
          <a href="/admin/articles/new" className="px-4 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700">+ New Article</a>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Slug</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Lang</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Title</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Category</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Status</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Date</th>
              <th className="text-right px-4 py-2 font-medium text-gray-600">Actions</th>
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
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-xs text-gray-500">{a.publish_date}</td>
                <td className="px-4 py-2 text-right">
                  <button onClick={() => handleDelete(a.id)} className="text-red-600 hover:underline text-xs">Delete</button>
                </td>
              </tr>
            ))}
            {!articles.length && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">No articles yet. Use the API to add articles.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
