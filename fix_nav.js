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

const newNavScript = `<script type="module">
document.addEventListener("DOMContentLoaded", function() {
  let path = window.location.pathname;
  let id = "home";
  if (path.includes("/products")) id = "products";
  else if (path.includes("/services")) id = "services";
  else if (path.includes("/blog")) id = "blog";
  else if (path.includes("/contact")) id = "contact";
  
  let a = document.getElementById(id);
  if (a) {
    a.classList.remove("text-neutral-600", "dark:text-neutral-400", "hover:text-neutral-500", "dark:hover:text-neutral-500");
    a.classList.add("text-orange-400", "dark:text-orange-300");
    a.setAttribute("aria-current", "page");
  }
});
</script>`;

const badNavScriptRegex = /<script type="module">document\.addEventListener\("DOMContentLoaded",function\(\)\{let e,t=window\.location\.pathname.*?<\/script>/g;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // 1. Fix the navbar active state script
  if (badNavScriptRegex.test(content)) {
    content = content.replace(badNavScriptRegex, newNavScript);
    changed = true;
  }

  // 2. Fix the missing DFUzoRvl.js script in contact page (or any page)
  if (!content.includes('MainLayout.astro_astro_type_script_index_1_lang.DFUzoRvl.js') && !file.includes('404')) {
    // Calculate relative prefix
    const relativePath = path.relative(rootDir, file).replace(/\\/g, '/');
    const depth = relativePath.split('/').length - 1;
    let prefix = '_astro/';
    if (relativePath.includes('/')) {
        const parts = relativePath.split('/');
        prefix = '../'.repeat(parts.length - 1) + '_astro/';
    }
    
    // Append the script before closing body tag
    const scriptTag = `<script type="module" src="${prefix}MainLayout.astro_astro_type_script_index_1_lang.DFUzoRvl.js"></script>`;
    
    if (content.includes('</body>')) {
      content = content.replace('</body>', `${scriptTag}\n</body>`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
console.log('Done!');
