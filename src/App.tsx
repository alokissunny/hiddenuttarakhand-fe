import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { LocationProvider } from './context/LocationContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="property/:locationName/:category/:homestayIdx" element={<PropertyDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocationProvider>
    </ThemeProvider>
  );
}

export default App;
