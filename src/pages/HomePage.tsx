import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useLocation } from '../context/LocationContext';
import HomestayCard, { Homestay } from '../components/HomestayCard';
import { LOCATIONS, LOCATION_TAB_CONTENT } from '../data/locations';

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
  if (!location) {
    return <Typography sx={{ p: 4 }}>No location data available.</Typography>;
  }
  const locTabData =
    LOCATION_TAB_CONTENT[location.name] && LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      ? LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      : null;

  return (
    <>
      {/* Location Info Tabs */}
      <Box sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 2, mb: 3, p: { xs: 1, sm: 3 } }}>
        <Tabs
          value={selectedLocTab}
          onChange={(_, v) => setSelectedLocTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="secondary"
          sx={{ mb: 2 }}
        >
          {LOCATION_TABS.map(tab => (
            <Tab label={tab} value={tab} key={tab} sx={{ fontWeight: 600, fontSize: { xs: '0.98rem', sm: '1.08rem' } }} />
          ))}
        </Tabs>
        <Box className="loc-tab-content" sx={{ p: 2 }}>
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
          sx={{ mb: 2 }}
        >
          {['Budgeted', 'Luxury', 'Treehouse'].map(cat => (
            <Tab label={cat} value={cat} key={cat} sx={{ fontWeight: 600, fontSize: { xs: '0.98rem', sm: '1.08rem' } }} />
          ))}
        </Tabs>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          {location.homestays[selectedCategory as keyof typeof location.homestays].map((stay: Homestay, i: number) => (
            <HomestayCard
              key={i}
              stay={stay}
              location={location.name}
              category={selectedCategory}
              index={i}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HomePage; 