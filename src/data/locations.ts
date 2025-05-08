import type { Homestay } from '../components/HomestayCard';

export interface Location {
  name: string;
  story: {
    title: string;
    text: string;
    images: string[];
  };
  homestays: {
    Budgeted: Homestay[];
    Luxury: Homestay[];
    Treehouse: Homestay[];
  };
}

export const LOCATIONS: Location[] = [
  {
    name: 'Dunagiri',
    story: {
      title: 'Dunagiri: The Sacred Himalayan Village',
      text: 'Dunagiri is a sacred Himalayan village known for its spiritual energy, ancient temples, and pristine nature.',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      ],
    },
    homestays: {
      Budgeted: [
        { name: 'Dunagiri Budget Stay', desc: 'Affordable and peaceful.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
        { name: 'Forest View Homestay', desc: 'Simple rooms with forest views.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Village Guest House', desc: 'Experience local hospitality.', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
      ],
      Luxury: [
        { name: 'Dunagiri Retreat', desc: 'Luxury with a spiritual touch.', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
        { name: 'Himalayan Bliss Villa', desc: 'Premium stay with mountain views.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain Majesty Resort', desc: 'Elegant rooms and fine dining.', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' },
      ],
      Treehouse: [
        { name: 'Forest Canopy Treehouse', desc: 'Stay amidst the deodars.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Pine Nest Treehouse', desc: 'Unique treehouse with valley views.', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Leafy Loft', desc: 'A cozy retreat high above the ground.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      ],
    },
  },
  {
    name: 'Jageshwar Dham',
    story: {
      title: 'Jageshwar Dham: The Ancient Temple Town',
      text: 'Jageshwar Dham is a revered temple complex surrounded by deodar forests, famous for its ancient Shiva temples and tranquil setting.',
      images: [
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      ],
    },
    homestays: {
      Budgeted: [
        { name: 'Temple View Budget Stay', desc: 'Affordable stay near the temples.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
        { name: 'Forest Edge Homestay', desc: 'Simple rooms with forest views.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Pilgrim Guest House', desc: 'Experience local hospitality.', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
      ],
      Luxury: [
        { name: 'Jageshwar Retreat', desc: 'Luxury with a spiritual touch.', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
        { name: 'Deodar Bliss Villa', desc: 'Premium stay with forest views.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Temple Majesty Resort', desc: 'Elegant rooms and fine dining.', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' },
      ],
      Treehouse: [
        { name: 'Forest Canopy Treehouse', desc: 'Stay amidst the deodars.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Pine Nest Treehouse', desc: 'Unique treehouse with valley views.', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Leafy Loft', desc: 'A cozy retreat high above the ground.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      ],
    },
  },
];

export const LOCATION_TAB_CONTENT: Record<string, any> = {
  Dunagiri: {
    Overview: {
      content: [
        "Tucked away in the Kumaon Himalayas of Uttarakhand, Dunagiri is more than just a remote hill village—it's a timeless portal to spirituality, mythology, and unspoiled natural beauty. Located about 14 km from Dwarahat in the Almora district, this serene destination sits at an elevation of approximately 8,000 feet (2,400 meters) above sea level, offering unobstructed views of snow-capped peaks, dense pine forests, and ancient terraced fields that roll gently down the mountainside.",
        "Dunagiri is best known for the Dunagiri Devi Temple, a revered Shakti Peeth that draws pilgrims from all over India. This temple, believed to be over 2,500 years old, is perched atop a steep ridge and dedicated to Goddess Durga in her fierce form. The climb to the temple involves around 500 steps, but the panoramic views and powerful spiritual vibrations at the summit make every step worth the effort.",
        "According to legends, this was the region from where Hanuman carried the Sanjeevani herb to save Lakshman during the Ramayana. Locals also believe the Pandavas lived in Dunagiri during their exile. From ancient folklore about the Pandavas hiding here, to the legend that this very region was part of the mythical 'Mahabharata-era Dronagiri' from which Hanuman fetched the Sanjeevani herb—Dunagiri is drenched in mythological significance.",
        "But Dunagiri is not just a religious site—it's a spiritual epicenter. The area holds deep significance in the yogic tradition, especially for followers of Mahavatar Babaji, the immortal yogi mentioned in Paramahansa Yogananda's 'Autobiography of a Yogi'. Just a short distance from Dunagiri lies Kukuchina village, the starting point of a revered trek to Babaji's Cave, a pilgrimage for Kriya Yoga practitioners and seekers of inner transformation. This natural cave is believed to be where Babaji initiated Lahiri Mahasaya into Kriya Yoga, sparking a global spiritual movement.",
        "The charm of Dunagiri lies in its untouched, off-the-grid vibe. You won't find luxury resorts or touristy crowds here. Instead, you'll discover peaceful homestays, organic farms, chirping Himalayan birds, and warm-hearted villagers who still live in harmony with nature. The air is crisp, the nights are star-lit, and the silence—punctuated only by temple bells or the rustle of leaves—feels sacred.",
        "Whether you're a spiritual seeker, an offbeat traveler, a yogi, or simply someone looking to escape the digital noise, Dunagiri welcomes you with the kind of stillness that heals and inspires."
      ]
    },
    'How to Reach': {
      content: [
        'Reaching Dunagiri may take a bit of effort, but the journey is part of the experience. The winding roads, charming villages, and lush Himalayan landscapes prepare you for the quiet magic that awaits.',
        '<b>By Road:</b> Dunagiri is about 400 km from Delhi and around 130 km from Kathgodam. You can drive via Haldwani – Almora – Dwarahat. Roads are mostly well-maintained, especially after Almora. Buses to Almora or Ranikhet are available from Delhi and Haldwani, after which you can hire a local cab to reach Dunagiri.',
        '<b>By Train:</b> The nearest railway station is Kathgodam (KGM), about 130 km away. Kathgodam is well connected with Delhi, Lucknow, and Dehradun via overnight trains. From Kathgodam, taxis and shared jeeps are available to Almora, and then onward to Dunagiri.',
        '<b>By Air:</b> The nearest airport is Pantnagar Airport (PGH), about 160 km away. While flights are limited, taxi services from the airport to Dunagiri via Haldwani are readily available.',
        '<b>Local Tip:</b> The last stretch from Dwarahat to Dunagiri (approx. 14 km) is narrow and hilly—best to travel in daylight. If you\'re using public transport, get off at Dwarahat and ask locals or your host to arrange a taxi or pickup.'
      ]
    },
    'Things to Do': {
      content: [
        'Though small in size, Dunagiri offers a surprisingly rich range of experiences for travelers seeking peace, nature, and deeper inner journeys:',
        '<b>Visit Dunagiri Devi Temple:</b> The spiritual heart of the region. Climb 500+ steps to reach this ancient temple believed to be a powerful Shakti Peeth. The panoramic views and spiritual energy are transformative.',
        '<b>Yoga & Meditation Retreats:</b> Dunagiri is home to a few retreat centers that follow ancient yogic traditions. Many visitors come here to practice Kriya Yoga, silent meditation, or detox from urban life.',
        "<b>Trek to Mahavatar Babaji's Cave:</b> Located in nearby Kukuchina village, this moderate trek leads to the cave where Babaji is believed to have appeared to Lahiri Mahasaya. A powerful spiritual site for followers of Yogananda.",
        '<b>Nature Walks & Forest Trails:</b> Explore cedar and pine forests, untouched meadows, and terraced fields. Perfect for morning walks, journaling, or mindful photography.',
        '<b>Local Village Interaction:</b> Visit nearby villages like Tarkot, Kukuchina, where you can engage with local crafts, organic farming, and the slow lifestyle of Kumaon hills.',
        '<b>Birdwatching:</b> Spot Himalayan species like the Himalayan monal, laughing thrush, sunbirds, and barbets in the dense foliage around.'
      ]
    },
    'Travel Tips': {
      content: [
        '• Weather: Pleasant in summer, cold in winter. Carry warm clothes.',
        '• Safety: Respect local customs and temple rules.',
        '• Permits: No special permits needed.',
        '• Network: BSNL and Jio work best. WiFi available in some homestays.'
      ]
    },
    'Connectivity & Internet': {
      content: [
        'Dunagiri is ideal for a digital detox, but here\'s what to expect if you need to stay connected:',
        '<b>Mobile Networks:</b> Jio, Airtel and BSNL have patchy coverage.',
        '<b>Internet Access:</b> Wi-Fi may be available in select homestays or spiritual centers, but speeds are slow (basic browsing or emails only).',
        '<b>Power Supply:</b> Electricity is mostly stable, but occasional cuts happen. Carry a power bank or solar charger.',
        '<b>Offline Maps:</b> Download Google Maps or offline GPS navigation beforehand—signal often drops in the final 10 km stretch.'
      ]
    },
    'Travel Stories / Experiences': {
      stories: [
        {
          user: '',
          text: `A Solo Journey into the Mist: Discovering Dunagiri, My Hidden Home\nAs someone born and raised in Kumaon, I thought I had seen most of what my homeland had to offer. Yet, nothing prepared me for the magic that unfolded when I stumbled upon Dunagiri—a place I had never even heard of until this journey.\nThis wasn't a planned destination. I was on a solo road trip, chasing the quiet corners of Kumaon, hoping to escape the noise of city life and the overly touristy trails of Nainital and Mukteshwar. I only knew I wanted stillness, solitude, and something raw. Somewhere between Dwarahat and Almora, a soft rain began to fall, and I noticed a barely marked board that read "Dunagiri." Something about it pulled me in. I turned the wheel, and that one decision changed everything.\nThe drive up to Dunagiri was surreal. Narrow forested roads curled around deep valleys, mist dancing between the trees like mountain spirits. Rain glazed the windshield, the wipers beating a slow rhythm, and I was completely alone—no network, no music, just the hum of my car and the whispers of pine.\nWhen I finally reached the village, the clouds had descended. Dunagiri was wrapped in a thick fog that made everything feel dreamlike. The only sounds were the distant ringing of temple bells and birds chirping between raindrops. I had no idea what to expect, but I followed a small group of locals climbing steep steps through the forest. They were heading to the Dunagiri Devi Temple, and I joined them without question.\nThe climb was meditative. Each step into the fog felt like a step inward. And when I reached the top, I saw her—the goddess of Dunagiri, powerful and silent in her stone sanctum. The air felt electric. A bhandara (community meal) was being served, and I sat with strangers who felt like kin, eating simple prasad as the wind howled and the clouds swirled around us.\nLater, I explored Dunagiri Retreat, a serene property nestled in the heart of the forest. It wasn't just a place to stay—it was a sanctuary. Wooden cottages, earthy aesthetics, and a calm that seeped into your bones. I stayed for two nights, waking to the sound of birds and falling asleep to complete silence. No phone calls, no screens—just trees, fog, and stillness.\nDunagiri didn't feel like a destination—it felt like a discovery. It reminded me that even as locals, we often miss the soul of our own land. It's not always marked on maps or trending on social media. Sometimes, it's found on a rainy road, in the middle of nowhere, where the only thing guiding you is your heart.`
        }
      ]
    }
  },
  'Jageshwar Dham': {
    Overview: {
      content: [
        "Nestled in the shadowy embrace of thick deodar forests, Jageshwar Dham is one of Uttarakhand's most ancient and spiritually powerful destinations. Located about 35 km from Almora in the Kumaon region, this mystical valley is home to a cluster of over 124 stone temples, some dating back to the 7th century. These temples, dedicated primarily to Lord Shiva, lie alongside the sacred Jataganga stream and emit an energy that is deeply grounding and otherworldly.",
        "Jageshwar is believed to be the eighth Jyotirlinga, though this is debated among scholars. Legends say that Lord Shiva meditated here for centuries, and the presence of divine energies is palpable the moment you step into this timeless space. The valley is enveloped by ancient cedars, creating a cathedral-like canopy that filters light in the most magical ways.",
        "Whether you come here for darshan, meditation, or solitude, Jageshwar holds space for inner reflection, stillness, and deep spiritual resonance.",
        "<b>Vridh Jageshwar – The Hilltop Abode of Mahadev</b>",
        "Located about 3 km uphill from Jageshwar Dham, Vridh Jageshwar (also called 'Old Jageshwar') is a lesser-known but incredibly sacred site. Believed to be older than the main Jageshwar complex, this temple sits at a scenic altitude of over 7,000 feet and offers breathtaking panoramic views of the Himalayan range, including peaks like Nanda Devi and Trishul on clear days.",
        "The walk to Vridh Jageshwar is a serene forest trail—a quiet 1-hour trek through whispering deodars and chirping Himalayan birds. The temple, though smaller in scale, has an aura of age-old mystery. Locals say Lord Shiva first manifested here before descending to the Jageshwar valley below.",
        "If you're seeking silence, inspiration, or a meditative mountain sunrise, Vridh Jageshwar is the place to be."
      ]
    },
    'How to Reach': {
      content: [
        'Nearest airport: Pantnagar (150km).',
        'Nearest railway: Kathgodam (125km).',
        'Taxis and buses available from Almora.',
        'The temple complex is easily accessible by road.'
      ]
    },
    'Things to Do': {
      content: [
        '• Visit the Jageshwar Temple Complex',
        '• Forest walks and nature trails',
        '• Photography and sketching',
        '• Attend the annual monsoon festival',
        '• Explore nearby villages and local markets',
      ]
    },
    'Travel Tips': {
      content: [
        '• Weather: Cool and pleasant. Carry light woolens.',
        '• Safety: Maintain silence in temple premises.',
        '• Permits: No permits required.',
        '• Network: BSNL and Jio work well. WiFi in some hotels.'
      ]
    },
    'Connectivity & Internet': {
      content: [
        'BSNL and Jio have good coverage. Airtel is fair.',
        'WiFi available in some hotels and guesthouses.'
      ]
    },
    'Travel Stories / Experiences': {
      stories: [
        { user: 'Rohit K.', text: 'The temple complex is mesmerizing, especially during the morning aarti.' },
        { user: 'Priya M.', text: 'Walking in the deodar forest was a highlight of my trip.' }
      ]
    }
  }
}; 