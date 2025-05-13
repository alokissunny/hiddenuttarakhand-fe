import React, { useState } from 'react';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Outlet } from 'react-router-dom';
import { useLocation } from '../context/LocationContext';
import './Header.css';
import Header from './Header';
import LocationTabs from './LocationTabs';
import SearchBar from './SearchBar';
import { useTheme } from '@mui/material/styles';

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box className="hero-image-section">
        {!isMobile && (
          <Box className="hero-search-overlay">
            <SearchBar />
          </Box>
        )}
      </Box>
      {isMobile && (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: -3, mb: 2 }}>
          <SearchBar />
        </Box>
      )}
      <LocationTabs />
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