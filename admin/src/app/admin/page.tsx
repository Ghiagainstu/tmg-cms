"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [seeding, setSeeding] = useState(false);
  const [result, setResult] = useState("");

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

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">TMG CMS Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Pages", count: "—", href: "/admin/pages", color: "blue" },
          { label: "Articles", count: "—", href: "/admin/articles", color: "green" },
          { label: "Languages", count: "3", href: "/admin/config", color: "purple" },
          { label: "Media", count: "—", href: "/admin/media", color: "amber" },
        ].map((card) => (
          <a
            key={card.label}
            href={card.href}
            className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="text-sm text-gray-500">{card.label}</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">{card.count}</div>
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 text-sm font-medium"
          >
            {seeding ? "Seeding..." : "🌱 Seed Database (First Run)"}
          </button>
          <a
            href="/admin/pages"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
          >
            📄 Manage Pages
          </a>
          <a
            href="/admin/articles"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
          >
            📝 Manage Articles
          </a>
        </div>
        {result && <p className="mt-3 text-sm">{result}</p>}
      </div>

      {/* Info */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h3 className="font-semibold text-blue-900 mb-2">Phase 1 — TMG CMS</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>API</strong>: Public endpoints at <code>/api/pages</code>, <code>/api/articles</code>, <code>/api/navigation</code>, <code>/api/config</code></li>
          <li>• <strong>Admin</strong>: CRUD at <code>/admin/api/pages</code>, <code>/admin/api/articles</code></li>
          <li>• <strong>Languages</strong>: en, ja, ko (all pre-seeded with TMG site structure)</li>
          <li>• <strong>Database</strong>: SQLite (sql.js, pure JS — no native deps)</li>
          <li>• <strong>Deploy</strong>: Admin on Vercel, Frontend on Vercel (separate project)</li>
        </ul>
      </div>
    </div>
  );
}
