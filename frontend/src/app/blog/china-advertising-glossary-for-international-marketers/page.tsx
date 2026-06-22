export const metadata = {
  title: 'China Advertising Glossary: Key Terms for International Marketers',
  description: 'A practical glossary of China advertising terms for international marketers, covering platform names, industry terminology, regulatory concepts, and commonly used Chinese digital marketing vocabulary.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Reference</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China Advertising Glossary: Key Terms for International Marketers</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical glossary of China advertising terms for international marketers, covering platform names, industry terminology, regulatory concepts, and commonly used Chinese digital marketing vocabulary.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why a China advertising glossary matters</h2>
          <p className="text-[#dce4f0]">China advertising ecosystem uses terminology that international marketers may not be familiar with — from platform-specific terms to regulatory concepts to industry jargon. Misunderstanding these terms can lead to miscommunication with agency partners, confusion during platform operations, and mistakes in compliance review. A clear glossary helps international teams participate more effectively in China campaign planning and management.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Platform terms are unique to China</p>
            <p className="text-sm text-[#b3c0d8]">China platforms use terminology that does not exist in Western advertising ecosystems.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Regulatory terms affect operations</p>
            <p className="text-sm text-[#b3c0d8]">Understanding compliance terminology is essential for smooth campaign approvals.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Industry jargon speeds up communication</p>
            <p className="text-sm text-[#b3c0d8]">Knowing the right terms helps international teams communicate more effectively with local partners.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Platform and ecosystem terms</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Term</th>
                  <th className="p-3 border-b border-[#1e2d45]">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Ocean Engine</td>
                  <td className="p-3 text-[#dce4f0]">ByteDance advertising platform that manages Douyin, Pangle, and Toutiao ads</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Tencent Ads</td>
                  <td className="p-3 text-[#dce4f0]">Tencent advertising platform covering WeChat, QQ, and Video Account inventory</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Baidu Tongji</td>
                  <td className="p-3 text-[#dce4f0]">Baidu analytics platform, equivalent to Google Analytics for the Baidu ecosystem</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Mini Program</td>
                  <td className="p-3 text-[#dce4f0]">Lightweight applications that run inside WeChat without requiring a download</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Brand Zone</td>
                  <td className="p-3 text-[#dce4f0]">Baidu premium search placement that displays branded content above search results</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Industry and business terms</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Term</th>
                  <th className="p-3 border-b border-[#1e2d45]">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">KOL</td>
                  <td className="p-3 text-[#dce4f0]">Key Opinion Leader — major influencer with large following and high credibility</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">KOC</td>
                  <td className="p-3 text-[#dce4f0]">Key Opinion Consumer — micro-influencer with authentic, peer-level voice</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Private Domain</td>
                  <td className="p-3 text-[#dce4f0]">Owned audience channels such as WeChat followers, groups, and CRM contacts</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Grass Planting</td>
                  <td className="p-3 text-[#dce4f0]">Content seeding — the practice of creating authentic product recommendation content</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">O2O</td>
                  <td className="p-3 text-[#dce4f0]">Offline-to-Online — advertising strategy that drives digital users to physical stores</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Regulatory and compliance terms</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Term</th>
                  <th className="p-3 border-b border-[#1e2d45]">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">PIPL</td>
                  <td className="p-3 text-[#dce4f0]">Personal Information Protection Law — China data privacy regulation</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">ICP License</td>
                  <td className="p-3 text-[#dce4f0]">Internet Content Provider license required for websites operating in China</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Ban Hao</td>
                  <td className="p-3 text-[#dce4f0]">Game license required for publishing and advertising games in China</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Bao Jian Pin</td>
                  <td className="p-3 text-[#dce4f0]">Health supplements category with specific advertising restrictions and certificate requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Performance and metrics terms</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Term</th>
                  <th className="p-3 border-b border-[#1e2d45]">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">oCPM</td>
                  <td className="p-3 text-[#dce4f0]">Optimized CPM — bidding model that optimizes toward conversion events</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">GPM</td>
                  <td className="p-3 text-[#dce4f0]">Gross Merchandise per Mille — revenue per thousand impressions in livestream commerce</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">UV Value</td>
                  <td className="p-3 text-[#dce4f0]">Unique Visitor Value — revenue generated per unique store or page visitor</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Seeding Volume</td>
                  <td className="p-3 text-[#dce4f0]">Number of influencer or KOC content pieces published in a seeding campaign</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">Understanding China-specific advertising terminology is a small investment that pays off in better communication, smoother operations, and fewer misunderstandings. International teams that learn the key terms usually collaborate more effectively with their China agency partners and platform representatives.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international advertisers navigate China advertising ecosystem with clarity, providing both hands-on campaign management and the educational resources teams need to understand the market.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
