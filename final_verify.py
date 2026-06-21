import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

print("=" * 70)
print("最终验证：所有博客格式")
print("=" * 70)

for lang in ['ja', 'ko']:
    lang_dir = os.path.join(ws, lang, 'blog')
    
    total = 0
    readtime_ok = 0
    cta_ok = 0
    
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
                if '分' in read_time:
                    readtime_ok += 1
            else:
                if '분' in read_time or '읽기' in read_time:
                    readtime_ok += 1
        
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
    
    print(f"\n{lang.upper()}:")
    print(f"  阅读时间: {readtime_ok}/{total} ✓")
    print(f"  CTA文本: {cta_ok}/{total} ✓")
