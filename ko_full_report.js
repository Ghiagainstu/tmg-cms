const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const koDir = path.join(ws, 'ko', 'blog');

const files = fs.readdirSync(koDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html')
  .sort();

const missing = [];
const complete = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(koDir, f), 'utf-8');
  const slug = f.replace('.html', '');
  const url = `https://www.tuyuesouxin.cn/ko/blog/${slug}/`;
  
  const hasCallout = content.includes('callout callout--accent');
  const hasGrid = content.includes('feature-grid');
  const hasTable = content.includes('article-table');
  const hasBanner = content.includes('takeaway-banner');
  const count = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  
  if (count < 3) {
    const lacks = [];
    if (!hasCallout) lacks.push('callout');
    if (!hasGrid) lacks.push('grid');
    if (!hasTable) lacks.push('table');
    if (!hasBanner) lacks.push('banner');
    missing.push({ slug, url, count, lacks });
  } else {
    complete.push({ slug, count });
  }
}

console.log(`Total: ${files.length} articles`);
console.log(`Complete (3+/4): ${complete.length}`);
console.log(`Missing (${missing.length}):`);
console.log('');
for (const m of missing) {
  console.log(`${m.url}`);
  console.log(`  Components: ${m.count}/4  Missing: ${m.lacks.join(', ')}`);
}
