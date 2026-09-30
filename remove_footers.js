const fs = require('fs');
const path = require('path');

const files = [
  'products/item-a765/index.html',
  'products/item-b203/index.html',
  'products/item-f303/index.html',
  'products/item-t845/index.html'
];

for (const file of files) {
  const filePath = path.join('c:/Users/tamba/Downloads/wetransfer_screwfast-uk-3_2026-07-31_1219/screwfast.uk 3', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let footers = [];
  let currentIndex = 0;
  
  while (true) {
    let start = content.indexOf('<footer', currentIndex);
    if (start === -1) break;
    let end = content.indexOf('</footer>', start);
    if (end === -1) break;
    end += '</footer>'.length;
    footers.push({start, end});
    currentIndex = end;
  }
  
  console.log(`Found ${footers.length} footers in ${file}`);
  
  if (footers.length > 1) {
    // Keep the last one, remove the others (from last to first to preserve indices)
    for (let i = footers.length - 2; i >= 0; i--) {
      const f = footers[i];
      content = content.slice(0, f.start) + content.slice(f.end);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed extra footers in ${file}`);
  }
}
