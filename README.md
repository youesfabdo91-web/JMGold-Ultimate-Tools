# JMGOLD ULTIMATE TOOLS v1.2
## Premium Gaming Utility Dashboard

> **⚠️ Educational & Entertainment Purpose Only**

---

## 📋 Overview

**JMGOLD ULTIMATE TOOLS** is a comprehensive gaming utility dashboard designed for **Tencent GameLoop** with advanced features including:

- 🎯 **Recoil Control** - Automatic weapon recoil compensation
- 🔫 **Aim Assist** - Intelligent target detection and tracking
- ⌨️ **Advanced Macro** - Custom input sequence automation
- 📚 **Weapon Library** - Individual weapon configuration profiles
- 🎨 **Overlay System** - In-game status display with customization
- 📡 **Emulator Hub** - GameLoop integration and monitoring
- 🎮 **More Control** - Extended control and customization options
- ⚡ **Boost** - Performance optimization and monitoring
- 🎛️ **UI Configuration** - Interface customization
- ⚙️ **Settings** - Comprehensive application settings

---

## 🚀 Quick Start

### Option 1: Automatic Build (Recommended)

**Windows:**
```batch
build.bat
```

**Linux/Mac:**
```bash
bash build.sh
```

### Option 2: Manual Build

```bash
# Install dependencies
npm install

# Build EXE
npm run make-exe
```

### Option 3: Development Mode

```bash
# Start development server with Electron
npm run electron-dev
```

---

## 📋 System Requirements

- **OS:** Windows 10/11 (64-bit)
- **RAM:** 4GB minimum (8GB recommended)
- **Disk Space:** 500MB
- **Dependencies:** Node.js v14+ (for building)
- **GameLoop:** Latest version from Tencent
- **Admin Rights:** Required for full functionality

---

## 🎯 Features Overview

### 1️⃣ **Recoil Control**
- Smart detection mode
- Weapon-specific profiles
- Customizable sensitivity and response
- Stance-based multipliers
- Close range vs. long range optimization

### 2️⃣ **Aim Assist**
- Real-time target detection
- Multiple tracking profiles
- Scope-specific configurations
- Target preference settings
- Activation modes (Hold/Toggle/Always On)

### 3️⃣ **Advanced Macro**
- Custom action sequences
- Timing control
- Loop support
- Multiple execution modes
- Profile management

### 4️⃣ **Weapon Library**
- Individual weapon profiles
- Scope configuration per weapon
- Stance settings
- Quick-switch capabilities
- Profile templates

### 5️⃣ **Overlay System**
- In-game status display
- Customizable position and opacity
- Profile and weapon indicators
- Crosshair customization
- Real-time information updates

### 6️⃣ **Anti-Detection**
- Process hiding
- Input randomization
- Memory protection
- Pattern variation
- Code obfuscation

---

## 📁 Project Structure

```
JMGold-Ultimate-Tools/
├── src/
│   ├── pages/              # UI Pages (11 pages)
│   ├── components/         # React Components
│   ├── styles/            # CSS Stylesheets
│   ├── services/          # Core Game Logic
│   │   ├── GameLoopDetector.ts
│   │   ├── MemoryReader.ts
│   │   ├── RecoilControlEngine.ts
│   │   ├── AimAssistSystem.ts
│   │   ├── InputSimulator.ts
│   │   ├── MacroSystem.ts
│   │   ├── OverlaySystem.ts
│   │   ├── AntiDetectionSystem.ts
│   │   └── JMGoldEngine.ts
│   └── App.tsx            # Main Application
├── public/
│   ├── preload.js         # Electron Preload
│   ├── main-process.js    # Electron Main
│   └── native-bindings.js # Native API Bindings
├── build-script.js        # Build Automation
├── config.json           # Configuration
├── package.json          # Dependencies
├── build.bat            # Windows Build Script
├── build.sh             # Linux/Mac Build Script
└── README.md            # This File
```

---

## 🔨 Building the EXE

### Automatic Build
```batch
REM Windows
build.bat
```

### Manual Build
```bash
npm install
npm run build
electron-builder --win --x64
```

### Output Location
```
dist/JMGOLD-ULTIMATE-TOOLS-v1.2-portable.exe
```

---

## 🎮 Usage

1. **Launch the Application**
   - Run the EXE file
   - Application will detect GameLoop automatically

2. **Configure Profile**
   - Navigate to Recoil/Aim Assist pages
   - Adjust settings for your weapon/playstyle
   - Save profile

3. **Set Hotkeys**
   - Go to hotkey settings
   - Assign keys for enable/disable
   - Test functionality

4. **Start Gaming**
   - Launch GameLoop and start PUBG
   - Click "Start" in application
   - Use hotkeys to control features

---

## ⚙️ Configuration

### Recoil Control Settings

```typescript
{
  baseValue: 1.0,              // Base multiplier
  verticalControl: 0.8,        // Vertical recoil control
  horizontalControl: 0.6,      // Horizontal control
  smoothness: 85,              // Smoothing factor
  response: "fast",           // Fast/Normal/Slow
  crouchMultiplier: 1.1,       // Crouched multiplier
  proneMultiplier: 1.3         // Prone multiplier
}
```

### Aim Assist Settings

```typescript
{
  sensitivity: 50,             // Detection sensitivity
  response: 65,               // Tracking response
  trackingProfile: "balanced",// Aggressive/Balanced/Conservative
  targetPreference: "head",   // Head/Chest/Center
  activationMode: "hold"      // Hold/Toggle/Always
}
```

---

## 🔐 Security & Anti-Detection

### Enabled Protections

✅ **Process Hiding**
- Hides from system detection
- Randomizes process name
- Masks memory footprint

✅ **Input Randomization**
- Random delays between inputs
- Variable mouse movement patterns
- Unpredictable key press timing

✅ **Memory Protection**
- Encrypted memory access
- Access pattern randomization
- Anti-memory scanning

✅ **Code Obfuscation**
- Minified code
- String encryption
- Function renaming

---

## ⚠️ Disclaimer

**IMPORTANT:** This application is provided for **educational and entertainment purposes only**.

- Users assume full responsibility for use
- Compliance with game Terms of Service required
- Use at your own risk
- Developer not responsible for bans or penalties
- Check local laws and regulations

---

## 📞 Support & Issues

- **GitHub Issues:** https://github.com/youesfabdo91-web/JMGold-Ultimate-Tools/issues
- **Documentation:** See `BUILD_GUIDE.md`
- **Updates:** Check releases page

---

## 📄 License

MIT License - See LICENSE file

---

## 🙏 Credits

- **Framework:** React + TypeScript + Electron
- **Native Binding:** FFI-NAPI
- **Input Control:** RobotJS
- **Gaming Logic:** Custom Implementation

---

## 🔄 Updates & Versioning

- **v1.0** - Initial Release
- **v1.1** - Added Macro System
- **v1.2** - Enhanced Anti-Detection + UI Overhaul

---

**🎮 Enjoy Gaming! 🎮**

---

*Last Updated: September 16, 2026*
