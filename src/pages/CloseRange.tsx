import React, { useState } from 'react';
import '../styles/pages/CloseRange.css';

const CloseRange: React.FC = () => {
  const [responseSpeed, setResponseSpeed] = useState(75);
  const [hipFire, setHipFire] = useState(true);
  const [quickSwitch, setQuickSwitch] = useState(true);
  const [dynamicSensitivity, setDynamicSensitivity] = useState(false);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Close Range</h1>
        <p>Short-distance combat profile and fast-response configuration</p>
      </div>

      <div className="close-range-container">
        <div className="config-panel">
          <h3>Combat Configuration</h3>
          
          <div className="input-group">
            <label className="input-label">Close Range Profile</label>
            <select className="input-field">
              <option>Balanced</option>
              <option>Aggressive</option>
              <option>Defensive</option>
              <option>Custom</option>
            </select>
          </div>

          <div className="slider-group">
            <label className="input-label">Response Speed: {responseSpeed}ms</label>
            <input type="range" value={responseSpeed} onChange={(e) => setResponseSpeed(parseInt(e.target.value))} min="0" max="200" className="slider" />
          </div>

          <div className="input-group">
            <label className="input-label">Tracking Profile</label>
            <select className="input-field">
              <option>Standard</option>
              <option>Enhanced</option>
              <option>Precision</option>
            </select>
          </div>

          <div className="toggle-group">
            <label className="toggle-item">
              <input type="checkbox" checked={hipFire} onChange={(e) => setHipFire(e.target.checked)} />
              <span>Hip Fire</span>
            </label>
            <label className="toggle-item">
              <input type="checkbox" checked={quickSwitch} onChange={(e) => setQuickSwitch(e.target.checked)} />
              <span>Quick Switch</span>
            </label>
            <label className="toggle-item">
              <input type="checkbox" checked={dynamicSensitivity} onChange={(e) => setDynamicSensitivity(e.target.checked)} />
              <span>Dynamic Sensitivity</span>
            </label>
          </div>

          <div className="input-group">
            <label className="input-label">Movement Profile</label>
            <select className="input-field">
              <option>Default</option>
              <option>Fast</option>
              <option>Controlled</option>
            </select>
          </div>

          <div className="hotkey-group">
            <label>Close Range Hotkey</label>
            <button className="hotkey-btn">Click to set...</button>
          </div>
        </div>

        <div className="profiles-section">
          <h3>Close Range Profiles</h3>
          <div className="profiles-grid">
            <div className="profile-card active">
              <div className="profile-name">CLOSE RANGE I</div>
              <div className="profile-type">Balanced</div>
              <div className="profile-controls">
                <button className="btn-icon" title="Edit">✎</button>
                <button className="btn-icon" title="Enable">✓</button>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-name">CLOSE RANGE II</div>
              <div className="profile-type">Fast Response</div>
              <div className="profile-controls">
                <button className="btn-icon" title="Edit">✎</button>
                <button className="btn-icon" title="Enable">✓</button>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-name">CLOSE RANGE III</div>
              <div className="profile-type">Custom</div>
              <div className="profile-controls">
                <button className="btn-icon" title="Edit">✎</button>
                <button className="btn-icon" title="Enable">✓</button>
              </div>
            </div>
          </div>
          <div className="active-profile-indicator">
            ⚡ ACTIVE PROFILE: CLOSE RANGE II
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseRange;