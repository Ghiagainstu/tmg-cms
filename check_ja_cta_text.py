import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check CTA text and link
ja_dir = os.path.join(ws, 'ja', 'blog')

print("=" * 70)
print("检查日语博客 CTA 文本和链接")
print("=" * 70)

issues = []
good = 0

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Check sidebar CTA button text
    btn_match = re.search(r'sidebar-cta.*?<a[^>]*class="btn btn--primary"[^>]*>(.*?)</a>', content, re.DOTALL)
    if btn_match:
        btn_text = btn_match.group(1).strip()
        # Check if it's Japanese
        has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', btn_text))
        if has_japanese:
            good += 1
        else:
            issues.append((f, 'ENGLISH TEXT', btn_text))
    else:
        issues.append((f, 'NO CTA BUTTON', ''))

print(f"\n总文章数: {len([f for f in os.listdir(ja_dir) if f.endswith('.html') and f != 'index.html'])}")
print(f"日语CTA: {good}")
print(f"问题: {len(issues)}")

if issues:
    print("\n问题文章:")
    for f, issue_type, btn_text in issues[:20]:
        print(f"  {f}: {issue_type} - '{btn_text}'")
