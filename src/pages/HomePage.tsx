import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, CircularProgress } from '@mui/material';
import { useLocation } from '../context/LocationContext';
import { LOCATIONS, LOCATION_TAB_CONTENT } from '../data/locations';
import { useNavigate, useLocation as useRouterLocation } from 'react-router-dom';
import IndiaMap from '@react-map/india';

const LOCATION_TABS = [
  'Overview',
  'How to Reach',
  'Things to Do',
  'Travel Tips',
  'Connectivity & Internet',
  'Travel Stories / Experiences',
];

const INDIA_STATES = [
  { id: 'UP', name: 'uttar-pradesh' },
  { id: 'UK', name: 'uttarakhand' },
  { id: 'MH', name: 'maharashtra' },
  { id: 'GJ', name: 'gujarat' },
  { id: 'RJ', name: 'rajasthan' },
  { id: 'MP', name: 'madhya-pradesh' },
  { id: 'TN', name: 'tamil-nadu' },
  { id: 'KA', name: 'karnataka' },
  { id: 'WB', name: 'west-bengal' },
  { id: 'BR', name: 'bihar' },
  { id: 'PB', name: 'punjab' },
  { id: 'HR', name: 'haryana' },
  { id: 'DL', name: 'delhi' },
  { id: 'JK', name: 'jammu-kashmir' },
  { id: 'HP', name: 'himachal-pradesh' },
  { id: 'OR', name: 'odisha' },
  { id: 'AP', name: 'andhra-pradesh' },
  { id: 'KL', name: 'kerala' },
  { id: 'AS', name: 'assam' },
  { id: 'CH', name: 'chhattisgarh' },
  { id: 'JH', name: 'jharkhand' },
  { id: 'TR', name: 'tripura' },
  { id: 'GA', name: 'goa' },
  { id: 'MN', name: 'manipur' },
  { id: 'ML', name: 'meghalaya' },
  { id: 'MZ', name: 'mizoram' },
  { id: 'NL', name: 'nagaland' },
  { id: 'SK', name: 'sikkim' },
  { id: 'AR', name: 'arunachal-pradesh' },
  { id: 'TG', name: 'telangana' },
  { id: 'AN', name: 'andaman-nicobar' },
  { id: 'LD', name: 'lakshadweep' },
  { id: 'PY', name: 'puducherry' },
  { id: 'DN', name: 'daman-diu' },
  { id: 'DD', name: 'dadra-nagar-haveli' },
];

const statePaths = {
  UK: 'M 200 100 L 220 120 L 210 140 L 190 130 Z', // Uttarakhand (dummy path)
  UP: 'M 220 120 L 260 120 L 250 160 L 210 140 Z', // Uttar Pradesh (dummy path)
  // ... add more state paths here for demo or use a real SVG map
};

const HomePage: React.FC = () => {
  const [selectedLocTab, setSelectedLocTab] = useState('Overview');
  const { selectedLocationIdx, selectedCategory, setSelectedCategory } = useLocation();
  const location = LOCATIONS[selectedLocationIdx];
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();
  const [hoveredState, setHoveredState] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (routerLocation.state && routerLocation.state.scrollToDestinations) {
      const section = document.getElementById('explore-destinations-section');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
      window.history.replaceState({}, document.title);
    }
    if (routerLocation.state && routerLocation.state.scrollToHero) {
      const hero = document.getElementById('hero-section');
      if (hero) {
        setTimeout(() => {
          hero.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
      window.history.replaceState({}, document.title);
    }
    if (routerLocation.state && routerLocation.state.scrollToAbout) {
      const about = document.getElementById('about-us-section');
      if (about) {
        setTimeout(() => {
          about.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
      window.history.replaceState({}, document.title);
    }
  }, [routerLocation]);

  if (!location) {
    return <Typography sx={{ p: 4 }}>No location data available.</Typography>;
  }
  const locTabData =
    LOCATION_TAB_CONTENT[location.name] && LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      ? LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      : null;

  return (
    <>
      {/* Hero Image Section removed for relocation to Layout */}
      {/* Selected Location Name for Mobile */}
      <Box sx={{ display: { xs: 'block', sm: 'none' }, textAlign: 'center', mt: 2, mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.18rem', letterSpacing: 0.5 }}>
          {location.name}
        </Typography>
      </Box>
      {/* About Us Section - Redesigned */}
      <Box
        id="about-us-section"
        sx={{
          bgcolor: '#f6f8fa',
          borderRadius: 3,
          boxShadow: 1,
          p: { xs: 2, sm: 4 },
          mt: 4,
          mb: 2,
          maxWidth: 1100,
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 4 }}>
          About Us
        </Typography>
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
            Explore India
          </Typography>
          <Box sx={{ width: 400, maxWidth: '98vw', mb: 2 }}>
            <svg viewBox="0 0 400 400" width="100%" height="auto">
              {/* Uttarakhand (UK) - dummy path */}
              <path
                id="uttarakhand"
                d="M 200 100 L 220 120 L 210 140 L 190 130 Z"
                fill={hoveredState === 'uttarakhand' ? '#1976d2' : '#b0bec5'}
                stroke="#333"
                strokeWidth={1.5}
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                onMouseEnter={() => setHoveredState('uttarakhand')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => navigate('/state/uttarakhand')}
              />
              {/* Uttar Pradesh (UP) - dummy path */}
              <path
                id="uttar-pradesh"
                d="M 220 120 L 260 120 L 250 160 L 210 140 Z"
                fill={hoveredState === 'uttar-pradesh' ? '#1976d2' : '#b0bec5'}
                stroke="#333"
                strokeWidth={1.5}
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                onMouseEnter={() => setHoveredState('uttar-pradesh')}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => navigate('/state/uttar-pradesh')}
              />
              {/* Add more states here as needed */}
            </svg>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Hover over a state to highlight. Click to explore that state.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: { xs: 4, md: 8 },
            mb: 2,
          }}
        >
          {/* Owners Column */}
          <Box sx={{ flex: 1, minWidth: 260, maxWidth: 400, mx: 'auto' }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
              {/* SVG or image illustration for Owners */}
              <img
                src="https://unpkg.com/undraw@latest/undraw_home_settings_re_pkya.svg"
                alt="Owners Illustration"
                style={{ width: '180px', height: 'auto' }}
                loading="lazy"
              />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
              For Homestay Owners
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.08rem' }}>
              Join a community of passionate hosts. We're more than a booking platform—RaahGhar is a space for owner-run homestays to connect, share, and grow. Enjoy support, visibility, and a network that values authentic hospitality and local culture.
            </Typography>
          </Box>
          {/* Travellers Column */}
          <Box sx={{ flex: 1, minWidth: 260, maxWidth: 400, mx: 'auto' }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
              {/* SVG or image illustration for Travellers */}
              <img
                src="https://unpkg.com/undraw@latest/undraw_traveling_yhxq.svg"
                alt="Travellers Illustration"
                style={{ width: '180px', height: 'auto' }}
                loading="lazy"
              />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
              For Travellers
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.08rem' }}>
              Discover handpicked, owner-run homestays in Uttarakhand's hidden gems. Our platform curates unique stays and experiences, ensuring every journey is meaningful, safe, and memorable. Connect with local hosts and explore the Himalayas like never before.
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
          Every homestay and experience is handpicked for quality, safety, and authenticity. Whether you're a host or a guest, RaahGhar is your gateway to real connections and unforgettable mountain stories.
        </Typography>
      </Box>
    </>
  );
};

export default HomePage; 