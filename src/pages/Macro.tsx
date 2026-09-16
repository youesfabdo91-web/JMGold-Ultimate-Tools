import React, { useState } from 'react';
import '../styles/pages/Macro.css';

const Macro: React.FC = () => {
  const [profileName, setProfileName] = useState('Custom Macro');
  const [value, setValue] = useState(5.0);
  const [speed, setSpeed] = useState(90);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Advanced Macro</h1>
        <p>Custom input-profile configuration</p>
      </div>

      <div className="macro-container">
        <div className="macro-config">
          <h3>Macro Configuration</h3>
          
          <div className="input-group">
            <label className="input-label">Profile Name</label>
            <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} className="input-field" />
          </div>

          <div className="input-group">
            <label className="input-label">Value</label>
            <input type="number" value={value} onChange={(e) => setValue(parseFloat(e.target.value))} step="0.1" className="input-field" />
          </div>

          <div className="slider-group">
            <label className="input-label">Speed: {speed}%</label>
            <input type="range" value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} min="0" max="100" className="slider" />
          </div>

          <div className="hotkey-group">
            <div className="hotkey-item">
              <label>Run Key:</label>
              <button className="hotkey-btn">Click to set...</button>
            </div>
            <div className="hotkey-item">
              <label>Stop Key:</label>
              <button className="hotkey-btn">Click to set...</button>
            </div>
          </div>

          <div className="toggle-group">
            <label className="toggle-item">
              <input type="checkbox" defaultChecked />
              <span>Hold Mode</span>
            </label>
            <label className="toggle-item">
              <input type="checkbox" />
              <span>Repeat Mode</span>
            </label>
            <label className="toggle-item">
              <input type="checkbox" />
              <span>Stop with Run Key</span>
            </label>
          </div>
        </div>

        <div className="timeline-section">
          <h3>Macro Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-label">ACTION 01</span>
              <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-label">WAIT</span>
              <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-label">ACTION 02</span>
              <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-label">WAIT</span>
              <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item last">
              <span className="timeline-label">ACTION 03</span>
            </div>
          </div>
        </div>

        <div className="buttons-section">
          <button className="btn btn-primary">Create Profile</button>
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-secondary">Save</button>
          <button className="btn btn-secondary">Reset</button>
        </div>

        <div className="status-section">
          <div className="status-card">
            <span className="status-label">MACRO STATUS</span>
            <span className="status-value">READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macro;