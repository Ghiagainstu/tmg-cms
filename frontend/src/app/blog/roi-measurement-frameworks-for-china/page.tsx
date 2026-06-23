export const metadata = {
  title: 'ROI Measurement Frameworks for China Campaigns',
  description: 'A comprehensive guide for international brands measuring ROI across China\'s digital platforms, covering attribution modeling, incrementality testing, media mix modeling, and unified reporting for WeChat, Douyin, Tmall, and JD.com campaigns.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">Strategic Capability</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">ROI Measurement Frameworks for China Campaigns</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">A comprehensive guide for international brands measuring ROI across China\'s digital platforms, covering attribution modeling, incrementality testing, media mix modeling, and unified reporting for WeChat, Douyin, Tmall, and JD.com campaigns.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG Editorial · June 23, 2026 · 17 min read</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why ROI measurement is uniquely challenging in China</h2>
          <p className="text-[#dce4f0]">Measuring return on investment across China\'s digital ecosystem presents unique challenges that differ significantly from Western markets. The fragmented platform landscape, walled garden data environments, complex customer journeys spanning multiple platforms, and sophisticated attribution requirements create measurement complexity that requires specialized frameworks and approaches. International brands that master ROI measurement in China can make more informed budget allocation decisions, optimize campaign performance more effectively, and demonstrate clear business impact to global stakeholders.</p>
          <p className="text-[#dce4f0]">Unlike Western markets where unified measurement tools like Google Analytics provide comprehensive cross-platform visibility, China\'s measurement landscape requires integration across WeChat, Douyin, Tmall, JD.com, and other platform-specific analytics systems. The absence of universal tracking standards and the prevalence of walled garden ecosystems mean that brands must develop sophisticated measurement strategies that account for platform-specific data limitations while still providing actionable insights for optimization.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">Walled garden data environments</p>
            <p className="text-sm text-[#b3c0d8]">Major Chinese platforms operate as closed ecosystems with limited data sharing, requiring platform-specific measurement approaches and integration strategies.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">Complex cross-platform journeys</p>
            <p className="text-sm text-[#b3c0d8]">Chinese consumers interact across multiple platforms before conversion, creating attribution complexity that requires sophisticated modeling approaches.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">Platform-specific metrics</p>
            <p className="text-sm text-[#b3c0d8]">Each Chinese platform defines and measures key metrics differently, requiring normalization and standardization for accurate cross-platform comparison.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The TMG ROI measurement framework</h2>
          <p className="text-[#dce4f0]">At TMG, we typically advise international brands to structure their China ROI measurement around four strategic pillars: attribution modeling, incrementality testing, media mix modeling, and unified reporting. This framework ensures brands can accurately measure campaign effectiveness while navigating the complexities of China\'s fragmented platform ecosystem.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">Pillar</th>
                  <th className="p-3 border-b border-[#1e2d45]">Key Activities</th>
                  <th className="p-3 border-b border-[#1e2d45]">TMG Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-medium">Attribution Modeling</td>
                  <td className="p-3 text-[#b3c0d8]">Cross-platform attribution, touchpoint analysis, conversion path mapping</td>
                  <td className="p-3 text-[#b3c0d8]">Develop attribution models that account for China\'s walled garden data environments</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Incrementality Testing</td>
                  <td className="p-3 text-[#b3c0d8]">Controlled experiments, lift measurement, causal inference</td>
                  <td className="p-3 text-[#b3c0d8]">Design and execute incrementality tests that isolate true advertising impact across platforms</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Media Mix Modeling</td>
                  <td className="p-3 text-[#b3c0d8]">Budget optimization, channel contribution analysis, predictive modeling</td>
                  <td className="p-3 text-[#b3c0d8]">Build media mix models that account for China\'s unique platform dynamics and seasonality</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Unified Reporting</td>
                  <td className="p-3 text-[#b3c0d8]">Cross-platform dashboards, metric normalization, stakeholder communication</td>
                  <td className="p-3 text-[#b3c0d8]">Create unified reporting frameworks that provide clear visibility across China\'s fragmented platform landscape</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Attribution modeling in China\'s walled gardens</h2>
          <p className="text-[#dce4f0]">Attribution modeling in China requires specialized approaches that account for the closed nature of major platform ecosystems. Unlike Western markets where cross-platform tracking is more standardized, China\'s walled garden environments create unique challenges for accurately attributing conversions to specific marketing touchpoints.</p>
          
          <h3 className="text-xl font-semibold mt-8">Platform-specific attribution challenges</h3>
          <p className="text-[#dce4f0]">Each major Chinese platform presents distinct attribution challenges that brands must navigate:</p>
          <ul className="list-disc list-inside text-[#b3c0d8] space-y-2 ml-4">
            <li><strong>WeChat ecosystem</strong>: Limited cross-platform tracking capabilities require reliance on platform-specific attribution tools and conversion APIs</li>
            <li><strong>Douyin advertising</strong>: Platform-specific attribution windows and conversion definitions that differ from industry standards</li>
            <li><strong>Tmall and JD.com</strong>: Ecommerce platforms with closed-loop attribution that captures purchase behavior but limits cross-platform visibility</li>
            <li><strong>Programmatic platforms</strong>: View-through and click-through attribution models that require careful calibration for Chinese consumer behavior</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Cross-platform attribution strategies</h3>
          <p className="text-[#dce4f0]">Effective attribution in China requires strategies that work across walled garden environments:</p>
          <ul className="list-disc list-inside text-[#b3c0d8] space-y-2 ml-4">
            <li><strong>Unified customer identifiers</strong>: Implement cross-platform identification methods that respect privacy requirements while enabling attribution</li>
            <li><strong>Multi-touch attribution models</strong>: Develop attribution models that account for the complex, multi-platform customer journeys typical in China</li>
            <li><strong>Platform-specific conversion tracking</strong>: Implement platform-specific tracking mechanisms that capture conversion data within walled garden constraints</li>
            <li><strong>Probabilistic matching</strong>: Use statistical methods to connect customer interactions across platforms where deterministic matching isn\'t possible</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Incrementality testing methodologies</h2>
          <p className="text-[#dce4f0]">Incrementality testing provides the most accurate measure of true advertising impact by isolating the causal effect of marketing activities. In China\'s complex platform ecosystem, incrementality testing is essential for understanding which investments are genuinely driving incremental business results.</p>
          
          <h3 className="text-xl font-semibold mt-8">Incrementality testing approaches</h3>
          <p className="text-[#dce4f0]">Several methodologies are effective for measuring incrementality across Chinese platforms:</p>
          <ul className="list-disc list-inside text-[#b3c0d8] space-y-2 ml-4">
            <li><strong>Controlled experiments</strong>: A/B testing frameworks that isolate the impact of specific advertising activities by comparing exposed and unexposed audiences</li>
            <li><strong>Geo-based testing</strong>: Geographic holdout tests that measure advertising impact by comparing performance in markets with and without advertising exposure</li>
            <li><strong>Time-based testing</strong>: Pre-post analysis that measures the impact of campaign launches or pauses by comparing performance across time periods</li>
            <li><strong>Platform-specific lift studies</strong>: Leverage platform-provided incrementality measurement tools available on major Chinese advertising platforms</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Incrementality testing best practices</h3>
          <p className="text-[#dce4f0]">Successful incrementality testing in China requires careful planning and execution:</p>
          <ul className="list-disc list-inside text-[#b3c0d8] space-y-2 ml-4">
            <li><strong>Clear hypothesis definition</strong>: Define specific hypotheses about which activities are expected to drive incremental results</li>
            <li><strong>Proper control group design</strong>: Ensure control groups are statistically valid and representative of the broader audience</li>
            <li><strong>Sufficient test duration</strong>: Run tests for adequate periods to account for China\'s unique purchase cycles and seasonality</li>
            <li><strong>Multi-platform coordination</strong>: Coordinate incrementality tests across platforms to understand the combined impact of multi-platform campaigns</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Media mix modeling for China</h2>
          <p className="text-[#dce4f0]">Media mix modeling (MMM) provides strategic insights into the optimal allocation of marketing budgets across China\'s diverse platform ecosystem. Effective MMM for China requires models that account for the unique dynamics of each platform, seasonal patterns, and the complex interactions between different marketing channels.</p>
          
          <div className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6 mt-6">
            <p className="text-[#c9a84c] font-semibold mb-2">Key MMM Considerations for China</p>
            <ul className="list-disc list-inside text-[#dce4f0] space-y-2">
              <li><strong>Platform-specific saturation curves</strong>: Each Chinese platform has unique response curves that require platform-specific modeling approaches</li>
              <li><strong>Seasonal event impact</strong>: Major shopping events like 618 and Double 11 create significant performance variations that must be modeled accurately</li>
              <li><strong>Cross-platform interactions</strong>: Account for synergies and cannibalization effects between different platforms in the media mix</li>
              <li><strong>External factor integration</strong>: Incorporate macroeconomic factors, competitive activity, and market trends into media mix models</li>
              <li><strong>Privacy-compliant data sources</strong>: Build models using data sources that comply with PIPL and platform-specific privacy requirements</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Unified reporting frameworks</h2>
          <p className="text-[#dce4f0]">Creating unified reporting that provides clear visibility across China\'s fragmented platform landscape is essential for effective decision-making and stakeholder communication. International brands must develop reporting frameworks that normalize metrics, reconcile data differences, and present insights in formats that global teams can understand and act upon.</p>
          
          <h3 className="text-xl font-semibold mt-8">Metric normalization strategies</h3>
          <p className="text-[#dce4f0]">Effective cross-platform reporting requires careful normalization of metrics across different platforms:</p>
          <ul className="list-disc list-inside text-[#b3c0d8] space-y-2 ml-4">
            <li><strong>Standardized definitions</strong>: Create consistent definitions for key metrics like impressions, clicks, and conversions across platforms</li>
            <li><strong>Attribution window alignment</strong>: Normalize attribution windows to enable fair comparison of campaign performance across platforms</li>
            <li><strong>Currency and conversion standardization</strong>: Standardize financial metrics to enable accurate cross-platform ROI comparison</li>
            <li><strong>Time zone and reporting period alignment</strong>: Ensure consistent reporting periods and time zone handling across platforms</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Stakeholder communication</h3>
          <p className="text-[#dce4f0]">Effective ROI reporting requires clear communication that resonates with different stakeholder groups:</p>
          <ul className="list-disc list-inside text-[#b3c0d8] space-y-2 ml-4">
            <li><strong>Executive dashboards</strong>: High-level views that summarize campaign performance and ROI for senior leadership</li>
            <li><strong>Platform-specific insights</strong>: Detailed analysis for platform managers and optimization teams</li>
            <li><strong>Budget allocation recommendations</strong>: Data-driven recommendations for future budget allocation based on performance insights</li>
            <li><strong>Global team education</strong>: Educational materials that help global teams understand China\'s unique measurement challenges and opportunities</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">TMG\'s approach to ROI measurement success</h2>
          <p className="text-[#dce4f0]">At TMG, we help international brands implement sophisticated ROI measurement frameworks that provide accurate, actionable insights across China\'s complex platform ecosystem. Our methodology focuses on three key areas:</p>
          
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
              <p className="text-[#c9a84c] text-sm font-semibold mb-2">Measurement Architecture</p>
              <p className="font-semibold mb-1">Platform-Integrated Design</p>
              <p className="text-sm text-[#b3c0d8]">We design measurement architectures that work across China\'s walled garden environments while providing unified visibility.</p>
            </div>
            <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
              <p className="text-[#c9a84c] text-sm font-semibold mb-2">Advanced Analytics</p>
              <p className="font-semibold mb-1">Sophisticated Modeling</p>
              <p className="text-sm text-[#b3c0d8]">We implement advanced attribution, incrementality, and media mix models that account for China\'s unique platform dynamics.</p>
            </div>
            <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
              <p className="text-[#c9a84c] text-sm font-semibold mb-2">Actionable Insights</p>
              <p className="font-semibold mb-1">Decision-Ready Reporting</p>
              <p className="text-sm text-[#b3c0d8]">We deliver reporting frameworks that provide clear, actionable insights for budget allocation and campaign optimization decisions.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">Key Takeaway</p>
          <p className="text-[#dce4f0]">ROI measurement in China requires specialized frameworks that account for walled garden data environments, complex cross-platform journeys, and platform-specific metrics. Success requires implementing sophisticated attribution models, conducting rigorous incrementality testing, building accurate media mix models, and creating unified reporting that provides clear visibility for decision-making across China\'s fragmented platform ecosystem.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG helps international brands implement sophisticated ROI measurement frameworks that provide accurate, actionable insights across China\'s complex platform ecosystem.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">Contact TMG</a>
        </section>
      </article>
    </div>
  )
}
