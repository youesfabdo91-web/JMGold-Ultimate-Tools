#!/bin/bash

# JMGOLD ULTIMATE TOOLS - Startup Script

echo "================================"
echo "🎮 JMGOLD ULTIMATE TOOLS v1.2"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js v14+"
    exit 1
fi

echo "✅ Node.js detected"
echo "📦 Installing dependencies..."

npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "================================"
echo "🔨 Building EXE..."
echo "================================"
echo ""

npm run make-exe

if [ $? -eq 0 ]; then
    echo ""
    echo "================================"
    echo "✅ BUILD SUCCESSFUL!"
    echo "================================"
    echo "📁 Output: dist/JMGOLD-ULTIMATE-TOOLS-v1.2-portable.exe"
    echo ""
    echo "🎮 Ready to play!"
else
    echo "❌ Build failed"
    exit 1
fi
