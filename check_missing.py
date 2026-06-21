import sys, os, datetime
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
dp = os.path.join(ws, 'blog')

for f in sorted(os.listdir(dp)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    fp = os.path.join(dp, f)
    mtime = os.path.getmtime(fp)
    dt = datetime.datetime.fromtimestamp(mtime)
    if dt.date() != datetime.date(2026, 6, 18):
        continue
    with open(fp, 'r', encoding='utf-8') as fh:
        content = fh.read()
    has_callout = 'callout callout--accent' in content
    has_grid = 'feature-grid' in content
    has_table = 'article-table' in content
    has_banner = 'takeaway-banner' in content
    components = sum([has_callout, has_grid, has_table, has_banner])
    if components < 4:
        missing = []
        if not has_callout: missing.append('callout')
        if not has_grid: missing.append('grid')
        if not has_table: missing.append('table')
        if not has_banner: missing.append('banner')
        missing_str = ', '.join(missing)
        print(f'{f} ({components}/4): missing {missing_str}')
