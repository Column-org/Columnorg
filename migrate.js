import fs from 'fs';
import path from 'path';

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

  // Replace next/link with react-router-dom
  if (content.includes('next/link')) {
    content = content.replace(/import\s+Link\s+from\s+["']next\/link["']/g, 'import { Link } from "react-router-dom"');
    content = content.replace(/import\s+NextLink\s+from\s+["']next\/link["']/g, 'import { Link as NextLink } from "react-router-dom"');
    // Replace <Link href="..."> with <Link to="...">
    // Simple regex approach (might not cover multi-line if missing /s, but covers basic)
    content = content.replace(/<Link([^>]*?)href=/g, '<Link$1to=');
    content = content.replace(/<NextLink([^>]*?)href=/g, '<NextLink$1to=');
  }

  // Replace next/image with img
  if (content.includes('next/image')) {
    content = content.replace(/import\s+Image\s+from\s+["']next\/image["']/g, '/* import Image from next removed */');
    content = content.replace(/<Image/g, '<img');
  }

  // Next font replacement - app/layout or main.tsx if moved
  if (content.includes('next/font')) {
    content = content.replace(/import[^;]+from ['"]next\/font[^;]+;/g, '');
  }

  // Replace "use client" as it's not needed in Vite
  content = content.replace(/"use client";\n?/g, '');
  content = content.replace(/'use client';\n?/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

walk('./src', replaceInFile);
