import React, { useState, useMemo, useEffect } from 'react';
import { Box, Typography, Paper, Checkbox, FormControlLabel, Divider, TextField, List as MuiList, ListItem, Chip, Button, Slider, Tabs, Tab } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import HomestayCard from '../components/HomestayCard';
import { LOCATIONS, LOCATION_TAB_CONTENT } from '../data/locations';

const LOCATION_TABS = [
  'Overview',
  'How to Reach',
  'Things to Do',
  'Travel Tips',
  'Connectivity & Internet',
  'Travel Stories / Experiences',
];

const getAllHomestays = () => {
  return LOCATIONS.flatMap(loc => loc.homestays.Budgeted.map(h => ({ ...h, location: loc.name })));
};

const uniqueLocations = LOCATIONS.map(loc => loc.name);

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationName = searchParams.get('location');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Aggregate all homestays
  const allHomestays = getAllHomestays();
  const [selectedLocations, setSelectedLocations] = useState<string[]>(locationName ? [locationName] : []);
  const [minRating, setMinRating] = useState<number>(0);
  const [searchText, setSearchText] = useState('');

  // Memoize filtered homestays to prevent unnecessary recalculations
  const filteredHomestays = useMemo(() => {
    return allHomestays.filter(h => {
      // Location filter - show all if no locations selected, otherwise show only selected locations
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(h.location);
      
      // Rating filter
      const matchesRating = !h.rating || h.rating >= minRating;
      
      // Text search filter
      const matchesText =
        searchText.trim() === '' ||
        h.name.toLowerCase().includes(searchText.toLowerCase()) ||
        (h.desc && h.desc.toLowerCase().includes(searchText.toLowerCase()));
      
      return matchesLocation && matchesRating && matchesText;
    });
  }, [allHomestays, selectedLocations, minRating, searchText]);

  // Handle location filter change
  const handleLocationChange = (loc: string) => {
    setSelectedLocations(prev => {
      if (prev.includes(loc)) {
        // Remove location if already selected
        return prev.filter(l => l !== loc);
      } else {
        // Add location if not selected
        return [...prev, loc];
      }
    });
  };

  // Handle rating filter change
  const handleRatingChange = (_: any, value: number | number[]) => {
    setMinRating(Array.isArray(value) ? value[0] : value);
  };

  // Handle search text change
  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Virtualized list item renderer
  const HomestayRow = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const homestay = filteredHomestays[index];
    return (
      <div style={style}>
        <HomestayCard
          key={`${homestay.placeId}-${homestay.location}`}
          stay={homestay}
          location={homestay.location}
          category="Budgeted"
          index={index}
        />
      </div>
    );
  };

  // Find overview content for the selected location (if only one is selected)
  let infoTabData: any = null;
  let infoLocationName: string | null = null;
  const [selectedLocTab, setSelectedLocTab] = useState('Overview');
  if (selectedLocations.length === 1) {
    const locName = selectedLocations[0];
    infoLocationName = locName;
    if (
      LOCATION_TAB_CONTENT[locName] &&
      LOCATION_TAB_CONTENT[locName][selectedLocTab]
    ) {
      infoTabData = LOCATION_TAB_CONTENT[locName][selectedLocTab];
    }
  }

  useEffect(() => {
    // Reset tab to Overview when location changes
    setSelectedLocTab('Overview');
  }, [selectedLocations]);

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f6f8fa', minHeight: '80vh', px: { xs: 0, md: 3 }, py: 3 }}>
      {/* Filter Sidebar */}
      <Paper elevation={2} sx={{ width: 270, minWidth: 220, mr: 3, p: 2, display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>Filters</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Location</Typography>
        <MuiList dense>
          {uniqueLocations.map(loc => (
            <ListItem disablePadding key={loc}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={selectedLocations.includes(loc)} 
                    onChange={() => handleLocationChange(loc)}
                  />
                }
                label={loc}
              />
            </ListItem>
          ))}
        </MuiList>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Minimum Rating</Typography>
        <Slider
          value={minRating}
          onChange={handleRatingChange}
          min={0}
          max={5}
          step={0.5}
          marks={[{ value: 0, label: 'Any' }, { value: 3, label: '3+' }, { value: 4, label: '4+' }, { value: 5, label: '5' }]}
          valueLabelDisplay="auto"
          sx={{ mb: 2, mt: 1, width: '90%' }}
        />
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Search</Typography>
        <TextField 
          size="small" 
          placeholder="Search by name or desc" 
          value={searchText} 
          onChange={handleSearchTextChange} 
          fullWidth 
          sx={{ mb: 1 }} 
        />
      </Paper>
      
      {/* Main Results Area */}
      <Box sx={{ flex: 1, maxWidth: 900, mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Search Results
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
              ({filteredHomestays.length})
            </Typography>
          </Typography>
        </Box>
        {filteredHomestays.length > 0 ? (
          <FixedSizeList
            height={window.innerHeight - 200}
            width="100%"
            itemCount={filteredHomestays.length}
            itemSize={300}
          >
            {HomestayRow}
          </FixedSizeList>
        ) : (
          <Typography sx={{ mt: 4, color: 'text.secondary', textAlign: 'center' }}>
            No homestays found for the selected filters.
          </Typography>
        )}
        {/* Location Info Tabs Section at the bottom */}
        {infoLocationName && (
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: 2,
              boxShadow: 2,
              mt: 4,
              p: { xs: 1, sm: 3 },
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflowX: 'hidden',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
              {infoLocationName}
            </Typography>
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
              {infoTabData ? (
                selectedLocTab === 'Travel Stories / Experiences' ? (
                  <Box>
                    {infoTabData.stories.map((story: any, index: number) => (
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
                  <Box>
                    {infoTabData.content.map((paragraph: string, index: number) => (
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
                )
              ) : (
                <Typography>Information coming soon for this location.</Typography>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchResultsPage; 