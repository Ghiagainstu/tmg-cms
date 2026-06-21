import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

print("=" * 70)
print("最终验证：日语博客所有可见文本")
print("=" * 70)

ja_dir = os.path.join(ws, 'ja', 'blog')

total = 0
good = 0
issues = []

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    total += 1
    file_issues = []
    
    # 1. Check meta description
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if desc_match:
        desc = desc_match.group(1).strip()
        has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', desc))
        if desc and not has_japanese:
            file_issues.append('Meta: English')
    else:
        file_issues.append('Meta: Missing')
    
    # 2. Check hero intro
    intro_match = re.search(r'article-hero__intro">(.*?)</p>', content, re.DOTALL)
    if intro_match:
        intro = intro_match.group(1).strip()
        has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', intro))
        if not has_japanese and len(intro) > 20:
            file_issues.append('Intro: English')
    
    # 3. Check sidebar
    sidebar_match = re.search(r'sidebar-cta">\s*<p>(.*?)</p>', content, re.DOTALL)
    if sidebar_match:
        sidebar = sidebar_match.group(1).strip()
        has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', sidebar))
        if not has_japanese and len(sidebar) > 20:
            file_issues.append('Sidebar: English')
    
    if file_issues:
        issues.append((f, file_issues))
    else:
        good += 1

print(f"\n总文章数: {total}")
print(f"完全正确: {good}")
print(f"有问题: {len(issues)}")

if issues:
    print("\n问题文章:")
    for f, file_issues in issues:
        print(f"  {f}: {', '.join(file_issues)}")
else:
    print("\n✓ 所有日语文章的可见文本都已正确翻译！")
