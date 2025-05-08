import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface Homestay {
  name: string;
  desc: string;
  img: string;
}

interface HomestayCardProps {
  stay: Homestay;
  location: string;
  category: string;
  index: number;
}

const HomestayCard: React.FC<HomestayCardProps> = ({ stay, location, category, index }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: { xs: '98vw', sm: 300 }, maxWidth: 340, bgcolor: '#fff', borderRadius: 2, boxShadow: 2, mb: 2, p: 1, position: 'relative' }}>
      <Box className="card-img-wrapper" sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
        <img src={stay.img} alt={stay.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
        <IconButton sx={{ position: 'absolute', top: 12, right: 14, bgcolor: 'rgba(255,255,255,0.85)', '&:hover': { bgcolor: '#e0f7ff' } }}>
          <svg width="22" height="22" fill="#3EB4FA" viewBox="0 0 32 32"><path d="M16 29s-9.3-7.1-12.4-11.1C1.2 15.5 0 13.6 0 11.5 0 7.9 2.9 5 6.5 5c2.1 0 4.1 1.1 5.2 2.9C13.4 6.1 15.4 5 17.5 5 21.1 5 24 7.9 24 11.5c0 2.1-1.2 4-3.6 6.4C25.3 21.9 16 29 16 29z"/></svg>
        </IconButton>
      </Box>
      <Box className="card-content" sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{stay.name}</Typography>
        <Typography sx={{ color: '#555', fontSize: '1rem', mb: 1 }}>{stay.desc}</Typography>
        <Box sx={{ mt: 'auto' }}>
          <Box component="button" sx={{ mt: 1, bgcolor: '#3EB4FA', color: '#fff', border: 'none', borderRadius: 1, px: 2, py: 1, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', boxShadow: 1, '&:hover': { bgcolor: '#189adf' } }}
            onClick={() => navigate(`/property/${location}/${category}/${index}`)}>
            View Details
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomestayCard; 