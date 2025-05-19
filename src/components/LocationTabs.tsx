import React from 'react';
import { useLocation } from '../context/LocationContext';
import './LocationTabs.css';
import { MaterialIcon } from './MaterialIcon';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LOCATIONS = [
  {
    name: 'Dunagiri',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Jageshwar Dham',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Shitlakhet',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Kausani Estate',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sunargaon Kanda',
    img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Katarmal',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Dhanachuli, Mukteshwar',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Pangot, Nainital',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Majhkali, Almora',
    img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Kasar Devi, Almora',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Chaukori, Pithoragarh',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lohaghat, Champawat',
    img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Abbott Mount, Champawat',
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Binsar, Almora',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Didihat, Pithoragarh',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Berinag, Pithoragarh',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

const LocationTabs = () => {
  const { selectedLocationIdx, setSelectedLocationIdx, setSelectedCategory } = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const VISIBLE_COUNT = isMobile ? 3 : 7;
  const [startIdx, setStartIdx] = React.useState(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(0, prev - VISIBLE_COUNT));
  };
  const handleNext = () => {
    setStartIdx((prev) => Math.min(LOCATIONS.length - VISIBLE_COUNT, prev + VISIBLE_COUNT));
  };

  const visibleLocations = LOCATIONS.slice(startIdx, startIdx + VISIBLE_COUNT);

  return (
    <section className="location-section">
      <h2 className="location-section-title">Explore Destinations</h2>
      <div className="location-section-subtitle">Homestays in Top destinations of Uttarakhand</div>
      <div className="location-tabs-carousel">
        <button
          className="carousel-arrow left"
          onClick={handlePrev}
          disabled={startIdx === 0}
          aria-label="Scroll left"
        >
          <MaterialIcon icon="chevron_left" />
        </button>
        <div className="location-tabs-bar">
          {visibleLocations.map((loc, idx) => {
            const globalIdx = startIdx + idx;
            return (
              <div
                key={loc.name}
                className={`location-tab-card${selectedLocationIdx === globalIdx ? ' selected' : ''}`}
                onClick={() => {
                  setSelectedLocationIdx(globalIdx);
                  setSelectedCategory('Budgeted');
                  navigate(`/search-results?location=${encodeURIComponent(loc.name)}`);
                }}
              >
                <img src={loc.img} alt={loc.name} className="location-tab-img" />
                <div className="location-tab-name">{loc.name}</div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-arrow right"
          onClick={handleNext}
          disabled={startIdx + VISIBLE_COUNT >= LOCATIONS.length}
          aria-label="Scroll right"
        >
          <MaterialIcon icon="chevron_right" />
        </button>
      </div>
    </section>
  );
};

export default LocationTabs; 