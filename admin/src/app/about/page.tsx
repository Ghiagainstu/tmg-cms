export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About TMG</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto text-lg">
          Tuyue Media Gateway is the unified media interface for international agencies entering China&apos;s digital advertising market.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-[#b3c0d8] mb-4">
          China&apos;s digital advertising ecosystem is the world&apos;s most complex �� multiple platforms, unique regulations, different consumer behaviors, and a rapidly evolving AI landscape. International brands and agencies face a steep learning curve.
        </p>
        <p className="text-[#b3c0d8] mb-4">
          TMG was founded to solve this problem. We provide one connection point to all major Chinese advertising platforms, with full-service campaign management, creative localization, and performance optimization.
        </p>
        <p className="text-[#b3c0d8]">
          Our team combines deep local expertise with international marketing experience, serving clients across e-commerce, education, travel, B2B, and consumer goods.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: "??", title: "Platform Expertise", desc: "Deep knowledge of every major Chinese advertising platform and their unique strengths." },
            { icon: "??", title: "Data-Driven", desc: "Every decision backed by data. Transparent reporting and measurable ROI." },
            { icon: "????", title: "Local Knowledge", desc: "Understanding of Chinese consumer behavior, culture, and regulatory landscape." },
            { icon: "??", title: "Full Service", desc: "From strategy to creative to execution �� one partner for your entire China journey." },
          ].map((v) => (
            <div key={v.title} className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-[#b3c0d8]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111827] text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Enter China?</h2>
        <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] px-8 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">
          Work With Us
        </a>
      </section>
    </div>
  );
}
