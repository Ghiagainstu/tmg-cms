import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check for articles with no meta description
print("Checking for articles without meta description...")
print("=" * 60)

for lang in ['ja', 'ko']:
    print(f"\n{lang.upper()} articles without meta description:")
    
    lang_dir = os.path.join(ws, lang, 'blog')
    missing = []
    
    for f in sorted(os.listdir(lang_dir)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        
        fp = os.path.join(lang_dir, f)
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        
        desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
        if not desc_match:
            missing.append(f)
        elif not desc_match.group(1).strip():
            missing.append(f)
    
    print(f"Missing: {len(missing)}")
    for f in missing[:10]:
        print(f"  {f}")
