// Recoil Control Engine
import { ipcRenderer } from 'electron';

interface RecoilProfile {
  baseValue: number;
  verticalControl: number;
  horizontalControl: number;
  smoothness: number;
  response: string;
  hipfireProfile: string;
  scopeProfiles: Record<string, number>;
  crouchMultiplier: number;
  proneMultiplier: number;
}

interface RecoilState {
  isActive: boolean;
  isFiring: boolean;
  currentRecoil: { x: number; y: number };
  appliedCorrection: { x: number; y: number };
}

class RecoilControlEngine {
  private profile: RecoilProfile | null = null;
  private state: RecoilState = {
    isActive: false,
    isFiring: false,
    currentRecoil: { x: 0, y: 0 },
    appliedCorrection: { x: 0, y: 0 }
  };

  setProfile(profile: RecoilProfile) {
    this.profile = profile;
  }

  async startRecoilControl(): Promise<void> {
    try {
      this.state.isActive = true;
      await ipcRenderer.invoke('start-recoil-control', this.profile);
    } catch (error) {
      console.error('Failed to start recoil control:', error);
    }
  }

  async stopRecoilControl(): Promise<void> {
    try {
      this.state.isActive = false;
      await ipcRenderer.invoke('stop-recoil-control');
    } catch (error) {
      console.error('Failed to stop recoil control:', error);
    }
  }

  async applyRecoilCorrection(mouseX: number, mouseY: number): Promise<void> {
    if (!this.profile) return;

    try {
      const correction = this.calculateCorrection(mouseX, mouseY);
      await ipcRenderer.invoke('apply-recoil-correction', correction);
      this.state.appliedCorrection = correction;
    } catch (error) {
      console.error('Failed to apply recoil correction:', error);
    }
  }

  private calculateCorrection(mouseX: number, mouseY: number): { x: number; y: number } {
    if (!this.profile) return { x: 0, y: 0 };

    return {
      x: mouseX * this.profile.horizontalControl * (this.profile.smoothness / 100),
      y: mouseY * this.profile.verticalControl * (this.profile.smoothness / 100)
    };
  }

  getState(): RecoilState {
    return this.state;
  }
}

export default new RecoilControlEngine();
