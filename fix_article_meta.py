import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# JA translations for article meta descriptions
ja_meta = {
    'baidu-ai-search-ads-2026': 'BaiduのAI検索広告フォーマットの出現により、ブランドはAI時代のSEM戦略を再構築する必要があります。',
    'baidu-search-keyword-expansion-ai': 'AI駆動のキーワード拡張により、手動リサーチでは見逃す30-50%の追加コンバージョン機会を発見できます。',
    'baidu-search-offline-to-online': 'オフラインからオンラインへのジャーニーは、中国で最も活用されていないコンバージョンパスです。',
    'baidu-search-privacy-compliance-2026': '中国のデータプライバシー規制は厳格化しています。今すぐ準今すぐ準拠したデータ収集慣行を構築しましょう。',
    'baidu-search-quality-score-advanced': '品質スコアは広告ランクとCPCに直接影響します。1ポイントの改善でCPCを10-15%削減できます。',
    'baidu-smart-mini-program-search-ads': 'Baiduスマートミニプログラムにより、ユーザーはBaiduを離れずに購入を完了できます。',
    'bilibili-ecommerce-search-ads': 'BilibiliのEC検索広告は、エンターテイメントとショッピングのギャップを埋めます。',
    'bing-china-education-search-ads': 'Bing Chinaの教育検索広告は、高い家計収入と教育投資意欲の強いユーザーにリーチします。',
    'bing-china-search-creative-guide': 'Bing Chinaのクリエイティブガイド：動的キーワード挿入と広告カスタマイザーでCTRを15-25%改善。',
    'bing-china-travel-search-ads': 'Bing Chinaの旅行検索広告は、海外旅行を計画しているユーザーにリーチします。',
    'cpm-is-rising-bad': 'CPMが上昇すると皆パニックになりますが、実際のプログラマティックキャンペーンでは、高いCPMはしばしば良いシグナルです。',
    'cpm-ocpm-ecpm-explained': 'CPMは支払い額、oCPMは入札方法、eCPMはシステムのランク付け方法です。これらを混同すると予算が無駄になります。',
    'xiaohongshu-consumer-research': 'Xiaohongshu（RED）は1億7000万人の中国消費者が購入前に調査するプラットフォームです。',
}

# KO translations for article meta descriptions
ko_meta = {
    'bing-china-education-search-ads': 'Bing China 교육 검색 광고는 높은 가계 소득과 교육 투자 의지가 강한 사용자에게 도달합니다.',
    'bing-china-search-creative-guide': 'Bing China 크리에이티브 가이드: 동적 키워드 삽입과 광고 커스터마이저로 CTR 15-25% 개선.',
    'bing-china-travel-search-ads': 'Bing China 여행 검색 광고는 해외 여행을 계획하는 사용자에게 도달합니다.',
    'chinese-influencer-marketing-ko': '중국 인플루언서 마케팅이 다른 이유: 소셜 신뢰 우위.',
}

# Fix JA article meta descriptions
print("Fixing JA article meta descriptions...")
ja_dir = os.path.join(ws, 'ja', 'blog')
fixed = 0

for slug, new_desc in ja_meta.items():
    fp = os.path.join(ja_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if description is English-only
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if desc_match:
        old_desc = desc_match.group(1)
        if re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', old_desc.strip()):
            # Replace
            content = content.replace(
                f'<meta name="description" content="{old_desc}"',
                f'<meta name="description" content="{new_desc}"'
            )
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed += 1
            print(f"  Fixed JA: {slug}")

print(f"Fixed {fixed} JA articles")

# Fix KO article meta descriptions
print("\nFixing KO article meta descriptions...")
ko_dir = os.path.join(ws, 'ko', 'blog')
fixed = 0

for slug, new_desc in ko_meta.items():
    fp = os.path.join(ko_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if desc_match:
        old_desc = desc_match.group(1)
        if re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', old_desc.strip()):
            content = content.replace(
                f'<meta name="description" content="{old_desc}"',
                f'<meta name="description" content="{new_desc}"'
            )
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed += 1
            print(f"  Fixed KO: {slug}")

print(f"Fixed {fixed} KO articles")
