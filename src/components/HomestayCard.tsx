import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, CircularProgress, Rating, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getPlaceDetails, GooglePlaceDetails, getPhotoUrl } from '../utils/googlePlaces';
import AmenitiesDialog, { Amenity } from './AmenitiesDialog';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

export interface Homestay {
  name: string;
  desc: string;
  img?: string;
  images?: string[];
  placeId?: string;
  id?: string;
  rating?: number;
  user_ratings_total?: number;
  price?: number;
  original_price?: number;
  discount_percent?: number;
  amenities?: Amenity[];
}

interface HomestayCardProps {
  stay: Homestay;
  location: string;
  category: string;
  index?: number;
  placeId?: string;
  onViewDetails?: () => void;
}

const mockAmenities: Amenity[] = [
  { name: 'WiFi', icon: 'wifi' },
  { name: 'Parking', icon: 'local_parking' },
  { name: 'Breakfast', icon: 'free_breakfast' },
  { name: 'TV', icon: 'tv' },
  { name: 'AC', icon: 'ac_unit' },
  { name: 'Pet Friendly', icon: 'pets' },
];

const HomestayCard: React.FC<HomestayCardProps> = ({ stay, location, category, index, placeId, onViewDetails }) => {
  const navigate = useNavigate();
  const [place, setPlace] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(stay.img || PLACEHOLDER_IMAGE);
  const [gallery, setGallery] = useState<string[]>(stay.images || (stay.img ? [stay.img] : [PLACEHOLDER_IMAGE]));
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [thumbLoading, setThumbLoading] = useState<{ [key: number]: boolean }>({});
  const [thumbError, setThumbError] = useState<{ [key: number]: boolean }>({});

  // Mock price/discount if not present
  const price = stay.price || 1440;
  const originalPrice = stay.original_price || 1800;
  const discountPercent = stay.discount_percent || Math.round(100 - (price / originalPrice) * 100);
  const amenities = stay.amenities || mockAmenities;

  useEffect(() => {
    if (!stay.placeId) {
      setLoading(false);
      return;
    }
    let mounted = true;
    setImgLoading(true);
    setImgError(false);
    setThumbLoading({});
    setThumbError({});
    getPlaceDetails(stay.placeId)
      .then((data) => {
        if (mounted) {
          setPlace(data);
          // Set the image URL if photos are available
          if (data.photos && data.photos.length > 0) {
            const urls = data.photos.slice(0, 5).map(photo => getPhotoUrl(photo, 600));
            setGallery(urls);
            setImageUrl(urls[0]);
          }
        }
      })
      .catch(() => {
        setError(true);
        setImageUrl(PLACEHOLDER_IMAGE);
        setGallery([PLACEHOLDER_IMAGE]);
      })
      .finally(() => {
        setLoading(false);
        setImgLoading(false);
      });
    return () => { mounted = false; };
  }, [stay.placeId]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      bgcolor: '#fff',
      borderRadius: 3,
      boxShadow: 3,
      mb: 3,
      overflow: 'hidden',
      minHeight: 220,
      position: 'relative',
      width: '100%',
      maxWidth: '100%',
    }}>
      {/* Image Gallery */}
      <Box sx={{ position: 'relative', width: { xs: '100%', md: 320 }, minWidth: { md: 320 }, height: { xs: 200, md: 220 }, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, position: 'relative', height: { xs: 200, md: 220 } }}>
          {imgLoading && !imgError && (
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <img src={PLACEHOLDER_IMAGE} alt="placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, borderRadius: 0, position: 'absolute', top: 0, left: 0 }} />
              <CircularProgress size={40} sx={{ zIndex: 3 }} />
            </Box>
          )}
          <img
            src={gallery[mainImgIdx]}
            alt={stay.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, display: imgError ? 'none' : 'block' }}
            onLoad={() => setImgLoading(false)}
            onError={() => { setImgError(true); setImgLoading(false); setImageUrl(PLACEHOLDER_IMAGE); }}
          />
          {imgError && (
            <img src={PLACEHOLDER_IMAGE} alt="placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, position: 'absolute', top: 0, left: 0, zIndex: 2 }} />
          )}
          {/* Discount Badge */}
          {discountPercent > 0 && (
            <Box sx={{ position: 'absolute', left: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.7)', color: '#fff', px: 2.5, py: 0.7, fontWeight: 700, fontSize: '1.2rem', borderBottomLeftRadius: 12, borderTopRightRadius: 12 }}>
              {discountPercent}% Off
            </Box>
          )}
        </Box>
        {/* Vertical Gallery Thumbnails */}
        {gallery.length > 1 && (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5, mt: 1, px: 1, pb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {gallery.map((img, idx) => (
              <Box
                key={idx}
                sx={{ border: idx === mainImgIdx ? '2px solid #3EB4FA' : '2px solid #fff', borderRadius: 1, overflow: 'hidden', width: 48, height: 36, cursor: 'pointer', boxShadow: 1, opacity: idx === mainImgIdx ? 1 : 0.7, position: 'relative' }}
                onClick={() => setMainImgIdx(idx)}
              >
                {(thumbLoading[idx] && !thumbError[idx]) && (
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                    <img src={PLACEHOLDER_IMAGE} alt="placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, borderRadius: 0, position: 'absolute', top: 0, left: 0 }} />
                    <CircularProgress size={18} sx={{ zIndex: 3 }} />
                  </Box>
                )}
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: thumbError[idx] ? 'none' : 'block' }}
                  onLoad={() => setThumbLoading(t => ({ ...t, [idx]: false }))}
                  onError={() => setThumbError(t => ({ ...t, [idx]: true }))}
                  onLoadStart={() => setThumbLoading(t => ({ ...t, [idx]: true }))}
                />
                {thumbError[idx] && (
                  <img src={PLACEHOLDER_IMAGE} alt="placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, position: 'absolute', top: 0, left: 0, zIndex: 2 }} />
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>
      {/* Card Content */}
      <Box sx={{ flex: 1, p: { xs: 2, md: 3 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem', flex: 1, minWidth: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{stay.name}</Typography>
          {/* Amenities badge */}
          <Tooltip title="Show all amenities">
            <Chip
              label={<><span style={{ color: '#1976d2', fontWeight: 600 }}>Amenities</span> <span style={{ color: '#1976d2', fontWeight: 500, marginLeft: 4 }}>+{amenities.length - 1}</span></>}
              onClick={() => setAmenitiesOpen(true)}
              sx={{ bgcolor: '#e3f2fd', color: '#1976d2', fontWeight: 600, fontSize: '1rem', px: 1.5, py: 0.5, borderRadius: 2, cursor: 'pointer' }}
            />
          </Tooltip>
        </Box>
        <Typography sx={{ color: '#444', fontSize: '1.08rem', mb: 1, minHeight: 32, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {stay.desc}
        </Typography>
        <Typography sx={{ color: '#1976d2', fontSize: '1.05rem', display: 'flex', alignItems: 'center', mb: 1 }}>
          <span className="material-icons" style={{ fontSize: 18, marginRight: 4 }}>location_on</span>
          {place?.formatted_address || stay.desc}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Rating value={place?.rating || stay.rating} precision={0.1} readOnly size="small" />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {place?.user_ratings_total || stay.user_ratings_total ? `(${place?.user_ratings_total || stay.user_ratings_total} reviews)` : ''}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, mt: 2 }}>
          <Box>
            <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#222', display: 'flex', alignItems: 'center' }}>
              {originalPrice !== price && (
                <span style={{ textDecoration: 'line-through', color: '#888', fontWeight: 500, marginRight: 8, fontSize: '1.1rem' }}>₹{originalPrice}/-</span>
              )}
              ₹{price}/-
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ bgcolor: '#ff5a1f', color: '#fff', fontWeight: 700, fontSize: '1.1rem', borderRadius: 8, px: 4, py: 1.2, boxShadow: 2, '&:hover': { bgcolor: '#e65100' } }}
            onClick={() => navigate(`/property/${location}/${category}/${stay.placeId}`)}
          >
            View
          </Button>
        </Box>
      </Box>
      {/* Amenities Dialog */}
      <AmenitiesDialog open={amenitiesOpen} onClose={() => setAmenitiesOpen(false)} available={amenities} unavailable={[]} />
    </Box>
  );
};

export default HomestayCard; 