const fs = require('fs-extra');
const path = require('path');

async function copyAssets() {
  const sourceDir = path.resolve(__dirname, 'src/assets/img');
  const destDir = path.resolve(__dirname, 'dist/assets/img');

  try {
    await fs.copy(sourceDir, destDir);
    console.log('Assets copied successfully.');
  } catch (err) {
    console.error('Error copying assets:', err);
  }
}

copyAssets();
