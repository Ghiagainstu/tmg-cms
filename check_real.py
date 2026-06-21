import sys, os, re, datetime
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
dp = os.path.join(ws, 'blog')

# Check all 6/18 articles with real content (3+ H2 tags)
real_articles = []
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
    
    style_end = content.find('</style>')
    after_style = content[style_end:]
    h2_ids = re.findall(r'<h2[^>]*id="([^"]*)"', after_style)
    
    if len(h2_ids) >= 3:
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
            real_articles.append((f, components, missing))

print(f'Real articles (3+ H2) with missing components: {len(real_articles)}')
for f, comp, missing in real_articles:
    print(f'  {f} ({comp}/4): missing {", ".join(missing)}')
