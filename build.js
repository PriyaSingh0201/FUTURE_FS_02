const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, '..', 'mini-ecommerce.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Archive created successfully. Total size: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add all files and directories, excluding node_modules and .git
archive.glob('**/*', {
  ignore: [
    'node_modules/**',
    '.git/**',
    '.next/**',
    'mini-ecommerce.zip',
    '*.log'
  ],
  cwd: path.join(__dirname, '..')
});

archive.finalize();