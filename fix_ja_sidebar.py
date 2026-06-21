import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ja_dir = os.path.join(ws, 'ja', 'blog')

# Fix sidebar text for these articles
fixes = {
    'doubao-goes-paid-what-advertisers-need-to-know': '中国のAI主導型広告環境のナビゲーションにお困りですか？国際ブランドの中国市場進出をサポートします。',
    'geo-market-2026-midyear': '中国のAI主導型広告環境のナビゲーションにお困りですか？国際ブランドの中国市場進出をサポートします。',
}

for slug, new_text in fixes.items():
    fp = os.path.join(ja_dir, f'{slug}.html')
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace sidebar text
    pattern = r'(sidebar-cta">\s*<p>)(.*?)(</p>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        old_text = match.group(2)
        content = content.replace(old_text, new_text)
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed sidebar: {slug}")

print("Done!")
