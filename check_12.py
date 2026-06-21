import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check all 12 articles with missing table/banner
articles = [
    'bilibili-demographics-who-are-these-gen-z-users.html',
    'bilibili-genz-marketing.html',
    'bing-china-demographics-who-are-these-users.html',
    'bing-china-premium-audience-guide.html',
    'china-big-tech-ai-monetization-2026.html',
    'douyin-enterprise-account.html',
    'ocean-engine-local-reach.html',
    'tencent-ad-revenue-ai-deep-dive-2026.html',
    'wechat-channels-consumer-electronics.html',
    'wechat-mini-games-desktop.html',
    'wechat-moments-ads.html',
    'xiaohongshu-consumer-research.html',
]

for f in articles:
    fp = os.path.join(ws, 'blog', f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    has_table = 'article-table' in content
    has_banner = 'takeaway-banner' in content
    has_grid = 'feature-grid' in content
    has_callout = 'callout callout--accent' in content
    print(f'{f}: table={has_table} banner={has_banner} grid={has_grid} callout={has_callout}')
