import React, { useState } from 'react';
import '../styles/pages/Overlay.css';

const Overlay: React.FC = () => {
  const [overlayEnabled, setOverlayEnabled] = useState(true);
  const [showProfile, setShowProfile] = useState(true);
  const [showStatus, setShowStatus] = useState(true);
  const [showWeapon, setShowWeapon] = useState(true);
  const [showScope, setShowScope] = useState(true);
  const [enableDotCrosshair, setEnableDotCrosshair] = useState(true);
  const [autoHideScoping, setAutoHideScoping] = useState(true);
  const [crosshairSize, setCrosshairSize] = useState(50);
  const [crosshairOpacity, setCrosshairOpacity] = useState(80);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Overlay & Detection</h1>
        <p>Visual status and interface display controls</p>
      </div>

      <div className="overlay-container">
        <div className="overlay-config">
          <h3>Overlay Configuration</h3>
          
          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={overlayEnabled} onChange={(e) => setOverlayEnabled(e.target.checked)} />
              <span>Enable Overlay</span>
            </label>
          </div>

          <div className="input-group">
            <label className="input-label">Overlay Style</label>
            <select className="input-field">
              <option>Badge</option>
              <option>Minimal</option>
              <option>Detailed</option>
            </select>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" defaultChecked />
              <span>Lock Overlay Position</span>
            </label>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={showProfile} onChange={(e) => setShowProfile(e.target.checked)} />
              <span>Show Profile</span>
            </label>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={showStatus} onChange={(e) => setShowStatus(e.target.checked)} />
              <span>Show Status</span>
            </label>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={showWeapon} onChange={(e) => setShowWeapon(e.target.checked)} />
              <span>Show Current Weapon</span>
            </label>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={showScope} onChange={(e) => setShowScope(e.target.checked)} />
              <span>Show Scope</span>
            </label>
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={enableDotCrosshair} onChange={(e) => setEnableDotCrosshair(e.target.checked)} />
              <span>Enable Dot Crosshair</span>
            </label>
          </div>

          <div className="input-group">
            <label className="input-label">Crosshair Style</label>
            <select className="input-field">
              <option>Dot</option>
              <option>Cross</option>
              <option>Circle</option>
              <option>Triangle</option>
            </select>
          </div>

          <div className="slider-group">
            <label className="input-label">Crosshair Size: {crosshairSize}px</label>
            <input type="range" value={crosshairSize} onChange={(e) => setCrosshairSize(parseInt(e.target.value))} min="10" max="100" className="slider" />
          </div>

          <div className="slider-group">
            <label className="input-label">Crosshair Opacity: {crosshairOpacity}%</label>
            <input type="range" value={crosshairOpacity} onChange={(e) => setCrosshairOpacity(parseInt(e.target.value))} min="0" max="100" className="slider" />
          </div>

          <div className="control-group">
            <label className="control-label">
              <input type="checkbox" checked={autoHideScoping} onChange={(e) => setAutoHideScoping(e.target.checked)} />
              <span>Auto Hide When Scoping</span>
            </label>
          </div>

          <div className="input-group">
            <label className="input-label">Overlay Position</label>
            <select className="input-field">
              <option>Top Right</option>
              <option>Top Left</option>
              <option>Bottom Right</option>
              <option>Bottom Left</option>
              <option>Center</option>
            </select>
          </div>

          <button className="btn btn-primary">Control Sync Keys</button>
        </div>

        <div className="overlay-preview">
          <h3>Live Preview</h3>
          <div className="preview-window">
            <div className="preview-content">
              <div className="overlay-badge">
                <div className="badge-item">JMGOLD</div>
                <div className="badge-item">PROFILE: P1</div>
                <div className="badge-item">WEAPON: M416</div>
                <div className="badge-item">STATUS: READY</div>
              </div>
              <div className="crosshair-preview" style={{
                width: crosshairSize,
                height: crosshairSize,
                opacity: crosshairOpacity / 100
              }}>
                •
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;