import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Get all blog article files
blog_files = []
for f in os.listdir(os.path.join(ws, 'blog')):
    if f.endswith('.html') and f != 'index.html':
        slug = f.replace('.html', '')
        blog_files.append(slug)

# Get articles already in index
with open(os.path.join(ws, 'blog', 'index.html'), 'r', encoding='utf-8') as f:
    content = f.read()
index_links = set(re.findall(r'href="/blog/([^/]+)/"', content))

# Find missing articles
missing = []
for slug in sorted(blog_files):
    if slug not in index_links:
        missing.append(slug)

print(f'Total blog files: {len(blog_files)}')
print(f'In index: {len(index_links)}')
print(f'Missing from index: {len(missing)}')
for slug in missing[:20]:
    print(f'  {slug}')
if len(missing) > 20:
    print(f'  ... and {len(missing)-20} more')
