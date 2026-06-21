import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Find all articles with -ja/-ko suffix
ja_special = []
ko_special = []

for f in os.listdir(os.path.join(ws, 'ja', 'blog')):
    if f.endswith('-ja.html'):
        slug = f.replace('.html', '')
        ja_special.append(slug)

for f in os.listdir(os.path.join(ws, 'ko', 'blog')):
    if f.endswith('-ko.html'):
        slug = f.replace('.html', '')
        ko_special.append(slug)

print(f'JA files with -ja suffix: {len(ja_special)}')
for s in ja_special:
    print(f'  {s}')

print(f'\nKO files with -ko suffix: {len(ko_special)}')
for s in ko_special:
    print(f'  {s}')
