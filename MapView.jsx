import React from 'react';
import '../styles/MapView.css'; // Make sure to import the CSS

const MapView = () => {
  return (
    <div className="mapview-container">
      <div className="mapview-placeholder">
        <h3 className="mapview-title">Map View</h3>
        <p className="mapview-subtext">Google Maps Placeholder</p>
      </div>
    </div>
  );
};

export default MapView;
