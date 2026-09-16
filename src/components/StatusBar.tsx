import React from 'react';
import '../styles/components/StatusBar.css';

interface StatusBarProps {
  profile: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ profile }) => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <footer className="status-bar">
      <div className="status-left">
        <p className="status-brand">JMGOLD</p>
        <p className="status-label-text">Ultimate Tools</p>
      </div>
      
      <div className="status-center">
        <span className="status-item">Profile: <strong>{profile}</strong></span>
        <span className="status-divider">•</span>
        <span className="status-item">Environment: <strong>Active</strong></span>
        <span className="status-divider">•</span>
        <span className="status-item"><strong>{time}</strong></span>
      </div>
      
      <div className="status-right">
        <span className="status-item">Status: <strong style={{color: '#00ff00'}}>READY</strong></span>
        <span className="status-divider">•</span>
        <span className="status-item"><strong>v1.2</strong></span>
      </div>
    </footer>
  );
};

export default StatusBar;
