import React, { useState } from 'react';
import '../styles/pages/Recoil.css';

const Recoil: React.FC = () => {
  const [baseValue, setBaseValue] = useState(1.0);
  const [verticalControl, setVerticalControl] = useState(1.0);
  const [horizontalControl, setHorizontalControl] = useState(1.0);
  const [smoothness, setSmoothness] = useState(75);
  const [smartDetection, setSmartDetection] = useState(true);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Recoil Control</h1>
        <p>Main control profile and configurable input settings</p>
      </div>

      <div className="recoil-panel">
        <div className="panel-section">
          <h3>Basic Recoil Configuration</h3>
          
          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={smartDetection} onChange={(e) => setSmartDetection(e.target.checked)} />
              <span>Smart Detection Mode</span>
            </label>
          </div>

          <div className="input-group">
            <label className="input-label">Base Value</label>
            <input type="number" value={baseValue} onChange={(e) => setBaseValue(parseFloat(e.target.value))} step="0.1" className="input-field" />
          </div>

          <div className="input-group">
            <label className="input-label">Vertical Control</label>
            <input type="number" value={verticalControl} onChange={(e) => setVerticalControl(parseFloat(e.target.value))} step="0.1" className="input-field" />
          </div>

          <div className="input-group">
            <label className="input-label">Horizontal Control</label>
            <input type="number" value={horizontalControl} onChange={(e) => setHorizontalControl(parseFloat(e.target.value))} step="0.1" className="input-field" />
          </div>

          <div className="slider-group">
            <label className="input-label">Smoothness: {smoothness}%</label>
            <input type="range" value={smoothness} onChange={(e) => setSmoothness(parseInt(e.target.value))} min="0" max="100" className="slider" />
          </div>

          <div className="input-group">
            <label className="input-label">Response</label>
            <select className="input-field">
              <option>Balanced</option>
              <option>Fast</option>
              <option>Slow</option>
              <option>Custom</option>
            </select>
          </div>
        </div>

        <div className="panel-section">
          <h3>Stance Multipliers</h3>
          <div className="multiplier-group">
            <div className="multiplier-item">
              <span className="multiplier-label">Crouch</span>
              <div className="multiplier-controls">
                <span className="multiplier-value">1.1</span>
                <button className="btn-small">+</button>
                <button className="btn-small">−</button>
              </div>
            </div>
            <div className="multiplier-item">
              <span className="multiplier-label">Prone</span>
              <div className="multiplier-controls">
                <span className="multiplier-value">1.1</span>
                <button className="btn-small">+</button>
                <button className="btn-small">−</button>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-section">
          <h3>Hip Fire Profile</h3>
          <select className="input-field">
            <option>Balanced</option>
            <option>Aggressive</option>
            <option>Conservative</option>
          </select>
        </div>

        <div className="panel-section">
          <h3>Scope Profiles</h3>
          <div className="scope-grid">
            {['Red Dot', '2x', '3x', '4x', '6x', '8x'].map((scope) => (
              <div key={scope} className="scope-item">
                <span className="scope-label">{scope}</span>
                <input type="number" defaultValue="1.0" step="0.1" className="scope-input" />
              </div>
            ))}
          </div>
        </div>

        <div className="panel-section">
          <h3>Hotkeys</h3>
          <div className="hotkey-group">
            <div className="hotkey-item">
              <label>Run:</label>
              <button className="hotkey-btn">Click to set...</button>
            </div>
            <div className="hotkey-item">
              <label>Stop:</label>
              <button className="hotkey-btn">Click to set...</button>
            </div>
          </div>
        </div>

        <div className="panel-section">
          <h3>Toggles & Modes</h3>
          <div className="toggle-group">
            <label className="toggle-item">
              <input type="checkbox" defaultChecked />
              <span>Hold Mode</span>
            </label>
            <label className="toggle-item">
              <input type="checkbox" defaultChecked />
              <span>Game Focus Guard</span>
            </label>
            <label className="toggle-item">
              <input type="checkbox" />
              <span>Auto Profile Switch</span>
            </label>
          </div>
          <div className="status-message status-guarded">
            🔒 GUARDED - profile active only inside selected application
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recoil;
