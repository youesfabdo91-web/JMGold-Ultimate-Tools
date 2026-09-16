// Overlay System for In-Game Display
import { ipcRenderer } from 'electron';

interface OverlayConfig {
  enabled: boolean;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  opacity: number;
  scale: number;
  showProfile: boolean;
  showStatus: boolean;
  showWeapon: boolean;
  showCrosshair: boolean;
  crosshairSize: number;
  crosshairStyle: string;
}

interface OverlayData {
  profile: string;
  status: string;
  currentWeapon: string;
  health: number;
  ammo: number;
}

class OverlaySystem {
  private config: OverlayConfig = {
    enabled: true,
    position: 'top-right',
    opacity: 0.8,
    scale: 1,
    showProfile: true,
    showStatus: true,
    showWeapon: true,
    showCrosshair: true,
    crosshairSize: 20,
    crosshairStyle: 'dot'
  };

  private overlayWindow: any = null;

  async initializeOverlay(): Promise<boolean> {
    try {
      const result = await ipcRenderer.invoke('initialize-overlay', this.config);
      return result;
    } catch (error) {
      console.error('Overlay initialization failed:', error);
      return false;
    }
  }

  async updateOverlayData(data: OverlayData): Promise<void> {
    try {
      await ipcRenderer.invoke('update-overlay', data);
    } catch (error) {
      console.error('Failed to update overlay:', error);
    }
  }

  async showOverlay(): Promise<void> {
    try {
      await ipcRenderer.invoke('show-overlay');
    } catch (error) {
      console.error('Failed to show overlay:', error);
    }
  }

  async hideOverlay(): Promise<void> {
    try {
      await ipcRenderer.invoke('hide-overlay');
    } catch (error) {
      console.error('Failed to hide overlay:', error);
    }
  }

  setConfig(config: Partial<OverlayConfig>) {
    this.config = { ...this.config, ...config };
  }

  getConfig(): OverlayConfig {
    return this.config;
  }
}

export default new OverlaySystem();
