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
  {
    name: 'Shitlakhet',
    story: {
      title: 'Shitlakhet: The Serene Hill Village',
      text: 'Shitlakhet is a charming hill village in the Kumaon region, known for its apple orchards, organic farms, and the sacred Syahi Devi Temple.',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      ],
    },
    homestays: {
      Budgeted: [
        { name: 'Apple Orchard Stay', desc: 'Affordable stay amidst apple orchards.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain View Homestay', desc: 'Simple rooms with mountain views.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Village Guest House', desc: 'Experience local Kumaoni hospitality.', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
      ],
      Luxury: [
        { name: 'Shitlakhet Retreat', desc: 'Luxury with panoramic views.', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
        { name: 'Himalayan Bliss Villa', desc: 'Premium stay with valley views.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain Majesty Resort', desc: 'Elegant rooms and fine dining.', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' },
      ],
      Treehouse: [
        { name: 'Forest Canopy Treehouse', desc: 'Stay amidst the pines.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Pine Nest Treehouse', desc: 'Unique treehouse with valley views.', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Leafy Loft', desc: 'A cozy retreat high above the ground.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      ],
    },
  },
  {
    name: 'Kausani Estate',
    story: {
      title: 'Kausani Estate: The Heritage Tea Gardens',
      text: 'Kausani Estate is a serene retreat within the famous Kausani region, known for its tea gardens, heritage bungalows, and panoramic views of Nanda Devi and Trishul peaks.',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      ],
    },
    homestays: {
      Budgeted: [
        { name: 'Tea Garden View Stay', desc: 'Affordable stay with garden views.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
        { name: 'Estate Guest House', desc: 'Simple rooms in heritage setting.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain View Lodge', desc: 'Experience colonial charm.', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
      ],
      Luxury: [
        { name: 'Heritage Bungalow', desc: 'Luxury in colonial architecture.', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
        { name: 'Tea Estate Villa', desc: 'Premium stay with mountain views.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Estate Majesty Resort', desc: 'Elegant rooms and fine dining.', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' },
      ],
      Treehouse: [
        { name: 'Tea Garden Treehouse', desc: 'Stay amidst the tea gardens.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain Nest Treehouse', desc: 'Unique treehouse with valley views.', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Leafy Loft', desc: 'A cozy retreat high above the ground.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      ],
    },
  },
  {
    name: 'Sunargaon Kanda',
    story: {
      title: 'Sunargaon Kanda: The Hidden Himalayan Hamlet',
      text: 'Sunargaon is a peaceful hamlet in Bageshwar district, known for its terraced fields, whispering deodars, and timeless village life, offering a perfect escape for solitude-seekers and nature lovers.',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      ],
    },
    homestays: {
      Budgeted: [
        { name: 'Village Homestay', desc: 'Experience authentic Kumaoni life.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain View Lodge', desc: 'Simple rooms with valley views.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Forest Edge Stay', desc: 'Stay amidst pine forests.', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
      ],
      Luxury: [
        { name: 'Himalayan Retreat', desc: 'Luxury with panoramic views.', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
        { name: 'Valley View Villa', desc: 'Premium stay with mountain vistas.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain Majesty Resort', desc: 'Elegant rooms and fine dining.', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' },
      ],
      Treehouse: [
        { name: 'Pine Forest Treehouse', desc: 'Stay amidst the deodars.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Valley Nest Treehouse', desc: 'Unique treehouse with mountain views.', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Leafy Loft', desc: 'A cozy retreat high above the ground.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      ],
    },
  },
  {
    name: 'Katarmal',
    story: {
      title: 'Katarmal: The Ancient Sun Temple Village',
      text: 'Katarmal is a historic village in Almora district, home to one of India\'s oldest Surya temples from the 9th century, surrounded by 44 subsidiary shrines and offering a glimpse into ancient Kumaoni architecture and culture.',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      ],
    },
    homestays: {
      Budgeted: [
        { name: 'Temple View Stay', desc: 'Affordable stay near the ancient temple.', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
        { name: 'Village Homestay', desc: 'Experience traditional Kumaoni life.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Forest Edge Lodge', desc: 'Simple rooms with forest views.', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
      ],
      Luxury: [
        { name: 'Heritage Villa', desc: 'Luxury stay with temple views.', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mountain View Resort', desc: 'Premium stay with valley vistas.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Ancient Temple Resort', desc: 'Elegant rooms and fine dining.', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' },
      ],
      Treehouse: [
        { name: 'Deodar Treehouse', desc: 'Stay amidst ancient forests.', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
        { name: 'Temple View Treehouse', desc: 'Unique treehouse with temple views.', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Forest Canopy', desc: 'A cozy retreat high above the ground.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
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
  },
  'Shitlakhet': {
    Overview: {
      content: [
        "Tucked away in the Kumaon region of Uttarakhand, Shitlakhet is a charming hill village that exudes tranquility and natural beauty. Located around 25 km from Almora, this serene destination sits at an elevation of approximately 6,000 feet (1,830 meters) above sea level, offering panoramic views of the Himalayas, lush pine forests, and verdant terraced fields that cascade down the slopes.",
        "Shitlakhet is often considered an offbeat destination, perfect for travelers seeking solitude and a connection with nature. The village is known for its apple orchards, organic farms, and simple village life, allowing visitors to experience the slow-paced rhythm of rural Kumaon. Locals believe that the area has been inhabited for centuries, and ancient temples and shrines in and around the village add to its spiritual allure.",
        "One of the notable spots is the Syahi Devi Temple, perched on a hilltop and offering breathtaking views of snow-clad peaks. The temple is dedicated to Goddess Durga, worshipped here as Syahi Devi, and is a pilgrimage site for local villagers. The trail leading to the temple passes through dense forests of oak and pine, making it a favorite among trekkers and nature enthusiasts.",
        "Life in Shitlakhet revolves around agriculture and traditional crafts. The local Kumaoni community practices organic farming and animal husbandry, and their handmade woolens and crafts are a testament to their heritage. Festivals like Nanda Devi Mela and local fairs are celebrated with enthusiasm, blending spirituality with cultural vibrancy.",
        "Shitlakhet holds spiritual importance due to the Syahi Devi Temple, revered as a Shakti Peeth in the local tradition. Legends tell of sages meditating here in ancient times, seeking blessings from the goddess. The temple, located about 4 km from the village center, is accessible via a scenic forest trail. Pilgrims and trekkers alike find solace at this hilltop shrine."
      ]
    },
    'How to Reach': {
      content: [
        '<b>By Road:</b> Shitlakhet is about 375 km from Delhi and approximately 25 km from Almora. You can drive via Haldwani – Almora. Buses to Almora are available from Delhi and Haldwani, from where local taxis can be hired to reach Shitlakhet.',
        '<b>By Train:</b> The nearest railway station is Kathgodam (KGM), about 90 km away. Kathgodam is well connected to major cities like Delhi. From there, taxis or shared jeeps can be taken to Almora and onward to Shitlakhet.',
        '<b>By Air:</b> Pantnagar Airport (PGH), approximately 130 km from Shitlakhet, is the nearest airport. Taxis from the airport to Almora and then to Shitlakhet are readily available.',
        '<b>Local Tip:</b> The roads are narrow and winding near Shitlakhet—travel during daylight for a safer journey.'
      ]
    },
    'Things to Do': {
      content: [
        '<b>Visit Syahi Devi Temple:</b> A must-visit for spiritual seekers, offering mesmerizing sunrise views over the Himalayas.',
        '<b>Village Walks:</b> Explore the rustic charm of Shitlakhet through guided village tours. Learn about organic farming and interact with locals.',
        '<b>Nature Trails:</b> Trek through pine and oak forests to nearby hamlets or picnic spots with panoramic vistas.',
        '<b>Birdwatching:</b> Spot colorful Himalayan birds like the yellow-billed blue magpie, hill myna, and bulbuls.',
        '<b>Cultural Experience:</b> Participate in local festivals and try traditional Kumaoni meals prepared with farm-fresh ingredients.'
      ]
    },
    'Travel Tips': {
      content: [
        '• Carry cash as ATMs are sparse.',
        '• Pack warm clothes, especially in winter months.',
        '• Bring your own toiletries and essentials as shops are limited.',
        '• Respect local customs and dress modestly when visiting temples.',
        '• Stay hydrated and carry reusable bottles as bottled water may not be available everywhere.'
      ]
    },
    'Connectivity & Internet': {
      content: [
        '<b>Mobile Networks:</b> Jio, Airtel, and BSNL have limited coverage.',
        '<b>Internet Access:</b> Wi-Fi may be available at some homestays, but speeds are slow.',
        '<b>Power Supply:</b> Electricity is generally reliable, though power cuts can occur, especially during rain.',
        '<b>Offline Maps:</b> Download maps beforehand for hassle-free navigation.'
      ]
    },
    'Travel Stories / Experiences': {
      stories: [
        {
          user: 'Local Explorer',
          text: 'The morning trek to Syahi Devi Temple was magical, with mist rolling over the valley and the first rays of sun touching the snow peaks. The temple itself has an aura of ancient wisdom, and the views from the top are simply breathtaking. The village life here is so peaceful - waking up to the sound of birds, helping locals in their apple orchards, and enjoying authentic Kumaoni meals. It\'s a perfect escape from city life.'
        }
      ]
    }
  },
  'Kausani Estate': {
    Overview: {
      content: [
        "Nestled within the scenic beauty of the Kumaon Himalayas, Kausani Estate is a lesser-known gem within the famous Kausani region, offering an intimate connection with nature and a slower pace of life. Unlike the bustling tourist areas of Kausani, the estate area remains peaceful and secluded, making it a perfect retreat for those seeking tranquility and a deeper connection with the environment.",
        "Located just a few kilometers from the main town, Kausani Estate is characterized by its sprawling tea gardens, old British-era bungalows, and unobstructed views of the majestic Nanda Devi and Trishul peaks. The lush greenery and well-preserved heritage buildings tell tales of a bygone era when Kausani was a summer retreat for the British.",
        "One of the most iconic spots within the estate is the Anashakti Ashram, where Mahatma Gandhi spent a few days in 1929. Today, it serves as a small museum and a place for quiet reflection. The estate's natural beauty, combined with its historical charm, makes it a unique destination within Kausani."
      ]
    },
    'How to Reach': {
      content: [
        '<b>By Road:</b> Kausani Estate is about 420 km from Delhi and 60 km from Almora. You can drive via Haldwani – Almora – Kausani. Buses from Delhi to Almora are available, and from Almora, local taxis can take you to Kausani Estate.',
        '<b>By Train:</b> The nearest railway station is Kathgodam (KGM), about 140 km away. Kathgodam is well connected to Delhi, and taxis are available to Kausani Estate from the station.',
        '<b>By Air:</b> The nearest airport is Pantnagar Airport (PGH), approximately 170 km from Kausani Estate. Taxis from the airport to Kausani Estate via Almora are available.',
        '<b>Local Tip:</b> Visit during sunrise or sunset to witness the Himalayan peaks bathed in golden light—a truly unforgettable sight.'
      ]
    },
    'Things to Do': {
      content: [
        '<b>Visit Anashakti Ashram:</b> Explore the simple yet historic ashram and learn about Mahatma Gandhi\'s time here.',
        '<b>Tea Estate Walks:</b> Stroll through lush tea gardens and learn about tea cultivation from local workers.',
        '<b>Heritage Stay:</b> Experience colonial charm by staying in one of the estate\'s old bungalows.',
        '<b>Mountain Viewpoints:</b> Wake up to breathtaking views of the snow-capped peaks right from your accommodation.',
        '<b>Village Visits:</b> Interact with locals and discover traditional Kumaoni culture.'
      ]
    },
    'Travel Tips': {
      content: [
        '• Carry sufficient cash, as ATMs are limited.',
        '• Pack light but warm clothing, as temperatures can drop unexpectedly.',
        '• Bring your own snacks and supplies, as shops are few and far between.',
        '• Respect the heritage structures—many are privately owned and inhabited.',
        '• Plan for slow, leisurely walks rather than rushed sightseeing.'
      ]
    },
    'Connectivity & Internet': {
      content: [
        '<b>Mobile Networks:</b> Jio, Airtel, and BSNL have limited coverage.',
        '<b>Internet Access:</b> Wi-Fi is available at some heritage homestays but can be slow.',
        '<b>Power Supply:</b> Generally stable, but occasional power cuts may occur.',
        '<b>Offline Maps:</b> Download maps before your trip, as signal drops in some areas.'
      ]
    },
    'Travel Stories / Experiences': {
      stories: [
        {
          user: 'Heritage Explorer',
          text: 'Waking up to the view of Nanda Devi from my heritage bungalow was magical. The tea gardens stretching as far as the eye could see, the colonial architecture, and the peaceful atmosphere made it feel like stepping back in time. The Anashakti Ashram visit was particularly moving, knowing that Gandhi himself found inspiration here. The estate offers a perfect blend of history, nature, and tranquility.'
        }
      ]
    }
  },
  'Sunargaon Kanda': {
    Overview: {
      content: [
        "Nestled in the lesser-known corners of Uttarakhand's Bageshwar district lies Sunragaon, a peaceful hamlet that gazes out at Himalayan silhouettes and sleeps under a galaxy of stars. Perched at around 5,500 feet above sea level, Sunragaon is part of the Kanda region—an area known for its mythological heritage, dense pine forests, and timeless way of life. Here, time stretches, routines are dictated by sun and rain, and village life flows gently like the streams that crisscross the valleys below.",
        "A land of terraced fields, whispering deodars, and melodious bird calls, Sunragaon is perfect for slow travelers, solitude-seekers, and writers in search of a muse. You'll find no crowded cafés or souvenir shops—just earthy homes, foot trails etched by generations, and a rhythm of life rooted in the land.",
        "While not marked by grand temples, Sunragaon is steeped in sacred lore. Locals speak of hidden caves where sages once meditated and of the Bagnath Temple in nearby Bageshwar, where the Saryu and Gomti rivers meet. The spiritual significance of the region emanates from its landscapes—each ridge and stream feels touched by the divine.",
        "Folktales still dance in the winter firelight—of serpent gods, miracle rains, and forest spirits. These stories are not written in books, but passed down by grandmothers sipping chai under stone eaves.",
        "The village community thrives on organic farming and animal husbandry. Locals grow pulses, rajma, and seasonal vegetables using age-old techniques. Life here is woven with tradition—hand-spun woolens dry on fences, millet is ground on stone chakki, and fairs like Bikhoti Mela in nearby Kanda bring in color and folk dances.",
        "In Sunragaon, you don't just travel—you participate in life as it once was, unhurried and real."
      ]
    },
    'How to Reach': {
      content: [
        '<b>By Road:</b> From Delhi, it\'s approximately 440 km to Sunragaon. Drive via Haldwani – Almora – Kanda. The last 5–7 km stretch involves narrow hilly roads—drive during daylight.',
        '<b>By Train:</b> Nearest railhead is Kathgodam (KGM), around 160 km away. Taxis or shared jeeps are available from Kathgodam to Kanda via Almora.',
        '<b>By Air:</b> The closest airport is Pantnagar (PGH), around 185 km away. From there, take a taxi or bus towards Kanda via Almora or Bageshwar.',
        '<b>Local Tip:</b> Ask locals for weather updates before trekking or driving into forested areas—fog and rains can surprise even seasoned drivers.'
      ]
    },
    'Things to Do': {
      content: [
        '<b>Sunrise Points:</b> Wake early for panoramic sunrises over snow-peaked Trishul and Nanda Ghunti.',
        '<b>Farm Life Experience:</b> Try your hand at sowing, harvesting, or helping prepare a Kumaoni thali with the host family.',
        '<b>Forest Walks:</b> Gentle trails lead to cedar groves, secret streams, and meditation spots used by local sadhus.',
        '<b>Photography:</b> From vintage stone houses to wildflowers blooming in monsoon, Sunragaon is a canvas for nature photographers.',
        '<b>Birdwatching & Stargazing:</b> Spot Himalayan woodpeckers, red-vented bulbuls, and enjoy uninterrupted night skies perfect for astrophotography.'
      ]
    },
    'Travel Tips': {
      content: [
        '• Cash is King: Carry cash—ATMs are far and often unreliable.',
        '• Warm Clothing: Even summers can be cool in the mornings and evenings.',
        '• Sustainable Travel: Bring your own toiletries and reusable bottles; limit plastic use.',
        '• Mobile networks are spotty. Jio has occasional coverage, but it\'s best to enjoy the digital detox.',
        '• Stay with Locals: Homestays in Sunragaon offer a more immersive experience than lodges in Kanda town.'
      ]
    },
    'Connectivity & Internet': {
      content: [
        '<b>Mobile Networks:</b> Jio, Airtel, and BSNL have limited coverage.',
        '<b>Internet Access:</b> Wi-Fi is available at some homestays but can be slow.',
        '<b>Power Supply:</b> Generally stable, but occasional power cuts may occur.',
        '<b>Offline Maps:</b> Download maps before your trip, as signal drops in some areas.'
      ]
    },
    'Travel Stories / Experiences': {
      stories: [
        {
          user: 'Mountain Wanderer',
          text: 'My stay in Sunragaon was like stepping into a different era. Waking up to the sound of birds and the sight of mist rolling over the valley, helping the local family with their morning chores, and learning about traditional farming methods—it was all so authentic and peaceful. The night sky here is unlike anything I\'ve seen, with stars so bright they seem within reach. The simple village life, the warm hospitality, and the untouched natural beauty make Sunragaon a perfect escape from the modern world.'
        }
      ]
    }
  },
  'Katarmal': {
    Overview: {
      content: [
        "High above the winding roads of Almora, hidden among whispering deodar forests and terraced hillsides, lies Katarmal—a village that history seems to have frozen in time. Located about 12 kilometers from Almora in Uttarakhand's Kumaon region, Katarmal is best known as the site of the Katarmal Sun Temple, one of India's oldest Surya temples, dating back to the 9th century.",
        "Commissioned by Katyuri King Katarmalla, the temple complex is an architectural marvel, built using massive stone blocks and intricate wooden frameworks—without any modern tools. The main shrine, once housing an idol of the Sun God (now preserved at the National Museum in Delhi), faces east to welcome the first rays of dawn. The temple is surrounded by 44 subsidiary shrines, dedicated to deities like Shiva, Vishnu, and Parvati, and still used for worship by locals during festivals.",
        "But Katarmal is not just a relic—it's a living village, steeped in Kumaoni culture. You'll find traditional pahadi homes with slate roofs, villagers tending to organic crops, and artisans still practicing age-old weaving and copperwork. The silence here is deep, broken only by the flutter of prayer flags or the low chant of a priest preparing for evening aarti.",
        "Despite its immense historical value, Katarmal remains off the mainstream tourist radar. That's its greatest blessing. Whether you're an architecture enthusiast, spiritual traveler, photographer, or someone just looking to escape noise, Katarmal invites you to slow down, breathe deeper, and look back centuries."
      ]
    },
    'How to Reach': {
      content: [
        '<b>By Road:</b> Katarmal is located about 12 km from Almora, which is well connected by road to major cities in Uttarakhand. From Almora, take the Kosi–Kwarab–Katarmal road; local taxis or private vehicles are ideal. It\'s a narrow, winding route—drive cautiously.',
        '<b>From Delhi:</b> ~375 km via Haldwani or Nainital.',
        '<b>From Haldwani:</b> ~90 km.',
        '<b>From Ranikhet:</b> ~45 km.',
        '<b>By Train:</b> The nearest railway station is Kathgodam (KGM), about 90 km from Almora. Kathgodam is connected by regular trains from Delhi, Lucknow, and Dehradun. From there, take a shared taxi or private cab to Almora, then onward to Katarmal.',
        '<b>By Air:</b> The closest airport is Pantnagar (PGH), ~125 km away. From the airport, hire a taxi to Almora and continue on to Katarmal.',
        '<b>Local Tip:</b> Travel during daylight—roads near Katarmal are narrow and become misty during early mornings and late evenings.'
      ]
    },
    'Things to Do': {
      content: [
        '<b>Visit the Katarmal Sun Temple:</b> Stand where sages once offered prayers to Surya. Watch the first light of the sun fall on ancient stones—an experience that\'s both spiritual and cinematic. Don\'t miss the carved wooden doors and the surrounding shrines.',
        '<b>Nature Walks and Forest Trails:</b> Explore the surrounding pine and oak forests. Trails lead to small waterfalls, hidden shrines, and stunning viewpoints of the Himalayan ranges, including Trishul and Nanda Devi on clear days.',
        '<b>Experience Village Life:</b> Walk through Katarmal\'s lanes to witness traditional Kumaoni architecture, talk to locals about farming and weaving, and sip chai under slate rooftops. Many homestays offer organic meals grown in backyard gardens.',
        '<b>Photography & Heritage Study:</b> Perfect for architecture lovers, history buffs, and travel photographers. The play of light, cloud, and stone makes this a visual treat, especially during golden hour.',
        '<b>Birdwatching:</b> Spot Himalayan birds like the white-throated laughingthrush, yellow-billed blue magpie, and verditer flycatchers among the trees near the temple.',
        '<b>Nearby Attractions:</b>',
        '• Almora Town (12 km): Wander through the old lanes of Lala Bazaar, visit the Nanda Devi Temple, and explore the Govind Ballabh Pant Museum.',
        '• Kasar Devi Temple (16 km): Known for its geomagnetic field, this ridge-top shrine was once a spiritual retreat for Swami Vivekananda and Bohemian thinkers.',
        '• Binsar Wildlife Sanctuary (30 km): A dense forest reserve teeming with birds, leopards, and panoramic views from the Zero Point.',
        '• Bright End Corner: A popular viewpoint just outside Almora, perfect for watching sunsets and mist roll across the valley.',
        '• Jageshwar Dham (36 km): A collection of over 120 ancient Shiva temples dating back to the 8th century, nestled in a deodar grove.',
        '• Patal Devi Temple (8 km): A serene forest shrine where locals still offer prayers for prosperity and healing.'
      ]
    },
    'Travel Tips': {
      content: [
        '• Wear Comfortable Footwear: The terrain is uneven, especially near the temple. Hiking shoes are ideal.',
        '• Carry Cash: No ATMs in the village—Almora is your last stop for banking.',
        '• Respect Heritage: Do not climb on temple walls or disturb local rituals.',
        '• Visit Early Morning or Late Afternoon: Best for light, photographs, and fewer crowds.',
        '• Carry Essentials: Shops are limited. Bring your own medicines, toiletries, and power banks.'
      ]
    },
    'Connectivity & Internet': {
      content: [
        '<b>Mobile Networks:</b> Jio and BSNL have limited coverage. Airtel works in patches.',
        '<b>Internet Access:</b> Some homestays offer basic Wi-Fi, but speeds are slow—ideal for digital detox.',
        '<b>Power Supply:</b> Generally stable, but short outages may occur during storms or heavy rain.',
        '<b>Navigation:</b> Download offline maps before arrival, as GPS may drop out in forested areas.'
      ]
    },
    'Travel Stories / Experiences': {
      stories: [
        {
          user: 'Heritage Explorer',
          text: 'Visiting Katarmal was like stepping into a living museum. The ancient Sun Temple, with its intricate carvings and massive stone blocks, tells stories of a bygone era. I arrived at dawn to watch the first rays of sun illuminate the temple, and it was truly magical. The village life around the temple is equally fascinating—watching artisans at work, learning about traditional farming methods, and experiencing the warm hospitality of the locals. The silence here is profound, broken only by temple bells and bird calls. It\'s a perfect place for those seeking both historical insights and spiritual peace.'
        }
      ]
    }
  }
}; 