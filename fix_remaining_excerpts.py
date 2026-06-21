import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix remaining JA issues
ja_fixes = {
    'attribution-models-guide': 'アトリビューションモデルガイド：ファーストタッチ、ラストタッチ、データ駆動型など、 다양한 모델을 이해してマーケティングROIを最適化。',
    'bilibili-youth-search-ads': 'Bilibiliユース検索広告：18-35歳の高支出力ユーザーにリーチする若者向け広告戦略。',
    'bing-china-b2b-search-2026': 'Bing China B2B検索広告：多国籍企業と中国パートナー向けの効果的なB2B検索戦略。',
    'geo-channel-weight-2026': 'GEOチャネルウェイト2026年更新：AIプラットフォームがより多く引用するコンテンツソース分析。',
}

# Fix JA articles
print("Fixing remaining JA excerpts...")
ja_dir = os.path.join(ws, 'ja', 'blog')
fixed = 0

for slug, new_desc in ja_fixes.items():
    fp = os.path.join(ja_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace meta description
    old_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if old_match:
        old_desc = old_match.group(1)
        content = content.replace(
            f'<meta name="description" content="{old_desc}"',
            f'<meta name="description" content="{new_desc}"'
        )
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed += 1
        print(f"  Fixed JA: {slug}")

print(f"Fixed {fixed} JA articles")

# Fix remaining KO issues
ko_fixes = {
    'bilibili-youth-search-ads': 'Bilibili 청소년 검색 광고: 18-35세 고소비력 사용자에게 도달하는 청소년 광고 전략.',
    'bing-china-b2b-search-2026': 'Bing China B2B 검색 광고: 다국적 기업과 중국 파트너를 위한 효과적인 B2B 검색 전략.',
    'mass-to-personal-ko': '대량에서 개인化로: 중국 디지털 광고의 개인화 전략과 실행 방법.',
    'ocean-engine-ai-assistant': 'Ocean Engine AI 어시스턴트: 바이트댄스의 AI 기반 광고 최적화 도구.',
    'tencent-ad-revenue-ai-deep-dive-2026': 'Tencent 광고 수익 AI 분석: WeChat과 QQ 광고의 AI 통합과 성장 동력.',
}

# Fix KO articles
print("\nFixing remaining KO excerpts...")
ko_dir = os.path.join(ws, 'ko', 'blog')
fixed = 0

for slug, new_desc in ko_fixes.items():
    fp = os.path.join(ko_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if has meta description
    old_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if old_match and old_match.group(1).strip():
        # Replace
        old_desc = old_match.group(1)
        content = content.replace(
            f'<meta name="description" content="{old_desc}"',
            f'<meta name="description" content="{new_desc}"'
        )
    else:
        # Add new meta description
        if '<meta charset' in content:
            content = content.replace(
                '<meta charset',
                f'<meta name="description" content="{new_desc}">\n  <meta charset',
                1
            )
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    fixed += 1
    print(f"  Fixed KO: {slug}")

print(f"Fixed {fixed} KO articles")
