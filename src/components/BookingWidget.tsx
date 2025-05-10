import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { addDays, differenceInDays } from 'date-fns';
import { MaterialIcon } from './MaterialIcon';

interface BookingWidgetProps {
  pricePerNight: number;
  cleaningFee?: number;
  serviceFee?: number;
  taxes?: number;
  onBook?: (bookingDetails: {
    checkIn: Date;
    checkOut: Date;
    guests: number;
    total: number;
  }) => void;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({
  pricePerNight,
  cleaningFee = 500,
  serviceFee = 300,
  taxes = 200,
  onBook,
}) => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const subtotal = nights * pricePerNight;
  const total = subtotal + cleaningFee + serviceFee + taxes;

  const handleBook = () => {
    if (checkIn && checkOut && onBook) {
      onBook({
        checkIn,
        checkOut,
        guests,
        total,
      });
    }
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        ₹{pricePerNight.toLocaleString()}{' '}
        <Typography component="span" variant="body1" color="text.secondary">
          / night
        </Typography>
      </Typography>

      {/* Date Selection */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <DatePicker
            label="Check-in"
            value={checkIn}
            onChange={(newValue: Date | null) => setCheckIn(newValue)}
            minDate={new Date()}
            maxDate={checkOut || undefined}
            slotProps={{ textField: { fullWidth: true } }}
          />
          <DatePicker
            label="Check-out"
            value={checkOut}
            onChange={(newValue: Date | null) => setCheckOut(newValue)}
            minDate={checkIn || addDays(new Date(), 1)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Box>
      </LocalizationProvider>

      {/* Guest Selection */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Guests
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            p: 1,
          }}
        >
          <IconButton
            onClick={() => setGuests(Math.max(1, guests - 1))}
            size="small"
          >
            <MaterialIcon icon="remove" />
          </IconButton>
          <Typography sx={{ flex: 1, textAlign: 'center' }}>
            {guests} {guests === 1 ? 'guest' : 'guests'}
          </Typography>
          <IconButton onClick={() => setGuests(guests + 1)} size="small">
            <MaterialIcon icon="add" />
          </IconButton>
        </Box>
      </Box>

      {/* Price Breakdown */}
      {nights > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
            >
              <span>
                ₹{pricePerNight.toLocaleString()} × {nights} nights
              </span>
              <span>₹{subtotal.toLocaleString()}</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
            >
              <span>Cleaning fee</span>
              <span>₹{cleaningFee.toLocaleString()}</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
            >
              <span>Service fee</span>
              <span>₹{serviceFee.toLocaleString()}</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
            >
              <span>Taxes</span>
              <span>₹{taxes.toLocaleString()}</span>
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="subtitle1"
            sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, mb: 2 }}
          >
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </Typography>
        </>
      )}

      {/* Book Button */}
      <Button
        variant="contained"
        fullWidth
        size="large"
        disabled
        sx={{
          py: 1.5,
          fontWeight: 600,
          fontSize: '1.1rem',
          textTransform: 'none',
          borderRadius: 2,
        }}
      >
        Booking Coming Soon
      </Button>
    </Paper>
  );
};

export default BookingWidget; 