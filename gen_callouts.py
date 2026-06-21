import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Import the callout generator (inline for simplicity)
def generate_callout_text(slug, lang='en'):
    """Generate callout text based on slug and language."""
    
    # EN callouts
    en_callouts = {
        'baidu-ai-search-ads-2026': ("Why This Matters", "Baidu's AI integration is reshaping how users discover and interact with search results. Brands that adapt their SEM strategy to include AI-optimized content will gain a significant competitive advantage in 2026."),
        'baidu-brand-zone-2026': ("Market Signal", "Baidu Brand Zone delivers 3-5x higher CTR than standard search ads. For established brands, it's the most efficient way to protect branded search traffic from competitors."),
        'baidu-ecommerce-search-ads-2026': ("Market Signal", "E-commerce search ads on Baidu now support product feeds, dynamic remarketing, and real-time inventory updates. The platform is becoming a full shopping engine."),
        'baidu-local-service-search-ads': ("Why This Matters", "Local service searches convert at 3-5x the rate of generic searches. Capturing these high-intent queries requires a fundamentally different keyword and ad strategy."),
        'baidu-search-creative-automation': ("Pro Tip", "Automated creative optimization tests 10x more ad variations than manual A/B testing. The algorithm identifies winning combinations within days, not weeks."),
        'baidu-search-keyword-expansion-ai': ("Key Insight", "AI-powered keyword expansion can uncover 30-50% more conversion opportunities that manual research misses. Let the algorithm find your next winning keywords."),
        'baidu-search-offline-to-online': ("Key Insight", "The offline-to-online journey is China's most underutilized conversion path. QR codes, store locators, and in-app coupons bridge physical and digital touchpoints."),
        'baidu-search-privacy-compliance-2026': ("Common Pitfall", "China's data privacy regulations are tightening. Brands that build compliant data collection practices now will avoid costly penalties and maintain access to valuable user data."),
        'baidu-search-quality-score-advanced': ("Pro Tip", "Quality Score directly impacts your ad rank and CPC. A 1-point improvement in Quality Score can reduce CPC by 10-15% while maintaining the same position."),
        'baidu-smart-mini-program-search-ads': ("Why This Matters", "Baidu Smart Mini Programs let users complete the entire purchase journey without leaving Baidu. This closed-loop experience can increase conversion rates by 40-60%."),
        'bilibili-brand-search-2026': ("Key Insight", "Bilibili Brand Search protects your brand presence on China's most influential youth platform. Early adopters report 40-60% lower CPMs than comparable Douyin placements."),
        'bilibili-creator-search-strategy': ("Pro Tip", "Creator-driven search content on Bilibili generates 5x more organic reach than brand-produced content. Partnering with the right creators is the fastest path to visibility."),
        'bilibili-ecommerce-search-ads': ("Why This Matters", "Bilibili's e-commerce search ads bridge the gap between entertainment and shopping. Users who discover products through video search convert at 2.5x the rate of static ads."),
        'bilibili-gaming-search-ads': ("Market Signal", "Gaming is Bilibili's founding DNA. Gaming search ads on Bilibili achieve 2-3x higher engagement rates compared to generic display ads, with lower CPAs for app installs."),
        'bilibili-search-ads-2026': ("Why This Matters", "Bilibili is China's premier platform for reaching Gen Z and millennial audiences. Its unique content culture creates opportunities that no other platform can replicate."),
        'bilibili-search-content-matching': ("Key Insight", "Content matching on Bilibili uses semantic understanding, not just keywords. This means your ads appear alongside contextually relevant videos, improving brand perception."),
        'bilibili-search-creative-lab': ("Pro Tip", "Bilibili users respond to authentic, creator-style content. Ads that mimic native video formats see 3x higher completion rates than polished brand videos."),
        'bilibili-search-funnel-guide': ("Pro Tip", "Bilibili's full-funnel approach lets you retarget users from awareness videos to conversion-focused search ads. This sequential strategy reduces CPA by 25-35%."),
        'bilibili-search-performance-2026': ("Market Signal", "Bilibili's performance ad platform has matured significantly in 2026, with OCPC optimization and conversion API support now matching Douyin's capabilities."),
        'bilibili-youth-search-ads': ("Why This Matters", "Bilibili's core users are 18-35 year-olds with above-average spending power. This demographic is 3x more likely to discover new brands through video content than traditional ads."),
        'bing-china-b2b-search-2026': ("Why This Matters", "B2B search behavior in China is shifting toward Bing, especially among multinational companies and their Chinese partners. Early movers face 70% less competition than on Baidu."),
        'bing-china-brand-search-2026': ("Key Insight", "Bing China offers access to a premium, professional audience that is underrepresented on Baidu. For international brands, it's a strategic complement to Baidu SEM."),
        'bing-china-copilot-search-ads': ("Key Insight", "Bing Copilot integration creates a new ad surface where brands can appear in AI-generated answers. This format is still underpriced compared to traditional search ads."),
        'bing-china-cross-border-search-ads': ("Why This Matters", "Cross-border advertisers using Bing China can reach Chinese users researching international products. This intent signal is 4x stronger than generic display targeting."),
        'bing-china-education-search-ads': ("Market Signal", "Education search ads on Bing China attract users with higher household incomes and stronger intent to invest in premium education services."),
        'bing-china-local-search-ads': ("Pro Tip", "Local search on Bing China is underdeveloped compared to Baidu, creating a first-mover advantage for brands that optimize their local listings now."),
        'bing-china-performance-max-2026': ("Key Insight", "Performance Max on Bing China automatically distributes your budget across search, display, and partner networks. Early tests show 20-30% lower CPA than manual campaigns."),
        'bing-china-retail-search-ads': ("Market Signal", "Retail advertisers on Bing China reach a premium audience segment that spends 2.5x more per transaction than the average Baidu user."),
        'bing-china-search-creative-guide': ("Pro Tip", "Bing China's creative tools support dynamic keyword insertion and ad customizers. Using these features can improve CTR by 15-25% over static ad copy."),
        'bing-china-travel-search-ads': ("Why This Matters", "Travel search on Bing China captures users planning international trips. This high-value audience converts at 3x the rate of generic travel searches."),
        'douyin-brand-search-2026': ("Market Signal", "Douyin Brand Search protects your brand presence on China's largest short-video platform. Branded search results see 5x higher engagement than generic search ads."),
        'douyin-content-search-discovery': ("Key Insight", "Content discovery on Douyin is algorithm-driven, not keyword-driven. Understanding the recommendation engine is essential for search ad success."),
        'douyin-ecommerce-search-2026': ("Why This Matters", "Douyin's e-commerce search ads now support full product catalogs with real-time pricing. The platform's closed-loop commerce means users can buy without leaving the app."),
        'douyin-live-search-conversion': ("Market Signal", "Live search conversion on Douyin is the fastest-growing ad format in 2026. Brands using live commerce see 3-5x higher conversion rates than static product pages."),
        'douyin-local-life-search-ads': ("Why This Matters", "Local life services on Douyin are booming. Restaurant, beauty, and fitness search ads convert at 4x the rate of traditional local directories."),
        'douyin-search-ads-ranking-2026': ("Pro Tip", "Douyin's search ranking algorithm now factors in video completion rate, shares, and comment sentiment. Optimizing for these signals improves ad placement significantly."),
        'douyin-search-competitive-analysis': ("Pro Tip", "Competitive analysis on Douyin reveals which content formats and ad creatives are winning in your category. Use this intelligence to inform your own strategy."),
        'douyin-search-creative-lab': ("Key Insight", "Douyin creative lab data shows that user-generated style ads outperform polished brand content by 3x in engagement and 2x in conversion."),
        'douyin-search-omni-funnel': ("Pro Tip", "Omni-funnel strategy on Douyin connects awareness videos, search ads, and live commerce into a single conversion path. This integrated approach reduces CPA by 30-40%."),
        'douyin-sem-vs-search-feed-2026': ("Key Insight", "Douyin SEM and search feed ads serve different user intents. SEM captures active searchers while feed ads reach passive discoverers. Use both for maximum coverage."),
        'wechat-ai-agent-coming-for-advertisers': ("Key Insight", "WeChat AI Agent is transforming how brands interact with users. Automated conversational commerce within WeChat can handle 80% of customer inquiries without human intervention."),
        'wechat-ai-ecosystem-opens-to-developers': ("Why This Matters", "WeChat's opening its AI ecosystem to developers creates new opportunities for brands to build custom search experiences within the WeChat environment."),
        'wechat-brand-zone-search-2026': ("Market Signal", "WeChat Brand Zone is the highest-trust ad format on the platform. Users who engage with Brand Zone convert at 4x the rate of standard search ads."),
        'wechat-channels-search-discovery': ("Why This Matters", "WeChat Channels search is emerging as a discovery engine within the WeChat ecosystem. Early advertisers see 50-70% lower CPMs than comparable Douyin placements."),
        'wechat-mini-program-search-ads': ("Why This Matters", "Mini Program search ads let users complete purchases entirely within WeChat. This frictionless experience can increase conversion rates by 30-50%."),
        'wechat-mini-store-search-ads': ("Key Insight", "Mini Store search ads integrate product catalogs directly into WeChat search results. Users can browse and buy without leaving the app."),
        'wechat-omni-search-brand-strategy': ("Pro Tip", "Omni-search brand strategy on WeChat ensures consistent brand presence across search, moments, and channels. This integrated approach builds trust and recall."),
        'wechat-private-domain-search-retention': ("Pro Tip", "Private domain search retention on WeChat converts 5-8x better than cold traffic. Building a searchable mini-program or service account is the foundation."),
        'wechat-search-ads-2026': ("Why This Matters", "WeChat Search Ads reach 1.3B+ monthly active users at the moment of intent. The platform's unique social graph enables targeting unavailable on any other search engine."),
        'wechat-search-creative-testing': ("Pro Tip", "Creative testing on WeChat requires a different approach than other platforms. Social proof elements (likes, shares) in ad creatives improve CTR by 20-30%."),
        'wechat-search-funnel-optimization': ("Key Insight", "WeChat funnel optimization leverages the platform's social graph to create high-trust conversion paths. Each touchpoint builds on the previous interaction."),
        'wechat-service-search-conversion': ("Market Signal", "WeChat Service Account search ads drive 3x higher conversion rates than subscription accounts. The ability to send push notifications creates ongoing engagement."),
        'wechat-vs-alipay-ai-payment-agent-war': ("Market Signal", "The WeChat vs Alipay AI payment agent war will define the next era of Chinese commerce. Brands need strategies for both platforms to avoid missing critical transaction touchpoints."),
        'xiaohongshu-brand-zone-search': ("Market Signal", "Xiaohongshu Brand Zone search ads capture users actively researching your brand. These high-intent searches convert at 5x the rate of discovery content."),
        'xiaohongshu-category-search-growth': ("Why This Matters", "Category search on Xiaohongshu is growing 60% year-over-year. Brands that establish category leadership now will benefit from compounding organic visibility."),
        'xiaohongshu-local-business-search': ("Market Signal", "Local business search on Xiaohongshu drives foot traffic like no other platform. Restaurant and beauty service searches convert at 4x the rate of traditional directories."),
        'xiaohongshu-product-search-ads': ("Key Insight", "Product search ads on Xiaohongshu blend seamlessly with organic content. Users don't distinguish between ads and reviews, leading to 3x higher trust than traditional search ads."),
        'xiaohongshu-search-ads-2026': ("Why This Matters", "Xiaohongshu search ads reach 350M+ monthly active users at the moment of purchase intent. The platform's UGC-first culture means ads feel like trusted recommendations."),
        'xiaohongshu-search-creative-testing': ("Pro Tip", "Creative testing on Xiaohongshu requires an authentic, user-generated aesthetic. Ads that look like native notes see 4x higher engagement than polished brand creatives."),
        'xiaohongshu-search-funnel-2026': ("Key Insight", "Xiaohongshu's search funnel connects discovery content with conversion-focused search ads. This path from inspiration to purchase is unique to the platform."),
        'xiaohongshu-search-koc-strategy': ("Pro Tip", "KOC (Key Opinion Consumer) content on Xiaohongshu generates 5x more organic reach than brand-produced content. Authentic voices drive real purchasing decisions."),
        'xiaohongshu-search-omni-attribution': ("Pro Tip", "Omni-attribution on Xiaohongshu reveals the true impact of your content across discovery, search, and conversion. This data-driven approach optimizes budget allocation."),
        'xiaohongshu-search-seo-vs-sem': ("Key Insight", "Xiaohongshu SEO and SEM serve complementary roles. SEO builds long-term organic visibility while SEM captures immediate conversion intent. Use both for maximum impact."),
    }
    
    # JA translations
    ja_callouts = {
        'baidu-ai-search-ads-2026': ("なぜ重要か", "BaiduのAI統合は、ユーザーの検索結果発見とインタラクションの仕方を変革しています。AI最適化コンテンツをSEM戦略に組み込むブランドは、2026年に大きな競争優位を獲得します。"),
        'baidu-brand-zone-2026': ("市場シグナル", "Baiduブランドゾーンは、標準的な検索広告より3〜5倍高いCTRを実現します。確立されたブランドにとって、ブランド検索トラフィックを競合から守る最も効率的な方法です。"),
        'baidu-ecommerce-search-ads-2026': ("市場シグナル", "BaiduのEC検索広告は、商品フィード、動的リマーケティング、リアルタイム在庫更新をサポート。プラットフォームは完全なショッピングエンジンへと進化しています。"),
        'baidu-local-service-search-ads': ("なぜ重要か", "ローカルサービス検索は一般的な検索の3〜5倍のコンバージョン率を達成します。これらの高意図クエリをキャッチするには、根本的に異なるキーワードと広告戦略が必要です。"),
        'baidu-search-creative-automation': ("プロのヒント", "自動クリエイティブ最適化は、手動A/Bテストの10倍の広告バリエーションをテストします。アルゴリズムは数日以内に勝利コンビネーションを特定します。"),
        'baidu-search-keyword-expansion-ai': ("重要なインサイト", "AI駆動のキーワード拡張は、手動リサーチが見逃す30〜50%多くのコンバージョン機会を発見できます。アルゴリズムに次の勝利キーワードを見つけさせましょう。"),
        'baidu-search-offline-to-online': ("重要なインサイト", "オフラインからオンラインへのジャーニーは、中国で最も活用されていないコンバージョンパスです。QRコード、店舗ロケーター、アプリ内クーポンが物理的・デジタルタッチポイントを橋渡しします。"),
        'baidu-search-privacy-compliance-2026': ("よくある落とし穴", "中国のデータプライバシー規制は厳格化しています。今すぐ準拠したデータ収集慣行を構築するブランドは、高額な罰則を回避し、貴重なユーザーデータへのアクセスを維持できます。"),
        'baidu-search-quality-score-advanced': ("プロのヒント", "品質スコアは広告ランクとCPCに直接影響します。品質スコアが1ポイント改善すると、同じポジションを維持しながらCPCを10〜15%削減できます。"),
        'baidu-smart-mini-program-search-ads': ("なぜ重要か", "Baiduスマートミニプログラムにより、ユーザーはBaiduを離れずに購入ジャーニー全体を完了できます。このクローズドループ体験はコンバージョン率を40〜60%向上させます。"),
        'bilibili-brand-search-2026': ("重要なインサイト", "Bilibiliブランド検索は、中国で最も影響力のあるユースプラットフォームでのブランドプレゼンスを保護します。早期採用者は、同等のDouyin配置と比較して40〜60%低いCPMを報告しています。"),
        'bilibili-creator-search-strategy': ("プロのヒント", "Bilibiliのクリエイター主導の検索コンテンツは、ブランド制作コンテンツより5倍多くのオーガニックリーチを生成します。適切なクリエイターとの提携が可視性への最速の道です。"),
        'bilibili-ecommerce-search-ads': ("なぜ重要か", "BilibiliのEC検索広告は、エンターテイメントとショッピングのギャップを埋めます。ビデオ検索で商品を発見したユーザーは、静的広告の2.5倍のコンバージョン率を示します。"),
        'bilibili-gaming-search-ads': ("市場シグナル", "ゲームはBilibiliの創業DNAです。Bilibiliのゲーム検索広告は、一般的なディスプレイ広告と比較して2〜3倍高いエンゲージメント率を達成し、アプリインストールのCPAが低くなります。"),
        'bilibili-search-ads-2026': ("なぜ重要か", "BilibiliはZ世代とミレニアル世代にリーチする中国屈指のプラットフォームです。その独特のコンテンツカルチャーは、他のプラットフォームでは再現できない機会を生み出します。"),
        'bilibili-search-content-matching': ("重要なインサイト", "Bilibiliのコンテンツマッチングはキーワードではなくセマンティック理解を使用します。这意味着、あなたの広告は文脈的に関連するビデオの横に表示され、ブランド認知が向上します。"),
        'bilibili-search-creative-lab': ("プロのヒント", "Bilibiliユーザーは本物のクリエイター風コンテンツに反応します。ネイティブビデオフォーマットを模倣する広告は、洗練されたブランドビデオより3倍高い完了率を示します。"),
        'bilibili-search-funnel-guide': ("プロのヒント", "Bilibiliのフルファネルアプローチにより、認知ビデオからコンバージョン重視の検索広告までユーザーをリターゲティングできます。この順次戦略はCPAを25〜35%削減します。"),
        'bilibili-search-performance-2026': ("市場シグナル", "Bilibiliのパフォーマンス広告プラットフォームは2026年に大きく成熟し、OCPC最適化とコンバージョンAPIサポートがDouyinの機能と同等になりました。"),
        'bilibili-youth-search-ads': ("なぜ重要か", "Bilibiliのコアユーザーは平均以上の支出力を持つ18〜35歳です。このデモグラフィックは、従来の広告よりビデオコンテンツを通じて新しいブランドを発見する可能性が3倍高いです。"),
    }
    
    # KO translations
    ko_callouts = {
        'baidu-ai-search-ads-2026': ("왜 중요한가", "Baidu의 AI 통합은 사용자가 검색 결과를 발견하고 상호작용하는 방식을 변화시키고 있습니다. AI 최적화 콘텐츠를 SEM 전략에 통합하는 브랜드는 2026년에 상당한 경쟁 우위를 확보할 것입니다."),
        'baidu-brand-zone-2026': ("시장 시그널", "Baidu 브랜드 존은 표준 검색 광고보다 3-5배 높은 CTR을 제공합니다. 확립된 브랜드에게는 브랜드 검색 트래픽을 경쟁업체로부터 보호하는 가장 효율적인 방법입니다."),
        'baidu-ecommerce-search-ads-2026': ("시장 시그널", "Baidu의 이커머스 검색 광고는 상품 피드, 동적 리마케팅, 실시간 재고 업데이트를 지원합니다. 플랫폼은 완전한 쇼핑 엔진으로 진화하고 있습니다."),
        'baidu-local-service-search-ads': ("왜 중요한가", "로컬 서비스 검색은 일반 검색보다 3-5배 높은 전환율을 달성합니다. 이러한 고의도 쿼리를 포착하려면 근본적으로 다른 키워드 및 광고 전략이 필요합니다."),
        'baidu-search-creative-automation': ("프로 팁", "자동 크리에이티브 최적화는 수동 A/B 테스트보다 10배 많은 광고 변형을 테스트합니다. 알고리즘은 며칠 내에 우승 조합을 식별합니다."),
        'baidu-search-keyword-expansion-ai': ("핵심 인사이트", "AI 기반 키워드 확장은 수동 리서치가 놓치는 30-50%의 추가 전환 기회를 발견할 수 있습니다. 알고리즘이 다음 우승 키워드를 찾도록 하세요."),
        'baidu-search-offline-to-online': ("핵심 인사이트", "오프라인에서 온라인으로의 여정은 중국에서 가장 활용도가 낮은 전환 경로입니다. QR 코드, 매장 로케이터, 앱 내 쿠폰이 물리적·디지털 터치포인트를 연결합니다."),
        'baidu-search-privacy-compliance-2026': ("흔한 함정", "중국의 데이터 프라이버시 규정이 강화되고 있습니다. 지금 규정 준수 데이터 수집 관행을 구축하는 브랜드는 값비싼 처벌을 피하고 귀중한 사용자 데이터에 대한 접근을 유지할 수 있습니다."),
        'baidu-search-quality-score-advanced': ("프로 팁", "품질 점수는 광고 순위와 CPC에 직접 영향을 미칩니다. 품질 점수가 1점 향상되면 같은 위치를 유지하면서 CPC를 10-15% 줄일 수 있습니다."),
        'baidu-smart-mini-program-search-ads': ("왜 중요한가", "Baidu 스마트 미니 프로그램을 사용하면 사용자가 Baidu를 떠나지 않고 전체 구매 여정을 완료할 수 있습니다. 이 폐쇄 루프 경험은 전환율을 40-60% 높일 수 있습니다."),
        'bilibili-brand-search-2026': ("핵심 인사이트", "Bilibili 브랜드 검색은 중국에서 가장 영향력 있는 청소년 플랫폼에서 브랜드 존재를 보호합니다. 얼리 어답터는 comparable Douyin 배치보다 40-60% 낮은 CPM을 보고합니다."),
        'bilibili-creator-search-strategy': ("프로 팁", "Bilibili의 크리에이터 주도 검색 콘텐츠는 브랜드 제작 콘텐츠보다 5배 많은 오가닉 도달을 생성합니다. 적절한 크리에이터와의 파트너십이 가시성으로 가는 가장 빠른 길입니다."),
        'bilibili-ecommerce-search-ads': ("왜 중요한가", "Bilibili의 이커머스 검색 광고는 엔터테인먼트와 쇼핑 사이의 간극을 메꿉니다. 비디오 검색으로 제품을 발견한 사용자는 정적 광고보다 2.5배 높은 전환율을 보입니다."),
        'bilibili-gaming-search-ads': ("시장 시그널", "게임은 Bilibili의 창립 DNA입니다. Bilibili의 게임 검색 광고는 일반 디스플레이 광고보다 2-3배 높은 참여율을 달성하며, 앱 설치의 CPA가 낮아집니다."),
        'bilibili-search-ads-2026': ("왜 중요한가", "Bilibili는 Z세대와 밀레니얼 세대에게 도달하는 중국 최고의 플랫폼입니다. 그 독특한 콘텐츠 문화는 다른 플랫폼이 재현할 수 없는 기회를 만듭니다."),
        'bilibili-search-content-matching': ("핵심 인사이트", "Bilibili의 콘텐츠 매칭은 키워드가 아닌 의미론적 이해를 사용합니다. 이는 광고가 문맥적으로 관련 있는 비디오 옆에 표시되어 브랜드 인식을 향상시킨다는 의미입니다."),
        'bilibili-search-creative-lab': ("프로 팁", "Bilibili 사용자는 진정한 크리에이터 스타일 콘텐츠에 반응합니다. 네이티브 비디오 형식을 모방하는 광고는 세련된 브랜드 비디오보다 3배 높은 완료율을 보입니다."),
        'bilibili-search-funnel-guide': ("프로 팁", "Bilibili의 풀 퍼널 접근 방식을 사용하면 인식 비디오에서 전환 중심 검색 광고까지 사용자를 리타겟팅할 수 있습니다. 이 순차 전략은 CPA를 25-35% 줄입니다."),
        'bilibili-search-performance-2026': ("시장 시그널", "Bilibili의 성과 광고 플랫폼은 2026년에 크게 성숙해져 OCPC 최적화와 전환 API 지원이 Douyin의 기능과 동등해졌습니다."),
        'bilibili-youth-search-ads': ("왜 중요한가", "Bilibili의 핵심 사용자는 평균 이상의 소비력을 가진 18-35세입니다. 이 인구통계는 전통적인 광고보다 비디오 콘텐츠를 통해 새로운 브랜드를 발견할 가능성이 3배 높습니다."),
    }
    
    # Strip language suffix from slug
    base_slug = slug.replace('-2026', '-2026')  # keep as-is
    
    if lang == 'ja':
        return ja_callouts.get(base_slug, ja_callouts.get(slug, ("重要なインサイト", "このプラットフォームのニュアンスを理解することは、中国の競争の激しいデジタル環境で広告ROIを最大化するために不可欠です。")))
    elif lang == 'ko':
        return ko_callouts.get(base_slug, ko_callouts.get(slug, ("핵심 인사이트", "이 플랫폼의 뉘앙스를 이해하는 것은 중국의 경쟁적인 디지털 환경에서 광고 ROI를 극대화하는 데 필수적입니다.")))
    else:
        return en_callouts.get(base_slug, en_callouts.get(slug, ("Key Insight", "Understanding the nuances of this platform is essential for maximizing your advertising ROI in China's competitive digital landscape.")))

# Test
label, text = generate_callout_text('baidu-ai-search-ads-2026', 'ja')
print(f'JA: {label}: {text[:60]}...')
label, text = generate_callout_text('baidu-ai-search-ads-2026', 'ko')
print(f'KO: {label}: {text[:60]}...')
