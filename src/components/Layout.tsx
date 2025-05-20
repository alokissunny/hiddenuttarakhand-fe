import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Outlet, useLocation as useRouterLocation } from 'react-router-dom';
import { useLocation } from '../context/LocationContext';
import './Header.css';
import Header from './Header';
import LocationTabs from './LocationTabs';
import SearchBar from './SearchBar';
import { useTheme } from '@mui/material/styles';

const HERO_IMAGES = [
  '/hero.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
  '/hero4.jpg',
];

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const routerLocation = useRouterLocation();
  const [currentHero, setCurrentHero] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToHero = (idx: number) => {
    setCurrentHero(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {routerLocation.pathname !== '/search-results' && !routerLocation.pathname.startsWith('/property') && (
        <Box
          className="hero-image-section"
          sx={{
            minHeight: '100vh',
            height: '100vh',
            width: '100vw',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          {/* Overlay Text */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: { xs: '5vw', sm: '7vw' },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
              pointerEvents: 'none',
              px: { xs: 2, sm: 6 },
            }}
          >
            <Box
              sx={{
                bgcolor: 'rgba(0,0,0,0.32)',
                px: { xs: 2, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: 4,
                width: '100%',
                maxWidth: 1200,
                mx: 'auto',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: { xs: '1.3rem', sm: '2.5rem', md: '3.2rem' },
                  textAlign: 'center',
                  textShadow: '0 4px 24px rgba(0,0,0,0.45)',
                  letterSpacing: '-1px',
                  lineHeight: 1.15,
                }}
              >
                Unveil the Secrets of the Himalayas –<br />Explore Hidden Uttarakhand
              </Typography>
            </Box>
          </Box>
          {HERO_IMAGES.map((img, idx) => (
            <Box
              key={img}
              component="img"
              src={img}
              alt={`Hero ${idx + 1}`}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: idx === currentHero ? 1 : 0,
                transition: 'opacity 1s',
                zIndex: 1,
              }}
            />
          ))}
          {/* Carousel Dots */}
          <Box sx={{ position: 'absolute', bottom: 32, left: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 3 }}>
            {HERO_IMAGES.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => goToHero(idx)}
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: idx === currentHero ? '#fff' : 'rgba(255,255,255,0.5)',
                  mx: 0.7,
                  cursor: 'pointer',
                  border: idx === currentHero ? '2px solid #1976d2' : '2px solid transparent',
                  transition: 'background 0.3s, border 0.3s',
                }}
              />
            ))}
          </Box>
          {/* Remove the desktop search bar overlay in hero section */}
          {/* {!isMobile && (
            <Box className="hero-search-overlay">
              <SearchBar />
            </Box>
          )} */}
        </Box>
      )}
      {isMobile && (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: -3, mb: 2 }}>
          <SearchBar />
        </Box>
      )}
      {routerLocation.pathname !== '/search-results' && !routerLocation.pathname.startsWith('/property') && <LocationTabs />}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 }, bgcolor: 'background.default' }}>
        <Outlet />
      </Box>
      <Box component="footer" sx={{ bgcolor: '#3EB4FA', color: '#fff', py: 4, mt: 'auto', borderTopLeftRadius: 3, borderTopRightRadius: 3, boxShadow: 2 }}>
        <Box className="footer-social" sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <IconButton href="#" color="inherit" aria-label="Facebook" sx={{ bgcolor: 'rgba(255,255,255,0.12)', '&:hover': { bgcolor: '#e0f7ff', color: '#234e52' } }}><FacebookIcon /></IconButton>
          <IconButton href="#" color="inherit" aria-label="Twitter" sx={{ bgcolor: 'rgba(255,255,255,0.12)', '&:hover': { bgcolor: '#e0f7ff', color: '#234e52' } }}><TwitterIcon /></IconButton>
          <IconButton href="#" color="inherit" aria-label="Instagram" sx={{ bgcolor: 'rgba(255,255,255,0.12)', '&:hover': { bgcolor: '#e0f7ff', color: '#234e52' } }}><InstagramIcon /></IconButton>
        </Box>
        <Box className="footer-links" sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mb: 1 }}>
          <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#e0f7ff', borderBottom: '2px solid #e0f7ff' }, pb: '2px', borderBottom: '2px solid transparent' }}>About</Typography>
          <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#e0f7ff', borderBottom: '2px solid #e0f7ff' }, pb: '2px', borderBottom: '2px solid transparent' }}>Contact</Typography>
          <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#e0f7ff', borderBottom: '2px solid #e0f7ff' }, pb: '2px', borderBottom: '2px solid transparent' }}>Terms</Typography>
          <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#e0f7ff', borderBottom: '2px solid #e0f7ff' }, pb: '2px', borderBottom: '2px solid transparent' }}>Privacy</Typography>
        </Box>
        <Typography className="footer-copy" sx={{ fontSize: '1.05rem', color: '#e6fffa', mb: 1.2, mt: 1, textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} HiddenUttarakhand.com. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout; 