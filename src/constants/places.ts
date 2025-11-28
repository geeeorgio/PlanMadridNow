import { PLACES_IMGS } from './images';

import type { PlaceType } from 'src/types';

export const PLACES: PlaceType[] = [
  {
    id: 'prado-museum',
    number: 1,
    shortTitle: 'Prado Museum',
    title: 'Prado Museum (Museo Nacional del Prado)',
    coordinates: {
      latitude: 40.4138,
      longitude: -3.6921,
    },
    description:
      'The Prado Museum is one of the most important and visited art museums in the world. It holds Spain’s national collection of fine arts, featuring more than 8,000 paintings and 700 sculptures. Founded in 1819, the museum showcases masterpieces from the Spanish, Italian, and Flemish schools — including works by Velázquez, Goya, El Greco, Rubens, and Bosch. The museum’s elegant neoclassical building, designed by Juan de Villanueva, sits along the iconic Paseo del Prado and remains a symbol of Spain’s artistic heritage.',
    facts: [
      'Velázquez’s Las Meninas and Bosch’s The Garden of Earthly Delights are among its most famous exhibits.',
      'The collection originally came from Spanish royal holdings.',
      'The Prado forms part of Madrid’s “Golden Triangle of Art” along with the Reina Sofía and Thyssen-Bornemisza museums.',
    ],
    image: PLACES_IMGS.pradoMuseum,
  },
  {
    id: 'retiro-park',
    number: 2,
    shortTitle: 'Retiro Park',
    title: 'Retiro Park (Parque del Buen Retiro)',
    coordinates: {
      latitude: 40.4153,
      longitude: -3.6845,
    },
    description:
      'Retiro Park is Madrid’s most beloved green oasis — a vast 125-hectare park once reserved for Spanish royalty. Today it’s open to everyone, offering serene gardens, tree-lined paths, fountains, and cultural spaces. Visitors can row a boat on the lake, relax by the Crystal Palace, or explore the Rose Garden. The park also hosts street performers, open-air art exhibitions, and locals enjoying picnics on sunny afternoons. It’s the perfect blend of nature, art, and everyday Madrid life.',
    facts: [
      'Together with Paseo del Prado, it became a UNESCO World Heritage Site in 2021',
      'The Crystal Palace was built in 1887 to host a tropical plant exhibition',
      'The park contains sculptures of literary and historical figures, including the “Fallen Angel” — one of the few public statues dedicated to Lucifer.',
    ],
    image: PLACES_IMGS.retiroPark,
  },
  {
    id: 'royal-palace-madrid',
    number: 3,
    shortTitle: 'Royal Palace',
    title: 'Royal Palace of Madrid (Palacio Real de Madrid)',
    coordinates: {
      latitude: 40.4179,
      longitude: -3.7143,
    },
    description:
      'The Royal Palace of Madrid is the official residence of the Spanish monarchs, though it is now used primarily for ceremonial events. Built in the 18th century on the site of a medieval fortress destroyed by fire, the palace represents the grandeur of Bourbon rule. Its 3,400 rooms are filled with priceless artworks, chandeliers, tapestries, and antique furniture. The Throne Room, the Royal Armory, and the Grand Staircase stand out as architectural marvels.',
    facts: [
      'It’s one of Europe’s largest palaces, covering over 135,000 square meters.',
      'The royal family lives in the smaller Zarzuela Palace outside Madrid.',
      'Visitors can watch the changing of the royal guard every Wednesday and Saturday.',
    ],
    image: PLACES_IMGS.royalPalace,
  },
  {
    id: 'gran-via',
    number: 4,
    shortTitle: 'Gran Vía',
    title: 'Gran Vía',
    coordinates: {
      latitude: 40.4203,
      longitude: -3.7058,
    },
    description:
      'Gran Vía is Madrid’s most iconic boulevard — the beating heart of the city’s urban life. Stretching from Calle de Alcalá to Plaza de España, it’s lined with early 20th-century architecture, fashionable shops, theaters, and restaurants. Known as “Madrid’s Broadway,” it combines culture, entertainment, and modern energy. Both day and night, Gran Vía pulses with life, illuminated by neon signs and the sounds of the city.',
    facts: [
      'Construction began in 1910 and took two decades to complete.',
      'The Telefónica Building was once Europe’s tallest skyscraper.',
      'The street frequently appears in Spanish cinema and pop culture.',
    ],
    image: PLACES_IMGS.granVia,
  },
  {
    id: 'santiago-bernabeu',
    number: 5,
    shortTitle: 'Santiago Bernabéu',
    title: 'Santiago Bernabéu Stadium',
    coordinates: {
      latitude: 40.4531,
      longitude: -3.6883,
    },
    description:
      'The Santiago Bernabéu Stadium is the home of Real Madrid CF — one of the most successful football clubs in history. Opened in 1947, the stadium can hold over 80,000 spectators and has witnessed countless legendary matches. It’s currently being transformed into a futuristic arena with a retractable roof and advanced multimedia features, turning it into a landmark for both sports and entertainment.',
    facts: [
      'Named after Real Madrid’s long-serving president Santiago Bernabéu.',
      'Hosted the 1982 World Cup final and multiple UEFA Champions League finals.',
      'Visitors can take a stadium tour, visit the locker rooms, and walk the players’ tunnel.',
    ],
    image: PLACES_IMGS.santiagoBernabeu,
  },
  {
    id: 'mercado-san-miguel',
    number: 6,
    shortTitle: 'Mercado de San Miguel',
    title: 'Mercado de San Miguel',
    coordinates: {
      latitude: 40.4154,
      longitude: -3.7084,
    },
    description:
      'Mercado de San Miguel is one of Madrid’s most famous gourmet markets, blending history, architecture, and cuisine. Housed in a restored iron-and-glass building from 1916, the market offers everything from Iberian ham and seafood to paella, pastries, and local wines. It’s not just a place to eat — it’s an experience of authentic Spanish flavors, sounds, and aromas all under one roof.',
    facts: [
      'The market was originally a traditional neighborhood food hall.',
      'After falling into disrepair, it was restored and reopened in 2009 as a high-end culinary destination.',
      'Over 10 million visitors pass through its doors every year.',
    ],
    image: PLACES_IMGS.mercado,
  },
  {
    id: 'malasana-district',
    number: 7,
    shortTitle: 'Malasaña District',
    title: 'Malasaña District',
    coordinates: {
      latitude: 40.4251,
      longitude: -3.7057,
    },
    description:
      'Malasaña is Madrid’s creative and alternative district, known for its bohemian spirit and youthful energy. Filled with independent boutiques, vintage stores, cafés, and bars, it reflects the artistic soul of the city. Street murals color the walls, music spills from every corner, and the atmosphere invites exploration. Malasaña is where Madrid’s counterculture thrives — a place that celebrates individuality and freedom.',
    facts: [
      'Named after Manuela Malasaña, a heroine from the 1808 uprising against Napoleon.',
      'Became the center of the “Movida Madrileña,” Spain’s cultural explosion after the Franco dictatorship.',
      'Still known for its indie music, tattoo studios, and artistic nightlife.',
    ],
    image: PLACES_IMGS.malasana,
  },
  {
    id: 'temple-debod',
    number: 8,
    shortTitle: 'Temple of Debod',
    title: 'Temple of Debod (Templo de Debod)',
    coordinates: {
      latitude: 40.424,
      longitude: -3.7178,
    },
    description:
      'The Temple of Debod is an ancient Egyptian temple that now stands in the heart of Madrid. Originally built over 2,000 years ago near Aswan, Egypt, it was gifted to Spain in 1968 as a token of gratitude for helping to save monuments threatened by the construction of the Aswan Dam. The temple sits in a quiet park overlooking the city and is especially famous for its magical sunsets.',
    facts: [
      'Each block was dismantled in Egypt and rebuilt stone by stone in Madrid.',
      'It’s one of the few Egyptian temples outside Egypt.',
      'The reflection of the temple in its surrounding pool at dusk is one of Madrid’s most photographed sights.',
    ],
    image: PLACES_IMGS.templeDebod,
  },
  {
    id: 'plaza-mayor',
    number: 9,
    shortTitle: 'Plaza Mayor',
    title: 'Plaza Mayor',
    coordinates: {
      latitude: 40.4155,
      longitude: -3.7074,
    },
    description:
      'Plaza Mayor is the historical heart of Madrid — a grand, symmetrical square surrounded by red-brick buildings and elegant arcades. Built during the reign of Philip III, it has served as the city’s main gathering place for over 400 years. Today, it’s filled with lively cafés, street artists, and visitors enjoying the city’s timeless charm.',
    facts: [
      'The square has witnessed coronations, bullfights, and even public trials.',
      'The bronze equestrian statue of King Philip III dominates its center.',
      'It’s the site of Madrid’s famous Christmas market every December.',
    ],
    image: PLACES_IMGS.plazaMayor,
  },
  {
    id: 'reina-sofia',
    number: 10,
    shortTitle: 'Reina Sofía Museum',
    title: 'Reina Sofía Museum (Museo Nacional Centro de Arte Reina Sofía)',
    coordinates: {
      latitude: 40.4087,
      longitude: -3.6944,
    },
    description:
      'The Reina Sofía Museum is Spain’s national museum of modern and contemporary art, focusing on 20th-century works. It’s best known for housing Picasso’s Guernica, a powerful anti-war masterpiece. The museum also features works by Dalí, Miró, and many other avant-garde Spanish and international artists. Its mix of old and new architecture — a renovated 18th-century hospital combined with sleek glass towers — perfectly represents the spirit of modern Madrid.',
    facts: [
      'Named after Queen Sofía of Spain and opened in 1992.',
      'The museum’s collection exceeds 23,000 works.',
      'Its courtyard features sculptures by Calder and Miró.',
    ],
    image: PLACES_IMGS.reinaSofia,
  },
];
