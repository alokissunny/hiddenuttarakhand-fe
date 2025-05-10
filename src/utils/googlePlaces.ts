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

export function getPlaceDetails(placeId: string): Promise<GooglePlaceDetails> {
  return new Promise((resolve, reject) => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    
    service.getDetails(
      {
        placeId: placeId,
        fields: ['name', 'formatted_address', 'geometry', 'photos', 'rating', 'user_ratings_total', 
                'formatted_phone_number', 'website', 'opening_hours', 'reviews']
      },
      (place: GooglePlaceDetails, status: string) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(place);
        } else {
          reject(new Error(`Place details request failed: ${status}`));
        }
      }
    );
  });
}

export function getPhotoUrl(photo: any, maxWidth: number = 800): string {
  return photo.getUrl({ maxWidth });
} 