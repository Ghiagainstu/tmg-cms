import { getSiteConfig } from "@/lib/api";

export default async function HomePage() {
  let config = null;
  try { config = await getSiteConfig("en"); } catch {}

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080c14]/90 backdrop-blur border-b border-[#1e2d45]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-lg font-bold">
            <span className="text-[#c9a84c]">{config?.logo_text || "TMG"}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#b3c0d8]">
            <a href="/services" className="hover:text-white transition">Services</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="/contact" className="bg-[#c9a84c] text-[#080c14] px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#e8c87a] transition">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full mb-6">China Digital Advertising</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            One Connection.<br /><span className="text-[#c9a84c]">All China Platforms.</span>
          </h1>
          <p className="text-lg text-[#b3c0d8] max-w-2xl mx-auto mb-10">
            The unified media interface for international agencies entering China&apos;s digital advertising market. WeChat, Douyin, Baidu, Xiaohongshu, Bilibili �� one partner, all platforms.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-[#c9a84c] text-[#080c14] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Start Your Campaign</a>
            <a href="/services" className="border border-[#1e2d45] px-6 py-3 rounded-lg text-[#b3c0d8] hover:border-[#c9a84c] hover:text-white transition">View Services</a>
          </div>
        </div>
      </section>

      {/* Platform Logos */}
      <section className="py-16 px-6 border-y border-[#1e2d45]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-[#8899b5] mb-8">Platforms We Connect</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["WeChat", "Douyin", "Baidu", "Xiaohongshu", "Bilibili", "Bing China"].map((platform) => (
              <div key={platform} className="bg-[#111827] border border-[#1e2d45] px-6 py-3 rounded-lg text-sm text-[#b3c0d8]">{platform}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-[#b3c0d8] mb-12 max-w-2xl mx-auto">Full-service China digital advertising �� from strategy to execution, across all major platforms.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "WeChat Ads", desc: "Moments ads, Mini Programs, Official Account marketing, and search ads.", href: "/services/wechat" },
              { title: "Douyin Ads", desc: "Feed ads, search ads, live commerce, and Ocean Engine integration.", href: "/services/douyin" },
              { title: "Baidu SEM", desc: "Search ads, Brand Zone, AI search optimization, and Baidu ecosystem.", href: "/services/baidu" },
              { title: "Xiaohongshu", desc: "KOL/KOC campaigns, search ads, brand zones, and content marketing.", href: "/services/xiaohongshu" },
              { title: "Bilibili", desc: "Video ads, search ads, creator partnerships, and Gen Z targeting.", href: "/services/bilibili" },
              { title: "China GEO", desc: "Generative Engine Optimization for AI-powered search in China.", href: "/geo" },
            ].map((svc) => (
              <a key={svc.title} href={svc.href} className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c] transition group">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#c9a84c] transition">{svc.title}</h3>
                <p className="text-sm text-[#b3c0d8]">{svc.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enter China?</h2>
          <p className="text-[#b3c0d8] mb-8">Get a free consultation on which platforms and strategies fit your brand.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] px-8 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1e2d45]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">About TMG</h3>
              <p className="text-sm text-[#b3c0d8]">{config?.footer_description || "The unified media interface for international agencies entering China's digital advertising market."}</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-[#b3c0d8]">
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/faqs" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-[#b3c0d8]">
                <li><a href={`mailto:${config?.contact_email || "tmg@tuyuesouxin.cn"}`} className="text-[#2d6be4] hover:underline">{config?.contact_email || "tmg@tuyuesouxin.cn"}</a></li>
                <li>Shanghai, China</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {(config?.footer_platforms || []).map((p) => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#0d1220] border border-[#1e2d45] px-2 py-1 rounded hover:border-[#c9a84c] transition">{p.name}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#1e2d45] mt-8 pt-6 text-center text-xs text-[#8899b5]">&copy; {new Date().getFullYear()} Tuyue Media Gateway (TMG). All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
