import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Test on one file first
fp = os.path.join(ws, 'blog', 'baidu-ai-search-ads-2026.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find article content
art_start = content.find('<article class="article-content reveal">')
art_end = content.find('</article>', art_start)
article = content[art_start:art_end]

# Find first h2
h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
first_h2 = h2s[0]
first_h2_text = re.sub(r'<[^>]+>', '', first_h2.group(2)).strip()

# Find end of first section (up to second h2)
second_h2 = h2s[1]
first_section = article[first_h2.end():second_h2.start()]

# Get last </p> in first section
last_p = first_section.rfind('</p>')
if last_p >= 0:
    insert_pos = first_h2.end() + last_p + 4
    print(f'Will insert callout after first section, before second h2')
    print(f'First H2: {first_h2_text}')
    print(f'Insert at position: {insert_pos}')
    print(f'Context: ...{article[insert_pos-50:insert_pos]}...')
    print(f'After: {article[insert_pos:insert_pos+100]}...')
