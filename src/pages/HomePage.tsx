import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, CircularProgress } from '@mui/material';
import { useLocation } from '../context/LocationContext';
import HomestayCard, { Homestay } from '../components/HomestayCard';
import { LOCATIONS, LOCATION_TAB_CONTENT } from '../data/locations';
import { useNavigate } from 'react-router-dom';

const LOCATION_TABS = [
  'Overview',
  'How to Reach',
  'Things to Do',
  'Travel Tips',
  'Connectivity & Internet',
  'Travel Stories / Experiences',
];

// List of Google Place IDs for homestays (order must match homestay order)
const PLACE_IDS = [
  'ChIJK3BsB2gypzkRW9LPmAVsKoU',
  'ChIJL_5Czk9PpzkRaXJsPWb0jXM',
  'ChIJERmaYbm_oDkR3sBfIzyatEw',
  'ChIJiXU9DV6xoDkRnoUqoxxoA0E',
  'ChIJMbyU97q7oDkRii8nmOaYTzY',
  'ChIJmfRVDACZoDkRl7u-vqhzvS0',
  'ChIJ3-_7ZTKXoDkRHTlE07A8NC4',
  'ChIJQycWAQCZoDkRAvNB8PckEBI',
  'ChIJD3V_LACtoDkRwEzutU5_OzY',
];

const HomePage: React.FC = () => {
  const [selectedLocTab, setSelectedLocTab] = useState('Overview');
  const { selectedLocationIdx, selectedCategory, setSelectedCategory } = useLocation();
  const location = LOCATIONS[selectedLocationIdx];
  const navigate = useNavigate();
  if (!location) {
    return <Typography sx={{ p: 4 }}>No location data available.</Typography>;
  }
  const locTabData =
    LOCATION_TAB_CONTENT[location.name] && LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      ? LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      : null;

  // Flatten all homestays for mapping to place IDs
  const allHomestays = [
    ...location.homestays.Budgeted,
    ...location.homestays.Luxury,
    ...location.homestays.Treehouse,
  ];

  return (
    <>
      {/* Selected Location Name for Mobile */}
      <Box sx={{ display: { xs: 'block', sm: 'none' }, textAlign: 'center', mt: 2, mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.18rem', letterSpacing: 0.5 }}>
          {location.name}
        </Typography>
      </Box>
      {/* Location Info Tabs */}
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

      {/* Homestay Categories */}
      <Box sx={{ mt: 3, mb: 3 }}>
        <Tabs
          value={selectedCategory}
          onChange={(_, v) => setSelectedCategory(v)}
          textColor="primary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 2, px: { xs: 0.5, sm: 0 } }}
        >
          {['Budgeted', 'Luxury', 'Treehouse'].map(cat => (
            <Tab label={cat} value={cat} key={cat} sx={{ fontWeight: 600, fontSize: { xs: '0.98rem', sm: '1.08rem' }, minWidth: { xs: 100, sm: 120 } }} />
          ))}
        </Tabs>
        {selectedCategory === 'Luxury' || selectedCategory === 'Treehouse' ? (
          <Box sx={{ p: { xs: 2, sm: 4 }, textAlign: 'center', width: '100%' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.secondary', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
              {selectedCategory} stays coming soon!
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              We are curating the best {selectedCategory.toLowerCase()} experiences for you. Stay tuned!
            </Typography>
          </Box>
        ) : (
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 3 },
            justifyContent: { xs: 'center', sm: 'flex-start' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            px: { xs: 0.5, sm: 0 },
          }}>
            {PLACE_IDS.map((placeId, i) => (
              <HomestayCard
                key={placeId}
                stay={{ name: '', desc: '', img: '' }}
                location={location.name}
                category={selectedCategory}
                index={i}
                placeId={placeId}
                onViewDetails={() => {
                  // Navigate to property details with placeId as homestayIdx in URL
                  window.location.href = `/property/${location.name}/${selectedCategory}/${placeId}`;
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default HomePage; 