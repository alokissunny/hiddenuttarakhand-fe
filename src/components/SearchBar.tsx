import React, { useState } from 'react';
import { Box, Button, InputBase, Divider, MenuItem, Select, SelectChangeEvent, Popover, Typography, IconButton, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { useTheme } from '@mui/material/styles';

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

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearch = () => {
    alert(`Location: ${location || 'Any'}\nCheck-in: ${checkIn ? checkIn.toLocaleDateString() : '-'}\nCheck-out: ${checkOut ? checkOut.toLocaleDateString() : '-'}\nGuests: ${guests}\nRooms: ${rooms}`);
  };

  const handleGuestClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleGuestClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem sx={{ mx: { xs: 0, sm: 2 }, my: { xs: 0.5, sm: 0 }, borderColor: '#f0eaea', display: { xs: 'block', sm: 'block' } }} />
        {/* Check-in */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 100, mb: { xs: 1, sm: 0 } }}>
          <CalendarTodayIcon sx={{ color: '#b0b0b0', fontSize: { xs: 18, sm: 22 }, mr: 1 }} />
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            minDate={new Date()}
            maxDate={checkOut || undefined}
            slotProps={{ textField: { variant: 'standard', placeholder: 'Check-in', InputProps: { disableUnderline: true, style: { fontSize: isMobile ? '0.98rem' : '1.1rem', color: checkIn ? '#444' : '#b0b0b0', background: 'none' } }, sx: { width: '100%' } } }}
            format="dd/MM/yyyy"
          />
        </Box>
        <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem sx={{ mx: { xs: 0, sm: 2 }, my: { xs: 0.5, sm: 0 }, borderColor: '#f0eaea', display: { xs: 'block', sm: 'block' } }} />
        {/* Check-out */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 100, mb: { xs: 1, sm: 0 } }}>
          <CalendarTodayIcon sx={{ color: '#b0b0b0', fontSize: { xs: 18, sm: 22 }, mr: 1 }} />
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            minDate={checkIn || new Date()}
            slotProps={{ textField: { variant: 'standard', placeholder: 'Check-out', InputProps: { disableUnderline: true, style: { fontSize: isMobile ? '0.98rem' : '1.1rem', color: checkOut ? '#444' : '#b0b0b0', background: 'none' } }, sx: { width: '100%' } } }}
            format="dd/MM/yyyy"
          />
        </Box>
        <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem sx={{ mx: { xs: 0, sm: 2 }, my: { xs: 0.5, sm: 0 }, borderColor: '#f0eaea', display: { xs: 'block', sm: 'block' } }} />
        {/* Guests */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1.2, minWidth: 120, cursor: 'pointer', mb: { xs: 1, sm: 0 } }} onClick={handleGuestClick}>
          <PeopleIcon sx={{ color: '#b0b0b0', fontSize: { xs: 20, sm: 26 }, mr: 1 }} />
          <InputBase
            value={`${guests} Adult${guests > 1 ? 's' : ''} , ${rooms} Room${rooms > 1 ? 's' : ''}`}
            sx={{ fontSize: { xs: '0.98rem', sm: '1.1rem' }, width: '100%', color: '#b0b0b0' }}
            readOnly
            disabled
          />
        </Box>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleGuestClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          PaperProps={{ sx: { p: 2, borderRadius: 2, minWidth: 200 } }}
        >
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Guests</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton onClick={() => setGuests(Math.max(1, guests - 1))} size="small"><span style={{ fontSize: 22 }}>-</span></IconButton>
            <Typography sx={{ mx: 2 }}>{guests}</Typography>
            <IconButton onClick={() => setGuests(guests + 1)} size="small"><span style={{ fontSize: 22 }}>+</span></IconButton>
            <Typography sx={{ ml: 1 }}>Adult{guests > 1 ? 's' : ''}</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Rooms</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => setRooms(Math.max(1, rooms - 1))} size="small"><span style={{ fontSize: 22 }}>-</span></IconButton>
            <Typography sx={{ mx: 2 }}>{rooms}</Typography>
            <IconButton onClick={() => setRooms(rooms + 1)} size="small"><span style={{ fontSize: 22 }}>+</span></IconButton>
            <Typography sx={{ ml: 1 }}>Room{rooms > 1 ? 's' : ''}</Typography>
          </Box>
        </Popover>
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
    </LocalizationProvider>
  );
};

export default SearchBar; 