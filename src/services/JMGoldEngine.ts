// Main Engine - Orchestrates all systems
import GameLoopDetector from './GameLoopDetector';
import MemoryReader from './MemoryReader';
import RecoilControlEngine from './RecoilControlEngine';
import AimAssistSystem from './AimAssistSystem';
import InputSimulator from './InputSimulator';
import AntiDetectionSystem from './AntiDetectionSystem';
import MacroSystem from './MacroSystem';
import OverlaySystem from './OverlaySystem';

class JMGoldEngine {
  private isInitialized: boolean = false;
  private isRunning: boolean = false;
  private updateInterval: NodeJS.Timer | null = null;

  async initialize(): Promise<boolean> {
    try {
      console.log('🚀 Initializing JMGOLD Engine...');

      // Detect GameLoop
      const gameLoopDetected = await GameLoopDetector.detectGameLoop();
      if (!gameLoopDetected) {
        console.error('❌ GameLoop not detected');
        return false;
      }
      console.log('✅ GameLoop detected');

      // Initialize Anti-Detection
      const antiDetectionReady = await AntiDetectionSystem.initializeProtection();
      console.log(antiDetectionReady ? '✅ Anti-Detection initialized' : '⚠️ Anti-Detection partially initialized');

      // Initialize Overlay
      await OverlaySystem.initializeOverlay();
      console.log('✅ Overlay initialized');

      this.isInitialized = true;
      console.log('✅ JMGOLD Engine ready!');
      return true;
    } catch (error) {
      console.error('❌ Engine initialization failed:', error);
      return false;
    }
  }

  async start(): Promise<boolean> {
    if (!this.isInitialized) {
      console.error('Engine not initialized');
      return false;
    }

    try {
      this.isRunning = true;
      console.log('🎮 JMGOLD Engine started');

      // Start update loop
      this.updateInterval = setInterval(async () => {
        await this.update();
      }, 16); // ~60 FPS

      return true;
    } catch (error) {
      console.error('❌ Failed to start engine:', error);
      this.isRunning = false;
      return false;
    }
  }

  async stop(): Promise<void> {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    await RecoilControlEngine.stopRecoilControl();
    await AimAssistSystem.stopAimAssist();
    await OverlaySystem.hideOverlay();
    this.isRunning = false;
    console.log('⛔ JMGOLD Engine stopped');
  }

  private async update(): Promise<void> {
    try {
      // Check if GameLoop is still active
      const isActive = await GameLoopDetector.isGameLoopFocused();
      if (!isActive) return;

      // Update overlay data
      const weapon = await MemoryReader.getCurrentWeapon();
      const health = await MemoryReader.getPlayerHealth();
      const isScoped = await MemoryReader.isScoped();

      await OverlaySystem.updateOverlayData({
        profile: 'P1',
        status: 'READY',
        currentWeapon: weapon,
        health,
        ammo: 0
      });
    } catch (error) {
      console.error('Update loop error:', error);
    }
  }

  getRecoilEngine() {
    return RecoilControlEngine;
  }

  getAimAssist() {
    return AimAssistSystem;
  }

  getMacroSystem() {
    return MacroSystem;
  }

  getOverlay() {
    return OverlaySystem;
  }

  getMemoryReader() {
    return MemoryReader;
  }

  isEngineRunning(): boolean {
    return this.isRunning;
  }
}

export default new JMGoldEngine();
