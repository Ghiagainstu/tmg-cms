import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check JA articles for excerpt issues
ja_dir = os.path.join(ws, 'ja', 'blog')

print("Checking JA article excerpts...")
print("=" * 60)

issues = []
good = 0

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Check meta description
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if not desc_match:
        issues.append((f, 'No meta description'))
        continue
    
    desc = desc_match.group(1)
    
    # Check if description has correct Japanese
    has_japanese = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', desc))
    has_english_only = bool(re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', desc))
    has_encoding_issue = bool(re.search(r'[銉銈銇銉銊]', desc))
    
    if has_encoding_issue:
        issues.append((f, f'Encoding issue: {desc[:50]}...'))
    elif has_english_only and not has_japanese:
        issues.append((f, f'English-only excerpt (should be Japanese): {desc[:50]}...'))
    else:
        good += 1

print(f"Good: {good}")
print(f"Issues: {len(issues)}")
print()

if issues:
    print("Articles with issues:")
    for f, issue in issues[:20]:
        print(f"  {f}")
        print(f"    {issue}")
