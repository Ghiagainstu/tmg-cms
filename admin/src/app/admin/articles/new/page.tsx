"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

const RichEditor = dynamic(() => import("@/components/RichEditor"), { ssr: false, loading: () => <p>Loading editor...</p> });

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function NewArticlePage() {
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
      excerpt: fd.get("excerpt") as string,
      content: content,
      category: fd.get("category") as string,
      author: fd.get("author") as string || "TMG Team",
      read_time: fd.get("read_time") as string || "8 min read",
      meta_description: fd.get("meta_description") as string,
      status: fd.get("status") as string,
      publish_date: fd.get("publish_date") as string,
    };
    try {
      const res = await fetch("/admin/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setResult(data.ok ? "✅ Article saved!" : "❌ " + data.error);
    } catch (err) {
      setResult("❌ " + String(err));
    }
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{lang === "zh" ? "新建文章" : "New Article"}</h1>
        <a href="/admin/articles" className="text-sm text-blue-600 hover:underline">
          {lang === "zh" ? "← 返回文章列表" : "← Back to Articles"}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">{lang === "zh" ? "基本信息" : "Basic Info"}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "路径标识" : "Slug"}</label>
              <input name="slug" required placeholder="my-article-slug" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "语言" : "Language"}</label>
              <select name="lang" className="w-full border rounded px-3 py-1.5 text-sm mt-1">
                {CONTENT_LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500">{lang === "zh" ? "标题" : "Title"}</label>
            <input name="title" required className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500">{lang === "zh" ? "摘要" : "Excerpt"}</label>
            <textarea name="excerpt" rows={2} className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "分类" : "Category"}</label>
              <input name="category" placeholder="Baidu / Search Ads" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "作者" : "Author"}</label>
              <input name="author" defaultValue="TMG Team" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "阅读时长" : "Read Time"}</label>
              <input name="read_time" defaultValue="8 min read" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "状态" : "Status"}</label>
              <select name="status" className="w-full border rounded px-3 py-1.5 text-sm mt-1">
                <option value="draft">{lang === "zh" ? "草稿" : "Draft"}</option>
                <option value="published">{lang === "zh" ? "已发布" : "Published"}</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500">{lang === "zh" ? "发布日期" : "Publish Date"}</label>
              <input name="publish_date" type="date" defaultValue="2026-06-18" className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
            </div>
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500">{lang === "zh" ? "SEO 描述" : "Meta Description"}</label>
            <textarea name="meta_description" rows={2} className="w-full border rounded px-3 py-1.5 text-sm mt-1" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">{lang === "zh" ? "文章内容" : "Article Content"}</h2>
          <RichEditor content={content} onChange={setContent} />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium">
            {saving ? (lang === "zh" ? "保存中..." : "Saving...") : (lang === "zh" ? "保存文章" : "Save Article")}
          </button>
          {result && <span className="text-sm">{result}</span>}
        </div>
      </form>
    </div>
  );
}
