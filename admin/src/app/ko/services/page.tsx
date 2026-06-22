export default function ServicesPage() {
  const services = [
    { icon: "\u{1F4F1}", title: "WeChat Ads", desc: "\uCC28\uC6D0 \uAD11\uACE0, \uBBF8\uB2C8 \uD504\uB85C\uADF8\uB7A8, \uACF5\uC2DD \uACC4\uC815 \uB9C8\uCF00\uD305, WeChat \uAC80\uC0C9 \uAD11\uACE0 (13\uC5B4+)", href: "/services/wechat" },
    { icon: "\u{1F3AC}", title: "Douyin Ads", desc: "\uD53C\uB4DC \uAD11\uACE0, \uAC80\uC0C9 \uAD11\uACE0, \uB77C\uC774\uBE0C \uCE5C\uAD6C, Ocean Engine \uD1B5\uD569 (\uCD5C\uB300 \uB3CC\uCDA9\uB825)", href: "/services/douyin" },
    { icon: "\u{1F50D}", title: "Baidu SEM", desc: "\uAC80\uC0C9 \uAD11\uACE0, \uBE0C\uB79C\uB4DC \uC601\uC5ED, AI \uAC80\uC0C9 \uCD5C\uC801\uD654 (\uC911\uAD6D \uCD5C\uB300 \uAC80\uC0C9 \uC5D8\uC9C0)", href: "/services/baidu" },
    { icon: "\u{1F4D6}", title: "Xiaohongshu", desc: "KOL/KOC \uCE90\uD398\uC778, \uAC80\uC0C9 \uAD11\uACE0, \uBE0C\uB79C\uB4DC \uC601\uC5ED, \uCEF4\uD150\uD2B8 \uB9C8\uCF00\uD305 (RED)", href: "/services/xiaohongshu" },
    { icon: "\u{1F4FA}", title: "Bilibili", desc: "\uBE44\uB514\uC624 \uAD11\uACE0, \uAC80\uC0C9 \uAD11\uACE0, \uD06C\uB9AC\uC5B4\uD130 \uD3C9\uD569, Gen Z \uB300\uC0C1 \uB9C8\uCF00\uD305", href: "/services/bilibili" },
    { icon: "\u{1F30D}", title: "China GEO", desc: "\uCD94\uC815 \uC5D4\uC9C4 \uCD5C\uC801\uD654 - \uC911\uAD6D \uD50C\uB79C\uD3FC \uB300\uC0C1 AI \uAC80\uC0C9 \uCD5C\uC801\uD654", href: "/geo" },
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">\uC11C\uBE44\uC2A4</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">\uC804\uCCB4 \uC911\uAD6D \uB514\uC9C0\uD138 \uAD11\uACE0 \uC11C\uBE44\uC2A4 - \uC804\uB7B5\uBD80\uD130 \uC2E4\uD589\uAE4C\uC9C0, \uBAA8\uB4E0 \uC8FC\uC694 \uD50C\uB79C\uD3FC \uB2E4\uB8E8\uBA74.</p>
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