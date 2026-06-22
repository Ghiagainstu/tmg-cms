"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

interface Page {
  id: number; slug: string; lang: string; title: string;
  meta_description: string; status: string; template: string;
  blocks: string; updated_at: string;
}

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function PagesAdmin() {
  const { lang } = useLang();
  const [pages, setPages] = useState<Page[]>([]);
  const [filterLang, setFilterLang] = useState("");
  const [editing, setEditing] = useState<Page | null>(null);
  const [saving, setSaving] = useState(false);

  async function load() {
    const q = filterLang ? `?lang=${filterLang}` : "";
    const res = await fetch(`/api/pages${q}`);
    const data = await res.json();
    setPages(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, [filterLang]);

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      slug: fd.get("slug") as string,
      lang: fd.get("lang") as string,
      title: fd.get("title") as string,
      meta_description: fd.get("meta_description") as string,
      status: fd.get("status") as string,
      template: fd.get("template") as string,
      blocks: editing.blocks ? JSON.parse(editing.blocks as unknown as string) : [],
    };
    await fetch("/admin/api/pages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    setEditing(null);
    setSaving(false);
    load();
  }

  async function handleDelete(id: number) {
    if (!confirm(t("pages.deleteConfirm", lang))) return;
    await fetch(`/admin/api/pages?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t("pages.title", lang)}</h1>
        <div className="flex gap-2">
          <select value={filterLang} onChange={(e) => setFilterLang(e.target.value)} className="border rounded px-3 py-1.5 text-sm">
            <option value="">{t("pages.allLangs", lang)}</option>
            {CONTENT_LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
          <button onClick={() => setEditing({ id: 0, slug: "", lang: "en", title: "", meta_description: "", status: "draft", template: "default", blocks: "[]", updated_at: "" })}
            className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">{t("pages.new", lang)}</button>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form onSubmit={handleSave} className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-lg font-bold mb-4">{editing.id ? t("pages.edit", lang) : t("pages.create", lang)}</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">{t("pages.slug", lang)}</label>
                  <input name="slug" defaultValue={editing.slug} required className="w-full border rounded px-3 py-1.5 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-500">{t("pages.lang", lang)}</label>
                  <select name="lang" defaultValue={editing.lang} className="w-full border rounded px-3 py-1.5 text-sm">
                    {CONTENT_LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500">{t("pages.titleField", lang)}</label>
                <input name="title" defaultValue={editing.title} className="w-full border rounded px-3 py-1.5 text-sm" />
              </div>
              <div>
                <label className="text-xs text-gray-500">{t("pages.metaDesc", lang)}</label>
                <textarea name="meta_description" defaultValue={editing.meta_description} rows={2} className="w-full border rounded px-3 py-1.5 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">{t("pages.status", lang)}</label>
                  <select name="status" defaultValue={editing.status} className="w-full border rounded px-3 py-1.5 text-sm">
                    <option value="draft">{t("status.draft", lang)}</option>
                    <option value="published">{t("status.published", lang)}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500">{t("pages.template", lang)}</label>
                  <input name="template" defaultValue={editing.template} className="w-full border rounded px-3 py-1.5 text-sm" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button type="button" onClick={() => setEditing(null)} className="px-4 py-1.5 border rounded text-sm">{t("btn.cancel", lang)}</button>
              <button type="submit" disabled={saving} className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50">
                {saving ? t("btn.saving", lang) : t("btn.save", lang)}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("pages.th.slug", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("pages.th.lang", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("pages.th.title", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("pages.th.status", lang)}</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">{t("pages.th.template", lang)}</th>
              <th className="text-right px-4 py-2 font-medium text-gray-600">{t("pages.th.actions", lang)}</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((p) => (
              <tr key={p.slug + "-" + p.lang} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 font-mono text-xs">{p.slug}</td>
                <td className="px-4 py-2"><span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{p.lang.toUpperCase()}</span></td>
                <td className="px-4 py-2">{p.title}</td>
                <td className="px-4 py-2">
                  <span className={"text-xs px-2 py-0.5 rounded-full " + (p.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700")}>
                    {p.status === "published" ? t("status.published", lang) : t("status.draft", lang)}
                  </span>
                </td>
                <td className="px-4 py-2 text-xs text-gray-500">{p.template}</td>
                <td className="px-4 py-2 text-right">
                  <button onClick={() => setEditing(p)} className="text-blue-600 hover:underline text-xs mr-2">{t("btn.edit", lang)}</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline text-xs">{t("btn.delete", lang)}</button>
                </td>
              </tr>
            ))}
            {!pages.length && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-400">{t("pages.empty", lang)}</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
