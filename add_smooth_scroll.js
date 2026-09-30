const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const rootDir = "c:/Users/tamba/Downloads/wetransfer_screwfast-uk-3_2026-07-31_1219/screwfast.uk 3";
const htmlFiles = getHtmlFiles(rootDir);

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Look for <html ... class="..."> and add scroll-smooth
  const htmlTagMatch = content.match(/<html[^>]*class="([^"]*)"/i);
  if (htmlTagMatch) {
    const classes = htmlTagMatch[1];
    if (!classes.includes('scroll-smooth')) {
      const newClasses = classes + ' scroll-smooth';
      const newHtmlTag = htmlTagMatch[0].replace(classes, newClasses);
      content = content.replace(htmlTagMatch[0], newHtmlTag);
      changed = true;
    }
  } else {
    // If there is no class attribute in <html>, we can add it
    const htmlTagMatch2 = content.match(/<html([^>]*)>/i);
    if (htmlTagMatch2 && !htmlTagMatch2[0].includes('class=')) {
      const newHtmlTag = htmlTagMatch2[0].replace('<html', '<html class="scroll-smooth"');
      content = content.replace(htmlTagMatch2[0], newHtmlTag);
      changed = true;
    }
  }

  // Also add CSS just to be extremely safe, in case Tailwind isn't compiling a new class
  // We can add it in a style tag in the head if not already there
  if (!content.includes('html { scroll-behavior: smooth !important; }')) {
    if (content.includes('<head>')) {
      content = content.replace('<head>', '<head>\n<style>html { scroll-behavior: smooth !important; }</style>');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
console.log('Done!');
