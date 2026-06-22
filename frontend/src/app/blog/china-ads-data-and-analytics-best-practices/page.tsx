export const metadata = {
  title: 'China Ads Data and Analytics Best Practices',
  description: 'A practical guide to advertising data and analytics in China for international brands, covering tracking setup, cross-platform measurement, attribution challenges, reporting frameworks, and how to build a reliable data foundation for campaign optimization.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Data and Measurement</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China Ads Data and Analytics Best Practices</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical guide to advertising data and analytics in China for international brands, covering tracking setup, cross-platform measurement, attribution challenges, reporting frameworks, and how to build a reliable data foundation for campaign optimization.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why data infrastructure matters more in China</h2>
          <p className="text-[#dce4f0]">China advertising ecosystem is fragmented across multiple major platforms, each with its own tracking system, reporting format, and attribution logic. Unlike markets where a single analytics platform can consolidate most data, China requires a more deliberate approach to cross-platform measurement. International brands that invest in proper data infrastructure before scaling spend usually make better optimization decisions and achieve stronger long-term performance.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Fragmented platforms mean fragmented data</p>
            <p className="text-sm text-[#b3c0d8]">Each major platform has its own tracking, reporting, and attribution system.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Tracking setup determines optimization quality</p>
            <p className="text-sm text-[#b3c0d8]">Without proper conversion tracking, platform algorithms cannot optimize effectively.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Cross-platform reporting requires manual effort</p>
            <p className="text-sm text-[#b3c0d8]">Consolidating data across platforms usually requires custom reporting infrastructure.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG data and analytics framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise international advertisers to build their China data infrastructure around four layers: tracking implementation, conversion event design, cross-platform reporting, and optimization feedback loops. This creates a reliable foundation for campaign decision-making.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Layer</th>
                  <th className="p-3 border-b border-[#1e2d45]">What to set up</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Tracking implementation</td>
                  <td className="p-3 text-[#dce4f0]">Platform pixels, SDK integration, and conversion API setup</td>
                  <td className="p-3 text-[#dce4f0]">Accurate data collection is the foundation of all optimization</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Conversion event design</td>
                  <td className="p-3 text-[#dce4f0]">Define primary and secondary conversion events for each campaign type</td>
                  <td className="p-3 text-[#dce4f0]">Clear event definitions enable meaningful performance comparison</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Cross-platform reporting</td>
                  <td className="p-3 text-[#dce4f0]">Consolidated dashboard, standardized metrics, and reconciliation process</td>
                  <td className="p-3 text-[#dce4f0]">Makes cross-platform budget allocation decisions possible</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Optimization feedback loops</td>
                  <td className="p-3 text-[#dce4f0]">Regular performance review cadence, insight generation, and action frameworks</td>
                  <td className="p-3 text-[#dce4f0]">Data is only valuable when it drives decisions and actions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tracking setup across major platforms</h2>
          <p className="text-[#dce4f0]">Each major China advertising platform has its own tracking system. Baidu uses Baidu Tongji and conversion tracking pixels. Tencent Ads uses Tencent Analytics and conversion API. Douyin uses Ocean Engine pixel and conversion events. Xiaohongshu has its own conversion tracking system. International teams need to implement tracking on each platform individually — there is no single universal tracking solution that covers all China platforms. Ensuring that each platform's tracking is correctly implemented before campaigns launch is essential for reliable optimization.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common data and analytics mistakes</h2>
          <p className="text-[#dce4f0]">The most common mistake is launching campaigns before tracking is properly implemented, which means the first wave of spend generates no usable optimization data. Another frequent issue is defining conversion events inconsistently across platforms, making cross-platform comparison unreliable. Teams also often rely solely on platform-reported metrics without any independent verification, which can lead to over-optimization for platform-attributed conversions rather than actual business outcomes.</p>
          <ul className="list-disc pl-6 text-[#dce4f0] space-y-2">
            <li>Implement and validate tracking on every platform before launching campaigns.</li>
            <li>Define consistent conversion event hierarchies across all platforms.</li>
            <li>Build a consolidated reporting dashboard for cross-platform visibility.</li>
            <li>Schedule regular performance review cadences with clear action frameworks.</li>
            <li>Consider independent verification for high-spend campaigns.</li>
          </ul>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Data and analytics infrastructure in China requires more deliberate setup than in consolidated markets. International brands that invest in proper tracking, consistent conversion definitions, and cross-platform reporting before scaling spend usually achieve better optimization and stronger long-term performance.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international advertisers build reliable data and analytics infrastructure for China advertising, from tracking implementation through cross-platform reporting to optimization feedback loops.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
