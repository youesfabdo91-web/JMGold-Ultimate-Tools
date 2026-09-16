@echo off
CLS

echo ================================
echo 🎮 JMGOLD ULTIMATE TOOLS v1.2
echo ================================
echo.

echo 📦 Checking Node.js...
node --version
if errorlevel 1 (
    echo ❌ Node.js not found. Please install Node.js v14+
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo 📦 Installing dependencies...
echo.

call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ================================
echo 🔨 Building EXE...
echo ================================
echo.

call npm run make-exe

if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo.
echo ================================
echo ✅ BUILD SUCCESSFUL!
echo ================================
echo 📁 Output: dist/JMGOLD-ULTIMATE-TOOLS-v1.2-portable.exe
echo.
echo 🎮 Ready to play!
echo.
pause
