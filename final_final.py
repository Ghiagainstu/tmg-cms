import sys, os, re, datetime
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Final final check
for subdir in ['blog', os.path.join('ja','blog'), os.path.join('ko','blog')]:
    lang = subdir.split(os.sep)[0] if os.sep in subdir else 'EN'
    dp = os.path.join(ws, subdir)
    
    total = 0
    full = 0
    
    for f in sorted(os.listdir(dp)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        fp = os.path.join(dp, f)
        mtime = os.path.getmtime(fp)
        dt = datetime.datetime.fromtimestamp(mtime)
        if dt.date() != datetime.date(2026, 6, 18):
            continue
        
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        
        has_callout = 'callout callout--accent' in content
        has_grid = 'feature-grid' in content
        has_table = 'article-table' in content
        has_banner = 'takeaway-banner' in content
        components = sum([has_callout, has_grid, has_table, has_banner])
        
        total += 1
        if components >= 3:
            full += 1
    
    print(f'{lang}: {full}/{total} articles with 3+ components')
