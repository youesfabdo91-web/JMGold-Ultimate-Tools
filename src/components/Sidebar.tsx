import React from 'react';
import '../styles/components/Sidebar.css';

type PageType = 'dashboard' | 'recoil' | 'close-range' | 'aim-assist' | 'macro' | 'weapon-library' | 'overlay' | 'emulator-hub' | 'more-control' | 'boost' | 'ui-config' | 'settings';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'recoil', label: 'Recoil', icon: '🎯' },
  { id: 'close-range', label: 'Close Range', icon: '⚡' },
  { id: 'aim-assist', label: 'Aim Assist', icon: '🎲' },
  { id: 'macro', label: 'Macro', icon: '⚙️' },
  { id: 'weapon-library', label: 'Weapon Library', icon: '🔫' },
  { id: 'overlay', label: 'Overlay', icon: '👁️' },
  { id: 'emulator-hub', label: 'Emulator Hub', icon: '📱' },
  { id: 'more-control', label: 'More Control', icon: '🎮' },
  { id: 'boost', label: 'Boost', icon: '⚡' },
  { id: 'ui-config', label: 'UI Config', icon: '🎨' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onPageChange(item.id as PageType)}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="status-card">
          <div className="status-dot"></div>
          <div className="status-info">
            <p className="status-edition">GOLD ULTIMATE</p>
            <p className="status-label">Complete Edition</p>
            <p className="status-version">v1.2</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
