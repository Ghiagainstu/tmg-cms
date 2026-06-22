"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

const RichEditor = dynamic(() => import("@/components/RichEditor"), { ssr: false, loading: () => <p>Loading editor...</p> });

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function NewPagePage() {
  const { lang } = useLang();
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setResult("");
    const fd = new FormData(e.currentTarget);
    const body = {
      slug: fd.get("slug") as string,
      lang: fd.get("lang") as string,
      title: fd.get("title") as string,
      meta_description: fd.get("meta_description") as string,
      status: fd.get("status") as string,
      template: fd.get("template") as string || "default",
      blocks: [{ type: "rich_text", content: content }],
    };
    try {
      const res = await fetch("/admin/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setResult(data.ok ? "✅ Page saved!" : "❌ " + data.error);
    } catch (err) {
      setResult("❌ " + String(err));
    }
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{lang === "zh" ? "新建页面" : "New Page"}</h1>
        <a href="/admin/pages" className="text-sm text-blue-600 hover:underline">
          {lang === "zh" ? "← 返回页面列表" : "← Back to Pages"}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">{lang === "zh" ? "基本信息" : "Basic Info"}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "路径标识" : "Slug"}</label>
              <input name="slug" required placeholder="about-us" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "语言" : "Language"}</label>
              <select name="lang" className="w-full border rounded px-3 py-1.5 text-sm mt-1">
                {CONTENT_LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500">{lang === "zh" ? "页面标题" : "Title"}</label>
            <input name="title" required className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500">{lang === "zh" ? "SEO 描述" : "Meta Description"}</label>
            <textarea name="meta_description" rows={2} className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "状态" : "Status"}</label>
              <select name="status" className="w-full border rounded px-3 py-1.5 text-sm mt-1">
                <option value="draft">{lang === "zh" ? "草稿" : "Draft"}</option>
                <option value="published">{lang === "zh" ? "已发布" : "Published"}</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "模板" : "Template"}</label>
              <input name="template" defaultValue="default" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">{lang === "zh" ? "页面内容" : "Page Content"}</h2>
          <RichEditor content={content} onChange={setContent} />
        </div>

        {/* Editor Guide */}
        <div className="bg-amber-50 rounded-lg border border-amber-200 p-4 mb-6">
          <h3 className="font-semibold text-amber-900 mb-2">{t("guide.editor.title", lang)}</h3>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>{"•"} {t("guide.editor.1", lang)}</li>
            <li>{"•"} {t("guide.editor.2", lang)}</li>
            <li>{"•"} {t("guide.editor.3", lang)}</li>
          </ul>
          <p className="text-xs text-amber-600 mt-2">{t("guide.editor.tip", lang)}</p>
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium">
            {saving ? (lang === "zh" ? "保存中..." : "Saving...") : (lang === "zh" ? "保存页面" : "Save Page")}
          </button>
          {result && <span className="text-sm">{result}</span>}
        </div>
      </form>
    </div>
  );
}
