const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const jaDir = path.join(ws, 'ja', 'blog');

const files = fs.readdirSync(jaDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html')
  .sort();

const dist = [0, 0, 0, 0, 0];
const missing = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(jaDir, f), 'utf-8');
  const slug = f.replace('.html', '');
  
  const hasCallout = content.includes('callout callout--accent');
  const hasGrid = content.includes('feature-grid');
  const hasTable = content.includes('article-table');
  const hasBanner = content.includes('takeaway-banner');
  const count = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  
  dist[count]++;
  
  if (count < 4) {
    const lacks = [];
    if (!hasCallout) lacks.push('callout');
    if (!hasGrid) lacks.push('grid');
    if (!hasTable) lacks.push('table');
    if (!hasBanner) lacks.push('banner');
    missing.push({ slug, count, lacks });
  }
}

console.log('=== JA Blog Visual Enhancement Status ===');
console.log('Total articles: ' + files.length);
console.log('4/4 components: ' + dist[4]);
console.log('3/4 components: ' + dist[3]);
console.log('2/4 components: ' + dist[2]);
console.log('1/4 components: ' + dist[1]);
console.log('0/4 components: ' + dist[0]);

if (missing.length === 0) {
  console.log('\n✅ ALL articles have 4/4 visual components!');
} else {
  console.log('\n' + missing.length + ' articles missing components:');
  console.log('');
  for (const m of missing) {
    console.log('https://www.tuyuesouxin.cn/ja/blog/' + m.slug + '/');
    console.log('  ' + m.count + '/4  Missing: ' + m.lacks.join(', '));
  }
}
