export interface Package {
  name: string
  items: string[]
}

export interface EventFAQ {
  question: string
  answer: string
}

export interface EventTheme {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  alt: string
  highlights: string[]
  packages?: Package[]
  faqs?: EventFAQ[]
}

const standardFAQs: EventFAQ[] = [
  { question: 'Can items be added or removed from packages?', answer: 'Yes — our packages are a starting point, not a fixed list. We will work with you to build exactly the setup you need. Some structural items may be non-interchangeable, but most accessories can be swapped or added.' },
  { question: 'How far in advance should I book?', answer: 'Peak summer dates sell quickly. We recommend booking as early as possible. Early and late season dates are often available with shorter notice — contact us to check availability.' },
  { question: 'What are the power requirements?', answer: 'Standard lighting and heating use low power and can usually be run from a nearby building. For catering equipment, live bands or additional power needs, we can arrange generators.' },
  { question: 'Is delivery and pickup included?', answer: 'Yes — all equipment in your package is delivered and professionally installed by our team, and collected the following day. All you need to do is enjoy your event.' },
  { question: 'When do you need final guest numbers?', answer: 'We ask for your final confirmed guest count two weeks before the event. Minor fluctuations are fine and we will accommodate small changes where possible.' },
]

export const eventThemes: EventTheme[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    tagline: 'Complete wedding event hire — tailored to your perfect day',
    description: 'A marquee wedding gives you total freedom — your venue, your style, your vision. With 15+ years of experience and a family-run team dedicated to every detail, TM Event Hire has worked on hundreds of weddings across Essex, Hertfordshire and London.',
    longDescription: 'Whether you dream of fairy lights and white pleated lining, or a dramatic starlit ceiling with LED up-lighters, we can build it. Our team works closely with you from initial enquiry right through to the day itself, ensuring every detail is exactly as you envisioned. We can coordinate with your florist, caterer and entertainment suppliers to make setup as smooth as possible.\n\nFrom intimate ceremonies for 30 guests to grand receptions of 300+, we have the structures and equipment to make your wedding truly unforgettable. Every package includes full delivery, professional installation and collection — so you can focus on enjoying your day.',
    image: '/images/wedding.jpg',
    alt: 'Wedding marquee in Hertfordshire',
    highlights: [
      'Over 15 years of wedding hire experience',
      'Family-run team with attention to every detail',
      'Bespoke marquee sizing for any guest count',
      'Elegant Chiavari chairs and banquet tables',
      'Dance floor options including starlit LED and wooden parquet',
      'Mobile bar hire — LED, mirror or wooden',
      'Lining, lighting and flooring packages',
      'Full setup, styling and collection included',
    ],
    packages: [
      {
        name: 'White Wedding',
        items: [
          'Clear span marquee',
          'Wooden tables',
          'White table linen',
          'Limewash Chiavari chairs',
          'LED or mirror mobile drinks bar',
          'White LED dance floor',
          'Fairy lights',
          'Chandeliers',
          'Wooden flooring with cream carpet',
        ],
      },
      {
        name: 'Boho / Rustic Wedding',
        items: [
          'Clear span marquee',
          'Coconut matting',
          'Transparent roofs, ends and sides',
          'Wooden tables',
          'Wooden chairs',
          'Rustic wooden bar',
          'Wooden parquet dance floor',
          'LED fairy lighting',
          'Festoon lighting',
        ],
      },
      {
        name: 'Indian Wedding',
        items: [
          'Clear span marquee',
          'Transparent roofs, ends and sides',
          'Trestle and round tables',
          'Limewash Chiavari chairs',
          'Wooden, mirror or LED bar',
          'Wooden parquet dance floor',
          'LED fairy lighting',
          'Colourful overlays',
        ],
      },
    ],
    faqs: [
      { question: 'Can we customise any package?', answer: 'Absolutely. Our packages are a starting point — we encourage you to add, remove or swap items to match your vision. We will advise on what works best for your guest numbers and space.' },
      { question: 'How far in advance should we book for a summer wedding?', answer: 'Peak summer dates fill up quickly. We recommend booking at least 6–12 months in advance for summer weddings. Off-season dates are usually available with shorter notice.' },
      { question: 'Do you coordinate with other suppliers?', answer: 'Yes — we are happy to liaise with your caterer, florist, entertainment and AV suppliers to ensure setup runs smoothly and everyone has what they need.' },
      { question: 'Is delivery and collection included?', answer: 'Yes. We deliver and professionally install all equipment 1–3 days before your wedding, and collect it the following day. Everything is included in your quote.' },
      { question: 'What power is required?', answer: 'Standard lighting and heating run from low power and can typically use a nearby building\'s supply. For catering, live bands or additional requirements we can arrange generators.' },
    ],
  },
  {
    slug: 'birthdays',
    title: 'Birthday Parties',
    tagline: 'Celebrate in style — whatever the age, whatever the theme',
    description: 'TM Event Hire specialises in birthday party equipment hire across Essex, London and Hertfordshire. From toddler parties to nightclub-style 21sts to milestone 50th celebrations — we build the perfect party space in your own garden.',
    longDescription: 'Instead of booking a venue and fitting around their rules, why not create your perfect party space at home? Our marquees turn any garden into a bespoke party venue.\n\nAdd a dance floor, a glowing LED bar and festoon lighting for a night to remember. We cater for all ages and all sizes — from a toddler gathering with colourful soft furnishings to a nightclub-style 21st with a starlit blackout ceiling and chill-out sofa areas.\n\nWe handle every aspect of the setup, arriving early so everything is ready long before your guests. Our team returns the following day to collect — all you have to do is enjoy your celebration.',
    image: '/images/birthday.jpg',
    alt: 'Pink birthday party marquee',
    highlights: [
      'All ages and party sizes catered for',
      'LED blackout starlit ceilings for nightclub feel',
      'Dance floor hire — LED, black/white, wooden parquet',
      'Mobile bar hire — LED, mirror or wooden',
      'Festoon and fairy lighting options',
      'Lounge sofa chill-out areas available',
      'Colourful options for children\'s parties',
      'Full delivery, setup and collection',
    ],
    packages: [
      {
        name: 'Toddler Birthday Party',
        items: [
          'Marquee sized for guest count',
          'Transparent roof, ends and sides',
          'Colourful carpet and soft furnishings',
          'LED uplighters for ambiance',
        ],
      },
      {
        name: '18th / 21st Birthday Party',
        items: [
          'Clear span marquee',
          'LED blackout or transparent roof',
          'LED or mirror bar with stools',
          'Dance floor — LED or black/white',
          'LED lighting throughout',
        ],
      },
      {
        name: 'Milestone Birthday (30th, 40th, 50th+)',
        items: [
          'Clear span marquee',
          'Wooden trestle or circular tables',
          'Folding or Limewash Chiavari chairs',
          'Mobile bar — LED or mirror',
          'Black/white or all-white LED dance floor',
          'Fairy lights and/or chandeliers',
        ],
      },
      {
        name: 'Nightclub Party',
        items: [
          'Clear span marquee',
          'LED blackout starlit ceiling',
          'Mobile bar',
          'Sofa chill-out areas',
          'Dance floor',
          'LED lighting throughout',
        ],
      },
    ],
    faqs: standardFAQs,
  },
  {
    slug: 'funerals',
    title: 'Funerals',
    tagline: 'A dignified space to remember loved ones',
    description: 'We understand the sensitivity of funeral events and are dedicated to providing a dignified, respectful service. Our marquees and equipment can create a comfortable and peaceful space for family and friends to come together.',
    longDescription: 'Saying goodbye to a loved one is one of life\'s most difficult moments. A marquee reception at home or in a garden creates an intimate, personal space where family and friends can gather, share memories and support one another in familiar surroundings.\n\nOur team approaches every funeral hire with the utmost sensitivity and discretion. We work quietly and efficiently, ensuring everything is in place without adding to the stress of the day. We understand that details matter deeply at these moments, and we pride ourselves on delivering a service that honours that.\n\nWe can provide comfortable seating, catering equipment, and all the practical elements needed for a dignified gathering.',
    image: '/images/funeral.jpg',
    alt: 'Marquee hire for funeral reception',
    highlights: [
      'Dignified and respectful service',
      'Discreet and efficient setup and collection',
      'Comfortable seating arrangements',
      'Catering equipment hire available',
      'Flexible sizing for any guest count',
      'Full delivery and collection included',
    ],
    packages: [
      {
        name: 'Home Reception Setup',
        items: ['Clear span marquee', 'Comfortable seating and tables', 'Catering equipment', 'Soft lighting'],
      },
      {
        name: 'Garden Gathering',
        items: ['Chinese Hat or clear span marquee', 'Folding chairs and trestle tables', 'Catering setup'],
      },
    ],
    faqs: [
      { question: 'How quickly can you set up?', answer: 'We understand that bereavement timelines can be tight. Contact us as soon as possible and we will do everything we can to accommodate your timeline sensitively and efficiently.' },
      { question: 'Is delivery included?', answer: 'Yes — delivery, installation and collection are all included. Our team will handle everything discreetly so the family can focus on what matters.' },
    ],
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    tagline: 'Premium event hire for corporate and public events',
    description: 'TM Event Hire provides professional event equipment rental for corporate events across London, Essex and Hertfordshire. From company summer parties and product launches to conferences, awards ceremonies, music festivals and sporting events.',
    longDescription: 'Your corporate event is a reflection of your brand. Whether you are hosting a client summer party, a product launch or an end-of-year celebration for your team, the quality of your event setup matters.\n\nWe work with businesses of all sizes — from small team away-days to large corporate functions with hundreds of attendees. Our team is professional, punctual and thorough, and we can accommodate branding requirements, AV equipment, stage setups and catering infrastructure.\n\nWe have extensive experience with a wide variety of corporate event formats: conferences, music festivals, awards ceremonies, fun fairs, farmers markets and sporting events. Whatever your event type, we have the equipment and expertise to deliver it.',
    image: '/images/corporate.jpg',
    alt: 'Corporate event marquee setup',
    highlights: [
      'Experience with all corporate event formats',
      'Professional, punctual and thorough team',
      'Branding and signage options available',
      'AV and stage-compatible structures',
      'Catering and kitchen equipment hire',
      'Full furniture range — tables, chairs, lounge areas',
      'Flexible sizing for any company size',
      'References available from previous corporate clients',
    ],
    packages: [
      {
        name: 'Summer Party',
        items: ['Clear span marquee', 'Mobile bar', 'Tables and chairs', 'Dance floor', 'Festoon or LED lighting'],
      },
      {
        name: 'Product Launch / Conference',
        items: ['Clear span marquee', 'Stage-compatible structure', 'Presentation-ready setup', 'Lounge seating areas', 'Catering equipment'],
      },
      {
        name: 'Awards Ceremony',
        items: ['Clear span marquee', 'Chiavari chairs and banquet tables', 'White linen', 'Mobile bar', 'Dance floor', 'Chandeliers and uplighting'],
      },
    ],
    faqs: [
      { question: 'Do you work with large corporate clients?', answer: 'Yes — we have experience working with companies of all sizes, from small team events to large corporate functions with hundreds of attendees. References are available on request.' },
      { question: 'Can structures accommodate AV equipment and staging?', answer: 'Yes. Our clear-span marquees have no internal poles, providing open space for staging, AV rigs and large format displays. We can advise on load-bearing and power requirements.' },
      { question: 'Is branding possible?', answer: 'Yes — we can incorporate branded elements into your event setup. Contact us to discuss your branding requirements.' },
      { question: 'Is delivery and collection included?', answer: 'Yes. All equipment is delivered, professionally set up and collected by our team. Timing is confirmed at booking to fit around your event schedule.' },
      { question: 'What types of corporate events do you cover?', answer: 'We cover conferences, summer parties, product launches, awards ceremonies, music festivals, fun fairs, farmers markets, sporting events and more.' },
    ],
  },
]
