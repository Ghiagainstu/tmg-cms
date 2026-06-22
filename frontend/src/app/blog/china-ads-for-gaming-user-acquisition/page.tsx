export const metadata = {
  title: 'China Ads for Gaming: User Acquisition and Monetization',
  description: 'A practical guide for international gaming companies advertising in China, covering user acquisition channels, creative best practices, attribution challenges, and monetization strategies across major ad platforms.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Industry Playbook</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China Ads for Gaming: User Acquisition and Monetization</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical guide for international gaming companies advertising in China, covering user acquisition channels, creative best practices, attribution challenges, and monetization strategies across major ad platforms.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why gaming in China is a market like no other</h2>
          <p className="text-[#dce4f0]">China is one of the largest gaming markets in the world, but it is also one of the most regulated and operationally complex. Game license requirements, platform-specific distribution rules, fragmented Android app stores, and strict content guidelines all create challenges that international gaming companies do not face in other markets. A successful China gaming launch requires not just great creative and media buying — it requires regulatory preparation, platform relationships, and localized monetization design.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Game license is a launch prerequisite</p>
            <p className="text-sm text-[#b3c0d8]">Without a valid game license, paid advertising and distribution are not possible on mainstream platforms.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Fragmented distribution changes the funnel</p>
            <p className="text-sm text-[#b3c0d8]">Multiple Android stores, OEM channels, and platform-specific SDKs create a different acquisition architecture.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Creative drives performance more than targeting</p>
            <p className="text-sm text-[#b3c0d8]">In China gaming ad ecosystem, creative quality and volume often matter more than audience targeting precision.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG gaming user acquisition framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise international gaming companies to evaluate their China UA strategy across five areas: licensing readiness, platform selection, creative production, attribution setup, and monetization alignment. This framework helps teams avoid the most common launch blockers and build a sustainable acquisition engine.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Area</th>
                  <th className="p-3 border-b border-[#1e2d45]">What to prepare</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Licensing readiness</td>
                  <td className="p-3 text-[#dce4f0]">Game license, content approval, and publishing partner alignment</td>
                  <td className="p-3 text-[#dce4f0]">No license means no access to mainstream ad platforms and app stores</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Platform selection</td>
                  <td className="p-3 text-[#dce4f0]">Douyin, Tencent Ads, Bilibili, OEM app stores, and programmatic networks</td>
                  <td className="p-3 text-[#dce4f0]">Different game genres perform better on different platforms</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Creative production</td>
                  <td className="p-3 text-[#dce4f0]">High-volume short-video creatives, playable ads, and localized gameplay footage</td>
                  <td className="p-3 text-[#dce4f0]">Creative volume and refresh rate directly impact UA efficiency</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Attribution setup</td>
                  <td className="p-3 text-[#dce4f0]">SDK integration, conversion tracking, and cross-platform attribution logic</td>
                  <td className="p-3 text-[#dce4f0]">Accurate attribution is essential for optimizing spend across fragmented channels</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Monetization alignment</td>
                  <td className="p-3 text-[#dce4f0]">IAP design, ad monetization, payment integration, and LTV modeling</td>
                  <td className="p-3 text-[#dce4f0]">UA strategy should be designed around monetization model, not separate from it</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key UA channels for gaming in China</h2>
          <p className="text-[#dce4f0]">China gaming UA landscape includes several major channels, each with different strengths. Douyin and Ocean Engine are powerful for short-video creative-driven acquisition. Tencent Ads provides access to WeChat, QQ, and gaming-specific inventory. Bilibili is especially effective for ACG (anime, comics, games) audiences. OEM app stores (Huawei, Xiaomi, OPPO, Vivo) provide direct device-level distribution. Programmatic networks and incentivized installs also play a role, though quality control requires careful management.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Creative best practices for gaming UA</h2>
          <p className="text-[#dce4f0]">In China gaming ad ecosystem, creative is often the single biggest performance driver. High-volume short-video creatives, gameplay footage compilations, influencer-style commentary, and playable ad formats all perform well. The best-performing gaming advertisers usually refresh creative frequently — sometimes daily — to combat fatigue. Localizing creative for Chinese players is also essential: direct translations of global creatives usually underperform compared to locally produced content.</p>
          <ul className="list-disc pl-6 text-[#dce4f0] space-y-2">
            <li>Produce high-volume short-video creatives and refresh frequently.</li>
            <li>Use gameplay footage that highlights the most engaging moments.</li>
            <li>Test playable ads where platform support allows.</li>
            <li>Localize creative tone, humor, and storytelling for Chinese players.</li>
            <li>Monitor creative fatigue and adjust production cadence accordingly.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common mistakes international gaming companies make in China</h2>
          <p className="text-[#dce4f0]">The most common mistake is attempting to run paid campaigns before securing the game license. Another frequent issue is underestimating the creative production volume needed to compete effectively — in China gaming ad market, creative refresh speed is a competitive advantage. Teams also often apply global attribution logic without adapting to China fragmented distribution environment, which leads to inaccurate optimization decisions. Finally, many international teams fail to integrate their UA strategy with monetization design, resulting in high install volumes but poor LTV.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">China gaming market offers enormous opportunity, but it requires a localized approach to licensing, distribution, creative production, and monetization. International gaming companies that prepare these foundations before launching UA campaigns usually build more sustainable growth.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international gaming companies navigate China UA landscape, from platform selection and creative production to attribution setup and monetization-aligned campaign strategy.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
