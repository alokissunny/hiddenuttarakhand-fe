import React, { useState } from 'react';
import { AppBar, Toolbar, Drawer, List, ListItemButton, ListItemText, Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useLocation } from '../context/LocationContext';
import theme from '../theme';

const LOCATIONS = [
  { name: 'Dunagiri' },
  { name: 'Jageshwar Dham' },
];
const drawerWidth = 220;

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedLocationIdx, setSelectedLocationIdx, setSelectedCategory } = useLocation();
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: { xs: '100vw', sm: drawerWidth }, bgcolor: 'background.paper', height: '100%', pt: 2 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, color: 'primary.main', fontWeight: 700 }}>
        Locations
      </Typography>
      <List>
        {LOCATIONS.map((loc, idx) => (
          <ListItemButton
            key={loc.name}
            selected={selectedLocationIdx === idx}
            onClick={() => {
              setSelectedLocationIdx(idx);
              setSelectedCategory('Budgeted');
              setMobileOpen(false);
            }}
            sx={{
              borderRadius: 2,
              mb: 1,
              bgcolor: selectedLocationIdx === idx ? 'primary.light' : 'inherit',
              color: selectedLocationIdx === idx ? 'primary.main' : 'inherit',
              '&:hover': { bgcolor: 'primary.light' },
            }}
          >
            <ListItemText primary={loc.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#3EB4FA !important' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component={RouterLink} to="/" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 1.5, color: '#fff', fontFamily: 'Playfair Display, Georgia, serif', textDecoration: 'none', '&:hover': { color: '#fff' } }}>
            HiddenUttarakhand.com
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Typography component={RouterLink} to="/" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', '&:hover': { color: '#e0f7ff' } }}>Home</Typography>
            <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', '&:hover': { color: '#e0f7ff' } }}>About</Typography>
            <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', '&:hover': { color: '#e0f7ff' } }}>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Drawer
          variant="permanent"
          sx={{ display: { xs: 'none', sm: 'block' }, width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'background.paper', borderRight: '1px solid #e2e8f0' } }}
          open
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', sm: 'none' }, [`& .MuiDrawer-paper`]: { width: '80vw', boxSizing: 'border-box', bgcolor: 'background.paper' } }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 }, ml: { sm: `${drawerWidth}px` }, bgcolor: 'background.default' }}>
          <Outlet />
        </Box>
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