import React, { useState } from 'react';
import '../styles/pages/Boost.css';

const Boost: React.FC = () => {
  const [performanceMode, setPerformanceMode] = useState(true);
  const [lowLatencyProfile, setLowLatencyProfile] = useState(true);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Boost</h1>
        <p>Performance and interface optimization dashboard</p>
      </div>

      <div className="boost-grid">
        <div className="boost-card">
          <h3>Performance Mode</h3>
          <label className="toggle-switch">
            <input type="checkbox" checked={performanceMode} onChange={(e) => setPerformanceMode(e.target.checked)} />
            <span className="toggle-slider"></span>
          </label>
          <p className="card-description">Optimize system for peak performance</p>
          <div className="status-indicator active">ACTIVE</div>
        </div>

        <div className="boost-card">
          <h3>Low Latency Profile</h3>
          <label className="toggle-switch">
            <input type="checkbox" checked={lowLatencyProfile} onChange={(e) => setLowLatencyProfile(e.target.checked)} />
            <span className="toggle-slider"></span>
          </label>
          <p className="card-description">Reduce input latency to minimum</p>
          <div className="status-indicator active">ACTIVE</div>
        </div>

        <div className="boost-card">
          <h3>Resource Monitor</h3>
          <div className="resource-info">
            <div className="resource-item">
              <span className="resource-label">CPU:</span>
              <span className="resource-value">45%</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">RAM:</span>
              <span className="resource-value">62%</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">Disk:</span>
              <span className="resource-value">28%</span>
            </div>
          </div>
        </div>

        <div className="boost-card">
          <h3>Session Status</h3>
          <div className="session-info">
            <div className="session-item">
              <span className="session-label">Uptime:</span>
              <span className="session-value">2h 15m</span>
            </div>
            <div className="session-item">
              <span className="session-label">Actions:</span>
              <span className="session-value">1,234</span>
            </div>
          </div>
        </div>

        <div className="boost-card full-width">
          <h3>Optimization Profile</h3>
          <div className="profile-options">
            <button className="profile-btn">Ultra</button>
            <button className="profile-btn active">Balanced</button>
            <button className="profile-btn">Conservative</button>
          </div>
          <p className="card-description">Select optimization level</p>
        </div>
      </div>
    </div>
  );
};

export default Boost;