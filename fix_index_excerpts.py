import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# JA translations for excerpts
ja_excerpts = {
    'baidu-ai-search-ads-2026': 'BaiduのAI検索広告フォーマットの出現により、ブランドはAI時代のSEM戦略を再構築する必要があります。',
    'baidu-search-keyword-expansion-ai': 'AI駆動のキーワード拡張により、手動リサーチでは見逃す30-50%の追加コンバージョン機会を発見できます。',
    'baidu-search-offline-to-online': 'オフラインからオンラインへのジャーニーは、中国で最も活用されていないコンバージョンパスです。',
    'baidu-search-privacy-compliance-2026': '中国のデータプライバシー規制は厳格化しています。今すぐ準拠したデータ収集慣行を構築しましょう。',
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

# Fix JA index
print("Fixing JA index excerpts...")
index_path = os.path.join(ws, 'ja', 'blog', 'index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

fixed = 0
for slug, new_excerpt in ja_excerpts.items():
    # Find the post-card for this slug
    pattern = rf'(href="/ja/blog/{re.escape(slug)}/".*?<p class="post-card__excerpt">)(.*?)(</p>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        old_excerpt = match.group(2)
        # Check if it's English-only
        if re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', old_excerpt.strip()):
            content = content[:match.start(2)] + new_excerpt + content[match.end(2):]
            fixed += 1
            print(f"  Fixed: {slug}")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed {fixed} JA excerpts")

# KO translations
ko_excerpts = {
    'chinese-influencer-marketing-ko': '중국 인플루언서 마케팅이 다른 이유: 소셜 신뢰 우위.',
}

# Fix KO index
print("\nFixing KO index excerpts...")
index_path = os.path.join(ws, 'ko', 'blog', 'index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

fixed = 0
for slug, new_excerpt in ko_excerpts.items():
    pattern = rf'(href="/ko/blog/{re.escape(slug)}/".*?<p class="post-card__excerpt">)(.*?)(</p>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        old_excerpt = match.group(2)
        if re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', old_excerpt.strip()):
            content = content[:match.start(2)] + new_excerpt + content[match.end(2):]
            fixed += 1
            print(f"  Fixed: {slug}")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed {fixed} KO excerpts")
