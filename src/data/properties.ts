import { Amenity } from '../components/AmenitiesDialog';

export interface PropertyDetail {
  id: string;
  name: string;
  location: string;
  category: 'Budgeted' | 'Luxury' | 'Treehouse';
  description: string;
  price: {
    perNight: number;
    cleaningFee: number;
    serviceFee: number;
    taxes: number;
  };
  rating: number;
  reviewCount: number;
  images: {
    main: string[];
    bedrooms: {
      name: string;
      images: string[];
      description: string;
    }[];
  };
  host: {
    name: string;
    image: string;
    joinDate: string;
    responseTime: string;
    responseRate: number;
    description: string;
  };
  amenities: {
    available: Amenity[];
    unavailable: Amenity[];
  };
  highlights: string[];
  houseRules: string[];
  cancellationPolicy: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const PROPERTY_DETAILS: Record<string, PropertyDetail> = {
  'dunagiri-budget-1': {
    id: 'dunagiri-budget-1',
    name: 'Dunagiri Budget Stay',
    location: 'Dunagiri',
    category: 'Budgeted',
    description: 'A peaceful retreat nestled in the heart of Dunagiri village, offering stunning views of the Himalayas and a perfect blend of comfort and local culture. This traditional Kumaoni-style homestay provides an authentic mountain experience with modern amenities.',
    price: {
      perNight: 2500,
      cleaningFee: 500,
      serviceFee: 300,
      taxes: 200,
    },
    rating: 4.8,
    reviewCount: 124,
    images: {
      main: [
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80',
      ],
      bedrooms: [
        {
          name: 'Mountain View Room',
          images: [
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
          ],
          description: 'Cozy room with panoramic mountain views, traditional wooden furniture, and attached bathroom.',
        },
        {
          name: 'Garden Room',
          images: [
            'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
          ],
          description: 'Peaceful room overlooking the organic garden, perfect for nature lovers.',
        },
      ],
    },
    host: {
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      joinDate: 'March 2020',
      responseTime: 'within an hour',
      responseRate: 98,
      description: 'Born and raised in Dunagiri, I love sharing the beauty and culture of my village with travelers. I\'m passionate about sustainable tourism and local traditions.',
    },
    amenities: {
      available: [
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Kitchen', icon: 'kitchen' },
        { name: 'Free parking', icon: 'local_parking' },
        { name: 'Heating', icon: 'thermostat' },
        { name: 'Washer', icon: 'local_laundry_service' },
        { name: 'TV', icon: 'tv' },
        { name: 'First aid kit', icon: 'medical_services' },
        { name: 'Fire extinguisher', icon: 'local_fire_department' },
        { name: 'Smoke alarm', icon: 'smoke_detector' },
        { name: 'Garden', icon: 'yard' },
      ],
      unavailable: [
        { name: 'Air conditioning', icon: 'ac_unit' },
        { name: 'Pool', icon: 'pool' },
        { name: 'Hot tub', icon: 'hot_tub' },
        { name: 'Gym', icon: 'fitness_center' },
      ],
    },
    highlights: [
      'Stunning views of the Himalayas',
      'Traditional Kumaoni architecture',
      'Organic garden with fresh produce',
      'Peaceful location away from tourist crowds',
      'Authentic local cuisine',
      'Guided village walks available',
    ],
    houseRules: [
      'No smoking inside the property',
      'No parties or events',
      'Quiet hours from 10 PM to 7 AM',
      'Pets not allowed',
      'Please remove shoes before entering',
    ],
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. 50% refund for cancellations within 48 hours of check-in.',
    coordinates: {
      lat: 29.8024,
      lng: 79.4567,
    },
  },
  'jageshwar-luxury-1': {
    id: 'jageshwar-luxury-1',
    name: 'Jageshwar Retreat',
    location: 'Jageshwar Dham',
    category: 'Luxury',
    description: 'An elegant retreat surrounded by ancient deodar forests, offering luxury accommodations with a spiritual touch. This property combines modern comfort with traditional architecture, providing a perfect base for exploring the sacred temples of Jageshwar.',
    price: {
      perNight: 8500,
      cleaningFee: 1000,
      serviceFee: 800,
      taxes: 600,
    },
    rating: 4.9,
    reviewCount: 89,
    images: {
      main: [
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80',
      ],
      bedrooms: [
        {
          name: 'Temple View Suite',
          images: [
            'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
          ],
          description: 'Luxurious suite with views of the ancient temples, featuring a king-size bed and private balcony.',
        },
        {
          name: 'Forest Suite',
          images: [
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
          ],
          description: 'Elegant suite surrounded by deodar trees, with a spacious bathroom and sitting area.',
        },
      ],
    },
    host: {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      joinDate: 'January 2021',
      responseTime: 'within 30 minutes',
      responseRate: 100,
      description: 'A hospitality professional with 15 years of experience, I\'m dedicated to providing exceptional stays that combine luxury with spiritual wellness.',
    },
    amenities: {
      available: [
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Kitchen', icon: 'kitchen' },
        { name: 'Free parking', icon: 'local_parking' },
        { name: 'Heating', icon: 'thermostat' },
        { name: 'Washer', icon: 'local_laundry_service' },
        { name: 'TV', icon: 'tv' },
        { name: 'First aid kit', icon: 'medical_services' },
        { name: 'Fire extinguisher', icon: 'local_fire_department' },
        { name: 'Smoke alarm', icon: 'smoke_detector' },
        { name: 'Garden', icon: 'yard' },
        { name: 'Air conditioning', icon: 'ac_unit' },
        { name: 'Hot tub', icon: 'hot_tub' },
        { name: 'Yoga deck', icon: 'self_improvement' },
        { name: 'Meditation room', icon: 'spa' },
      ],
      unavailable: [
        { name: 'Pool', icon: 'pool' },
        { name: 'Gym', icon: 'fitness_center' },
      ],
    },
    highlights: [
      'Views of ancient temples',
      'Surrounded by deodar forest',
      'Private meditation spaces',
      'Luxury spa services available',
      'Fine dining restaurant',
      'Guided temple tours included',
    ],
    houseRules: [
      'No smoking inside the property',
      'No parties or events',
      'Quiet hours from 10 PM to 7 AM',
      'Pets not allowed',
      'Please remove shoes before entering',
      'Respect the spiritual atmosphere',
    ],
    cancellationPolicy: 'Free cancellation up to 7 days before check-in. 50% refund for cancellations within 7 days of check-in.',
    coordinates: {
      lat: 29.6504,
      lng: 79.5447,
    },
  },
  'dunagiri-budgeted-0': {
    id: 'dunagiri-budgeted-0',
    name: 'Dunagiri Budget Stay',
    location: 'Dunagiri',
    category: 'Budgeted',
    description: 'Affordable and peaceful.',
    price: { perNight: 2000, cleaningFee: 300, serviceFee: 200, taxes: 150 },
    rating: 4.7,
    reviewCount: 45,
    images: {
      main: ['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'],
      bedrooms: [
        { name: 'Cozy Room', images: ['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'], description: 'Comfortable room with basic amenities.' },
      ],
    },
    host: {
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      joinDate: 'March 2020',
      responseTime: 'within an hour',
      responseRate: 98,
      description: 'Friendly local host.',
    },
    amenities: {
      available: [
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Free parking', icon: 'local_parking' },
        { name: 'Heating', icon: 'thermostat' },
      ],
      unavailable: [
        { name: 'Air conditioning', icon: 'ac_unit' },
      ],
    },
    highlights: ['Peaceful location', 'Great value'],
    houseRules: ['No smoking', 'No parties'],
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in.',
    coordinates: { lat: 29.8024, lng: 79.4567 },
  },
  'dunagiri-budgeted-1': {
    id: 'dunagiri-budgeted-1',
    name: 'Forest View Homestay',
    location: 'Dunagiri',
    category: 'Budgeted',
    description: 'Simple rooms with forest views.',
    price: { perNight: 2100, cleaningFee: 300, serviceFee: 200, taxes: 150 },
    rating: 4.6,
    reviewCount: 38,
    images: {
      main: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'],
      bedrooms: [
        { name: 'Forest Room', images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'], description: 'Room with a view of the forest.' },
      ],
    },
    host: {
      name: 'Meena Devi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      joinDate: 'April 2019',
      responseTime: 'within 2 hours',
      responseRate: 95,
      description: 'Nature-loving host.',
    },
    amenities: {
      available: [
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Free parking', icon: 'local_parking' },
      ],
      unavailable: [
        { name: 'Air conditioning', icon: 'ac_unit' },
      ],
    },
    highlights: ['Forest views', 'Quiet area'],
    houseRules: ['No smoking', 'No pets'],
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in.',
    coordinates: { lat: 29.8024, lng: 79.4567 },
  },
  'dunagiri-budgeted-2': {
    id: 'dunagiri-budgeted-2',
    name: 'Village Guest House',
    location: 'Dunagiri',
    category: 'Budgeted',
    description: 'Experience local hospitality.',
    price: { perNight: 1800, cleaningFee: 250, serviceFee: 150, taxes: 100 },
    rating: 4.5,
    reviewCount: 29,
    images: {
      main: ['https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80'],
      bedrooms: [
        { name: 'Guest Room', images: ['https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'], description: 'Simple, clean room with local decor.' },
      ],
    },
    host: {
      name: 'Sita Devi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      joinDate: 'June 2018',
      responseTime: 'within a few hours',
      responseRate: 95,
      description: 'Welcoming family host.',
    },
    amenities: {
      available: [
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Free parking', icon: 'local_parking' },
      ],
      unavailable: [
        { name: 'Air conditioning', icon: 'ac_unit' },
      ],
    },
    highlights: ['Local hospitality', 'Home-cooked meals'],
    houseRules: ['No smoking', 'Quiet hours after 10 PM'],
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in.',
    coordinates: { lat: 29.8024, lng: 79.4567 },
  },
}; 