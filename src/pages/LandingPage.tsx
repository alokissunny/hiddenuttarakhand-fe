import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import InteractiveIndiaMap from '../components/InteractiveIndiaMap';

const stateDetails: Record<string, string> = {
  'INAN': 'Andaman and Nicobar Islands are known for their pristine beaches and rich marine life.',
  'INTG': 'Telangana is known for its rich cultural heritage and modern tech industry.',
  'INAP': 'Andhra Pradesh is known for its spicy cuisine and rich history.',
  'INAR': 'Arunachal Pradesh is known for its diverse tribal cultures and natural beauty.',
  'INAS': 'Assam is known for its tea plantations and rich cultural heritage.',
  'INBR': 'Bihar is known for its ancient history and religious sites.',
  'INCH': 'Chandigarh is known for its well-planned architecture and modern lifestyle.',
  'INCT': 'Chhattisgarh is known for its dense forests and tribal culture.',
  'INDL': 'Delhi is the capital of India and is known for its historical monuments and vibrant culture.',
  'INGA': 'Goa is known for its beaches, nightlife, and Portuguese heritage.',
  'INGJ': 'Gujarat is known for its business-friendly environment and rich cultural history.',
  'INHR': 'Haryana is known for its agricultural output and industrial growth.',
  'INHP': 'Himachal Pradesh is known for its scenic beauty and adventure tourism.',
  'INJK': 'Jammu and Kashmir is known for its stunning landscapes and rich cultural heritage.',
  'INJH': 'Jharkhand is known for its mineral resources and tribal culture.',
  'INKA': 'Karnataka is known for its ancient temples, coffee plantations, and tech hub Bangalore.',
  'INKL': 'Kerala is known for its backwaters, beaches, and lush landscapes.',
  'INMP': 'Madhya Pradesh is known for its ancient monuments and wildlife sanctuaries.',
  'INMH': 'Maharashtra is home to Mumbai, the financial capital of India, and is known for its diverse culture and cuisine.',
  'INMN': 'Manipur is known for its unique culture and natural beauty.',
  'INML': 'Meghalaya is known for its living root bridges and scenic beauty.',
  'INMZ': 'Mizoram is known for its scenic landscapes and vibrant culture.',
  'INNL': 'Nagaland is known for its tribal festivals and rich cultural heritage.',
  'INOR': 'Odisha is known for its ancient temples and tribal culture.',
  'INPB': 'Punjab is known for its vibrant culture, cuisine, and agricultural prosperity.',
  'INPY': 'Puducherry is known for its French colonial architecture and serene beaches.',
  'INRJ': 'Rajasthan is famous for its rich cultural heritage, palaces, and vibrant festivals.',
  'INSK': 'Sikkim is known for its Buddhist culture and scenic beauty.',
  'INTN': 'Tamil Nadu is famous for its Dravidian-style Hindu temples and classical arts.',
  'INTR': 'Tripura is known for its rich cultural heritage and natural beauty.',
  'INUP': 'Uttar Pradesh is home to the Taj Mahal and is known for its rich cultural heritage.',
  'INUT': 'Uttarakhand is known for its scenic beauty and is often called the "Land of the Gods" due to its numerous Hindu temples and pilgrimage centers.',
  'INWB': 'West Bengal is known for its literary and cultural heritage, and the city of Kolkata.',
};

const LandingPage: React.FC = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  console.log('Hovered State:', hoveredState);
  console.log('State Details:', stateDetails);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
        p: 3,
      }}
    >
      <Box sx={{ flex: 1, mr: 2 }}>
        <InteractiveIndiaMap onStateHover={setHoveredState} />
      </Box>
      <Box sx={{ flex: 1, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
        <Typography variant="h6">Hovered State: {hoveredState || 'None'}</Typography>
        <Typography variant="body1">
          {hoveredState ? stateDetails[hoveredState] || 'No information available.' : 'Hover over a state to see information.'}
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage; 