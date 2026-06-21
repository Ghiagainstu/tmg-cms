import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Update JA index with correct read times
index_path = os.path.join(ws, 'ja', 'blog', 'index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix read times in index cards
fixed = 0

# Find all post-card read-time spans
def fix_read_time(match):
    global fixed
    time_str = match.group(1).strip()
    if 'min read' in time_str.lower():
        num_match = re.search(r'(\d+)', time_str)
        if num_match:
            num = num_match.group(1)
            fixed += 1
            return f'post-card__read-time">{num}分で読める</span>'
    return match.group(0)

content = re.sub(r'post-card__read-time">(.*?)</span>', fix_read_time, content)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed {fixed} read times in JA index")
