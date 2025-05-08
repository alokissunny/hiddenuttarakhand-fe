import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PROPERTY_DETAILS } from '../data/properties';
import BedroomCarousel, { Bedroom } from '../components/BedroomCarousel';
import AmenitiesDialog, { Amenity } from '../components/AmenitiesDialog';
import { Box, Typography, Button, Paper, Divider } from '@mui/material';

const amenities = [
  { name: 'Garden view', icon: 'yard' },
  { name: 'Wifi – 31 Mbps', icon: 'wifi' },
  { name: 'Courtyard view', icon: 'apartment' },
  { name: 'Dedicated workspace', icon: 'work' },
  { name: 'Shared beach access', icon: 'beach_access' },
  { name: 'Free parking on premises', icon: 'local_parking' },
  { name: 'Kitchen', icon: 'kitchen' },
  { name: 'Pets allowed', icon: 'pets' },
];
const unavailableAmenities = [
  { name: 'Air conditioning', icon: 'ac_unit' },
  { name: 'Pool', icon: 'pool' },
];
const host = {
  name: 'Anil Kumar',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  subtitle: 'Local host, passionate about Kumaon hospitality.',
};

const PropertyDetail: React.FC = () => {
  const { locationName, category, homestayIdx } = useParams<{ locationName: string; category: string; homestayIdx: string }>();
  const propertyId = `${locationName?.toLowerCase().replace(/\s+/g, '')}-${category?.toLowerCase()}-${homestayIdx}`;
  const property = propertyId ? PROPERTY_DETAILS[propertyId] : undefined;
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  if (!property) {
    return <Typography sx={{ p: 4 }}>Property not found.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 1, sm: 3 } }}>
      {/* Image Gallery */}
      <Paper sx={{ mb: 3, borderRadius: 3, overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {property.images.main.map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={img}
              alt={property.name + ' image ' + (idx + 1)}
              sx={{ width: { xs: '100%', sm: '49%' }, height: 260, objectFit: 'cover', borderRadius: 2 }}
            />
          ))}
        </Box>
      </Paper>
      {/* Main Info */}
      <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 4 }}>
        <Box sx={{ flex: 2, minWidth: 0 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>{property.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>{property.location} &bull; {property.category}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{property.description}</Typography>
          {/* Highlights */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Highlights</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {property.highlights.map((h, i) => (
                <Paper key={i} sx={{ px: 2, py: 1, borderRadius: 2, bgcolor: 'primary.light', color: 'primary.dark', fontWeight: 500, fontSize: '1rem' }}>{h}</Paper>
              ))}
            </Box>
          </Box>
          {/* Bedroom Carousel */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Where you'll sleep</Typography>
            <BedroomCarousel bedrooms={property.images.bedrooms} />
          </Box>
          {/* Amenities */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>What this place offers</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' },
              gap: 2,
              mb: 2,
            }}>
              {amenities.map((a, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span className="material-icons" style={{ color: '#E41D38', fontSize: 28 }}>{a.icon}</span>
                  <Typography sx={{ fontWeight: 500 }}>{a.name}</Typography>
                </Box>
              ))}
              {unavailableAmenities.map((a, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span className="material-icons" style={{ color: '#bdbdbd', fontSize: 28 }}>{a.icon}</span>
                  <Typography sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>{a.name}</Typography>
                </Box>
              ))}
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#E41D38',
                color: '#E41D38',
                borderRadius: 8,
                fontWeight: 600,
                px: 3,
                py: 1,
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Show all 14 amenities
            </Button>
          </Box>
          {/* Host Info */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box component="img" src={property.host.image} alt={property.host.name} sx={{ width: 64, height: 64, borderRadius: '50%' }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{property.host.name}</Typography>
              <Typography variant="body2" color="text.secondary">Host since {property.host.joinDate}</Typography>
              <Typography variant="body2" color="text.secondary">{property.host.description}</Typography>
            </Box>
          </Box>
          {/* House Rules */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>House Rules</Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {property.houseRules.map((rule, i) => (
                <li key={i}>
                  <Typography variant="body2" color="text.secondary">{rule}</Typography>
                </li>
              ))}
            </ul>
          </Box>
          {/* Cancellation Policy */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Cancellation Policy</Typography>
            <Typography variant="body2" color="text.secondary">{property.cancellationPolicy}</Typography>
          </Box>
        </Box>
        {/* Booking Sidebar */}
        <Box sx={{ flex: 1, minWidth: 320, maxWidth: 400, ml: { md: 4 }, mt: { xs: 4, md: 0 } }}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>₹{property.price.perNight.toLocaleString()} <Typography component="span" variant="body1" color="text.secondary">/ night</Typography></Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{property.rating} ★ ({property.reviewCount} reviews)</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">Cleaning fee: ₹{property.price.cleaningFee.toLocaleString()}</Typography>
            <Typography variant="body2" color="text.secondary">Service fee: ₹{property.price.serviceFee.toLocaleString()}</Typography>
            <Typography variant="body2" color="text.secondary">Taxes: ₹{property.price.taxes.toLocaleString()}</Typography>
            <Divider sx={{ my: 2 }} />
            <Button variant="contained" color="primary" fullWidth sx={{ py: 1.5, fontWeight: 600, fontSize: '1.1rem' }}>Reserve</Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetail; 