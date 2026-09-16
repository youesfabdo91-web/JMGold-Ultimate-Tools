import React from 'react';
import '../styles/pages/Settings.css';

const Settings: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Complete application configuration and preferences</p>
      </div>

      <div className="settings-tabs">
        <div className="tab-content">
          <div className="settings-section">
            <h3>General Settings</h3>
            <div className="setting-item">
              <span className="setting-label">Auto-start with GameLoop</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Minimize to system tray</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Check for updates</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h3>Profile Settings</h3>
            <div className="setting-item">
              <span className="setting-label">Auto-load last profile</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Auto-save profiles</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Cloud sync profiles</span>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h3>Security & Anti-Detection</h3>
            <div className="setting-item">
              <span className="setting-label">Enable anti-cheat protection</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Hide process from detection</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Enable memory protection</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <span className="setting-label">Randomize input patterns</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h3>About</h3>
            <div className="about-info">
              <div className="info-row">
                <span className="info-label">Application:</span>
                <span className="info-value">JMGOLD ULTIMATE TOOLS</span>
              </div>
              <div className="info-row">
                <span className="info-label">Version:</span>
                <span className="info-value">v1.2</span>
              </div>
              <div className="info-row">
                <span className="info-label">Edition:</span>
                <span className="info-value">GOLD ULTIMATE</span>
              </div>
              <div className="info-row">
                <span className="info-label">Status:</span>
                <span className="info-value status-active">ACTIVE</span>
              </div>
              <div className="info-row">
                <span className="info-label">License:</span>
                <span className="info-value">Premium</span>
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h3>Danger Zone</h3>
            <div className="danger-buttons">
              <button className="btn btn-warning">Reset All Settings</button>
              <button className="btn btn-warning">Clear Cache</button>
              <button className="btn btn-danger">Uninstall Protection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;