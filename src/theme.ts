import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3EB4FA' },
    secondary: { main: '#222222' },
    background: { default: '#FFF8F6', paper: '#fff' },
    text: { primary: '#222222', secondary: '#717171' },
  },
  typography: {
    fontFamily: [
      'Cereal',
      'Airbnb Cereal App',
      'Circular',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 800, letterSpacing: 0 },
    h2: { fontWeight: 700, letterSpacing: 0 },
    h3: { fontWeight: 700, letterSpacing: 0 },
    h4: { fontWeight: 700, letterSpacing: 0 },
    h5: { fontWeight: 600, letterSpacing: 0 },
    h6: { fontWeight: 600, letterSpacing: 0 },
    body1: { fontWeight: 400, fontSize: '1.08rem' },
    body2: { fontWeight: 400, fontSize: '1rem' },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme; 