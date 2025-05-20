import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, CircularProgress } from '@mui/material';
import { useLocation } from '../context/LocationContext';
import { LOCATIONS, LOCATION_TAB_CONTENT } from '../data/locations';
import { useNavigate, useLocation as useRouterLocation } from 'react-router-dom';

const LOCATION_TABS = [
  'Overview',
  'How to Reach',
  'Things to Do',
  'Travel Tips',
  'Connectivity & Internet',
  'Travel Stories / Experiences',
];

const HomePage: React.FC = () => {
  const [selectedLocTab, setSelectedLocTab] = useState('Overview');
  const { selectedLocationIdx, selectedCategory, setSelectedCategory } = useLocation();
  const location = LOCATIONS[selectedLocationIdx];
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();

  React.useEffect(() => {
    if (routerLocation.state && routerLocation.state.scrollToDestinations) {
      const section = document.getElementById('explore-destinations-section');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
      // Clear the state after scrolling
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
      {/* Homestay Categories */}
      {/* Removed homestay cards section */}
      {/* Location Info Tabs - moved to bottom */}
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 2,
          mb: 3,
          p: { xs: 1, sm: 3 },
          width: { xs: '100vw', sm: 'auto' },
          maxWidth: '100vw',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        }}
      >
        <Tabs
          value={selectedLocTab}
          onChange={(_, v) => setSelectedLocTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="secondary"
          sx={{ mb: 2, px: { xs: 0.5, sm: 0 }, position: { xs: 'sticky', sm: 'static' }, top: 0, bgcolor: '#fff', zIndex: 10 }}
        >
          {LOCATION_TABS.map(tab => (
            <Tab label={tab} value={tab} key={tab} sx={{ fontWeight: 600, fontSize: { xs: '0.98rem', sm: '1.08rem' }, minWidth: { xs: 100, sm: 120 } }} />
          ))}
        </Tabs>
        <Box className="loc-tab-content" sx={{ p: { xs: 1, sm: 2 }, width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
          {locTabData ? (
            <>
              {selectedLocTab === 'Travel Stories / Experiences' ? (
                // Render travel stories
                <Box>
                  {locTabData.stories.map((story: any, index: number) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      {story.user && (
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          {story.user}
                        </Typography>
                      )}
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-line',
                          lineHeight: 1.8,
                          color: 'text.secondary',
                        }}
                      >
                        {story.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                // Render regular content
                <Box>
                  {locTabData.content.map((paragraph: string, index: number) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        mb: 2,
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        '& b': {
                          color: 'text.primary',
                          fontWeight: 600,
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </Box>
              )}
            </>
          ) : (
            <Typography>Information coming soon for this location.</Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default HomePage; 