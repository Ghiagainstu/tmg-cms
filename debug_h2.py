import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'bilibili-search-content-matching.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

print('File size:', len(content))

h2_count = len(re.findall(r'<h2', content))
print(f'Total H2 tags in file: {h2_count}')

# Find all h2 ids
h2s = re.findall(r'<h2[^>]*id="([^"]*)"', content)
print(f'H2 IDs: {h2s[:10]}')

# Check how many times 'article-content' appears
ac_count = content.count('article-content')
print(f'article-content occurrences: {ac_count}')

# Find the actual content area
# Look for h2 tags outside of <style> section
style_end = content.find('</style>')
after_style = content[style_end:] if style_end >= 0 else content
h2_in_content = re.findall(r'<h2[^>]*id="([^"]*)"', after_style)
print(f'H2 tags after style: {h2_in_content[:15]}')
