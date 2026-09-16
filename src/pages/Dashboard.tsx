import React from 'react';
import '../styles/pages/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>System overview and active profiles</p>
      </div>

      <div className="status-cards-grid">
        <div className="status-card-large">
          <div className="card-label">PROFILE</div>
          <div className="card-value">P1</div>
          <div className="card-description">Active Profile</div>
          <div className="card-indicator"></div>
        </div>

        <div className="status-card-large">
          <div className="card-label">RECOIL</div>
          <div className="card-value">READY</div>
          <div className="card-description">Control Profile</div>
          <div className="card-indicator ready"></div>
        </div>

        <div className="status-card-large">
          <div className="card-label">MACRO</div>
          <div className="card-value">READY</div>
          <div className="card-description">Input Profile</div>
          <div className="card-indicator ready"></div>
        </div>

        <div className="status-card-large">
          <div className="card-label">OVERLAY</div>
          <div className="card-value">ACTIVE</div>
          <div className="card-description">Display System</div>
          <div className="card-indicator active"></div>
        </div>

        <div className="status-card-large">
          <div className="card-label">CLOSE RANGE</div>
          <div className="card-value">READY</div>
          <div className="card-description">Combat Profile</div>
          <div className="card-indicator ready"></div>
        </div>

        <div className="status-card-large">
          <div className="card-label">WEAPON</div>
          <div className="card-value">M416</div>
          <div className="card-description">Current Profile</div>
          <div className="card-indicator"></div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Quick Profile Selection</h2>
        <div className="profile-selector">
          <select className="profile-dropdown">
            <option>P1 - Balanced</option>
            <option>P2 - Close Range</option>
            <option>P3 - Precision</option>
            <option>P4 - Custom</option>
          </select>
          <button className="btn btn-primary">Save Profile</button>
          <button className="btn btn-secondary">Load Profile</button>
          <button className="btn btn-secondary">Duplicate</button>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>System Status</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Game Environment:</span>
            <span className="info-value status-green">Detected</span>
          </div>
          <div className="info-item">
            <span className="info-label">Application Focus:</span>
            <span className="info-value status-green">Active</span>
          </div>
          <div className="info-item">
            <span className="info-label">Connection Status:</span>
            <span className="info-value status-green">Connected</span>
          </div>
          <div className="info-item">
            <span className="info-label">Last Sync:</span>
            <span className="info-value">Just now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
