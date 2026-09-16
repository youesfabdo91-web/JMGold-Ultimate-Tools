import React, { useState } from 'react';
import '../styles/pages/WeaponLibrary.css';

const weaponCategories = {
  'ASSAULT RIFLES': ['M416', 'AKM', 'SCAR-L', 'AUG', 'ACE32'],
  'SMGs': ['UMP45', 'Vector', 'MP5K'],
  'LMGs': ['DP-28', 'MG3'],
  'SNIPERS': ['Kar98k', 'M24', 'AWM'],
  'DMRs': ['SKS', 'SLR'],
  'SHOTGUNS': ['S1897', 'S12K'],
  'PISTOLS': ['P1911', 'P92']
};

const WeaponLibrary: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState('M416');
  const [selectedCategory, setSelectedCategory] = useState('ASSAULT RIFLES');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Weapon Library</h1>
        <p>Individual configuration profiles for each weapon</p>
      </div>

      <div className="weapon-library-container">
        <div className="categories-section">
          <h3>Weapon Categories</h3>
          <div className="categories-grid">
            {Object.keys(weaponCategories).map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="weapons-section">
          <h3>{selectedCategory}</h3>
          <div className="weapons-grid">
            {weaponCategories[selectedCategory as keyof typeof weaponCategories].map((weapon) => (
              <div
                key={weapon}
                className={`weapon-card ${selectedWeapon === weapon ? 'active' : ''}`}
                onClick={() => setSelectedWeapon(weapon)}
              >
                <div className="weapon-name">{weapon}</div>
                <div className="weapon-status">Profile Ready</div>
                <div className="weapon-controls">
                  <button className="btn-icon" title="Edit">✎</button>
                  <button className="btn-icon" title="Load">→</button>
                  <button className="btn-icon" title="Favorite">★</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="weapon-details">
          <h3>Selected Weapon: {selectedWeapon}</h3>
          <div className="details-grid">
            <div className="detail-card">
              <span className="detail-label">PROFILE:</span>
              <span className="detail-value">{selectedWeapon} P1</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">BASE VALUE:</span>
              <span className="detail-value">1.0</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">SCOPE PROFILE:</span>
              <span className="detail-value">Balanced</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">STANCE PROFILE:</span>
              <span className="detail-value">Default</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">CLOSE RANGE:</span>
              <span className="detail-value">Standard</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">LAST UPDATED:</span>
              <span className="detail-value">Today</span>
            </div>
          </div>
          <button className="btn btn-primary">Create New Profile</button>
        </div>
      </div>
    </div>
  );
};

export default WeaponLibrary;