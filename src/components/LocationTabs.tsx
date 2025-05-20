import React, { useState } from 'react';
import { useLocation } from '../context/LocationContext';
import './LocationTabs.css';
import { MaterialIcon } from './MaterialIcon';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const LOCATIONS = [
  {
    name: 'Dunagiri',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    desc: "A spiritual haven in the Himalayas, where legends and serenity meet. Perfect for seekers and nature lovers.",
  },
  {
    name: 'Jageshwar Dham',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    desc: "Ancient stone temples nestled in deodar forests—feel the divine energy and timeless peace.",
  },
  {
    name: 'Shitlakhet',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    desc: "Offbeat, tranquil, and surrounded by apple orchards. Shitlakhet is your escape to slow living.",
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
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLocationClick = (idx: number, name: string) => {
    setSelectedLocationIdx(idx);
    setSelectedCategory('Budgeted');
    navigate(`/search-results?location=${encodeURIComponent(name)}`);
    setDrawerOpen(false);
  };

  return (
    <section className="location-section">
      <h2 className="location-section-title">Explore Destinations</h2>
      <div className="location-section-subtitle">Homestays in Top destinations of Uttarakhand</div>
      {isMobile ? (
        <>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ mb: 2 }} aria-label="Open locations menu">
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <div style={{ width: 240, padding: '1.2rem 0.5rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: 16 }}>Destinations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {LOCATIONS.map((loc, idx) => (
                  <button
                    key={loc.name}
                    style={{
                      background: selectedLocationIdx === idx ? '#1976d2' : '#fff',
                      color: selectedLocationIdx === idx ? '#fff' : '#222',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.9rem 1rem',
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      marginBottom: 6,
                      cursor: 'pointer',
                      boxShadow: selectedLocationIdx === idx ? '0 2px 8px rgba(25,118,210,0.10)' : '0 1px 4px rgba(44,62,80,0.06)',
                      outline: 'none',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onClick={() => handleLocationClick(idx, loc.name)}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </Drawer>
        </>
      ) : (
        <div className="location-tabs-grid">
          {LOCATIONS.map((loc, idx) => {
            return (
              <div
                key={loc.name}
                className={`location-tab-card location-big-card${selectedLocationIdx === idx ? ' selected' : ''}`}
                style={{ backgroundImage: `url(${loc.img})` }}
                onClick={() => handleLocationClick(idx, loc.name)}
              >
                <div className="location-card-overlay">
                  <div className="location-card-title">{loc.name}</div>
                  <div className="location-card-desc">{loc.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default LocationTabs; 