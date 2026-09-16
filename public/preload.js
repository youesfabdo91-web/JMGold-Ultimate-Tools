const { contextBridge, ipcMain } = require('electron');
const WindowsApi = require('./windows-api');
const MemoryEngine = require('./memory-engine');

// Expose safe APIs to renderer
contextBridge.exposeInMainWorld('gameLoopAPI', {
  detectGameLoop: () => ipcMain.invoke('detect-gameloop'),
  isGameLoopFocused: () => ipcMain.invoke('is-gameloop-focused'),
  readMemory: (address, size, type) => ipcMain.invoke('read-memory', { address, size, type }),
  writeMemory: (address, value, type) => ipcMain.invoke('write-memory', { address, value, type }),
  startRecoilControl: (profile) => ipcMain.invoke('start-recoil-control', profile),
  stopRecoilControl: () => ipcMain.invoke('stop-recoil-control'),
  applyRecoilCorrection: (correction) => ipcMain.invoke('apply-recoil-correction', correction),
  startAimAssist: (profile) => ipcMain.invoke('start-aim-assist', profile),
  stopAimAssist: () => ipcMain.invoke('stop-aim-assist'),
  detectTargets: () => ipcMain.invoke('detect-targets'),
  mouseMoveRelative: (x, y) => ipcMain.invoke('mouse-move', { x, y }),
  mouseClick: (button) => ipcMain.invoke('mouse-click', { button }),
  keyDown: (key) => ipcMain.invoke('key-down', { key }),
  keyUp: (key) => ipcMain.invoke('key-up', { key }),
  initializeAntiDetection: (config) => ipcMain.invoke('initialize-anti-detection', config),
  hideProcess: () => ipcMain.invoke('hide-process'),
  randomizeMovement: (baseX, baseY) => ipcMain.invoke('randomize-movement', { baseX, baseY }),
  executeMacro: (macro) => ipcMain.invoke('execute-macro', macro),
  stopMacro: () => ipcMain.invoke('stop-macro'),
  initializeOverlay: (config) => ipcMain.invoke('initialize-overlay', config),
  updateOverlay: (data) => ipcMain.invoke('update-overlay', data),
  showOverlay: () => ipcMain.invoke('show-overlay'),
  hideOverlay: () => ipcMain.invoke('hide-overlay')
});
