import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check ALL 60 batch articles for issues
batch_prefixes = ['baidu-', 'bilibili-', 'bing-china-', 'douyin-', 'wechat-', 'xiaohongshu-']

for lang in ['ja', 'ko']:
    lang_dir = os.path.join(ws, lang, 'blog')
    
    print(f"\n{'='*70}")
    print(f"Checking {lang.upper()} batch articles")
    print(f"{'='*70}")
    
    for f in sorted(os.listdir(lang_dir)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        
        # Only check batch articles
        is_batch = any(f.startswith(p) for p in batch_prefixes)
        if not is_batch:
            continue
        
        fp = os.path.join(lang_dir, f)
        with open(fp, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        issues = []
        
        # 1. Check TOC - is it in English?
        toc_match = re.search(r'<ul class="toc__list">(.*?)</ul>', content, re.DOTALL)
        if toc_match:
            toc_text = toc_match.group(1)
            if lang == 'ja':
                has_native_toc = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', toc_text))
            else:
                has_native_toc = bool(re.search(r'[\uAC00-\uD7AF]', toc_text))
            if not has_native_toc:
                issues.append('TOC=EN')
        
        # 2. Check for English words mixed in article body
        art_start = content.find('<article class="article-content reveal">')
        art_end = content.find('</article>', art_start)
        if art_start >= 0 and art_end >= 0:
            article = content[art_start:art_end]
            # Find standalone English words (not in tags/attributes)
            text_only = re.sub(r'<[^>]+>', ' ', article)
            en_words = re.findall(r'\b[A-Za-z]{4,}\b', text_only)
            # Filter out acceptable words
            acceptable = {'TMG', 'Baidu', 'Bilibili', 'Douyin', 'WeChat', 'Xiaohongshu', 'Bing', 'China', 'Google', 'Tencent', 'Alibaba', 'ByteDance', 'OCPC', 'CPC', 'CTR', 'ROAS', 'CPM', 'CVR', 'CPA', 'MAU', 'DAU', 'KOL', 'KOC', 'SEM', 'SEO', 'GEO', 'AI', 'AIGC', 'QR', 'API', 'URL', 'HTML', 'CSS', 'JSON', 'UGC', 'PGC', 'OTT', 'B2B', 'B2C', 'SNS', 'MCN', 'The', 'And', 'For', 'With', 'This', 'That', 'From', 'Have', 'Has', 'Are', 'Was', 'Were', 'Not', 'But', 'All', 'Can', 'Will', 'Just', 'Also', 'More', 'Than', 'Each', 'Most', 'Into', 'Over', 'Such', 'Both', 'After', 'Before', 'Between', 'Under', 'About', 'Other', 'Their', 'They', 'Your', 'Our', 'These', 'Those', 'Very', 'When', 'What', 'Which', 'Where', 'How', 'Why', 'Who', 'New', 'Top', 'High', 'Low', 'Big', 'Small', 'Good', 'Best', 'First', 'Last', 'Long', 'Short', 'Old', 'Young', 'Real', 'True', 'False', 'Full', 'Half', 'Free', 'Next', 'Only', 'Same', 'True', 'Every', 'Either', 'Neither'}
            non_acceptable = [w for w in en_words if w not in acceptable and not w.startswith('http')]
            if len(non_acceptable) > 5:
                issues.append(f'EN_WORDS={len(non_acceptable)}')
        
        if issues:
            print(f"  {f}: {', '.join(issues)}")
