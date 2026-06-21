import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check the remaining files that need attention
remaining_files = [
    ('EN', 'blog', 'baidu-demographics-who-are-these-735m-users.html'),
    ('EN', 'blog', 'xiaohongshu-demographics-who-are-these-350m-users.html'),
    ('JA', os.path.join('ja','blog'), 'baidu-demographics-who-are-these-735m-users.html'),
    ('JA', os.path.join('ja','blog'), 'xiaohongshu-demographics-who-are-these-350m-users.html'),
    ('KO', os.path.join('ko','blog'), 'bilibili-demographics-who-are-these-gen-z-users.html'),
    ('KO', os.path.join('ko','blog'), 'ocean-engine-overview.html'),
    ('KO', os.path.join('ko','blog'), 'wechat-mini-games-desktop-ko.html'),
    ('KO', os.path.join('ko','blog'), 'wechat-moments-ads-ko.html'),
]

for lang, subdir, f in remaining_files:
    fp = os.path.join(ws, subdir, f)
    if not os.path.exists(fp):
        print(f'{lang}/{f}: FILE NOT FOUND')
        continue
    
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    has_callout = 'callout callout--accent' in content
    has_grid = 'feature-grid' in content
    has_table = 'article-table' in content
    has_banner = 'takeaway-banner' in content
    components = sum([has_callout, has_grid, has_table, has_banner])
    
    missing = []
    if not has_callout: missing.append('callout')
    if not has_grid: missing.append('grid')
    if not has_table: missing.append('table')
    if not has_banner: missing.append('banner')
    
    print(f'{lang}/{f} ({components}/4): missing {", ".join(missing)}')
