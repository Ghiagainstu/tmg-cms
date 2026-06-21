import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ja_dir = os.path.join(ws, 'ja', 'blog')

print("=" * 70)
print("检查日语博客 CTA 颜色")
print("=" * 70)

issues = []
good = 0

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Check sidebar CTA
    sidebar_match = re.search(r'sidebar-cta">(.*?)</div>', content, re.DOTALL)
    if sidebar_match:
        sidebar = sidebar_match.group(1)
        # Check if button has primary class (gold color)
        if 'btn--primary' in sidebar:
            good += 1
        elif 'btn--secondary' in sidebar or 'btn' in sidebar:
            issues.append((f, 'WRONG BUTTON STYLE', ''))
        else:
            issues.append((f, 'NO BUTTON', ''))
    else:
        issues.append((f, 'NO SIDEBAR CTA', ''))

print(f"\n总文章数: {len([f for f in os.listdir(ja_dir) if f.endswith('.html') and f != 'index.html'])}")
print(f"正确 (btn--primary): {good}")
print(f"问题: {len(issues)}")

if issues:
    print("\n问题文章:")
    for f, issue_type, _ in issues[:20]:
        print(f"  {f}: {issue_type}")
