import React, { useState } from 'react';
import {
  AppBar, Toolbar, Drawer, List, ListItem, ListItemText, ListItemButton, Tabs, Tab, Box, CssBaseline, ThemeProvider, createTheme, Typography, IconButton, BottomNavigation, BottomNavigationAction
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

interface Homestay {
  name: string;
  desc: string;
  img: string;
}

interface Location {
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

const LOCATIONS = [
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

const HOMESTAY_CATEGORIES = ['Budgeted', 'Luxury', 'Treehouse'];

const LOCATION_TABS = [
  'Overview',
  'How to Reach',
  'Things to Do',
  'Travel Tips',
  'Connectivity & Internet',
  'Travel Stories / Experiences',
];

const LOCATION_TAB_CONTENT: Record<string, any> = {
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

const drawerWidth = 220;

const theme = createTheme({
  palette: {
    primary: { main: '#234e52' },
    secondary: { main: '#4fd1c5' },
    background: { default: '#f6f6f1' },
  },
  typography: {
    fontFamily: [
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(','),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
});

function App() {
  const [selectedLocationIdx, setSelectedLocationIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'Budgeted' | 'Luxury' | 'Treehouse'>('Budgeted');
  const [selectedLocTab, setSelectedLocTab] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = LOCATIONS[selectedLocationIdx];
  const locTabData =
    LOCATION_TAB_CONTENT[location.name] && LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      ? LOCATION_TAB_CONTENT[location.name][selectedLocTab]
      : null;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: { xs: '100vw', sm: drawerWidth }, bgcolor: 'background.paper', height: '100%', pt: 2 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, color: 'primary.main', fontWeight: 700 }}>
        Locations
      </Typography>
      <List>
        {LOCATIONS.map((loc, idx) => (
          <ListItemButton
            key={loc.name}
            selected={selectedLocationIdx === idx}
            onClick={() => {
              setSelectedLocationIdx(idx);
              setSelectedCategory('Budgeted');
              setMobileOpen(false);
            }}
            sx={{
              borderRadius: 2,
              mb: 1,
              bgcolor: selectedLocationIdx === idx ? 'secondary.light' : 'inherit',
              color: selectedLocationIdx === idx ? 'primary.main' : 'inherit',
              '&:hover': {
                bgcolor: 'secondary.light',
              }
            }}
          >
            <ListItemText primary={loc.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 1.5, color: '#f6e05e', fontFamily: 'Playfair Display, Georgia, serif' }}>
            HiddenUttarakhand.com
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', '&:hover': { color: '#f6e05e' } }}>Home</Typography>
            <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', '&:hover': { color: '#f6e05e' } }}>About</Typography>
            <Typography component="a" href="#" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', '&:hover': { color: '#f6e05e' } }}>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'background.paper', borderRight: '1px solid #e2e8f0' },
          }}
          open
        >
          {drawer}
        </Drawer>
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            [`& .MuiDrawer-paper`]: { width: '80vw', boxSizing: 'border-box', bgcolor: 'background.paper' },
          }}
        >
          {drawer}
        </Drawer>
        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 }, ml: { sm: `${drawerWidth}px` }, minHeight: '100vh', bgcolor: 'background.default' }}>
          {/* Location Info Tabs */}
          <Box sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 2, mb: 3, p: { xs: 1, sm: 3 } }}>
            <Tabs
              value={selectedLocTab}
              onChange={(_, v) => setSelectedLocTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="secondary"
              sx={{ mb: 2 }}
            >
              {LOCATION_TABS.map(tab => (
                <Tab label={tab} value={tab} key={tab} sx={{ fontWeight: 600, fontSize: { xs: '0.98rem', sm: '1.08rem' } }} />
              ))}
            </Tabs>
            <Box className="loc-tab-content">
              {locTabData ? (
                <>
                  {selectedLocTab === 'Overview' && (
                    <Box>
                      {/* Placeholder images for Overview */}
                      {location.name === 'Dunagiri' && (
                        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Dunagiri Himalaya" style={{ width: '180px', height: '120px', objectFit: 'cover', borderRadius: '10px' }} />
                          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Dunagiri Temple" style={{ width: '180px', height: '120px', objectFit: 'cover', borderRadius: '10px' }} />
                          <img src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" alt="Dunagiri Forest" style={{ width: '180px', height: '120px', objectFit: 'cover', borderRadius: '10px' }} />
                        </Box>
                      )}
                      {locTabData.content.map((item: any, idx: number) =>
                        Array.isArray(item) ? (
                          <ul key={idx}>{item.map((li: string, i: number) => <li key={i}>{li}</li>)}</ul>
                        ) : (
                          // Special heading for Vridh Jageshwar
                          item.replace(/<b>|<\/b>/g, '') === 'Vridh Jageshwar – The Hilltop Abode of Mahadev' ? (
                            <Typography key={idx} variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>{item.replace(/<b>|<\/b>/g, '')}</Typography>
                          ) : (
                            <Typography key={idx} sx={{ mb: 1 }} component="div" dangerouslySetInnerHTML={{ __html: item }} />
                          )
                        )
                      )}
                    </Box>
                  )}
                  {selectedLocTab === 'How to Reach' && (
                    <Box>
                      {locTabData.content.map((item: string, idx: number) =>
                        <Typography key={idx} sx={{ mb: 1 }} component="div" dangerouslySetInnerHTML={{ __html: item }} />
                      )}
                    </Box>
                  )}
                  {selectedLocTab === 'Things to Do' && (
                    <Box>
                      {locTabData.content.map((item: string, idx: number) =>
                        <Typography key={idx} sx={{ mb: 1 }} component="div" dangerouslySetInnerHTML={{ __html: item }} />
                      )}
                    </Box>
                  )}
                  {selectedLocTab === 'Travel Tips' && (
                    <Box component="ul" sx={{ pl: 3 }}>
                      {locTabData.content.map((item: string, idx: number) => <li key={idx}><Typography component="span">{item}</Typography></li>)}
                    </Box>
                  )}
                  {selectedLocTab === 'Connectivity & Internet' && (
                    <Box>
                      {locTabData.content.map((item: string, idx: number) =>
                        <Typography key={idx} sx={{ mb: 1 }} component="div" dangerouslySetInnerHTML={{ __html: item }} />
                      )}
                    </Box>
                  )}
                  {selectedLocTab === 'Travel Stories / Experiences' && (
                    <Box>
                      {locTabData.stories.map((story: any, idx: number) => (
                        <Typography key={idx} sx={{ whiteSpace: 'pre-line', mb: 3 }}>{story.text}</Typography>
                      ))}
                    </Box>
                  )}
                </>
              ) : (
                <Typography>Information coming soon for this location.</Typography>
              )}
            </Box>
          </Box>

          {/* Homestay Categories */}
          <Box sx={{ mt: 3, mb: 3 }}>
            <Tabs
              value={selectedCategory}
              onChange={(_, v) => setSelectedCategory(v)}
              textColor="primary"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 2 }}
            >
              {['Budgeted', 'Luxury', 'Treehouse'].map(cat => (
                <Tab label={cat} value={cat} key={cat} sx={{ fontWeight: 600, fontSize: { xs: '0.98rem', sm: '1.08rem' } }} />
              ))}
            </Tabs>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              {location.homestays[selectedCategory as keyof typeof location.homestays].map((stay: Homestay, i: number) => (
                <Box key={i} sx={{ width: { xs: '98vw', sm: 300 }, maxWidth: 340, bgcolor: '#fff', borderRadius: 2, boxShadow: 2, mb: 2, p: 1, position: 'relative' }}>
                  <Box className="card-img-wrapper" sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}>
                    <img src={stay.img} alt={stay.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                    <IconButton sx={{ position: 'absolute', top: 12, right: 14, bgcolor: 'rgba(255,255,255,0.85)', '&:hover': { bgcolor: '#ffe4ec' } }}>
                      <svg width="22" height="22" fill="#ff385c" viewBox="0 0 32 32"><path d="M16 29s-9.3-7.1-12.4-11.1C1.2 15.5 0 13.6 0 11.5 0 7.9 2.9 5 6.5 5c2.1 0 4.1 1.1 5.2 2.9C13.4 6.1 15.4 5 17.5 5 21.1 5 24 7.9 24 11.5c0 2.1-1.2 4-3.6 6.4C25.3 21.9 16 29 16 29z"/></svg>
                    </IconButton>
                  </Box>
                  <Box className="card-content" sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{stay.name}</Typography>
                    <Typography sx={{ color: '#555', fontSize: '1rem', mb: 1 }}>{stay.desc}</Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Box component="button" sx={{ mt: 1, bgcolor: '#ff385c', color: '#fff', border: 'none', borderRadius: 1, px: 2, py: 1, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', boxShadow: 1, '&:hover': { bgcolor: '#d21c3c' } }}>
                        View Details
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'primary.main', color: '#fff', py: 4, mt: 5, borderTopLeftRadius: 3, borderTopRightRadius: 3, boxShadow: 2 }}>
        <Box className="footer-social" sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <IconButton href="#" color="inherit" aria-label="Facebook" sx={{ bgcolor: 'rgba(255,255,255,0.12)', '&:hover': { bgcolor: '#f6e05e', color: '#234e52' } }}><FacebookIcon /></IconButton>
          <IconButton href="#" color="inherit" aria-label="Twitter" sx={{ bgcolor: 'rgba(255,255,255,0.12)', '&:hover': { bgcolor: '#f6e05e', color: '#234e52' } }}><TwitterIcon /></IconButton>
          <IconButton href="#" color="inherit" aria-label="Instagram" sx={{ bgcolor: 'rgba(255,255,255,0.12)', '&:hover': { bgcolor: '#f6e05e', color: '#234e52' } }}><InstagramIcon /></IconButton>
        </Box>
        <Box className="footer-links" sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mb: 1 }}>
          <Typography component="a" href="#" sx={{ color: '#f6e05e', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#fff', borderBottom: '2px solid #fff' }, pb: '2px', borderBottom: '2px solid transparent' }}>About</Typography>
          <Typography component="a" href="#" sx={{ color: '#f6e05e', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#fff', borderBottom: '2px solid #fff' }, pb: '2px', borderBottom: '2px solid transparent' }}>Contact</Typography>
          <Typography component="a" href="#" sx={{ color: '#f6e05e', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#fff', borderBottom: '2px solid #fff' }, pb: '2px', borderBottom: '2px solid transparent' }}>Terms</Typography>
          <Typography component="a" href="#" sx={{ color: '#f6e05e', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', '&:hover': { color: '#fff', borderBottom: '2px solid #fff' }, pb: '2px', borderBottom: '2px solid transparent' }}>Privacy</Typography>
        </Box>
        <Typography className="footer-copy" sx={{ fontSize: '1.05rem', color: '#e6fffa', mb: 1.2, mt: 1 }}>
          &copy; {new Date().getFullYear()} HiddenUttarakhand.com. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
