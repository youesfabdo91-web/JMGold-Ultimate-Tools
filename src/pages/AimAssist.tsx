import React, { useState } from 'react';
import '../styles/pages/AimAssist.css';

const AimAssist: React.FC = () => {
  const [sensitivity, setSensitivity] = useState(50);
  const [response, setResponse] = useState(65);
  const [assistStatus, setAssistStatus] = useState(true);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Aim Assist</h1>
        <p>Configurable aiming-assistance profile (Conceptual UI)</p>
      </div>

      <div className="aim-assist-container">
        <div className="config-section">
          <h3>Aim Configuration</h3>
          
          <div className="input-group">
            <label className="input-label">Aim Profile</label>
            <select className="input-field">
              <option>Standard</option>
              <option>Enhanced</option>
              <option>Conservative</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Tracking Profile</label>
            <select className="input-field">
              <option>Balanced</option>
              <option>Aggressive</option>
              <option>Smooth</option>
            </select>
          </div>

          <div className="slider-group">
            <label className="input-label">Sensitivity: {sensitivity}</label>
            <input type="range" value={sensitivity} onChange={(e) => setSensitivity(parseInt(e.target.value))} min="0" max="100" className="slider" />
          </div>

          <div className="slider-group">
            <label className="input-label">Response: {response}</label>
            <input type="range" value={response} onChange={(e) => setResponse(parseInt(e.target.value))} min="0" max="100" className="slider" />
          </div>

          <div className="input-group">
            <label className="input-label">Target Preference</label>
            <select className="input-field">
              <option>Center</option>
              <option>Head</option>
              <option>Chest</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Activation Mode</label>
            <select className="input-field">
              <option>Hold</option>
              <option>Toggle</option>
              <option>Always On</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Scope Profile</label>
            <select className="input-field">
              <option>Current Scope</option>
              <option>Red Dot</option>
              <option>2x Scope</option>
              <option>4x Scope</option>
            </select>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={assistStatus} onChange={(e) => setAssistStatus(e.target.checked)} />
              <span>Assist Status</span>
            </label>
          </div>

          <div className="hotkey-group">
            <label>Profile Hotkey</label>
            <button className="hotkey-btn">Click to set...</button>
          </div>
        </div>

        <div className="profiles-grid">
          <div className="profile-preset active">
            <div className="preset-name">STANDARD</div>
            <div className="preset-desc">BALANCED</div>
            <div className="preset-indicator"></div>
          </div>
          <div className="profile-preset">
            <div className="preset-name">FAST</div>
            <div className="preset-desc">RESPONSIVE</div>
            <div className="preset-indicator"></div>
          </div>
          <div className="profile-preset">
            <div className="preset-name">PRECISION</div>
            <div className="preset-desc">CONTROLLED</div>
            <div className="preset-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimAssist;