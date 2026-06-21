import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

print('=' * 60)
print('JA/KO 摘要格式验证')
print('=' * 60)

for lang in ['ja', 'ko']:
    lang_dir = os.path.join(ws, lang, 'blog')
    
    total = 0
    good = 0
    issues = []
    
    for f in sorted(os.listdir(lang_dir)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        
        fp = os.path.join(lang_dir, f)
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        
        total += 1
        
        desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
        if not desc_match or not desc_match.group(1).strip():
            issues.append((f, 'No meta description'))
            continue
        
        desc = desc_match.group(1)
        
        if lang == 'ja':
            has_native = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', desc))
        else:
            has_native = bool(re.search(r'[\uAC00-\uD7AF]', desc))
        
        has_encoding_issue = bool(re.search(r'[銉銈銇銉銊]', desc))
        
        if has_encoding_issue:
            issues.append((f, 'Encoding issue'))
        elif not has_native:
            issues.append((f, 'English-only'))
        else:
            good += 1
    
    print(f'{lang.upper()}: {good}/{total} articles with correct excerpts')
    if issues:
        print(f'  Issues: {len(issues)}')
        for f, issue in issues:
            print(f'    {f}: {issue}')
    else:
        print('  All good!')
