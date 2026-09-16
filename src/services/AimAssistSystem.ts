// Aim Assist System
import { ipcRenderer } from 'electron';

interface AimAssistProfile {
  enabled: boolean;
  sensitivity: number;
  response: number;
  trackingProfile: string;
  targetPreference: string;
  activationMode: string;
  scopeProfile: string;
}

interface TargetInfo {
  found: boolean;
  x: number;
  y: number;
  distance: number;
  confidence: number;
}

class AimAssistSystem {
  private profile: AimAssistProfile | null = null;
  private isActive: boolean = false;
  private lastTarget: TargetInfo = {
    found: false,
    x: 0,
    y: 0,
    distance: 0,
    confidence: 0
  };

  setProfile(profile: AimAssistProfile) {
    this.profile = profile;
  }

  async startAimAssist(): Promise<void> {
    try {
      this.isActive = true;
      await ipcRenderer.invoke('start-aim-assist', this.profile);
    } catch (error) {
      console.error('Failed to start aim assist:', error);
    }
  }

  async stopAimAssist(): Promise<void> {
    try {
      this.isActive = false;
      await ipcRenderer.invoke('stop-aim-assist');
    } catch (error) {
      console.error('Failed to stop aim assist:', error);
    }
  }

  async detectTargets(): Promise<TargetInfo[]> {
    try {
      const targets = await ipcRenderer.invoke('detect-targets');
      if (targets && targets.length > 0) {
        this.lastTarget = targets[0];
      }
      return targets || [];
    } catch (error) {
      console.error('Target detection failed:', error);
      return [];
    }
  }

  async moveToTarget(): Promise<boolean> {
    try {
      if (!this.lastTarget.found) return false;
      const result = await ipcRenderer.invoke('move-to-target', this.lastTarget);
      return result;
    } catch (error) {
      console.error('Failed to move to target:', error);
      return false;
    }
  }

  isAimAssistActive(): boolean {
    return this.isActive;
  }

  getLastTarget(): TargetInfo {
    return this.lastTarget;
  }
}

export default new AimAssistSystem();
