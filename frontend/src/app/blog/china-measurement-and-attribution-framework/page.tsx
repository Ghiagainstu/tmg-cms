export const metadata = {
  title: 'China Measurement and Attribution Framework',
  description: 'A practical framework for measurement and attribution in China, helping international advertisers build clearer reporting, compare platforms more fairly, and connect campaign performance to business outcomes.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Measurement & Reporting</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China Measurement and Attribution Framework</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical framework for measurement and attribution in China, helping international advertisers build clearer reporting, compare platforms more fairly, and connect campaign performance to business outcomes.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why measurement in China needs its own framework</h2>
          <p className="text-[#dce4f0]">Measurement in China is often more complex than international teams expect. Different platforms define success differently, attribution windows vary, and conversion tracking depends on local implementation conditions. That is why advertisers need a practical reporting framework rather than relying on assumptions imported from other markets.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Standardize what you measure</p>
            <p className="text-sm text-[#b3c0d8]">Consistent KPI definitions make cross-platform comparison more meaningful.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Separate contribution from conversion</p>
            <p className="text-sm text-[#b3c0d8]">Some platforms create demand, others capture it. Measurement should reflect both.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Align reporting to business decisions</p>
            <p className="text-sm text-[#b3c0d8]">The goal is better budget and optimization decisions, not just more metrics.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG measurement framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise advertisers to build measurement across four layers: conversion architecture, platform reporting, contribution analysis, and decision reporting. This helps avoid the common trap of collecting numbers without generating insight.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Layer</th>
                  <th className="p-3 border-b border-[#1e2d45]">What it includes</th>
                  <th className="p-3 border-b border-[#1e2d45]">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Conversion architecture</td>
                  <td className="p-3 text-[#dce4f0]">Event naming, funnel steps, lead definitions, and tracking setup</td>
                  <td className="p-3 text-[#dce4f0]">Makes data clean and usable from the start</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Platform reporting</td>
                  <td className="p-3 text-[#dce4f0]">Platform metrics, creative performance, audience response, and delivery insights</td>
                  <td className="p-3 text-[#dce4f0]">Supports tactical optimization</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Contribution analysis</td>
                  <td className="p-3 text-[#dce4f0]">Funnel-stage mapping, assisted actions, and channel role assessment</td>
                  <td className="p-3 text-[#dce4f0]">Improves budget interpretation</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Decision reporting</td>
                  <td className="p-3 text-[#dce4f0]">Executive summaries, business KPIs, and recommendation-ready insights</td>
                  <td className="p-3 text-[#dce4f0]">Turns reporting into action</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Where measurement usually breaks down</h2>
          <p className="text-[#dce4f0]">The first problem is inconsistent definitions across platforms. The second problem is comparing channels with different conversion models. The third problem is presenting too many metrics without business interpretation. A strong measurement framework reduces confusion and improves leadership confidence in China performance data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What good measurement enables</h2>
          <p className="text-[#dce4f0]">Good measurement makes budget conversations more productive. It helps teams understand which platforms support awareness, which drive conversion, and where optimization should happen next. Instead of arguing about which channel “won,” teams can evaluate how the system worked together.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-sm font-semibold text-[#c9a84c] mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">A strong China measurement framework should connect tracking setup, platform insights, contribution analysis, and business reporting. The goal is better decisions, not just more data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How TMG can help</h2>
          <p className="text-[#dce4f0]">TMG helps international advertisers design measurement frameworks that reflect China’s platform ecosystem. If your team needs clearer reporting and better attribution conversations, we can help turn performance data into business-ready insights.</p>
          <a href="/contact" className="inline-block mt-2 bg-[#c9a84c] text-[#080c14] px-5 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
