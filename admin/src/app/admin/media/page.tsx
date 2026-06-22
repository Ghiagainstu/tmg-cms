"use client";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

interface MediaItem {
  id: number; filename: string; original_name: string;
  mime_type: string; alt: string; created_at: string;
}

export default function MediaAdmin() {
  const { lang } = useLang();
  const [items, setItems] = useState<MediaItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    const res = await fetch("/admin/api/media");
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  async function handleUpload() {
    const file = fileRef.current?.files?.[0];
    if (!file) return;
    setUploading(true);
    setResult("");
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/admin/api/media", { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) {
        setResult("? Uploaded: " + data.url);
        if (fileRef.current) fileRef.current.value = "";
        load();
      } else {
        setResult("? " + data.error);
      }
    } catch (e) {
      setResult("? " + String(e));
    }
    setUploading(false);
  }

  async function handleDelete(id: number) {
    if (!confirm(lang === "zh" ? "确认删除这张图片吗？" : "Delete this image?")) return;
    await fetch(`/admin/api/media?id=${id}`, { method: "DELETE" });
    load();
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url);
    setResult("? URL copied!");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t("media.title", lang)}</h1>

      {/* Upload */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">{lang === "zh" ? "上传图片" : "Upload Image"}</h2>
        <div className="flex items-center gap-4">
          <input ref={fileRef} type="file" accept="image/*" className="text-sm" />
          <button onClick={handleUpload} disabled={uploading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium">
            {uploading ? (lang === "zh" ? "上传中..." : "Uploading...") : (lang === "zh" ? "上传" : "Upload")}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">{lang === "zh" ? "支持 JPG/PNG/GIF/WebP/SVG，最大 10MB" : "Supports JPG/PNG/GIF/WebP/SVG, max 10MB"}</p>
        {result && <p className="mt-2 text-sm">{result}</p>}
      </div>

      {/* Media Grid */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">{lang === "zh" ? "媒体库" : "Media Library"} ({items.length})</h2>
        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.map((item) => (
              <div key={item.id} className="group relative border rounded-lg overflow-hidden bg-gray-50">
                <img src={`/uploads/${item.filename}`} alt={item.alt || item.original_name}
                  className="w-full h-32 object-cover" />
                <div className="p-2">
                  <p className="text-xs text-gray-500 truncate">{item.original_name}</p>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button onClick={() => copyUrl(`/uploads/${item.filename}`)}
                    className="px-2 py-1 bg-white text-gray-800 rounded text-xs hover:bg-gray-100">
                    {lang === "zh" ? "复制URL" : "Copy URL"}
                  </button>
                  <button onClick={() => handleDelete(item.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">
                    {lang === "zh" ? "删除" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">{lang === "zh" ? "还没有媒体文件，上传你的第一张图片吧！" : "No media files yet. Upload your first image!"}</p>
        )}
      </div>

      {/* Media Guide */}
      <div className="bg-orange-50 rounded-lg border border-orange-200 p-4 mb-6">
        <h3 className="font-semibold text-orange-900 mb-2">{t("guide.media.title", lang)}</h3>
        <ul className="text-sm text-orange-800 space-y-1">
          <li>• {t("guide.media.1", lang)}</li>
          <li>• {t("guide.media.2", lang)}</li>
          <li>• {t("guide.media.3", lang)}</li>
        </ul>
        <p className="text-xs text-orange-600 mt-2">{t("guide.media.tip", lang)}</p>
      </div>

    </div>
  );
}
