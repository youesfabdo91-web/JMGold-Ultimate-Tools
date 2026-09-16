// Simple obfuscation script
const fs = require('fs');
const path = require('path');

const obfuscate = (code) => {
  // Basic obfuscation
  let obfuscated = code
    .replace(/console\.log\(.*?\);/g, '')
    .replace(/\/\/.*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n')
    .filter(line => line.trim().length > 0)
    .join('\n');
  
  return obfuscated;
};

const buildExe = async () => {
  console.log('🔨 Building EXE...');
  const { execSync } = require('child_process');
  
  try {
    console.log('📦 Building React app...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('🔧 Packaging with Electron Builder...');
    execSync('electron-builder --win --x64 --publish never', { stdio: 'inherit' });
    
    console.log('✅ EXE built successfully!');
    console.log('📁 Output: ./dist/JMGOLD-ULTIMATE-TOOLS.exe');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  buildExe();
}

module.exports = { obfuscate, buildExe };
