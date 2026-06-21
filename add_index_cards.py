import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Read index.html
with open(os.path.join(ws, 'blog', 'index.html'), 'r', encoding='utf-8') as f:
    content = f.read()

# Find the posts-grid section and add missing articles
# First, get all missing articles with their metadata
missing_articles = []
blog_dir = os.path.join(ws, 'blog')

# Get articles already in index
index_links = set(re.findall(r'href="/blog/([^/]+)/"', content))

for f in sorted(os.listdir(blog_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    slug = f.replace('.html', '')
    if slug in index_links:
        continue
    
    # Read article to get metadata
    fp = os.path.join(blog_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        article = fobj.read()
    
    # Extract title
    title_match = re.search(r'<title>([^<]+)</title>', article)
    title = title_match.group(1).replace(' | TMG', '').strip() if title_match else slug
    
    # Extract date
    date_match = re.search(r'article-date">([^<]+)<', article)
    date = date_match.group(1).strip() if date_match else 'June 18, 2026'
    
    # Extract category
    cat_match = re.search(r'article-category">([^<]+)<', article)
    cat = cat_match.group(1).strip() if cat_match else 'China Digital'
    
    # Extract excerpt from meta description
    desc_match = re.search(r'<meta name="description" content="([^"]+)"', article)
    excerpt = desc_match.group(1).strip()[:150] if desc_match else ''
    
    # Extract read time
    time_match = re.search(r'article-read-time">([^<]+)<', article)
    read_time = time_match.group(1).strip() if time_match else '8 min read'
    
    missing_articles.append({
        'slug': slug,
        'title': title,
        'date': date,
        'cat': cat,
        'excerpt': excerpt,
        'read_time': read_time,
    })

print(f'Found {len(missing_articles)} missing articles')

# Generate HTML cards
cards_html = ''
for article in missing_articles:
    # Determine category class
    cat_class = 'post-card__cat--ocean'
    slug = article['slug']
    if slug.startswith('baidu'):
        cat_class = 'post-card__cat--baidu'
    elif slug.startswith('geo') or 'geo' in slug:
        cat_class = 'post-card__cat--geo'
    
    cards_html += f'''<a href="/blog/{article['slug']}/" class="post-card reveal" data-cat="{article['cat'][:10].lower()}">
    <div class="post-card__header">
        <span class="post-card__cat {cat_class}">{article['cat']}</span>
        <span class="post-card__date">{article['date']}</span>
    </div>
    <h2 class="post-card__title">{article['title']}</h2>
    <p class="post-card__excerpt">{article['excerpt']}</p>
    <div class="post-card__footer">
        <span class="post-card__read-time">{article['read_time']}</span>
        <span class="post-card__arrow">Read more →</span>
    </div>
</a>
'''

# Insert cards into the posts-grid
# Find the opening <div class="posts-grid"> and insert after it
grid_match = re.search(r'(<div class="posts-grid">)\s*\n', content)
if grid_match:
    insert_pos = grid_match.end()
    content = content[:insert_pos] + cards_html + content[insert_pos:]
    
    with open(os.path.join(ws, 'blog', 'index.html'), 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Added {len(missing_articles)} cards to index.html')
else:
    print('Could not find posts-grid')
