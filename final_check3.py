import sys, os, re, datetime
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check remaining issues
for subdir in ['blog', os.path.join('ja','blog'), os.path.join('ko','blog')]:
    lang = subdir.split(os.sep)[0] if os.sep in subdir else 'EN'
    dp = os.path.join(ws, subdir)
    
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
        
        if components < 3:
            missing = []
            if not has_callout: missing.append('callout')
            if not has_grid: missing.append('grid')
            if not has_table: missing.append('table')
            if not has_banner: missing.append('banner')
            print(f'{lang}/{f} ({components}/4): missing {", ".join(missing)}')
