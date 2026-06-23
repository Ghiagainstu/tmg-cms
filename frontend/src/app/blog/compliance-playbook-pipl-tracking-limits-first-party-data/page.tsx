export const metadata = {
  title: 'Compliance Playbook: PIPL, Tracking Limits, First-Party Data',
  description: 'A practical compliance playbook for international advertisers in China, covering PIPL basics, tracking limitations, consent considerations, and first-party data strategy.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Compliance & Data</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">Compliance Playbook: PIPL, Tracking Limits, First-Party Data</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical compliance playbook for international advertisers in China, covering PIPL basics, tracking limitations, consent considerations, and first-party data strategy.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 15 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why compliance is part of media planning</h2>
          <p className="text-[#dce4f0]">In China, compliance is not only a legal checkbox. It directly affects account approvals, tracking reliability, creative approvals, landing page experience, and long-term advertising stability. International advertisers who treat compliance as an afterthought often face more delays and higher rework costs later.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Start with policy reality, not assumptions</p>
            <p className="text-sm text-[#b3c0d8]">China advertising and data rules are stricter than many new entrants expect, especially around claims, consent, and data handling.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Design tracking for the China environment</p>
            <p className="text-sm text-[#b3c0d8]">Pixels, SDKs, and attribution setups often need adaptation for local platforms, browsers, and consent expectations.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Build first-party data intentionally</p>
            <p className="text-sm text-[#b3c0d8]">First-party data is becoming more valuable, but it needs compliant collection and practical activation paths.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG compliance framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise advertisers to break compliance into four layers: advertising policy, privacy and data law, platform enforcement, and operational readiness. This prevents teams from focusing on one area while missing another.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Layer</th>
                  <th className="p-3 border-b border-[#1e2d45]">What it covers</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Advertising policy</td>
                  <td className="p-3 text-[#dce4f0]">Creative claims, restricted categories, approved messaging, and account eligibility</td>
                  <td className="p-3 text-[#dce4f0]">Avoids rejections and account disruption</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Privacy & data law</td>
                  <td className="p-3 text-[#dce4f0]">PIPL obligations, consent expectations, cross-border data considerations, and user rights</td>
                  <td className="p-3 text-[#dce4f0]">Supports lawful and sustainable data use</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Platform enforcement</td>
                  <td className="p-3 text-[#dce4f0]">Platform-specific review rules, restricted industries, and measurement policies</td>
                  <td className="p-3 text-[#dce4f0]">Improves approval rate and tracking reliability</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Operational readiness</td>
                  <td className="p-3 text-[#dce4f0]">Consent flows, privacy pages, landing page wording, and first-party data capture</td>
                  <td className="p-3 text-[#dce4f0]">Reduces execution risk once campaigns go live</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common mistakes international advertisers make</h2>
          <p className="text-[#dce4f0]">The first mistake is assuming that a creative or landing page approved in another market will pass China review. The second mistake is copying tracking setups without accounting for local platform rules and consent flows. The third mistake is ignoring first-party data until paid performance becomes harder to optimize.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How first-party data fits into the picture</h2>
          <p className="text-[#dce4f0]">First-party data is increasingly important for retargeting, CRM nurturing, audience building, and performance stability. However, it should be collected transparently and used in a way that supports both compliance and business outcomes. The strongest advertisers in China combine compliant data capture with clear activation paths inside platforms such as WeChat.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-sm font-semibold text-[#c9a84c] mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Compliance in China should be planned alongside media strategy. Strong privacy, tracking, and first-party data practices reduce risk and improve long-term advertising performance.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How TMG can help</h2>
          <p className="text-[#dce4f0]">TMG helps international advertisers review compliance readiness across creative, tracking, landing pages, and data workflows. If your team is preparing a China launch, we can help identify policy risks early and build a more stable advertising setup.</p>
          <a href="/contact" className="inline-block mt-2 bg-[#c9a84c] text-[#080c14] px-5 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
