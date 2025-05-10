import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, CircularProgress, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getPlaceDetails, GooglePlaceDetails } from '../utils/googlePlaces';

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
  placeId?: string;
  onViewDetails?: () => void;
}

const HomestayCard: React.FC<HomestayCardProps> = ({ stay, location, category, index, placeId, onViewDetails }) => {
  const navigate = useNavigate();
  const [place, setPlace] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!placeId) {
      setLoading(false);
      return;
    }
    let mounted = true;
    getPlaceDetails(placeId)
      .then((data) => {
        if (mounted) {
          setPlace(data);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    return () => { mounted = false; };
  }, [placeId]);

  return (
    <Box sx={{
      width: { xs: 320, sm: 320 },
      height: 420,
      maxWidth: 340,
      bgcolor: '#fff',
      borderRadius: 2,
      boxShadow: 2,
      mb: 2,
      p: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
    }}>
      <Box className="card-img-wrapper" sx={{ position: 'relative', width: '100%', height: 180, overflow: 'hidden', borderRadius: 2 }}>
        {loading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 180 }}>
            <CircularProgress size={32} />
          </Box>
        ) : place && place.photos && place.photos.length > 0 ? (
          <img src={place.photos[0].getUrl({ maxWidth: 600 })} alt={place.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
        ) : stay.img ? (
          <img src={stay.img} alt={stay.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
        ) : (
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Homestay placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
        )}
        <IconButton sx={{ position: 'absolute', top: 12, right: 14, bgcolor: 'rgba(255,255,255,0.85)', '&:hover': { bgcolor: '#e0f7ff' } }}>
          <svg width="22" height="22" fill="#3EB4FA" viewBox="0 0 32 32"><path d="M16 29s-9.3-7.1-12.4-11.1C1.2 15.5 0 13.6 0 11.5 0 7.9 2.9 5 6.5 5c2.1 0 4.1 1.1 5.2 2.9C13.4 6.1 15.4 5 17.5 5 21.1 5 24 7.9 24 11.5c0 2.1-1.2 4-3.6 6.4C25.3 21.9 16 29 16 29z"/></svg>
        </IconButton>
      </Box>
      <Box className="card-content" sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1.18rem', minHeight: 32, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{(place && place.name) || stay.name}</Typography>
        <Typography sx={{ color: '#555', fontSize: '1rem', mb: 1, minHeight: 44, overflow: 'hidden', textOverflow: 'ellipsis' }}>{(place && place.formatted_address) || stay.desc}</Typography>
        {place && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={place.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
              ({place.user_ratings_total} reviews)
            </Typography>
          </Box>
        )}
        <Box sx={{ mt: 'auto' }}>
          <Box component="button" sx={{ mt: 1, bgcolor: '#3EB4FA', color: '#fff', border: 'none', borderRadius: 1, px: 2, py: 1, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', boxShadow: 1, '&:hover': { bgcolor: '#189adf' } }}
            onClick={onViewDetails ? onViewDetails : () => navigate(`/property/${location}/${category}/${index}`)}>
            View Details
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomestayCard; 