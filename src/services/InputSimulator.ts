// Input Simulator for Mouse and Keyboard
import { ipcRenderer } from 'electron';

interface MouseMove {
  x: number;
  y: number;
  duration?: number;
}

interface KeyPress {
  key: string;
  duration?: number;
}

class InputSimulator {
  async moveMouse(x: number, y: number, duration: number = 0): Promise<void> {
    try {
      await ipcRenderer.invoke('mouse-move', { x, y, duration });
    } catch (error) {
      console.error('Mouse move failed:', error);
    }
  }

  async click(button: 'left' | 'right' | 'middle' = 'left'): Promise<void> {
    try {
      await ipcRenderer.invoke('mouse-click', { button });
    } catch (error) {
      console.error('Mouse click failed:', error);
    }
  }

  async keyDown(key: string): Promise<void> {
    try {
      await ipcRenderer.invoke('key-down', { key });
    } catch (error) {
      console.error('Key down failed:', error);
    }
  }

  async keyUp(key: string): Promise<void> {
    try {
      await ipcRenderer.invoke('key-up', { key });
    } catch (error) {
      console.error('Key up failed:', error);
    }
  }

  async keyPress(key: string, duration: number = 50): Promise<void> {
    try {
      await this.keyDown(key);
      await new Promise(resolve => setTimeout(resolve, duration));
      await this.keyUp(key);
    } catch (error) {
      console.error('Key press failed:', error);
    }
  }

  async type(text: string, delay: number = 50): Promise<void> {
    try {
      for (const char of text) {
        await this.keyPress(char);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      console.error('Text typing failed:', error);
    }
  }
}

export default new InputSimulator();
