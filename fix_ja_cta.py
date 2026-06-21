import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ja_dir = os.path.join(ws, 'ja', 'blog')

# Fix CTA text
fp = os.path.join(ja_dir, 'tencent-influencer-marketing.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace English CTA with Japanese
content = content.replace('>Get Started</a>', '>お問い合わせ</a>')

with open(fp, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed CTA text for tencent-influencer-marketing.html")
