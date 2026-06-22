"use client";
import { useState } from "react";
import { useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

export default function AdminDashboard() {
  const { lang } = useLang();
  const [seeding, setSeeding] = useState(false);
  const [importing, setImporting] = useState(false);
  const [migrating, setMigrating] = useState(false);
  const [result, setResult] = useState("");


  async function handleMigrate() {
    setMigrating(true);
    setResult("");
    try {
      const res = await fetch("/admin/api/migrate", { method: "POST" });
      const data = await res.json();
      setResult(data.ok ? "✅ " + data.message : "❌ " + data.error);
    } catch (e) {
      setResult("❌ " + String(e));
    }
    setMigrating(false);
  }

    async function handleSeed() {
    setSeeding(true);
    setResult("");
    try {
      const res = await fetch("/admin/api/seed", { method: "POST" });
      const data = await res.json();
      setResult(data.ok ? "✅ " + data.message : "❌ " + data.error);
    } catch (e) {
      setResult("❌ " + String(e));
    }
    setSeeding(false);
  }

  async function handleImport() {
    setImporting(true);
    setResult("");
    try {
      const res = await fetch("/admin/api/import", { method: "POST" });
      const data = await res.json();
      setResult(data.ok ? "✅ " + data.message : "❌ " + data.error);
    } catch (e) {
      setResult("❌ " + String(e));
    }
    setImporting(false);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t("dashboard.title", lang)}</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: t("dashboard.pages", lang), count: "—", href: "/admin/pages" },
          { label: t("dashboard.articles", lang), count: "—", href: "/admin/articles" },
          { label: t("dashboard.languages", lang), count: "3", href: "/admin/config" },
          { label: t("dashboard.media", lang), count: "—", href: "/admin/media" },
        ].map((card) => (
          <a key={card.label} href={card.href}
            className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-500">{card.label}</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">{card.count}</div>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{t("actions.title", lang)}</h2>
        <div className="flex gap-3 flex-wrap">
          <button onClick={handleSeed} disabled={seeding}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 text-sm font-medium">
            {seeding ? t("actions.seeding", lang) : t("actions.seed", lang)}
          </button>
          <a href="/admin/pages"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            {t("actions.managePages", lang)}
          </a>
          <a href="/admin/articles"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
            {t("actions.manageArticles", lang)}
          </a>
          <button onClick={handleImport} disabled={importing}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 text-sm font-medium">
            {importing ? t("actions.importing", lang) : t("actions.importArticles", lang)}
          </button>
          <button onClick={handleMigrate} disabled={migrating}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 text-sm font-medium">
            {migrating ? (lang === "zh" ? "正在迁移..." : "Migrating...") : (lang === "zh" ? "🔄 迁移HTML文章" : "🔄 Migrate HTML")}
          </button>
        </div>
        {result && <p className="mt-3 text-sm">{result}</p>}
      </div>

      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h3 className="font-semibold text-blue-900 mb-2">{t("info.title", lang)}</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>{t("info.api", lang)}</strong>Public endpoints: <code>/api/pages</code>, <code>/api/articles</code>, <code>/api/navigation</code>, <code>/api/config</code></li>
          <li>• <strong>{t("info.admin", lang)}</strong>CRUD: <code>/admin/api/pages</code>, <code>/admin/api/articles</code>, <code>/admin/api/import</code></li>
          <li>• <strong>{t("info.langs", lang)}</strong>{t("info.langsValue", lang)}</li>
          <li>• <strong>{t("info.db", lang)}</strong>{t("info.dbValue", lang)}</li>
          <li>• <strong>{t("info.deploy", lang)}</strong>{t("info.deployValue", lang)}</li>
        </ul>
      </div>

      {/* Quick Guide */}
      <div className="bg-green-50 rounded-lg border border-green-200 p-6 mt-6">
        <h3 className="font-semibold text-green-900 mb-3">{t("guide.title", lang)}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-green-800">
          <div>
            <h4 className="font-medium mb-2">{t("guide.init.title", lang)}</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>{t("guide.init.1", lang)}</li>
              <li>{t("guide.init.2", lang)}</li>
              <li>{t("guide.init.3", lang)}</li>
            </ol>
          </div>
          <div>
            <h4 className="font-medium mb-2">{t("guide.daily.title", lang)}</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>{t("guide.daily.1", lang)}</li>
              <li>{t("guide.daily.2", lang)}</li>
              <li>{t("guide.daily.3", lang)}</li>
              <li>{t("guide.daily.4", lang)}</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-green-600">{t("guide.tip", lang)}</p>
      </div>

    </div>
  );
}
