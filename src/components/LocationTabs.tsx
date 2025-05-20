import React, { useState } from 'react';
import { useLocation } from '../context/LocationContext';
import './LocationTabs.css';
import { MaterialIcon } from './MaterialIcon';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationCard from './LocationCard';

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
    <section id="explore-destinations-section" className="location-section">
      <h2 className="location-section-title">Explore Destinations</h2>
      <div className="location-section-subtitle">Homestays in Top destinations of Uttarakhand</div>
      <div className="location-tabs-grid">
        {LOCATIONS.map((loc, idx) => (
          <LocationCard
            key={loc.name}
            name={loc.name}
            img={loc.img}
            onClick={() => handleLocationClick(idx, loc.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default LocationTabs; 