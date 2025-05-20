import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Box, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const [isSolid, setIsSolid] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  return (
    <div className={`uk-header${isSolid ? ' solid' : ''}`}>
      {isMobile && (
        <IconButton onClick={onMenuClick} sx={{ mr: 1 }} aria-label="Open locations menu">
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
      <div className="uk-header-left" style={{ flexDirection: 'row', alignItems: 'center' }}>
        <img
          src="/uttarakhand-logo.png" // Place your logo in public/ as uttarakhand-logo.png
          alt="Uttarakhand Tourism Logo"
          className="uk-logo"
        />
        {!isMobile && (
          <div className="uk-header-texts">
            <div className="uk-tagline-main">
              Unveil the Secrets of the Himalayas –
            </div>
            <div className="uk-tagline-script">
              Explore Hidden Uttarakhand.
            </div>
          </div>
        )}
      </div>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minWidth: 0 }} ref={searchRef}>
        {!searchOpen && (
          <IconButton color="inherit" onClick={() => setSearchOpen(true)} aria-label="Open search" sx={{ fontSize: 32 }}>
            <SearchIcon sx={{ fontSize: 32 }} />
          </IconButton>
        )}
        {searchOpen && (
          <Box sx={{ width: { xs: '90vw', sm: 400 }, maxWidth: 600, minWidth: 0 }}>
            <SearchBar onSearch={() => setSearchOpen(false)} />
          </Box>
        )}
      </Box>
      <nav className="uk-header-nav">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        {!isMobile && <a href="/faq">FAQ</a>}
        {!isMobile && <a href="/signin">Sign In / Sign Up</a>}
      </nav>
      {/* CTA Section - hide on mobile */}
      {!isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 3 }}>
          <a href="tel:7021819015" style={{ display: 'flex', alignItems: 'center', color: '#fff', textDecoration: 'none', fontWeight: 400, fontSize: '1.18rem', letterSpacing: '1px' }}>
            <PhoneIcon sx={{ mr: 1, fontSize: 24 }} />
            8860572779
          </a>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#C4773B',
              color: '#fff',
              fontWeight: 500,
              fontSize: '1.18rem',
              borderRadius: '10px',
              px: 4,
              py: 1.2,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#a05d2a' },
            }}
          >
            Book Now
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Header; 