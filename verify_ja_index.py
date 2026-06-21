import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check JA index one more time
index_path = os.path.join(ws, 'ja', 'blog', 'index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

excerpts = re.findall(r'<a href="/ja/blog/([^/]+)/".*?<p class="post-card__excerpt">(.*?)</p>', content, re.DOTALL)

print("=" * 70)
print("日语博客 INDEX 最终验证")
print("=" * 70)

issues = []
for slug, excerpt in excerpts:
    has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', excerpt))
    is_english_only = bool(re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()\u2019\u2018\u201C\u201D/\&;]+$', excerpt.strip()))
    
    if is_english_only or not has_japanese:
        issues.append((slug, excerpt[:60]))

print(f"\n总卡片数: {len(excerpts)}")
print(f"英文摘要: {len(issues)}")

if issues:
    print("\n英文摘要卡片:")
    for slug, excerpt in issues:
        print(f"  {slug}: {excerpt}...")
else:
    print("\n✓ 所有索引卡片的摘要都是日语！")
