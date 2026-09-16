import React from 'react';
import '../styles/components/Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="jm-logo">
          <span className="logo-text">JM</span>
        </div>
        <div className="header-branding">
          <h1 className="app-title">JMGOLD</h1>
          <p className="app-subtitle">ULTIMATE TOOLS</p>
        </div>
      </div>
      
      <div className="header-right">
        <button className="window-btn minimize" title="Minimize">−</button>
        <button className="window-btn maximize" title="Maximize">□</button>
        <button className="window-btn close" title="Close">✕</button>
      </div>
    </header>
  );
};

export default Header;
