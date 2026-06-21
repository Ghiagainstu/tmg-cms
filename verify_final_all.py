import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

print("=" * 70)
print("最终验证：JA/KO 阅读时间和 CTA")
print("=" * 70)

for lang in ['ja', 'ko']:
    lang_dir = os.path.join(ws, lang, 'blog')
    
    total = 0
    readtime_ok = 0
    cta_ok = 0
    readtime_issues = []
    cta_issues = []
    
    for f in sorted(os.listdir(lang_dir)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        
        fp = os.path.join(lang_dir, f)
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        
        total += 1
        
        # Check read time
        time_match = re.search(r'article-read-time">(.*?)</span>', content)
        if time_match:
            read_time = time_match.group(1).strip()
            if lang == 'ja':
                if '分で読める' in read_time or '分' in read_time:
                    readtime_ok += 1
                else:
                    readtime_issues.append((f, read_time))
            else:  # ko
                if '분' in read_time or '읽기' in read_time:
                    readtime_ok += 1
                else:
                    readtime_issues.append((f, read_time))
        
        # Check CTA
        btn_match = re.search(r'sidebar-cta.*?<a[^>]*class="btn btn--primary"[^>]*>(.*?)</a>', content, re.DOTALL)
        if btn_match:
            btn_text = btn_match.group(1).strip()
            if lang == 'ja':
                has_native = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', btn_text))
            else:
                has_native = bool(re.search(r'[\uAC00-\uD7AF]', btn_text))
            
            if has_native:
                cta_ok += 1
            else:
                cta_issues.append((f, btn_text))
    
    print(f"\n{lang.upper()}:")
    print(f"  阅读时间: {readtime_ok}/{total} 正确")
    if readtime_issues:
        print(f"    问题: {len(readtime_issues)}")
        for f, t in readtime_issues[:3]:
            print(f"      {f}: {t}")
    
    print(f"  CTA文本: {cta_ok}/{total} 正确")
    if cta_issues:
        print(f"    问题: {len(cta_issues)}")
        for f, t in cta_issues[:3]:
            print(f"      {f}: {t}")
