import React from 'react';
import './LocationTabs.css';

interface LocationCardProps {
  name: string;
  img: string;
  onClick?: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, img, onClick }) => {
  return (
    <div
      className="location-big-card"
      style={{ backgroundImage: `url(${img})` }}
      onClick={onClick}
    >
      <div className="location-card-overlay" style={{ justifyContent: 'flex-end', background: 'linear-gradient(0deg, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.01) 100%)' }}>
        <div className="location-card-title" style={{ marginBottom: 0 }}>{name}</div>
      </div>
    </div>
  );
};

export default LocationCard; 