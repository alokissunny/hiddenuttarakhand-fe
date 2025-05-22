import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AboutUs: React.FC = () => (
  <Box sx={{ maxWidth: 700, mx: 'auto', mt: 6, mb: 6, px: 2 }}>
    <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.18rem', lineHeight: 1.8, color: 'text.secondary' }}>
        We are a homestay booking application with a focus on <b>offbeat locations</b> only.<br /><br />
        Our platform features a <b>curated list of verified homestays</b> to ensure the best experience for our travelers. Whether you seek tranquility, adventure, or authentic local culture, our handpicked stays in hidden gems of Uttarakhand promise a memorable journey.
      </Typography>
    </Paper>
  </Box>
);

export default AboutUs; 