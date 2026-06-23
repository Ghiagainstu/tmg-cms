export const metadata = {
  title: 'International Advertiser Onboarding Checklist for China',
  description: 'A practical onboarding checklist for international advertisers entering China, covering account setup, compliance, creative, landing pages, tracking, and platform readiness.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">China Market Entry</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">International Advertiser Onboarding Checklist for China</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical onboarding checklist for international advertisers entering China, covering account setup, compliance, creative, landing pages, tracking, and platform readiness.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why onboarding matters more than the first campaign</h2>
          <p className="text-[#dce4f0]">Many international advertisers focus only on the first launch, but in China the real setup happens before media spend. Account approvals, business documentation, landing page readiness, and tracking architecture often determine whether a campaign can run smoothly, scale predictably, and remain compliant.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Prepare China-ready business materials</p>
            <p className="text-sm text-[#b3c0d8]">Licenses, brand authorization, website/app documentation, and local contact details should be ready before account submission.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Localize before you advertise</p>
            <p className="text-sm text-[#b3c0d8]">Creative, landing pages, and conversion flows need China-ready versions, not translated copies from other markets.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Build measurement from day one</p>
            <p className="text-sm text-[#b3c0d8]">Tracking setup, event naming, and conversion validation are part of onboarding, not after-launch optimization.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG onboarding checklist</h2>
          <p className="text-[#dce4f0]">At TMG, we usually break advertiser onboarding into five workstreams: account and compliance, brand and creative, landing page and conversion, tracking and measurement, and campaign readiness. This prevents launch delays and reduces rework later.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Workstream</th>
                  <th className="p-3 border-b border-[#1e2d45]">Key deliverables</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Account & compliance</td>
                  <td className="p-3 text-[#dce4f0]">Business documents, category checks, account approvals, local contacts</td>
                  <td className="p-3 text-[#dce4f0]">Avoids delays and policy rejections</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Brand & creative</td>
                  <td className="p-3 text-[#dce4f0]">Localized copy, brand assets, format specs, compliance-safe claims</td>
                  <td className="p-3 text-[#dce4f0]">Improves approval rate and performance</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Landing page & conversion</td>
                  <td className="p-3 text-[#dce4f0]">China-ready pages, forms, QR flows, mini program or site handoff</td>
                  <td className="p-3 text-[#dce4f0]">Protects conversion rate and user experience</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Tracking & measurement</td>
                  <td className="p-3 text-[#dce4f0]">Pixels, SDKs, event mapping, testing, consent logic</td>
                  <td className="p-3 text-[#dce4f0]">Makes optimization and reporting reliable</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Campaign readiness</td>
                  <td className="p-3 text-[#dce4f0]">Budget, targeting, bidding model, test plan, reporting template</td>
                  <td className="p-3 text-[#dce4f0]">Supports a controlled and reviewable launch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common delays international teams should expect</h2>
          <p className="text-[#dce4f0]">The most common delays are incomplete documentation, restricted-category misunderstandings, creative that does not meet local policy standards, and landing pages that are not ready for China browsing or conversion. Tracking issues are also frequent when teams assume their existing measurement setup will carry over without adaptation.</p>
          <p className="text-[#dce4f0]">A stronger approach is to treat onboarding as a prerequisite for launch confidence, not just admin paperwork.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What good onboarding changes</h2>
          <p className="text-[#dce4f0]">When onboarding is done well, teams avoid repeated rework and can spend more time improving campaigns instead of fixing setup problems. The first week after launch should focus on performance learning, not chasing missing assets or unapproved creatives.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-sm font-semibold text-[#c9a84c] mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">The best China launches start with strong onboarding. Account, creative, landing page, and tracking readiness should all be solved before the first campaign goes live.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How TMG can help</h2>
          <p className="text-[#dce4f0]">TMG supports international agencies and advertisers through onboarding, platform setup, localization checks, and launch readiness reviews. If your team is preparing to enter China, we can help turn onboarding into a structured and predictable process.</p>
          <a href="/contact" className="inline-block mt-2 bg-[#c9a84c] text-[#080c14] px-5 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
