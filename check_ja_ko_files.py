import sys, os
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check which articles exist in each language
en_dir = os.path.join(ws, 'blog')
ja_dir = os.path.join(ws, 'ja', 'blog')
ko_dir = os.path.join(ws, 'ko', 'blog')

en_files = set(f.replace('.html', '') for f in os.listdir(en_dir) if f.endswith('.html') and f != 'index.html')
ja_files = set(f.replace('.html', '') for f in os.listdir(ja_dir) if f.endswith('.html') and f != 'index.html')
ko_files = set(f.replace('.html', '') for f in os.listdir(ko_dir) if f.endswith('.html') and f != 'index.html')

print(f'EN files: {len(en_files)}')
print(f'JA files: {len(ja_files)}')
print(f'KO files: {len(ko_files)}')

# Find articles in JA/KO but not in their index
import re

with open(os.path.join(ja_dir, 'index.html'), 'r', encoding='utf-8') as f:
    ja_index = f.read()
ja_index_links = set(re.findall(r'href="/ja/blog/([^/]+)/"', ja_index))

with open(os.path.join(ko_dir, 'index.html'), 'r', encoding='utf-8') as f:
    ko_index = f.read()
ko_index_links = set(re.findall(r'href="/ko/blog/([^/]+)/"', ko_index))

# Articles in JA dir but not in JA index
ja_missing_from_index = ja_files - ja_index_links
ko_missing_from_index = ko_files - ko_index_links

print(f'\nJA articles missing from index: {len(ja_missing_from_index)}')
for slug in sorted(ja_missing_from_index)[:10]:
    print(f'  {slug}')

print(f'\nKO articles missing from index: {len(ko_missing_from_index)}')
for slug in sorted(ko_missing_from_index)[:10]:
    print(f'  {slug}')
