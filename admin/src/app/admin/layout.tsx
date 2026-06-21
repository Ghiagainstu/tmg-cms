import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-lg font-bold text-gray-900">
            TMG <span className="text-amber-600">CMS</span>
          </Link>
          <nav className="flex gap-1 text-sm">
            <Link href="/admin" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">Dashboard</Link>
            <Link href="/admin/pages" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">Pages</Link>
            <Link href="/admin/articles" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">Articles</Link>
            <Link href="/admin/navigation" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">Navigation</Link>
            <Link href="/admin/config" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">Site Config</Link>
            <Link href="/admin/media" className="px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700">Media</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Phase 1</span>
          <a href="/" target="_blank" className="text-sm text-blue-600 hover:underline">View Site ↗</a>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-6">{children}</main>
    </div>
  );
}
