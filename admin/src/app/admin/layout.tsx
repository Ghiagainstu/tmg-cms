"use client";
import Link from "next/link";
import { LangProvider, useLang } from "@/lib/useLang";
import { t } from "@/lib/i18n";

function AdminHeader() {
  const { lang, toggle } = useLang();
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/admin" className="text-lg font-bold text-gray-900">
          TMG <span className="text-amber-600">CMS</span>
        </Link>
        <nav className="flex gap-1 text-sm">
          <Link href="/admin" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">{t("nav.dashboard", lang)}</Link>
          <Link href="/admin/pages" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">{t("nav.pages", lang)}</Link>
          <Link href="/admin/articles" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">{t("nav.articles", lang)}</Link>
          <Link href="/admin/navigation" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">{t("nav.navigation", lang)}</Link>
          <Link href="/admin/config" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">{t("nav.siteConfig", lang)}</Link>
          <Link href="/admin/media" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">{t("nav.media", lang)}</Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggle}
          className="text-xs border border-gray-300 px-2 py-1 rounded hover:bg-gray-50 transition"
          title="切换中英文 / Toggle language">
          {lang === "zh" ? "EN" : "中文"}
        </button>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{t("badge.phase1", lang)}</span>
        <a href="/" target="_blank" className="text-sm text-blue-600 hover:underline">{t("viewSite", lang)}</a>
      </div>
    </header>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </div>
    </LangProvider>
  );
}
