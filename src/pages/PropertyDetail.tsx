import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, CircularProgress, Rating } from '@mui/material';
import { getPlaceDetails, getPhotoUrl, GooglePlaceDetails, GOOGLE_API_KEY } from '../utils/googlePlaces';
import { MaterialIcon } from '../components/MaterialIcon';
import BookingWidget from '../components/BookingWidget';
import { useParams } from 'react-router-dom';

const PropertyDetail: React.FC = () => {
  const { homestayIdx } = useParams<{ homestayIdx: string }>();
  const [placeDetails, setPlaceDetails] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!homestayIdx) {
      setError('No property ID provided.');
      setLoading(false);
      return;
    }
    const fetchPlaceDetails = async () => {
      try {
        const details = await getPlaceDetails(homestayIdx);
        setPlaceDetails(details);
      } catch (err) {
        setError('Failed to fetch property details. Please try again later.');
        console.error('Error fetching place details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaceDetails();
  }, [homestayIdx]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !placeDetails) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="error">{error || 'Property not found.'}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: { xs: '100vw', sm: 1200 }, mx: 'auto', p: { xs: 0.5, sm: 3 }, boxSizing: 'border-box' }}>
      {/* Image Gallery */}
      <Paper sx={{ mb: 3, borderRadius: 3, overflow: 'hidden', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', gap: 1 }}>
          {placeDetails.photos?.slice(0, 4).map((photo, idx) => (
            <Box
              key={idx}
              component="img"
              src={photo.getUrl({ maxWidth: 800 })}
              alt={`${placeDetails.name} image ${idx + 1}`}
              sx={{
                width: { xs: '100%', sm: '49%' },
                height: { xs: 220, sm: 260 },
                objectFit: 'cover',
                borderRadius: 2,
                mb: { xs: 1, sm: 0 },
              }}
            />
          ))}
        </Box>
      </Paper>

      {/* Main Info and Booking Sidebar */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 2, minWidth: 0, px: { xs: 1, sm: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.35rem', sm: '2.1rem' } }}>{placeDetails.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, fontSize: { xs: '1rem', sm: '1.15rem' } }}>{placeDetails.formatted_address}</Typography>
          
          {/* Rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={placeDetails.rating} precision={0.1} readOnly size={"medium"} />
            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
              ({placeDetails.user_ratings_total} reviews)
            </Typography>
          </Box>

          {/* Contact Info */}
          {placeDetails.formatted_phone_number && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <MaterialIcon icon="phone" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>{placeDetails.formatted_phone_number}</Typography>
            </Box>
          )}
          {placeDetails.website && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <MaterialIcon icon="language" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1" component="a" href={placeDetails.website} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                Visit Website
              </Typography>
            </Box>
          )}
        </Box>

        {/* Booking Widget and Map */}
        <Box sx={{ flex: 1, minWidth: 320, maxWidth: 400, ml: { md: 4 }, mt: { xs: 4, md: 0 }, width: { xs: '100%', sm: 'auto' } }}>
          <BookingWidget
            pricePerNight={2500}
            onBook={(bookingDetails) => {
              console.log('Booking details:', bookingDetails);
              // TODO: Implement booking logic
            }}
          />

          {/* Map Section */}
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Location</Typography>
            <Box
              component="iframe"
              src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${placeDetails.geometry.location.lat()},${placeDetails.geometry.location.lng()}`}
              sx={{
                width: '100%',
                height: { xs: 200, sm: 300 },
                border: 0,
                borderRadius: 2,
                mb: 2,
              }}
              allowFullScreen
              loading="lazy"
            />
            <Button
              variant="outlined"
              fullWidth
              href={`https://www.google.com/maps/search/?api=1&query=${placeDetails.geometry.location.lat()},${placeDetails.geometry.location.lng()}`}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<MaterialIcon icon="directions" />}
            >
              Get Directions
            </Button>
          </Paper>
        </Box>
      </Box>

      {placeDetails.reviews && placeDetails.reviews.length > 0 && (
        <Box sx={{ mt: 6, mb: 4, px: { xs: 1, sm: 0 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.15rem', sm: '1.5rem' } }}>
            Guest Reviews
          </Typography>
          {placeDetails.reviews.map((review, idx) => (
            <Paper key={idx} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>{review.author_name}</Typography>
                  <Rating value={review.rating} size="small" readOnly />
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.98rem', sm: '1rem' } }}>
                {review.text}
              </Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PropertyDetail;
