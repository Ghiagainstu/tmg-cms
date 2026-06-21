const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const koDir = path.join(ws, 'ko', 'blog');

const files = fs.readdirSync(koDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html')
  .sort();

console.log('Articles with 3/4 components (missing 1):');
console.log('');

for (const f of files) {
  const content = fs.readFileSync(path.join(koDir, f), 'utf-8');
  const slug = f.replace('.html', '');
  
  const hasCallout = content.includes('callout callout--accent');
  const hasGrid = content.includes('feature-grid');
  const hasTable = content.includes('article-table');
  const hasBanner = content.includes('takeaway-banner');
  const count = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  
  if (count === 3) {
    const lacks = [];
    if (!hasCallout) lacks.push('callout');
    if (!hasGrid) lacks.push('grid');
    if (!hasTable) lacks.push('table');
    if (!hasBanner) lacks.push('banner');
    console.log('https://www.tuyuesouxin.cn/ko/blog/' + slug + '/');
    console.log('  Missing: ' + lacks.join(', '));
  }
}
