import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check hero intro and other visible text in JA articles
ja_dir = os.path.join(ws, 'ja', 'blog')

print("=" * 70)
print("检查日语文章的其他可见文本（hero intro, sidebar等）")
print("=" * 70)

issues = []

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Check hero intro
    intro_match = re.search(r'article-hero__intro">(.*?)</p>', content, re.DOTALL)
    if intro_match:
        intro = intro_match.group(1).strip()
        has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', intro))
        if not has_japanese and len(intro) > 20:
            issues.append((f, 'HERO INTRO', intro[:60]))
    
    # Check sidebar text
    sidebar_match = re.search(r'sidebar-cta">\s*<p>(.*?)</p>', content, re.DOTALL)
    if sidebar_match:
        sidebar = sidebar_match.group(1).strip()
        has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', sidebar))
        if not has_japanese and len(sidebar) > 20:
            issues.append((f, 'SIDEBAR', sidebar[:60]))

print(f"\n找到 {len(issues)} 个问题")
if issues:
    for f, issue_type, text in issues[:20]:
        print(f"\n{f}")
        print(f"  位置: {issue_type}")
        print(f"  内容: {text}...")
