import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ja_dir = os.path.join(ws, 'ja', 'blog')

print("=" * 70)
print("检查所有日语文章摘要")
print("=" * 70)

issues = []

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Check meta description
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if not desc_match:
        issues.append((f, 'NO META', ''))
        continue
    
    desc = desc_match.group(1).strip()
    
    if not desc:
        issues.append((f, 'EMPTY', ''))
        continue
    
    # Check for Japanese characters
    has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', desc))
    
    # Check if it's English-only
    is_english_only = bool(re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()\u2019\u2018\u201C\u201D/]+$', desc))
    
    # Check for encoding issues
    has_bad_encoding = bool(re.search(r'[銉銈銇銉銊銈偄銉笺偣]', desc))
    
    if has_bad_encoding:
        issues.append((f, 'ENCODING', desc[:60]))
    elif is_english_only or not has_japanese:
        issues.append((f, 'ENGLISH', desc[:80]))

print(f"\n总文章数: {len([f for f in os.listdir(ja_dir) if f.endswith('.html') and f != 'index.html'])}")
print(f"有问题: {len(issues)}")
print()

if issues:
    print("问题文章列表:")
    print("-" * 70)
    for f, issue_type, desc in issues:
        print(f"\n{f}")
        print(f"  问题类型: {issue_type}")
        if desc:
            print(f"  当前摘要: {desc}...")
