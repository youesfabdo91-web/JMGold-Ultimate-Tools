// Macro System for Custom Input Sequences
import { ipcRenderer } from 'electron';

interface MacroAction {
  type: 'key' | 'mouse' | 'wait';
  value: string | number;
  duration?: number;
}

interface MacroProfile {
  name: string;
  actions: MacroAction[];
  speed: number;
  loopEnabled: boolean;
  holdMode: boolean;
}

class MacroSystem {
  private currentMacro: MacroProfile | null = null;
  private isRunning: boolean = false;
  private macroProfiles: Map<string, MacroProfile> = new Map();

  createMacro(profile: MacroProfile) {
    this.macroProfiles.set(profile.name, profile);
  }

  loadMacro(name: string): boolean {
    const macro = this.macroProfiles.get(name);
    if (macro) {
      this.currentMacro = macro;
      return true;
    }
    return false;
  }

  async executeMacro(): Promise<boolean> {
    if (!this.currentMacro) return false;

    try {
      this.isRunning = true;
      const result = await ipcRenderer.invoke('execute-macro', this.currentMacro);
      this.isRunning = false;
      return result;
    } catch (error) {
      console.error('Macro execution failed:', error);
      this.isRunning = false;
      return false;
    }
  }

  async stopMacro(): Promise<void> {
    try {
      await ipcRenderer.invoke('stop-macro');
      this.isRunning = false;
    } catch (error) {
      console.error('Failed to stop macro:', error);
    }
  }

  getMacro(name: string): MacroProfile | undefined {
    return this.macroProfiles.get(name);
  }

  getAllMacros(): MacroProfile[] {
    return Array.from(this.macroProfiles.values());
  }

  isExecuting(): boolean {
    return this.isRunning;
  }
}

export default new MacroSystem();
