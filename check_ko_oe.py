import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'ko', 'blog', 'ocean-engine-overview.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

print('Has takeaway-banner:', 'takeaway-banner' in content)
print('Has article-table:', 'article-table' in content)

# Check if banner was added
if 'takeaway-banner' in content:
    print('Banner exists but check failed')
else:
    print('Banner not found')
