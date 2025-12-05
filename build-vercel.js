import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const clientDir = path.resolve('client');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy the optimized index.html to dist/index.html
// We use the client/index.html which contains our V12 optimized code
fs.copyFileSync(path.join(clientDir, 'index.html'), path.join(distDir, 'index.html'));

console.log('Build complete: client/index.html copied to dist/index.html');
