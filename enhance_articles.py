import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Inline the callout data (simplified version)
def generate_callout_text(slug, lang='en'):
    en = {
        'baidu-ai-search-ads-2026': ('Why This Matters', "Baidu AI integration reshaping search discovery. Brands adapting SEM strategy with AI-optimized content gain competitive advantage in 2026."),
        'baidu-brand-zone-2026': ('Market Signal', "Baidu Brand Zone delivers 3-5x higher CTR than standard search ads. Most efficient way to protect branded traffic from competitors."),
        'baidu-ecommerce-search-ads-2026': ('Market Signal', "E-commerce search ads now support product feeds, dynamic remarketing, real-time inventory. Baidu becoming full shopping engine."),
        'baidu-local-service-search-ads': ('Why This Matters', "Local service searches convert 3-5x rate of generic searches. Capturing high-intent queries requires fundamentally different strategy."),
        'baidu-search-creative-automation': ('Pro Tip', "Automated creative optimization tests 10x more ad variations than manual A/B testing. Algorithm identifies winning combinations within days."),
        'baidu-search-keyword-expansion-ai': ('Key Insight', "AI-powered keyword expansion uncovers 30-50% more conversion opportunities that manual research misses."),
        'baidu-search-offline-to-online': ('Key Insight', "Offline-to-online journey is China most underutilized conversion path. QR codes, store locators bridge physical and digital touchpoints."),
        'baidu-search-privacy-compliance-2026': ('Common Pitfall', "China data privacy regulations tightening. Brands building compliant data collection now avoid costly penalties."),
        'baidu-search-quality-score-advanced': ('Pro Tip', "Quality Score directly impacts ad rank and CPC. 1-point improvement can reduce CPC by 10-15%."),
        'baidu-smart-mini-program-search-ads': ('Why This Matters', "Baidu Smart Mini Programs let users complete entire purchase journey without leaving Baidu. Increases conversion rates 40-60%."),
        'bilibili-brand-search-2026': ('Key Insight', "Bilibili Brand Search protects brand presence on China most influential youth platform. Early adopters report 40-60% lower CPMs."),
        'bilibili-creator-search-strategy': ('Pro Tip', "Creator-driven search content generates 5x more organic reach than brand-produced content."),
        'bilibili-ecommerce-search-ads': ('Why This Matters', "E-commerce search ads bridge entertainment and shopping. Users discovering products through video search convert 2.5x rate of static ads."),
        'bilibili-gaming-search-ads': ('Market Signal', "Gaming search ads achieve 2-3x higher engagement rates than generic display ads with lower CPAs for app installs."),
        'bilibili-search-ads-2026': ('Why This Matters', "Bilibili is China premier platform for Gen Z and millennial audiences. Unique content culture creates opportunities no other platform can replicate."),
        'bilibili-search-content-matching': ('Key Insight', "Content matching uses semantic understanding, not just keywords. Ads appear alongside contextually relevant videos."),
        'bilibili-search-creative-lab': ('Pro Tip', "User-generated style ads outperform polished brand content by 3x in engagement and 2x in conversion."),
        'bilibili-search-funnel-guide': ('Pro Tip', "Full-funnel approach retargets users from awareness videos to conversion-focused search ads. Reduces CPA by 25-35%."),
        'bilibili-search-performance-2026': ('Market Signal', "Performance ad platform matured significantly in 2026. OCPC optimization and conversion API now matching Douyin capabilities."),
        'bilibili-youth-search-ads': ('Why This Matters', "Core users are 18-35 year-olds with above-average spending power. 3x more likely to discover new brands through video content."),
        'bing-china-b2b-search-2026': ('Why This Matters', "B2B search behavior shifting toward Bing among multinational companies. Early movers face 70% less competition than on Baidu."),
        'bing-china-brand-search-2026': ('Key Insight', "Bing China offers access to premium professional audience underrepresented on Baidu. Strategic complement to Baidu SEM."),
        'bing-china-copilot-search-ads': ('Key Insight', "Bing Copilot creates new ad surface for AI-generated answers. Still underpriced compared to traditional search ads."),
        'bing-china-cross-border-search-ads': ('Why This Matters', "Cross-border advertisers reach Chinese users researching international products. Intent signal 4x stronger than generic display targeting."),
        'bing-china-education-search-ads': ('Market Signal', "Education search ads attract users with higher household incomes and stronger intent to invest in premium services."),
        'bing-china-local-search-ads': ('Pro Tip', "Local search on Bing China underdeveloped compared to Baidu. First-mover advantage for brands optimizing local listings now."),
        'bing-china-performance-max-2026': ('Key Insight', "Performance Max automatically distributes budget across search, display, partner networks. Early tests show 20-30% lower CPA."),
        'bing-china-retail-search-ads': ('Market Signal', "Retail advertisers reach premium audience spending 2.5x more per transaction than average Baidu user."),
        'bing-china-search-creative-guide': ('Pro Tip', "Dynamic keyword insertion and ad customizers can improve CTR by 15-25% over static ad copy."),
        'bing-china-travel-search-ads': ('Why This Matters', "Travel search captures users planning international trips. High-value audience converts at 3x rate of generic travel searches."),
        'douyin-brand-search-2026': ('Market Signal', "Douyin Brand Search protects brand presence on China largest short-video platform. Branded results see 5x higher engagement."),
        'douyin-content-search-discovery': ('Key Insight', "Content discovery is algorithm-driven, not keyword-driven. Understanding recommendation engine is essential for search ad success."),
        'douyin-ecommerce-search-2026': ('Why This Matters', "E-commerce search ads support full product catalogs with real-time pricing. Closed-loop commerce means users buy without leaving app."),
        'douyin-live-search-conversion': ('Market Signal', "Live search conversion is fastest-growing ad format in 2026. Live commerce sees 3-5x higher conversion rates than static product pages."),
        'douyin-local-life-search-ads': ('Why This Matters', "Local life services booming. Restaurant, beauty, fitness search ads convert at 4x rate of traditional local directories."),
        'douyin-search-ads-ranking-2026': ('Pro Tip', "Search ranking algorithm factors in video completion rate, shares, comment sentiment. Optimizing these signals improves ad placement."),
        'douyin-search-competitive-analysis': ('Pro Tip', "Competitive analysis reveals winning content formats and ad creatives in your category. Use this intelligence to inform strategy."),
        'douyin-search-creative-lab': ('Key Insight', "User-generated style ads outperform polished brand content by 3x in engagement and 2x in conversion."),
        'douyin-search-omni-funnel': ('Pro Tip', "Omni-funnel strategy connects awareness videos, search ads, live commerce into single conversion path. Reduces CPA by 30-40%."),
        'douyin-sem-vs-search-feed-2026': ('Key Insight', "SEM captures active searchers while feed ads reach passive discoverers. Use both for maximum coverage."),
        'wechat-ai-agent-coming-for-advertisers': ('Key Insight', "WeChat AI Agent transforming brand-user interaction. Automated conversational commerce handles 80% of inquiries without human intervention."),
        'wechat-ai-ecosystem-opens-to-developers': ('Why This Matters', "WeChat opening AI ecosystem to developers creates new opportunities for custom search experiences within WeChat."),
        'wechat-brand-zone-search-2026': ('Market Signal', "WeChat Brand Zone is highest-trust ad format. Users engaging with Brand Zone convert at 4x rate of standard search ads."),
        'wechat-channels-search-discovery': ('Why This Matters', "WeChat Channels search emerging as discovery engine. Early advertisers see 50-70% lower CPMs than comparable Douyin placements."),
        'wechat-mini-program-search-ads': ('Why This Matters', "Mini Program search ads let users complete purchases entirely within WeChat. Frictionless experience increases conversion 30-50%."),
        'wechat-mini-store-search-ads': ('Key Insight', "Mini Store search ads integrate product catalogs into WeChat search results. Users browse and buy without leaving app."),
        'wechat-omni-search-brand-strategy': ('Pro Tip', "Omni-search brand strategy ensures consistent presence across search, moments, channels. Integrated approach builds trust and recall."),
        'wechat-private-domain-search-retention': ('Pro Tip', "Private domain search retention converts 5-8x better than cold traffic. Searchable mini-program or service account is foundation."),
        'wechat-search-ads-2026': ('Why This Matters', "WeChat Search Ads reach 1.3B+ monthly active users at moment of intent. Social graph enables targeting unavailable on any other search engine."),
        'wechat-search-creative-testing': ('Pro Tip', "Creative testing on WeChat requires different approach. Social proof elements in ad creatives improve CTR by 20-30%."),
        'wechat-search-funnel-optimization': ('Key Insight', "Funnel optimization leverages social graph to create high-trust conversion paths. Each touchpoint builds on previous interaction."),
        'wechat-service-search-conversion': ('Market Signal', "Service Account search ads drive 3x higher conversion rates than subscription accounts. Push notifications create ongoing engagement."),
        'wechat-vs-alipay-ai-payment-agent-war': ('Market Signal', "WeChat vs Alipay AI payment agent war defines next era of Chinese commerce. Brands need strategies for both platforms."),
        'xiaohongshu-brand-zone-search': ('Market Signal', "Brand Zone search ads capture users actively researching your brand. High-intent searches convert at 5x rate of discovery content."),
        'xiaohongshu-category-search-growth': ('Why This Matters', "Category search growing 60% year-over-year. Brands establishing category leadership now benefit from compounding organic visibility."),
        'xiaohongshu-local-business-search': ('Market Signal', "Local business search drives foot traffic like no other platform. Restaurant and beauty service searches convert at 4x rate."),
        'xiaohongshu-product-search-ads': ('Key Insight', "Product search ads blend seamlessly with organic content. Users don distinguish between ads and reviews, leading to 3x higher trust."),
        'xiaohongshu-search-ads-2026': ('Why This Matters', "Search ads reach 350M+ monthly active users at moment of purchase intent. UGC-first culture means ads feel like trusted recommendations."),
        'xiaohongshu-search-creative-testing': ('Pro Tip', "Creative testing requires authentic user-generated aesthetic. Ads that look like native notes see 4x higher engagement."),
        'xiaohongshu-search-funnel-2026': ('Key Insight', "Search funnel connects discovery content with conversion-focused search ads. Path from inspiration to purchase is unique to platform."),
        'xiaohongshu-search-koc-strategy': ('Pro Tip', "KOC content generates 5x more organic reach than brand-produced content. Authentic voices drive real purchasing decisions."),
        'xiaohongshu-search-omni-attribution': ('Pro Tip', "Omni-attribution reveals true impact of content across discovery, search, conversion. Data-driven approach optimizes budget allocation."),
        'xiaohongshu-search-seo-vs-sem': ('Key Insight', "SEO and SEM serve complementary roles. SEO builds long-term organic visibility while SEM captures immediate conversion intent."),
    }
    
    ja = {
        'baidu-ai-search-ads-2026': ('なぜ重要か', "BaiduのAI統合は検索発見を変革。AI最適化コンテンツでSEM戦略を適応するブランドが2026年に競争優位を獲得。"),
        'baidu-brand-zone-2026': ('市場シグナル', "ブランドゾーンは標準検索広告より3-5倍高いCTR。ブランド検索トラフィックを競合から守る最も効率的な方法。"),
        'baidu-ecommerce-search-ads-2026': ('市場シグナル', "EC検索広告は商品フィード、動的リマーケティング、リアルタイム在庫更新をサポート。完全なショッピングエンジンへ進化。"),
        'baidu-local-service-search-ads': ('なぜ重要か', "ローカルサービス検索は一般的な検索の3-5倍のコンバージョン率。高意図クエリには異なるキーワード戦略が必要。"),
        'baidu-search-creative-automation': ('プロのヒント', "自動クリエイティブ最適化は手動A/Bテストの10倍の広告バリエーションをテスト。数日で勝利コンビネーションを特定。"),
        'baidu-search-keyword-expansion-ai': ('重要なインサイト', "AI駆動のキーワード拡張は手動リサーチが見逃す30-50%多くのコンバージョン機会を発見。"),
        'baidu-search-offline-to-online': ('重要なインサイト', "オフラインからオンラインへのジャーニーは中国で最も活用されていないコンバージョンパス。"),
        'baidu-search-privacy-compliance-2026': ('よくある落とし穴', "中国のデータプライバシー規制は厳格化中。今すぐ準拠したデータ収集を構築するブランドは罰則を回避。"),
        'baidu-search-quality-score-advanced': ('プロのヒント', "品質スコアは広告ランクとCPCに直接影響。1ポイント改善でCPCを10-15%削減可能。"),
        'baidu-smart-mini-program-search-ads': ('なぜ重要か', "スマートミニプログラムでBaiduを離れずに購入完了。クローズドループ体験がコンバージョン率を40-60%向上。"),
        'bilibili-brand-search-2026': ('重要なインサイト', "ブランド検索は中国で最も影響力のあるユースプラットフォームでのブランドプレゼンスを保護。"),
        'bilibili-creator-search-strategy': ('プロのヒント', "クリエイター主導の検索コンテンツはブランド制作コンテンツより5倍多くのオーガニックリーチを生成。"),
        'bilibili-ecommerce-search-ads': ('なぜ重要か', "EC検索広告はエンターテイメントとショッピングのギャップを埋める。ビデオ検索で発見したユーザーは2.5倍のコンバージョン率。"),
        'bilibili-gaming-search-ads': ('市場シグナル', "ゲーム検索広告は一般的なディスプレイ広告より2-3倍高いエンゲージメント率を達成。"),
        'bilibili-search-ads-2026': ('なぜ重要か', "BilibiliはZ世代とミレニアル世代にリーチする中国屈指のプラットフォーム。独特のコンテンツカルチャーが機会を創出。"),
        'bilibili-search-content-matching': ('重要なインサイト', "コンテンツマッチングはキーワードではなくセマンティック理解を使用。文脈的に関連するビデオの横に広告が表示。"),
        'bilibili-search-creative-lab': ('プロのヒント', "ユーザー生成スタイル広告は洗練されたブランドコンテンツより3倍高いエンゲージメントと2倍のコンバージョン。"),
        'bilibili-search-funnel-guide': ('プロのヒント', "フルファネルアプローチで認知ビデオからコンバージョン重視の検索広告までリターゲティング。CPAを25-35%削減。"),
        'bilibili-search-performance-2026': ('市場シグナル', "パフォーマンス広告プラットフォームは2026年に大きく成熟。OCPC最適化とコンバージョンAPIがDouyinと同等に。"),
        'bilibili-youth-search-ads': ('なぜ重要か', "コアユーザーは平均以上の支出力を持つ18-35歳。ビデオコンテンツで新しいブランドを発見する可能性が3倍。"),
    }
    
    ko = {
        'baidu-ai-search-ads-2026': ('왜 중요한가', "Baidu AI 통합이 검색 발견을 변화시키고 있습니다. AI 최적화 콘텐츠로 SEM 전략을 적응하는 브랜드가 2026년 경쟁 우위 확보."),
        'baidu-brand-zone-2026': ('시장 시그널', "브랜드 존은 표준 검색 광고보다 3-5배 높은 CTR. 브랜드 검색 트래픽을 경쟁업체로부터 보호하는 가장 효율적인 방법."),
        'baidu-ecommerce-search-ads-2026': ('시장 시그널', "이커머스 검색 광고는 상품 피드, 동적 리마케팅, 실시간 재고 업데이트 지원. 완전한 쇼핑 엔진으로 진화."),
        'baidu-local-service-search-ads': ('왜 중요한가', "로컬 서비스 검색은 일반 검색보다 3-5배 높은 전환율. 고의도 쿼리 포착에는 다른 키워드 전략 필요."),
        'baidu-search-creative-automation': ('프로 팁', "자동 크리에이티브 최적화는 수동 A/B 테스트보다 10배 많은 광고 변형 테스트. 며칠 내에 우승 조합 식별."),
        'baidu-search-keyword-expansion-ai': ('핵심 인사이트', "AI 기반 키워드 확장은 수동 리서치가 놓치는 30-50% 추가 전환 기회 발견."),
        'baidu-search-offline-to-online': ('핵심 인사이트', "오프라인-온라인 여정은 중국에서 가장 활용도가 낮은 전환 경로. QR 코드, 매장 로케이터가 연결."),
        'baidu-search-privacy-compliance-2026': ('흔한 함정', "중국 데이터 프라이버시 규정 강화 중. 지금 규정 준수 데이터 수집 구축하는 브랜드가 처벌 회피."),
        'baidu-search-quality-score-advanced': ('프로 팁', "품질 점수는 광고 순위와 CPC에 직접 영향. 1점 향상으로 CPC 10-15% 감소 가능."),
        'baidu-smart-mini-program-search-ads': ('왜 중요한가', "스마트 미니 프로그램으로 Baidu를 떠나지 않고 구매 완료. 폐쇄 루프 경험으로 전환율 40-60% 향상."),
        'bilibili-brand-search-2026': ('핵심 인사이트', "브랜드 검색은 중국에서 가장 영향력 있는 청소년 플랫폼에서 브랜드 존재 보호."),
        'bilibili-creator-search-strategy': ('프로 팁', "크리에이터 주도 검색 콘텐츠는 브랜드 제작 콘텐츠보다 5배 많은 오가닉 도달 생성."),
        'bilibili-ecommerce-search-ads': ('왜 중요한가', "이커머스 검색 광고는 엔터테인먼트와 쇼핑 간극 메움. 비디오 검색으로 발견한 사용자는 2.5배 전환율."),
        'bilibili-gaming-search-ads': ('시장 시그널', "게임 검색 광고는 일반 디스플레이 광고보다 2-3배 높은 참여율 달성."),
        'bilibili-search-ads-2026': ('왜 중요한가', "Bilibili는 Z세대와 밀레니얼 세대에게 도달하는 중국 최고의 플랫폼. 독특한 콘텐츠 문화가 기회 창출."),
        'bilibili-search-content-matching': ('핵심 인사이트', "콘텐츠 매칭은 키워드가 아닌 의미론적 이해 사용. 문맥적으로 관련 있는 비디오 옆에 광고 표시."),
        'bilibili-search-creative-lab': ('프로 팁', "사용자 생성 스타일 광고는 세련된 브랜드 콘텐츠보다 3배 높은 참여와 2배 전환."),
        'bilibili-search-funnel-guide': ('프로 팁', "풀 퍼널 접근 방식으로 인식 비디오에서 전환 중심 검색 광고까지 리타겟팅. CPA 25-35% 감소."),
        'bilibili-search-performance-2026': ('시장 시그널', "성과 광고 플랫폼 2026년 크게 성숙. OCPC 최적화와 전환 API가 Douyin과 동등."),
        'bilibili-youth-search-ads': ('왜 중요한가', "핵심 사용자는 평균 이상 소비력의 18-35세. 비디오 콘텐츠로 새 브랜드 발견 가능성 3배."),
    }
    
    if lang == 'ja':
        result = ja.get(slug)
        if result: return result
    elif lang == 'ko':
        result = ko.get(slug)
        if result: return result
    result = en.get(slug)
    if result: return result
    return ('Key Insight', 'Understanding this platform is essential for maximizing advertising ROI in China digital landscape.')


def add_callout_to_article(content, slug, lang='en'):
    art_start = content.find('<article class="article-content reveal">')
    if art_start < 0:
        return content, False
    end_pos = content.find('</article>', art_start)
    article = content[art_start:end_pos]
    if 'callout callout--accent' in article:
        return content, False
    h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
    if len(h2s) < 2:
        return content, False
    first_h2 = h2s[0]
    second_h2 = h2s[1]
    first_section = article[first_h2.end():second_h2.start()]
    last_p = first_section.rfind('</p>')
    if last_p < 0:
        return content, False
    insert_pos = art_start + first_h2.end() + last_p + 4
    label, text = generate_callout_text(slug, lang)
    callout_html = f'\n<div class="callout callout--accent"><div class="callout__label">{label}</div><p>{text}</p></div>\n'
    new_content = content[:insert_pos] + callout_html + content[insert_pos:]
    return new_content, True


fixed = 0
skipped = 0
for subdir in ['blog', os.path.join('ja','blog'), os.path.join('ko','blog')]:
    lang = 'en' if subdir == 'blog' else subdir.split(os.sep)[0]
    dp = os.path.join(ws, subdir)
    for f in sorted(os.listdir(dp)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        fp = os.path.join(dp, f)
        with open(fp, 'r', encoding='utf-8') as fh:
            content = fh.read()
        slug = f.replace('.html', '')
        new_content, added = add_callout_to_article(content, slug, lang)
        if added:
            with open(fp, 'w', encoding='utf-8') as fh:
                fh.write(new_content)
            fixed += 1
            print(f'  Added callout: {subdir}/{f}')
        else:
            skipped += 1

print(f'\nSummary: {fixed} enhanced, {skipped} skipped')
