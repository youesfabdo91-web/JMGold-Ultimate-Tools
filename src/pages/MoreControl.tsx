import React from 'react';
import '../styles/pages/MoreControl.css';

const MoreControl: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>More Control</h1>
        <p>Advanced control and customization options</p>
      </div>

      <div className="control-grid">
        <div className="control-card">
          <div className="card-header">
            <span className="card-icon">⚡</span>
            <span className="card-title">Quick Profile Switch</span>
          </div>
          <p className="card-description">Switch between profiles instantly</p>
          <button className="btn btn-small">Configure</button>
        </div>

        <div className="control-card">
          <div className="card-header">
            <span className="card-icon">🎮</span>
            <span className="card-title">Hotkey Manager</span>
          </div>
          <p className="card-description">Set custom hotkeys for all features</p>
          <button className="btn btn-small">Configure</button>
        </div>

        <div className="control-card">
          <div className="card-header">
            <span className="card-icon">⌨️</span>
            <span className="card-title">Input Settings</span>
          </div>
          <p className="card-description">Customize input behavior and sensitivity</p>
          <button className="btn btn-small">Configure</button>
        </div>

        <div className="control-card">
          <div className="card-header">
            <span className="card-icon">📋</span>
            <span className="card-title">Profile Manager</span>
          </div>
          <p className="card-description">Create, edit, and manage profiles</p>
          <button className="btn btn-small">Configure</button>
        </div>

        <div className="control-card">
          <div className="card-header">
            <span className="card-icon">⚙️</span>
            <span className="card-title">Advanced Settings</span>
          </div>
          <p className="card-description">Fine-tune system parameters</p>
          <button className="btn btn-small">Configure</button>
        </div>

        <div className="control-card">
          <div className="card-header">
            <span className="card-icon">🛡️</span>
            <span className="card-title">Security Options</span>
          </div>
          <p className="card-description">Anti-cheat protection settings</p>
          <button className="btn btn-small">Configure</button>
        </div>
      </div>
    </div>
  );
};

export default MoreControl;