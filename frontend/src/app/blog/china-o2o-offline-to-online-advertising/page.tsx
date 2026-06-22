export const metadata = {
  title: 'China O2O and Offline-to-Online Advertising Playbook',
  description: 'A practical guide to offline-to-online advertising in China, covering how international brands can use digital ads to drive store visits, in-store purchases, and offline conversions across major platforms.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Commerce Strategy</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">China O2O and Offline-to-Online Advertising Playbook</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A practical guide to offline-to-online advertising in China, covering how international brands can use digital ads to drive store visits, in-store purchases, and offline conversions across major platforms.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 22, 2026 · 14 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why O2O is a core strategy in China, not a niche one</h2>
          <p className="text-[#dce4f0]">In China, offline-to-online (O2O) advertising is not a secondary tactic — it is a core commerce model. Many of China largest consumer categories, including retail, food and beverage, beauty, local services, and automotive, rely on digital advertising to drive offline actions such as store visits, in-store purchases, test drives, and service bookings. International brands with physical retail presence in China that ignore O2O advertising often miss one of the most important conversion paths available.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Digital drives offline in China</p>
            <p className="text-sm text-[#b3c0d8]">Consumers discover, research, and decide online — then act offline. Digital ads close the loop.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Store visit optimization is mature</p>
            <p className="text-sm text-[#b3c0d8]">Major platforms offer store visit tracking and offline conversion optimization features.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Mini Programs bridge online and offline</p>
            <p className="text-sm text-[#b3c0d8]">WeChat Mini Programs can connect ad clicks to coupons, reservations, and in-store redemption.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG O2O advertising framework</h2>
          <p className="text-[#dce4f0]">At TMG, we usually advise brands with offline presence to structure O2O campaigns around four layers: geo-targeting, conversion event design, post-click journey, and offline attribution. This helps create a measurable connection between digital spend and physical outcomes.</p>
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
                  <td className="p-3 font-semibold">Geo-targeting</td>
                  <td className="p-3 text-[#dce4f0]">City, district, radius around store, and POI-based targeting</td>
                  <td className="p-3 text-[#dce4f0]">Ensures ads reach users who can actually visit the physical location</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Conversion event design</td>
                  <td className="p-3 text-[#dce4f0]">Coupon claim, reservation, store visit, phone call, or map navigation</td>
                  <td className="p-3 text-[#dce4f0]">Defines what offline action the campaign is optimized toward</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Post-click journey</td>
                  <td className="p-3 text-[#dce4f0]">Mini Program coupon, reservation form, map link, or store page</td>
                  <td className="p-3 text-[#dce4f0]">Reduces friction between ad click and offline action</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Offline attribution</td>
                  <td className="p-3 text-[#dce4f0]">Store visit tracking, coupon redemption data, and CRM matching</td>
                  <td className="p-3 text-[#dce4f0]">Makes it possible to measure digital impact on offline results</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Platforms and formats for O2O campaigns</h2>
          <p className="text-[#dce4f0]">Several major platforms support O2O advertising in China. WeChat Moments ads with Mini Program linking are one of the most effective formats for driving store visits and coupon claims. Douyin local-life ads can drive reservations and store traffic with geo-targeted video. Baidu Maps and Baidu search ads can capture high-intent local queries. Dianping and Meituan are essential for food, beverage, and local service categories. Choosing the right platform depends on the brand category, store type, and target audience behavior.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Common O2O advertising mistakes</h2>
          <p className="text-[#dce4f0]">The most common mistake is running digital campaigns without a clear offline conversion event — impressions and clicks do not matter if the campaign cannot be measured against store visits or purchases. Another frequent issue is poor post-click experience: if the user clicks an ad but faces a complicated coupon redemption or reservation process, the conversion rate will be low. Teams also often fail to pass offline conversion data back to the ad platform, which prevents the algorithm from optimizing toward actual business outcomes.</p>
          <ul className="list-disc pl-6 text-[#dce4f0] space-y-2">
            <li>Define a clear offline conversion event before launching campaigns.</li>
            <li>Use Mini Programs or simple forms to reduce post-click friction.</li>
            <li>Pass offline conversion data back to ad platforms for optimization.</li>
            <li>Geo-target campaigns around actual store locations, not entire cities.</li>
            <li>Test different offer types (coupons, reservations, direct visit prompts).</li>
          </ul>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">O2O advertising in China is a core commerce strategy, not a niche add-on. International brands with physical presence that build structured O2O campaigns — with clear conversion events, smooth post-click journeys, and offline attribution — can unlock one of the most measurable and efficient advertising paths in the market.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international brands build O2O advertising strategies in China, connecting digital campaigns to offline store visits, reservations, and purchases with measurable attribution.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Talk to TMG</a>
        </section>
      </article>
    </div>
  )
}
