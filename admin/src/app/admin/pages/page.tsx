"use client";
import { useState, useEffect } from "react";

interface Page {
  id: number; slug: string; lang: string; title: string;
  meta_description: string; status: string; template: string;
  blocks: string; updated_at: string;
}

const LANGS = ["en", "ja", "ko"];

export default function PagesAdmin() {
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
    if (!confirm("Delete this page?")) return;
    await fetch(`/admin/api/pages?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pages</h1>
        <div className="flex gap-2">
          <select value={filterLang} onChange={(e) => setFilterLang(e.target.value)} className="border rounded px-3 py-1.5 text-sm">
            <option value="">All Languages</option>
            {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
          <button onClick={() => setEditing({ id: 0, slug: "", lang: "en", title: "", meta_description: "", status: "draft", template: "default", blocks: "[]", updated_at: "" })}
            className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">+ New Page</button>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form onSubmit={handleSave} className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-lg font-bold mb-4">{editing.id ? "Edit" : "New"} Page</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">Slug</label>
                  <input name="slug" defaultValue={editing.slug} required className="w-full border rounded px-3 py-1.5 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Language</label>
                  <select name="lang" defaultValue={editing.lang} className="w-full border rounded px-3 py-1.5 text-sm">
                    {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Title</label>
                <input name="title" defaultValue={editing.title} className="w-full border rounded px-3 py-1.5 text-sm" />
              </div>
              <div>
                <label className="text-xs text-gray-500">Meta Description</label>
                <textarea name="meta_description" defaultValue={editing.meta_description} rows={2} className="w-full border rounded px-3 py-1.5 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">Status</label>
                  <select name="status" defaultValue={editing.status} className="w-full border rounded px-3 py-1.5 text-sm">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500">Template</label>
                  <input name="template" defaultValue={editing.template} className="w-full border rounded px-3 py-1.5 text-sm" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button type="button" onClick={() => setEditing(null)} className="px-4 py-1.5 border rounded text-sm">Cancel</button>
              <button type="submit" disabled={saving} className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50">
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Slug</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Lang</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Title</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Status</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Template</th>
              <th className="text-right px-4 py-2 font-medium text-gray-600">Actions</th>
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
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-xs text-gray-500">{p.template}</td>
                <td className="px-4 py-2 text-right">
                  <button onClick={() => setEditing(p)} className="text-blue-600 hover:underline text-xs mr-2">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline text-xs">Delete</button>
                </td>
              </tr>
            ))}
            {!pages.length && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-400">No pages found. Click &quot;Seed Database&quot; on the dashboard first.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
