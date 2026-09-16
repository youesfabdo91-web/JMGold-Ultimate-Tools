import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Recoil from './pages/Recoil';
import CloseRange from './pages/CloseRange';
import AimAssist from './pages/AimAssist';
import Macro from './pages/Macro';
import WeaponLibrary from './pages/WeaponLibrary';
import Overlay from './pages/Overlay';
import EmulatorHub from './pages/EmulatorHub';
import MoreControl from './pages/MoreControl';
import Boost from './pages/Boost';
import UIConfig from './pages/UIConfig';
import Settings from './pages/Settings';
import StatusBar from './components/StatusBar';

type PageType = 'dashboard' | 'recoil' | 'close-range' | 'aim-assist' | 'macro' | 'weapon-library' | 'overlay' | 'emulator-hub' | 'more-control' | 'boost' | 'ui-config' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [profile, setProfile] = useState('P1');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'recoil': return <Recoil />;
      case 'close-range': return <CloseRange />;
      case 'aim-assist': return <AimAssist />;
      case 'macro': return <Macro />;
      case 'weapon-library': return <WeaponLibrary />;
      case 'overlay': return <Overlay />;
      case 'emulator-hub': return <EmulatorHub />;
      case 'more-control': return <MoreControl />;
      case 'boost': return <Boost />;
      case 'ui-config': return <UIConfig />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
      <StatusBar profile={profile} />
    </div>
  );
}

export default App;
