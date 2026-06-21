import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check remaining JA/KO files that might need enhancement
articles_to_check = [
    'bilibili-demographics-who-are-these-gen-z-users.html',
    'bing-china-premium-audience-guide.html',
    'wechat-channels-consumer-electronics.html',
    'wechat-mini-games-desktop.html',
    'wechat-moments-ads.html',
]

for f in articles_to_check:
    for lang_dir in ['ja', 'blog']:
        if lang_dir == 'blog':
            fp = os.path.join(ws, 'blog', f)
        else:
            fp = os.path.join(ws, lang_dir, 'blog', f)
        
        if not os.path.exists(fp):
            continue
            
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        
        has_table = 'article-table' in content
        has_banner = 'takeaway-banner' in content
        
        if not has_table or not has_banner:
            label = lang_dir if lang_dir != 'blog' else 'EN'
            print(f'{label}/{f}: table={has_table} banner={has_banner}')
