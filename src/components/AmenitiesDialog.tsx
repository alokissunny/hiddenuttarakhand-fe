import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';

export interface Amenity {
  name: string;
  icon: string;
}

interface AmenitiesDialogProps {
  open: boolean;
  onClose: () => void;
  available: Amenity[];
  unavailable: Amenity[];
}

const AmenitiesDialog: React.FC<AmenitiesDialogProps> = ({ open, onClose, available, unavailable }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>What this place offers</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Available Amenities
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2,
              '& > *': {
                flex: '0 0 calc(33.333% - 16px)',
                minWidth: '200px'
              }
            }}>
              {available.map((amenity, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span className="material-icons">{amenity.icon}</span>
                  <Typography>{amenity.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          {unavailable.length > 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Unavailable Amenities
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                '& > *': {
                  flex: '0 0 calc(33.333% - 16px)',
                  minWidth: '200px'
                }
              }}>
                {unavailable.map((amenity, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span className="material-icons">{amenity.icon}</span>
                    <Typography sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                      {amenity.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AmenitiesDialog; 