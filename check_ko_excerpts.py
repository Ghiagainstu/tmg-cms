import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check KO articles for excerpt issues
ko_dir = os.path.join(ws, 'ko', 'blog')

print("Checking KO article excerpts...")
print("=" * 60)

issues = []
good = 0

for f in sorted(os.listdir(ko_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ko_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Check meta description
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if not desc_match:
        issues.append((f, 'No meta description'))
        continue
    
    desc = desc_match.group(1)
    
    # Check if description has correct Korean
    has_korean = bool(re.search(r'[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]', desc))
    has_english_only = bool(re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', desc))
    has_encoding_issue = bool(re.search(r'[銉銈銇銉銊]', desc))
    
    if has_encoding_issue:
        issues.append((f, f'Encoding issue: {desc[:50]}...'))
    elif has_english_only and not has_korean:
        issues.append((f, f'English-only excerpt (should be Korean): {desc[:50]}...'))
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
