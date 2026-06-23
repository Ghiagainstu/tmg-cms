export const metadata = {
  title: 'Pricing Models 2026: CPM / oCPM / CPC / CPA',
  description: 'A practical guide to China ad pricing models in 2026, explaining how CPM, oCPM, CPC, and CPA work, when to use each model, and how international advertisers should choose.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Media Buying Fundamentals</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">Pricing Models 2026: CPM / oCPM / CPC / CPA</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical guide to China ad pricing models in 2026, explaining how CPM, oCPM, CPC, and CPA work, when to use each model, and how international advertisers should choose.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 13 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why pricing model choice affects more than cost</h2>
          <p className="text-[#dce4f0]">In China digital advertising, pricing models are not just budget mechanics. They shape how platforms optimize delivery, what kind of users you attract, and how quickly campaigns move toward business outcomes. Choosing the wrong model can make a good offer look unprofitable, while choosing the right model can unlock scale more efficiently.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Match the model to the campaign goal</p>
            <p className="text-sm text-[#b3c0d8]">Awareness, traffic, lead generation, and ecommerce conversion do not all need the same bidding logic.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Understand the optimization target</p>
            <p className="text-sm text-[#b3c0d8]">The pricing model tells the platform what success looks like and how aggressively to filter users.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Do not compare models by surface CPC alone</p>
            <p className="text-sm text-[#b3c0d8]">Traffic price and conversion quality are not the same thing, especially across different bidding systems.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG pricing model framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise advertisers to choose pricing models based on three inputs: campaign objective, available conversion data, and platform maturity. A new advertiser with limited pixel history should not expect the same optimization behavior as a mature account with strong event volume.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Model</th>
                  <th className="p-3 border-b border-[#1e2d45]">Best use case</th>
                  <th className="p-3 border-b border-[#1e2d45]">Strength</th>
                  <th className="p-3 border-b border-[#1e2d45]">Watch-out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">CPM</td>
                  <td className="p-3 text-[#dce4f0]">Awareness, reach-driven campaigns, broad launches</td>
                  <td className="p-3 text-[#dce4f0]">Efficient exposure and strong top-of-funnel delivery</td>
                  <td className="p-3 text-[#dce4f0]">Weak if you expect direct conversion accountability</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">oCPM</td>
                  <td className="p-3 text-[#dce4f0]">Conversion-led campaigns with enough event data</td>
                  <td className="p-3 text-[#dce4f0]">Platform optimizes toward likely converters</td>
                  <td className="p-3 text-[#dce4f0]">Needs clean events and sufficient volume to learn</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">CPC</td>
                  <td className="p-3 text-[#dce4f0]">Traffic acquisition, testing, and search-style intent</td>
                  <td className="p-3 text-[#dce4f0]">Simple and easy to explain to stakeholders</td>
                  <td className="p-3 text-[#dce4f0]">Click quality varies and may not equal intent</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">CPA</td>
                  <td className="p-3 text-[#dce4f0]">Lead gen, registrations, purchases, or well-defined actions</td>
                  <td className="p-3 text-[#dce4f0]">Strong outcome orientation</td>
                  <td className="p-3 text-[#dce4f0]">Often limited by tracking maturity and conversion volume</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How to choose the right model in practice</h2>
          <p className="text-[#dce4f0]">If the brand is new in China and lacks conversion history, a common approach is to start with broader models for learning and volume, then move toward optimization-focused models as event data improves. That is why oCPM is powerful, but not always the correct starting point for every account.</p>
          <p className="text-[#dce4f0]">Search-heavy advertisers often keep CPC in the mix because intent quality differs from feed discovery. Conversion-led advertisers may move strongly toward oCPM or CPA once measurement and creative alignment are mature enough.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common mistakes international teams make</h2>
          <p className="text-[#dce4f0]">The first mistake is choosing a model based on habit from another market. The second mistake is expecting CPA-like results from a CPC campaign. The third mistake is judging performance too early before the bidding system has enough learning data. Pricing models should be chosen and evaluated with context, not in isolation.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-sm font-semibold text-[#c9a84c] mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Choose China ad pricing models based on campaign goal, data maturity, and platform behavior. The cheapest click is not always the best path to profitable conversions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How TMG can help</h2>
          <p className="text-[#dce4f0]">TMG helps international advertisers choose bidding strategies that fit their current stage of China market entry. If your team is unsure which pricing model to start with, we can help map the right model to your conversion goals and tracking readiness.</p>
          <a href="/contact" className="inline-block mt-2 bg-[#c9a84c] text-[#080c14] px-5 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
