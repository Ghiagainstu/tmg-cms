export const metadata = {
  title: 'China Programmatic Advertising and DSP Landscape',
  description: 'A practical guide to programmatic advertising in China for international brands, covering the DSP ecosystem, inventory sources, data availability, and how programmatic fits alongside platform-direct buying.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Media Strategy</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China Programmatic Advertising and DSP Landscape</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical guide to programmatic advertising in China for international brands, covering the DSP ecosystem, inventory sources, data availability, and how programmatic fits alongside platform-direct buying.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why programmatic in China is a different landscape</h2>
          <p className="text-[#dce4f0]">Programmatic advertising in China operates in a fundamentally different environment from Western markets. The major platforms — Baidu, Alibaba, Tencent, and ByteDance — each have their own closed ecosystems with limited cross-platform data sharing. Open-web programmatic inventory is smaller and more fragmented than in markets dominated by the open internet. For international advertisers, understanding how programmatic works in China — and where it adds value compared to platform-direct buying — is essential for building an efficient media plan.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Walled gardens dominate</p>
            <p className="text-sm text-[#b3c0d8]">China major platforms operate closed ecosystems, which limits cross-platform programmatic reach.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Open-web programmatic is niche</p>
            <p className="text-sm text-[#b3c0d8]">Open-web DSP inventory exists but is smaller and requires careful quality control.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Data availability is platform-dependent</p>
            <p className="text-sm text-[#b3c0d8]">Audience data quality and targeting capabilities vary significantly by platform and DSP.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG programmatic evaluation framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise international advertisers to evaluate programmatic opportunities in China across four dimensions: inventory quality, data and targeting, measurement capabilities, and cost efficiency. This helps teams determine when programmatic adds value and when platform-direct buying is more effective.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Dimension</th>
                  <th className="p-3 border-b border-[#1e2d45]">What to evaluate</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Inventory quality</td>
                  <td className="p-3 text-[#dce4f0]">Source transparency, brand safety, viewability, and invalid traffic rates</td>
                  <td className="p-3 text-[#dce4f0]">Open-web programmatic inventory quality varies significantly in China</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Data and targeting</td>
                  <td className="p-3 text-[#dce4f0]">Audience data sources, targeting precision, and cross-device capabilities</td>
                  <td className="p-3 text-[#dce4f0]">Data availability differs from Western programmatic markets</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Measurement capabilities</td>
                  <td className="p-3 text-[#dce4f0]">Attribution, viewability verification, and third-party tracking support</td>
                  <td className="p-3 text-[#dce4f0]">Measurement standards may not match global programmatic expectations</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Cost efficiency</td>
                  <td className="p-3 text-[#dce4f0]">CPM levels, conversion rates, and total cost compared to platform-direct buying</td>
                  <td className="p-3 text-[#dce4f0]">Programmatic is not always cheaper or more effective than direct platform buying</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to use programmatic in China</h2>
          <p className="text-[#dce4f0]">Programmatic adds the most value in China when advertisers need to reach audiences across multiple open-web properties, run retargeting campaigns at scale, or access specific inventory types not available through platform-direct buying. It is also useful for advertisers that need frequency management across multiple touchpoints or want to test new audience segments outside the major walled gardens. However, for most first-time advertisers in China, platform-direct buying through Baidu, Tencent, Douyin, and Xiaohongshu is usually more effective and easier to manage.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common programmatic mistakes in China</h2>
          <p className="text-[#dce4f0]">The most common mistake is assuming that programmatic buying in China works the same way as in Western markets. Inventory sources, data availability, and measurement capabilities are all different. Another frequent issue is prioritizing low CPMs over inventory quality — cheap programmatic inventory in China often comes with high invalid traffic rates and brand safety risks. Teams also often fail to verify that their Western DSP and measurement vendors have actual China coverage, which can result in campaigns running without proper tracking or verification.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Platform-direct vs programmatic: how to decide</h2>
          <p className="text-[#dce4f0]">For most international advertisers, platform-direct buying is the primary approach in China, with programmatic serving as a complementary channel. Platform-direct buying through Baidu, Tencent Ads, Douyin, and Xiaohongshu provides access to the largest audiences, the most mature targeting, and the most reliable measurement. Programmatic adds value in specific scenarios: open-web reach, retargeting scale, cross-platform frequency management, and niche inventory access. The right balance depends on the advertiser's objectives, budget, and operational capabilities.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Programmatic advertising in China is a complementary channel, not a primary one. International advertisers that understand the differences between China programmatic landscape and Western markets — and use programmatic strategically alongside platform-direct buying — usually build more efficient media plans.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international advertisers evaluate programmatic opportunities in China and build media strategies that combine platform-direct buying with targeted programmatic campaigns for maximum efficiency.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
