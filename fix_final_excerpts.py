import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix last few issues
fixes = {
    'ja': {
        'tencent-ads-home-furnishing-ja': 'Tencent 広告：家庭用品向けWeChat Moments広告戦略と成功事例。',
    },
    'ko': {
        'tencent-ads-home-furnishing-ko': 'Tencent 광고: 가정용품을 위한 WeChat Moments 광고 전략과 성공 사례.',
        'xiaohongshu-consumer-research': 'Xiaohongshu 소비자 조사: 1억 7000만 중국 소비자의 구매 전 조사 행동 분석.',
        'xiaohongshu-demographics-who-are-these-350m-users': 'Xiaohongshu 3억 5000만 사용자 분석: 여성, 도시, 18-35세 고소비력 오디언스 특성.',
    }
}

for lang, lang_fixes in fixes.items():
    lang_dir = os.path.join(ws, lang, 'blog')
    
    for slug, new_desc in lang_fixes.items():
        fp = os.path.join(lang_dir, f'{slug}.html')
        if not os.path.exists(fp):
            print(f'Not found: {lang}/{slug}.html')
            continue
        
        with open(fp, 'r', encoding='utf-8') as f:
            content = f.read()
        
        old_match = re.search(r'<meta name="description" content="([^"]*)"', content)
        if old_match and old_match.group(1).strip():
            # Replace
            old_desc = old_match.group(1)
            content = content.replace(
                f'<meta name="description" content="{old_desc}"',
                f'<meta name="description" content="{new_desc}"'
            )
        else:
            # Add
            if '<meta charset' in content:
                content = content.replace(
                    '<meta charset',
                    f'<meta name="description" content="{new_desc}">\n  <meta charset',
                    1
                )
        
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {lang}/{slug}')

print('Done!')
