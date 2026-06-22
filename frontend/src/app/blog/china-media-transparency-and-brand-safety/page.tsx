export const metadata = {
  title: 'China Media Transparency and Brand Safety Checklist',
  description: 'A practical checklist for international advertisers on media transparency, brand safety, and ad fraud prevention in China, covering platform verification, third-party measurement, and governance best practices.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Governance</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China Media Transparency and Brand Safety Checklist</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical checklist for international advertisers on media transparency, brand safety, and ad fraud prevention in China, covering platform verification, third-party measurement, and governance best practices.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 13 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why media transparency is a growing concern for China advertisers</h2>
          <p className="text-[#dce4f0]">As international brands increase their investment in China's digital advertising market, questions about media transparency, brand safety, and ad fraud become more important. China's advertising ecosystem is large, fragmented, and operates differently from Western markets in terms of measurement standards, third-party verification availability, and platform reporting. International teams that assume the same transparency tools and governance practices used in other markets will work in China often find gaps.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">China's ecosystem is more fragmented</p>
            <p className="text-sm text-[#b3c0d8]">Multiple platforms, app stores, and ad networks create more complexity than single-ecosystem markets.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Third-party verification is evolving</p>
            <p className="text-sm text-[#b3c0d8]">Some Western verification vendors have limited coverage in China; local alternatives are growing.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Brand safety needs local context</p>
            <p className="text-sm text-[#b3c0d8]">Content risks, platform environments, and regulatory sensitivities in China are different from other markets.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG media transparency checklist</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise international advertisers to evaluate their China media transparency across five areas: platform verification, third-party measurement, brand safety controls, ad fraud prevention, and reporting governance. This checklist helps teams identify gaps before they become performance or reputation risks.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Area</th>
                  <th className="p-3 border-b border-[#1e2d45]">What to check</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Platform verification</td>
                  <td className="p-3 text-[#dce4f0]">Official account status, ad platform certification, and verified partner relationships</td>
                  <td className="p-3 text-[#dce4f0]">Ensures ads are running through legitimate platform channels</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Third-party measurement</td>
                  <td className="p-3 text-[#dce4f0]">Tracking pixel compatibility, third-party ad verification, and viewability measurement</td>
                  <td className="p-3 text-[#dce4f0]">Provides independent performance validation beyond platform-reported metrics</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Brand safety controls</td>
                  <td className="p-3 text-[#dce4f0]">Content exclusion lists, placement controls, and sensitive category filters</td>
                  <td className="p-3 text-[#dce4f0]">Protects brand reputation in a content environment with local sensitivities</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Ad fraud prevention</td>
                  <td className="p-3 text-[#dce4f0]">Invalid traffic detection, click fraud monitoring, and conversion quality checks</td>
                  <td className="p-3 text-[#dce4f0]">Reduces wasted spend and improves performance data quality</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Reporting governance</td>
                  <td className="p-3 text-[#dce4f0]">Consistent reporting formats, cross-platform reconciliation, and audit trail maintenance</td>
                  <td className="p-3 text-[#dce4f0]">Creates accountability and makes performance review more reliable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Third-party measurement in China: what works and what does not</h2>
          <p className="text-[#dce4f0]">Some Western third-party measurement and verification vendors have limited coverage or integration challenges in China. Local measurement partners, such as Miaozhen and GrowingIO, are more commonly used for ad verification, viewability measurement, and cross-platform tracking. International teams should evaluate which measurement partners have actual integration with their chosen China platforms before assuming their global tools will work.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Brand safety considerations specific to China</h2>
          <p className="text-[#dce4f0]">Brand safety in China involves a mix of content quality, regulatory sensitivity, and platform-specific risks. Content that would be considered safe in other markets may be sensitive in China due to regulatory requirements around political content, health claims, and cultural norms. International teams should work with local partners to build content exclusion lists and placement guidelines that reflect China-specific risks, not just global brand safety frameworks.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common transparency gaps for international advertisers</h2>
          <p className="text-[#dce4f0]">The most common gaps include: relying on platform-reported metrics without independent verification, using global tracking tools that have limited China integration, applying brand safety rules that do not account for China-specific content risks, and lacking a consistent reporting governance framework across multiple platforms. Addressing these gaps early — before budget scales — is much easier than fixing them after performance concerns arise.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Media transparency and brand safety in China require a localized approach. International teams that evaluate platform verification, third-party measurement, brand safety controls, and reporting governance before scaling investment can protect both their budget and their brand reputation.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international advertisers build media transparency and brand safety frameworks that are adapted to China's unique advertising ecosystem and regulatory environment.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
