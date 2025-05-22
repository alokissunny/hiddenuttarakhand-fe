import axios from 'axios';

declare global {
  interface Window {
    google: any;
  }
}

export const GOOGLE_API_KEY = 'AIzaSyDbNJklY3rDk4Q7Gl4_oTNdTySm37QsjFs';

export interface GooglePlaceDetails {
  name: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  photos: Array<{
    getUrl: (options: { maxWidth: number }) => string;
  }>;
  rating: number;
  user_ratings_total: number;
  formatted_phone_number: string;
  website: string;
  opening_hours: {
    weekday_text: string[];
  };
  reviews: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
  }>;
}

// Cache for place details
const placeDetailsCache: Record<string, GooglePlaceDetails> = {};
const CACHE_EXPIRY = 1000 * 60 * 60; // 1 hour
const cacheTimestamps: Record<string, number> = {};

export const getPlaceDetails = async (placeId: string): Promise<GooglePlaceDetails> => {
  // Check cache first
  const now = Date.now();
  if (placeDetailsCache[placeId] && cacheTimestamps[placeId] && (now - cacheTimestamps[placeId] < CACHE_EXPIRY)) {
    return placeDetailsCache[placeId];
  }

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,rating,user_ratings_total,photos,reviews&key=${GOOGLE_API_KEY}`
  );
  const data = await response.json();
  
  if (data.status === 'OK') {
    // Update cache
    placeDetailsCache[placeId] = data.result;
    cacheTimestamps[placeId] = now;
    return data.result;
  }
  throw new Error('Failed to fetch place details');
};

export function getPhotoUrl(photo: any, maxWidth: number = 800): string {
  return photo.getUrl({ maxWidth });
} 