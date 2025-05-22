import React, { useState, useMemo } from 'react';
import { Box, Typography, Paper, Checkbox, FormControlLabel, Divider, TextField, List as MuiList, ListItem, Chip, Button, Slider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import HomestayCard from '../components/HomestayCard';
import { LOCATIONS } from '../data/locations';

const getAllHomestays = () => {
  return LOCATIONS.flatMap(loc => loc.homestays.Budgeted.map(h => ({ ...h, location: loc.name })));
};

const uniqueLocations = LOCATIONS.map(loc => loc.name);

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationName = searchParams.get('location');

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
      </Box>
    </Box>
  );
};

export default SearchResultsPage; 