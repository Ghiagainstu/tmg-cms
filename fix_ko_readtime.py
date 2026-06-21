import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ko_dir = os.path.join(ws, 'ko', 'blog')

# Fix all English read times to Korean format
fixed = 0

for f in sorted(os.listdir(ko_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ko_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    time_match = re.search(r'article-read-time">(.*?)</span>', content)
    if not time_match:
        continue
    
    read_time = time_match.group(1).strip()
    
    # Check if English format
    if 'min read' in read_time.lower():
        num_match = re.search(r'(\d+)', read_time)
        if num_match:
            num = num_match.group(1)
            new_time = f'{num}분 읽기'
            content = content.replace(
                f'article-read-time">{read_time}</span>',
                f'article-read-time">{new_time}</span>'
            )
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed += 1
    elif not ('분' in read_time or '읽기' in read_time):
        # Wrong format - try to extract number
        num_match = re.search(r'(\d+)', read_time)
        if num_match:
            num = num_match.group(1)
            new_time = f'{num}분 읽기'
            content = content.replace(
                f'article-read-time">{read_time}</span>',
                f'article-read-time">{new_time}</span>'
            )
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed += 1

print(f"Fixed {fixed} KO articles read time")
