import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const StatePage: React.FC = () => {
  const { stateName } = useParams<{ stateName: string }>();
  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
        {stateName ? stateName.replace(/-/g, ' ').toUpperCase() : 'State'}
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        This is a blank page for {stateName}.
      </Typography>
    </Box>
  );
};

export default StatePage; 