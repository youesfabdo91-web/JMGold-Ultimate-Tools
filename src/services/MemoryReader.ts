// Memory Reader for GameLoop
import { ipcRenderer } from 'electron';

interface MemoryValue {
  address: string;
  value: number | string;
  type: 'int' | 'float' | 'string';
}

class MemoryReader {
  private baseAddress: string = '0x0';
  private cache: Map<string, MemoryValue> = new Map();

  async readMemory(address: string, size: number, type: 'int' | 'float' = 'int'): Promise<number | null> {
    try {
      const value = await ipcRenderer.invoke('read-memory', {
        address,
        size,
        type
      });
      return value;
    } catch (error) {
      console.error('Memory read failed:', error);
      return null;
    }
  }

  async writeMemory(address: string, value: number, type: 'int' | 'float' = 'int'): Promise<boolean> {
    try {
      const result = await ipcRenderer.invoke('write-memory', {
        address,
        value,
        type
      });
      return result;
    } catch (error) {
      console.error('Memory write failed:', error);
      return false;
    }
  }

  // Get current weapon from memory
  async getCurrentWeapon(): Promise<string> {
    try {
      const weapon = await ipcRenderer.invoke('get-current-weapon');
      return weapon || 'Unknown';
    } catch (error) {
      return 'Unknown';
    }
  }

  // Get player health
  async getPlayerHealth(): Promise<number> {
    try {
      const health = await ipcRenderer.invoke('get-player-health');
      return health || 0;
    } catch (error) {
      return 0;
    }
  }

  // Check if scoped
  async isScoped(): Promise<boolean> {
    try {
      const scoped = await ipcRenderer.invoke('is-scoped');
      return scoped || false;
    } catch (error) {
      return false;
    }
  }
}

export default new MemoryReader();
