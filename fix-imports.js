const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, callback);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      callback(p);
    }
  });
}

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Replace relative paths pointing to known source root directories with alias paths
  content = content.replace(/(?:\.\.\/)+((?:common|components|lib|hooks|context|styles|utils)(?:\/.*?)?)(?=["'])/g, '@/$1');
  
  // Also clean up any lingering @/app refs
  content = content.replace(/@\/app\/_utils\//g, '@/utils/');
  content = content.replace(/@\/app\/_sections\//g, '@/sections/');
  content = content.replace(/@\/app\//g, '@/');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

walk('./src', replaceInFile);
