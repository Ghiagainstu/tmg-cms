export const metadata = {
  title: 'Attribution in China: WeChat, Douyin, Xiaohongshu',
  description: 'A practical guide to attribution in China for international advertisers, explaining how WeChat, Douyin, and Xiaohongshu contribute differently across the customer journey.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Measurement & Strategy</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">Attribution in China: WeChat, Douyin, Xiaohongshu</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical guide to attribution in China for international advertisers, explaining how WeChat, Douyin, and Xiaohongshu contribute differently across the customer journey.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why attribution in China is not one-size-fits-all</h2>
          <p className="text-[#dce4f0]">Attribution in China often looks different from Western markets because discovery, consideration, and conversion can happen inside the same ecosystem. Users may see content, search, chat, and purchase without leaving one app. That makes last-click models too narrow and creates confusion for teams comparing platform performance across WeChat, Douyin, and Xiaohongshu.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Treat platforms as roles, not clones</p>
            <p className="text-sm text-[#b3c0d8]">WeChat, Douyin, and Xiaohongshu often play different roles in the same purchase journey.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Measure contribution, not only conversion</p>
            <p className="text-sm text-[#b3c0d8]">Some platforms create demand, while others close it. Attribution should reflect both.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Use China-ready measurement logic</p>
            <p className="text-sm text-[#b3c0d8]">Cross-platform comparison requires consistent naming, conversion definitions, and reporting frameworks.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG attribution framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise advertisers to start by mapping each platform to its primary contribution stage. This helps leadership teams understand why a platform with a weaker last-click number can still be commercially valuable.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Platform</th>
                  <th className="p-3 border-b border-[#1e2d45]">Typical attribution role</th>
                  <th className="p-3 border-b border-[#1e2d45]">Common contribution</th>
                  <th className="p-3 border-b border-[#1e2d45]">Reporting focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">WeChat</td>
                  <td className="p-3 text-[#dce4f0]">Mid–low funnel, retention, CRM, mini program conversion</td>
                  <td className="p-3 text-[#dce4f0]">Assisted conversion, repeat engagement, lead nurturing</td>
                  <td className="p-3 text-[#dce4f0]">Mini program events, service messages, private domain actions</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Douyin</td>
                  <td className="p-3 text-[#dce4f0]">Top–mid funnel demand creation and impulse conversion</td>
                  <td className="p-3 text-[#dce4f0]">First touch, discovery, short-video commerce conversion</td>
                  <td className="p-3 text-[#dce4f0]">Video actions, search lift, live conversion, product card sales</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Xiaohongshu</td>
                  <td className="p-3 text-[#dce4f0]">Pre-search influence and content trust</td>
                  <td className="p-3 text-[#dce4f0]">Early discovery, brand preference, research-phase influence</td>
                  <td className="p-3 text-[#dce4f0]">Note engagement, search interest, saves, comment intent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Where international teams get attribution wrong</h2>
          <p className="text-[#dce4f0]">The most common mistake is treating every platform as if it should win on direct conversion. In reality, some platforms earn budget by creating intent that another platform captures later. For example, Douyin or Xiaohongshu can influence the research stage, while WeChat or Baidu may collect the final action.</p>
          <p className="text-[#dce4f0]">Another common problem is comparing platforms with inconsistent conversion definitions. If one platform is measured by purchase, another by lead form, and another by content interaction, the results will always look uneven.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How to build a practical attribution view</h2>
          <p className="text-[#dce4f0]">A practical approach is to build a simple contribution model rather than chasing perfect data. Start by agreeing on primary KPIs, secondary signals, and platform roles. Then review performance through a funnel lens instead of a single last-click winner.</p>
          <p className="text-[#dce4f0]">When reporting is structured this way, budget conversations become more strategic and less reactive.</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-sm font-semibold text-[#c9a84c] mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Attribution in China should reflect platform roles across the journey. The best results come from measuring contribution, not only last-click conversion.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How TMG can help</h2>
          <p className="text-[#dce4f0]">TMG helps international advertisers design reporting frameworks that reflect how Chinese platforms actually work together. If your team is struggling with cross-platform attribution, we can help turn messy data into clearer budget decisions.</p>
          <a href="/contact" className="inline-block mt-2 bg-[#c9a84c] text-[#080c14] px-5 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
