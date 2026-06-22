export default function ServicesPage() {
  const services = [
    { icon: "\u{1F4F1}", title: "WeChat Ads", desc: "\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3 \u5E83\u544A\u3001\u30DF\u30CB\u30D7\u30ED\u30B0\u30E9\u30E0\u3001\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u3001WeChat \u691C\u7D22 \u5E83\u544A (13\u5104+\u30E6\u30FC\u30B6\u30FC)", href: "/services/wechat" },
    { icon: "\u{1F3AC}", title: "Douyin Ads", desc: "\u30D5\u30A3\u30FC\u30C9 \u5E83\u544A\u3001\u691C\u7D22 \u5E83\u544A\u3001\u30E9\u30A4\u30D6 \u30B3\u30DE\u30FC\u30B9\u3001Ocean Engine \u7D71\u5408 (\u6700\u5927\u30EA\u30FC\u30C1)", href: "/services/douyin" },
    { icon: "\u{1F50D}", title: "Baidu SEM", desc: "\u691C\u7D22 \u5E83\u544A\u3001\u30D6\u30E9\u30F3\u30C9\u30BE\u30FC\u30F3\u3001AI \u691C\u7D22\u6700\u9069\u5316 (\u4E2D\u56FD\u6700\u5927\u306E\u691C\u7D22\u30A8\u30F3\u30B8\u30F3)", href: "/services/baidu" },
    { icon: "\u{1F4D6}", title: "Xiaohongshu", desc: "KOL/KOC \u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3001\u691C\u7D22 \u5E83\u544A\u3001\u30D6\u30E9\u30F3\u30C9\u30BE\u30FC\u30F3\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0 (RED)", href: "/services/xiaohongshu" },
    { icon: "\u{1F4FA}", title: "Bilibili", desc: "\u52D5\u753B \u5E83\u544A\u3001\u691C\u7D22 \u5E83\u544A\u3001\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC \u63D0\u643A\u3001Gen Z \u30BF\u30FC\u30B2\u30C3\u30C6\u30A3\u30F3\u30B0", href: "/services/bilibili" },
    { icon: "\u{1F30D}", title: "China GEO", desc: "\u751F\u6210\u30A8\u30F3\u30B8\u30F3\u6700\u9069\u5316 - \u4E2D\u56FD\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u5BFE\u5F93 AI \u691C\u7D22\u6700\u9069\u5316", href: "/geo" },
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">\u30B5\u30FC\u30D3\u30B9</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">\u30D5\u30EB \u30B5\u30FC\u30D3\u30B9 \u4E2D\u56FD \u30C7\u30B8\u30BF\u30EB \u5E83\u544A - \u6226\u7565\u304B\u3089\u5B9F\u884C\u307E\u3067\u3001\u3059\u3079\u3066\u306E\u4E3B\u8981\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u30AB\u30D0\u30FC\u3057\u307E\u3059\u3002</p>
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