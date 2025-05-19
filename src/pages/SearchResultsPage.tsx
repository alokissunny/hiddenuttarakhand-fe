import React from 'react';
import { Box, Typography, Paper, Checkbox, FormControlLabel, Divider, TextField, List, ListItem, Chip, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import HomestayCard from '../components/HomestayCard';
import { LOCATIONS } from '../data/locations';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationName = searchParams.get('location');

  // Find the location object by name (case-insensitive)
  const locationObj = LOCATIONS.find(
    loc => loc.name.toLowerCase() === (locationName || '').toLowerCase()
  );
  const homestays = locationObj ? locationObj.homestays.Budgeted : [];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f6f8fa', minHeight: '80vh', px: { xs: 0, md: 3 }, py: 3 }}>
      {/* Filter Sidebar */}
      <Paper elevation={2} sx={{ width: 270, minWidth: 220, mr: 3, p: 2, display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>Applied Filters</Typography>
        <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip label={locationName || ''} onDelete={() => {}} color="primary" />
          <Chip label="Discounts" onDelete={() => {}} color="primary" />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Select Filters</Typography>
        <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>Sorts</Typography>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Discounts" />
        <FormControlLabel control={<Checkbox />} label="Price (Low - High)" />
        <FormControlLabel control={<Checkbox />} label="Price (High - Low)" />
        <FormControlLabel control={<Checkbox />} label="Wellness Member" />
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>Locality</Typography>
        <TextField size="small" placeholder="Search" fullWidth sx={{ mb: 1 }} />
        <List dense>
          {LOCATIONS.map(loc => (
            <ListItem disablePadding key={loc.name}>
              <FormControlLabel
                control={<Checkbox checked={loc.name === locationName} />}
                label={loc.name}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      {/* Main Results Area */}
      <Box sx={{ flex: 1, maxWidth: 900, mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Search Results{locationName ? ` for "${locationName}"` : ''}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
              ({homestays.length})
            </Typography>
          </Typography>
          <Box>
            <Button variant="outlined" sx={{ mr: 1 }}>List</Button>
            <Button variant="outlined">Grid</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {homestays.length > 0 ? (
            homestays.map((homestay, idx) => (
              <HomestayCard key={homestay.placeId} stay={homestay} location={locationName || ''} category="Budgeted" index={idx} />
            ))
          ) : (
            <Typography sx={{ mt: 4, color: 'text.secondary', textAlign: 'center' }}>
              No homestays found for this location.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResultsPage; 