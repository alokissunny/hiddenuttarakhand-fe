import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, CircularProgress, Rating } from '@mui/material';
import { getPlaceDetails, getPhotoUrl, GooglePlaceDetails, GOOGLE_API_KEY } from '../utils/googlePlaces';
import { MaterialIcon } from '../components/MaterialIcon';
import BookingWidget from '../components/BookingWidget';
import { useParams } from 'react-router-dom';
import { OFFLINE_MODE } from '../config';

// Simple in-memory cache for place details
const placeDetailsCache: Record<string, GooglePlaceDetails> = {};

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

const MAX_IMAGE_RETRIES = 3;

const PropertyDetail: React.FC = () => {
  const { homestayIdx } = useParams<{ homestayIdx: string }>();
  const [placeDetails, setPlaceDetails] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageRetries, setImageRetries] = useState<{ [key: number]: number }>({});
  const [failedImages, setFailedImages] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    if (!homestayIdx) {
      setError('No property ID provided.');
      setLoading(false);
      return;
    }
    if (OFFLINE_MODE) {
      // Use mock data for offline mode
      setPlaceDetails({
        name: 'Mock Homestay',
        formatted_address: 'Mock Address, Uttarakhand',
        geometry: {
          location: {
            lat: () => 29.0,
            lng: () => 79.0,
          },
        },
        photos: [],
        rating: 4.5,
        user_ratings_total: 42,
        formatted_phone_number: '+91 99999 99999',
        website: '',
        opening_hours: { weekday_text: [] },
        reviews: [
          {
            author_name: 'Offline User',
            rating: 5,
            text: 'This is a mock review for offline mode.',
            time: Date.now(),
            profile_photo_url: '',
          },
        ],
      });
      setLoading(false);
      setError(null);
      return;
    }
    const fetchPlaceDetails = async () => {
      setLoading(true);
      setError(null);
      // Check cache first
      if (placeDetailsCache[homestayIdx]) {
        setPlaceDetails(placeDetailsCache[homestayIdx]);
        setLoading(false);
        return;
      }
      try {
        const details = await getPlaceDetails(homestayIdx);
        placeDetailsCache[homestayIdx] = details;
        setPlaceDetails(details);
      } catch (err: any) {
        // 429 error handling
        if (err.message && err.message.includes('OVER_QUERY_LIMIT')) {
          setError('Too many requests to Google Places. Please try again later.');
        } else {
          setError('Failed to fetch property details. Please try again later.');
        }
        setPlaceDetails(null);
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
        {/* Fallback image gallery */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
          {[1, 2, 3].map(idx => (
            <Box key={idx} component="img" src={PLACEHOLDER_IMAGE} alt="Fallback" sx={{ width: 220, height: 160, objectFit: 'cover', borderRadius: 2 }} />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: { xs: '100vw', sm: 1200 }, mx: 'auto', p: { xs: 0.5, sm: 3 }, boxSizing: 'border-box' }}>
      {/* Image Gallery */}
      <Paper sx={{ mb: 3, borderRadius: 3, overflow: 'hidden', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', gap: 1 }}>
          {placeDetails.photos?.slice(0, 4).map((photo, idx) => {
            const imageUrl = !failedImages[idx] ? photo.getUrl({ maxWidth: 800 }) : PLACEHOLDER_IMAGE;
            return (
              <Box
                key={idx}
                component="img"
                src={imageUrl}
                alt={`${placeDetails.name} image ${idx + 1}`}
                sx={{
                  width: { xs: '100%', sm: '49%' },
                  height: { xs: 220, sm: 260 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: { xs: 1, sm: 0 },
                }}
                onError={() => {
                  setImageRetries(prev => {
                    const retries = (prev[idx] || 0) + 1;
                    if (retries < MAX_IMAGE_RETRIES) {
                      // Force re-render with new src to retry
                      setTimeout(() => {
                        setImageRetries(r => ({ ...r, [idx]: retries }));
                      }, 300);
                    } else {
                      setFailedImages(f => ({ ...f, [idx]: true }));
                    }
                    return { ...prev, [idx]: retries };
                  });
                }}
              />
            );
          })}
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
