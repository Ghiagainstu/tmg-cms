"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

interface NavItem {
  title: string;
  url: string;
  children?: NavItem[];
}

const CONTENT_LANGS = ["en", "ja", "ko"];

export default function NavigationAdmin() {
  const { lang } = useLang();
  const [contentLang, setContentLang] = useState("en");
  const [items, setItems] = useState<NavItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/navigation?lang=" + contentLang).then(r => r.json()).then(d => {
      setItems(d.items || []);
    });
  }, [contentLang]);

  async function handleSave() {
    setSaving(true);
    setResult("");
    try {
      const res = await fetch("/admin/api/navigation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang: contentLang, items }),
      });
      const data = await res.json();
      setResult(data.ok ? "✅ Saved!" : "❌ " + data.error);
    } catch (err) {
      setResult("❌ " + String(err));
    }
    setSaving(false);
  }

  function addItem() {
    setItems([...items, { title: "", url: "" }]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(index: number, field: keyof NavItem, value: string) {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  }

  function handleDragStart(index: number) {
    setDragIndex(index);
  }

  function handleDragOver(e: React.DragEvent, index: number) {
    e.preventDefault();
    if (dragIndex === null || dragIndex === index) return;
    
    const newItems = [...items];
    const draggedItem = newItems[dragIndex];
    newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDragIndex(index);
  }

  function handleDragEnd() {
    setDragIndex(null);
  }

  function moveItem(index: number, direction: "up" | "down") {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === items.length - 1) return;
    
    const newItems = [...items];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setItems(newItems);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t("navigation.title", lang)}</h1>

      {/* Navigation Guide */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <h3 className="text-blue-900 font-semibold mb-3 text-sm">{t("guide.navigation.title", lang)}</h3>
        <ul className="text-blue-800 text-sm space-y-2 list-disc list-inside">
          <li>{t("guide.navigation.1", lang)}</li>
          <li>{t("guide.navigation.2", lang)}</li>
          <li>{t("guide.navigation.3", lang)}</li>
        </ul>
        <p className="text-blue-700 text-xs mt-3 italic">{t("guide.navigation.tip", lang)}</p>
      </div>

      {/* Navigation Editor Guide */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
        <h3 className="text-green-900 font-semibold mb-3 text-sm">{t("guide.navigation.title", lang)}</h3>
        <ul className="text-green-800 text-sm space-y-2 list-disc list-inside">
          <li>{t("guide.navigation.editor", lang)}</li>
          <li>{t("guide.navigation.1", lang)}</li>
          <li>{t("guide.navigation.2", lang)}</li>
          <li>{t("guide.navigation.3", lang)}</li>
        </ul>
        <p className="text-green-700 text-xs mt-3 italic">{t("guide.navigation.tip", lang)}</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex gap-2 mb-4">
          {CONTENT_LANGS.map(l => (
            <button key={l} onClick={() => setContentLang(l)}
              className={"px-3 py-1.5 rounded text-sm " + (contentLang === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-4">{t("navigation.desc", lang)}</p>

        <div className="space-y-3 mb-4">
          {items.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={"flex items-center gap-3 p-3 border rounded-lg bg-gray-50 transition-all " + 
                (dragIndex === index ? "opacity-50 border-blue-300" : "border-gray-200 hover:border-gray-300")}
            >
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveItem(index, "up")}
                  disabled={index === 0}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ?
                </button>
                <button
                  onClick={() => moveItem(index, "down")}
                  disabled={index === items.length - 1}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ?
                </button>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">Title</label>
                  <input
                    value={item.title}
                    onChange={(e) => updateItem(index, "title", e.target.value)}
                    placeholder="Home"
                    className="w-full border rounded px-2 py-1 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">URL</label>
                  <input
                    value={item.url}
                    onChange={(e) => updateItem(index, "url", e.target.value)}
                    placeholder="/"
                    className="w-full border rounded px-2 py-1 text-sm mt-1"
                  />
                </div>
              </div>

              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700 px-2 py-1"
              >
                ?
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={addItem}
            className="px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700"
          >
            + Add Item
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Navigation"}
          </button>
        </div>

        {result && <p className="mt-3 text-sm">{result}</p>}

        {/* Preview */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Preview</h4>
          <nav className="flex gap-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-blue-600 hover:underline text-sm"
              >
                {item.title || "Untitled"}
              </a>
            ))}
            {items.length === 0 && <p className="text-gray-400 text-sm">No items yet</p>}
          </nav>
        </div>
      </div>
    </div>
  );
}
