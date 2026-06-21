import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix the 3 remaining English excerpts in JA index
index_path = os.path.join(ws, 'ja', 'blog', 'index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = {
    'attribution-models-guide': '中国のペイドメディアにおけるアトリビューションモデルに混乱していますか？7つのモデルを解説し、各モデルの適用場面と組み合わせ方法を紹介します。',
    'geo-channel-weight-2026': '2026年4月の実地テストによると、AI検索エンジンがチャンネルウェイトを静かに書き換えました。GEO戦略の更新ポイントを解説。',
    'tencent-ads-home-furnishing-ja': 'Tencent広告家庭用品インフルエンサーマーケティング：2026年完全ガイド。WeChat Moments広告とKOL連携戦略。',
}

fixed = 0
for slug, new_excerpt in fixes.items():
    # Find and replace the excerpt in the post-card
    pattern = rf'(href="/ja/blog/{re.escape(slug)}/".*?<p class="post-card__excerpt">)(.*?)(</p>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        content = content[:match.start(2)] + new_excerpt + content[match.end(2):]
        fixed += 1
        print(f"Fixed index card: {slug}")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nFixed {fixed} index excerpts")

# Also fix the article meta descriptions
ja_dir = os.path.join(ws, 'ja', 'blog')
for slug, new_desc in fixes.items():
    fp = os.path.join(ja_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        article = f.read()
    
    old_match = re.search(r'<meta name="description" content="([^"]*)"', article)
    if old_match:
        old_desc = old_match.group(1)
        article = article.replace(
            f'<meta name="description" content="{old_desc}"',
            f'<meta name="description" content="{new_desc}"'
        )
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(article)
        print(f"Fixed article meta: {slug}")
