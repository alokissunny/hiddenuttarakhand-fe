import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Box, useMediaQuery, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate, useLocation as useRouterLocation } from 'react-router-dom';

const Header = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Destinations', path: '/destinations' },
    { text: 'Homestays', path: '/homestays' },
    { text: 'Blogs', path: '/blogs' },
    { text: 'About Us', path: '/about' },
  ];

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

  const handleCall = () => {
    window.location.href = 'tel:8860572779';
  };

  // Scroll to Explore Destinations section
  const handleDestinationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (routerLocation.pathname === '/') {
      const section = document.getElementById('explore-destinations-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToDestinations: true } });
    }
    setMobileMenuOpen(false);
  };

  // Scroll to Hero section
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (routerLocation.pathname === '/') {
      const section = document.getElementById('hero-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToHero: true } });
    }
    setMobileMenuOpen(false);
  };

  // Navigate to all homestays
  const handleHomestaysClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/search-results');
    setMobileMenuOpen(false);
  };

  return (
    <div className={`uk-header${isSolid ? ' solid' : ''}`} style={isMobile ? { height: 56, display: 'flex', alignItems: 'flex-start', padding: '0 12px', boxSizing: 'border-box', justifyContent: 'flex-start' } : {}}>
      {isMobile ? (
        <>
          <IconButton onClick={() => setMobileMenuOpen(true)} aria-label="Open menu" sx={{ p: 1, minWidth: 56, minHeight: 56 }}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <div style={{ flex: 1 }} />
        </>
      ) : (
        <>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', height: 56 }}>
            <img
              src="/uttarakhand-logo.png"
              alt="Uttarakhand Tourism Logo"
              className="uk-logo"
              style={{ height: 40, width: 'auto' }}
            />
          </Link>
          <nav className="uk-header-nav">
            {menuItems.map((item) =>
              item.text === 'Destinations' ? (
                <a
                  key={item.text}
                  href="/destinations"
                  onClick={handleDestinationsClick}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  {item.text}
                </a>
              ) : item.text === 'Home' ? (
                <a
                  key={item.text}
                  href="/"
                  onClick={handleHomeClick}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  {item.text}
                </a>
              ) : item.text === 'Homestays' ? (
                <a
                  key={item.text}
                  href="/search-results"
                  onClick={handleHomestaysClick}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  {item.text}
                </a>
              ) : (
                <Link key={item.text} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.text}
                </Link>
              )
            )}
          </nav>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 3 }}>
            <Button
              variant="contained"
              onClick={handleCall}
              startIcon={<PhoneIcon />}
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
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              Book Now
            </Button>
          </Box>
        </>
      )}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            bgcolor: '#fff',
          },
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) =>
            item.text === 'Destinations' ? (
              <ListItem
                key={item.text}
                onClick={handleDestinationsClick}
                sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)', cursor: 'pointer' } }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ) : item.text === 'Home' ? (
              <ListItem
                key={item.text}
                onClick={handleHomeClick}
                sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)', cursor: 'pointer' } }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ) : item.text === 'Homestays' ? (
              <ListItem
                key={item.text}
                onClick={handleHomestaysClick}
                sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)', cursor: 'pointer' } }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ) : (
              <ListItem
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            )
          )}
          <ListItem
            onClick={handleCall}
            sx={{
              mt: 2,
              bgcolor: '#C4773B',
              color: '#fff',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: '#a05d2a',
              },
            }}
          >
            <PhoneIcon sx={{ mr: 1 }} />
            <ListItemText primary="Book Now" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header; 