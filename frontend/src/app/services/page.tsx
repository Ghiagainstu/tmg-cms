export default function ServicesPage() {
  const services = [
    { icon: "??", title: "WeChat Ads", desc: "Moments ads, Mini Programs, Official Account marketing, and WeChat Search ads across 1.3B+ users.", href: "/services/wechat" },
    { icon: "??", title: "Douyin Ads", desc: "Feed ads, search ads, live commerce, and Ocean Engine integration for maximum reach.", href: "/services/douyin" },
    { icon: "??", title: "Baidu SEM", desc: "Search ads, Brand Zone, AI search optimization across China's largest search engine.", href: "/services/baidu" },
    { icon: "??", title: "Xiaohongshu", desc: "KOL/KOC campaigns, search ads, brand zones, and content marketing on RED.", href: "/services/xiaohongshu" },
    { icon: "??", title: "Bilibili", desc: "Video ads, search ads, creator partnerships, and Gen Z targeting on Bilibili.", href: "/services/bilibili" },
    { icon: "??", title: "China GEO", desc: "Generative Engine Optimization for AI-powered search across Chinese platforms.", href: "/geo" },
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">Full-service China digital advertising �� from strategy to execution, across all major platforms.</p>
      </section>
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <a key={s.title} href={s.href} className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c] transition group">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h2 className="text-lg font-semibold mb-2 group-hover:text-[#c9a84c] transition">{s.title}</h2>
            <p className="text-sm text-[#b3c0d8]">{s.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
