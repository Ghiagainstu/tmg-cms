import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# These 12 articles need table and banner
# Let me check the reference article to see how tables are used
fp = os.path.join(ws, 'blog', 'baidu-advertising-complete-guide-2026.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Find table usage
tables = list(re.finditer(r'<table class="article-table">', article))
print(f'Found {len(tables)} article-tables in reference')

# Show first table
if tables:
    t = tables[0]
    table_end = article.find('</table>', t.start())
    table_html = article[t.start():table_end+8]
    print('First table:')
    print(table_html[:500])
