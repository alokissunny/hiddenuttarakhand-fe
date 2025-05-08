import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { MaterialIcon } from './MaterialIcon';

export interface Bedroom {
  name: string;
  images: string[];
  description: string;
}

interface BedroomCarouselProps {
  bedrooms: Bedroom[];
}

const BedroomCarousel: React.FC<BedroomCarouselProps> = ({ bedrooms }) => {
  const [currentBedroom, setCurrentBedroom] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    if (currentImage < bedrooms[currentBedroom].images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else if (currentBedroom < bedrooms.length - 1) {
      setCurrentBedroom(currentBedroom + 1);
      setCurrentImage(0);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else if (currentBedroom > 0) {
      setCurrentBedroom(currentBedroom - 1);
      setCurrentImage(bedrooms[currentBedroom - 1].images.length - 1);
    }
  };

  const bedroom = bedrooms[currentBedroom];

  return (
    <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', height: isMobile ? 300 : 400 }}>
        <img
          src={bedroom.images[currentImage]}
          alt={bedroom.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.9)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' },
          }}
          disabled={currentBedroom === 0 && currentImage === 0}
        >
          <MaterialIcon icon="chevron_left" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.9)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' },
          }}
          disabled={currentBedroom === bedrooms.length - 1 && currentImage === bedroom.images.length - 1}
        >
          <MaterialIcon icon="chevron_right" />
        </IconButton>
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            display: 'flex',
            gap: 1,
          }}
        >
          {bedroom.images.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                flex: 1,
                height: 4,
                bgcolor: idx === currentImage ? 'white' : 'rgba(255,255,255,0.5)',
                borderRadius: 2,
                cursor: 'pointer',
              }}
              onClick={() => setCurrentImage(idx)}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {bedroom.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bedroom.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
          {bedrooms.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: idx === currentBedroom ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
              }}
              onClick={() => {
                setCurrentBedroom(idx);
                setCurrentImage(0);
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default BedroomCarousel; 