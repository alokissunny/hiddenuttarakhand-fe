import React, { useState } from 'react';
import { Box, Button, InputBase, Divider, MenuItem, Select, SelectChangeEvent, Popover, Typography, IconButton, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch?: () => void;
}

const LOCATIONS = [
  'Dunagiri',
  'Jageshwar Dham',
  'Shitlakhet',
  'Kausani Estate',
  'Sunargaon Kanda',
  'Katarmal',
  'Dhanachuli, Mukteshwar',
  'Pangot, Nainital',
  'Majhkali, Almora',
  'Kasar Devi, Almora',
  'Chaukori, Pithoragarh',
  'Lohaghat, Champawat',
  'Abbott Mount, Champawat',
  'Binsar, Almora',
  'Didihat, Pithoragarh',
  'Berinag, Pithoragarh',
];

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleSearch = () => {
    if (location) {
      navigate(`/search-results?location=${encodeURIComponent(location)}`);
      if (onSearch) onSearch();
    }
  };

  return (
    <Box
      className="search-bar-root"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
        bgcolor: '#fff',
        borderRadius: { xs: '16px', sm: '22px' },
        boxShadow: { xs: '0 2px 12px rgba(44,62,80,0.10)', sm: '0 4px 24px rgba(44,62,80,0.10)' },
        px: { xs: 1, sm: 3 },
        py: { xs: 1, sm: 1.5 },
        width: { xs: '98vw', sm: 900, md: 1100 },
        maxWidth: '98vw',
        position: 'relative',
        zIndex: 2,
        mx: 'auto',
        border: 'none',
        minHeight: { xs: 0, sm: 70 },
        gap: { xs: 1, sm: 0 },
      }}
    >
      {/* Location */}
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 2, minWidth: 120, mb: { xs: 1, sm: 0 } }}>
        <LocationOnIcon sx={{ color: '#b0b0b0', fontSize: { xs: 22, sm: 28 }, mr: 1.2 }} />
        <Select
          value={location}
          onChange={(e: SelectChangeEvent) => setLocation(e.target.value)}
          displayEmpty
          variant="standard"
          disableUnderline
          sx={{ fontSize: { xs: '1rem', sm: '1.18rem' }, fontWeight: 500, width: '100%', color: location ? '#444' : '#b0b0b0', pl: 0, background: 'none' }}
          renderValue={selected => selected ? selected : <span style={{ color: '#b0b0b0' }}>Where To Stay</span>}
        >
          <MenuItem value=""><em>Where To Stay</em></MenuItem>
          {LOCATIONS.map(loc => (
            <MenuItem value={loc} key={loc}>{loc}</MenuItem>
          ))}
        </Select>
      </Box>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#f7dede',
          color: '#b08b8b',
          borderRadius: { xs: '0 0 16px 16px', sm: '0 16px 16px 0' },
          px: { xs: 0, sm: 4 },
          py: { xs: 2, sm: 2 },
          fontWeight: 600,
          fontSize: { xs: '1rem', sm: '1.15rem' },
          boxShadow: '0 2px 8px rgba(44,62,80,0.08)',
          ml: { xs: 0, sm: 2 },
          mt: { xs: 1, sm: 0 },
          height: { xs: 48, sm: 56 },
          width: { xs: '100%', sm: 'auto' },
          '&:hover': { bgcolor: '#f5c6c6', color: '#a06b6b' },
        }}
        startIcon={<SearchIcon sx={{ fontSize: { xs: 22, sm: 28 } }} />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar; 