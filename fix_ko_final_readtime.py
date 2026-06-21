import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ko_dir = os.path.join(ws, 'ko', 'blog')

# Fix remaining KO read time issues
fixes = {
    'cpm-ocpm-ecpm-explained': '6분 읽기',
    'deepseek-v4-price-cut-geo': '7분 읽기',
    'doubao-paid-what-it-means-for-geo': '8분 읽기',
    'geo-channel-weight-2026': '7분 읽기',
    'tencent-ad-revenue-ai-deep-dive-2026': '9분 읽기',
}

fixed = 0
for slug, new_time in fixes.items():
    fp = os.path.join(ko_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace read time
    content = re.sub(
        r'article-read-time">[^<]*</span>',
        f'article-read-time">{new_time}</span>',
        content
    )
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    fixed += 1
    print(f"Fixed: {slug}")

print(f"\nFixed {fixed} KO articles")
