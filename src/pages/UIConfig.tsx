import React, { useState } from 'react';
import '../styles/pages/UIConfig.css';

const UIConfig: React.FC = () => {
  const [interfaceScale, setInterfaceScale] = useState(100);
  const [panelTransparency, setPanelTransparency] = useState(85);
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [statusIndicators, setStatusIndicators] = useState(true);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>UI Configuration</h1>
        <p>Customize interface appearance and behavior</p>
      </div>

      <div className="ui-config-container">
        <div className="config-section">
          <h3>Appearance Settings</h3>

          <div className="input-group">
            <label className="input-label">Theme</label>
            <select className="input-field">
              <option>Dark Gold</option>
              <option>Light Gold</option>
              <option>Pure Black</option>
              <option>Custom</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Accent Color</label>
            <select className="input-field">
              <option>Gold</option>
              <option>Silver</option>
              <option>Cyan</option>
              <option>Purple</option>
            </select>
          </div>

          <div className="slider-group">
            <label className="input-label">Interface Scale: {interfaceScale}%</label>
            <input
              type="range"
              value={interfaceScale}
              onChange={(e) => setInterfaceScale(parseInt(e.target.value))}
              min="80"
              max="120"
              className="slider"
            />
          </div>

          <div className="slider-group">
            <label className="input-label">Panel Transparency: {panelTransparency}%</label>
            <input
              type="range"
              value={panelTransparency}
              onChange={(e) => setPanelTransparency(parseInt(e.target.value))}
              min="50"
              max="100"
              className="slider"
            />
          </div>
        </div>

        <div className="config-section">
          <h3>Behavior Settings</h3>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={animationEnabled} onChange={(e) => setAnimationEnabled(e.target.checked)} />
              <span>Enable Animations</span>
            </label>
            <p className="control-description">Smooth transitions and effects</p>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={compactMode} onChange={(e) => setCompactMode(e.target.checked)} />
              <span>Compact Mode</span>
            </label>
            <p className="control-description">Minimize space usage</p>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={statusIndicators} onChange={(e) => setStatusIndicators(e.target.checked)} />
              <span>Show Status Indicators</span>
            </label>
            <p className="control-description">Display status dots and icons</p>
          </div>
        </div>

        <div className="config-section">
          <h3>Advanced Options</h3>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" defaultChecked />
              <span>Auto-Save Settings</span>
            </label>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" />
              <span>Enable Developer Mode</span>
            </label>
          </div>

          <div className="button-group">
            <button className="btn btn-secondary">Reset UI</button>
            <button className="btn btn-secondary">Export Settings</button>
            <button className="btn btn-secondary">Import Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIConfig;