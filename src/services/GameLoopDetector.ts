// GameLoop Window Detection and Control
import { ipcRenderer } from 'electron';

interface GameLoopWindow {
  hwnd: number | null;
  processId: number | null;
  isActive: boolean;
}

class GameLoopDetector {
  private gameLoopWindow: GameLoopWindow = {
    hwnd: null,
    processId: null,
    isActive: false
  };

  async detectGameLoop(): Promise<boolean> {
    try {
      const result = await ipcRenderer.invoke('detect-gameloop');
      if (result && result.hwnd) {
        this.gameLoopWindow = result;
        return true;
      }
      return false;
    } catch (error) {
      console.error('GameLoop detection failed:', error);
      return false;
    }
  }

  async isGameLoopFocused(): Promise<boolean> {
    try {
      const isFocused = await ipcRenderer.invoke('is-gameloop-focused');
      return isFocused;
    } catch (error) {
      console.error('Focus check failed:', error);
      return false;
    }
  }

  getWindowHandle(): number | null {
    return this.gameLoopWindow.hwnd;
  }

  getProcessId(): number | null {
    return this.gameLoopWindow.processId;
  }
}

export default new GameLoopDetector();
