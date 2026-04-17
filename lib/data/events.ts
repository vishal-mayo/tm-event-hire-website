export interface EventTheme {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  alt: string
  highlights: string[]
  packages?: string[]
}

export const eventThemes: EventTheme[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    tagline: 'Make your perfect day even more magical',
    description: 'Your wedding day is the most special day of your life, and we understand how important it is to get every detail right. Our marquees and event equipment provide the perfect backdrop for your ceremony and reception, whatever your style or budget.',
    longDescription: 'A marquee wedding gives you total freedom — your choice of venue, your choice of style, your choice of everything. Whether you dream of fairy lights and white pleated lining, or a dramatic starlit ceiling with LED up-lighters, we can build it.\n\nOur team has worked on hundreds of weddings across Essex, Hertfordshire and London. We work closely with you from initial enquiry right through to the day itself, ensuring every detail is exactly as you envisioned. We can also coordinate with your florist, caterer and entertainment suppliers to make setup as smooth as possible.\n\nFrom intimate ceremonies for 30 guests to grand receptions of 300+, we have the structures and equipment to make your wedding truly unforgettable.',
    image: '/images/wedding.jpg',
    alt: 'Wedding marquee in Hertfordshire',
    highlights: ['Bespoke marquee sizing for any guest count', 'Elegant furniture hire — Chiavari chairs, banquet tables', 'Dance floor options including starlit LED', 'Mobile bar hire', 'Full setup and collection included', 'Lining, lighting and flooring packages'],
    packages: ['Ceremony & Reception Marquee', 'Garden Wedding Package', 'Intimate Wedding Setup', 'Grand Reception Package'],
  },
  {
    slug: 'birthdays',
    title: 'Birthday Parties',
    tagline: 'Celebrate in style — whatever the age',
    description: 'Whether it\'s a 21st, 30th, 50th or beyond, TM Event Hire provides everything you need to throw the ultimate birthday party. Our marquees, bars, furniture and dance floors create the perfect venue in your own garden.',
    longDescription: 'Birthday parties deserve to be extraordinary. Instead of booking a venue and fitting around their rules, why not create your perfect party space at home?\n\nOur marquees turn any garden into a bespoke party venue. Add a dance floor, a glowing LED bar and festoon lighting for a night to remember. We cater for all ages and all sizes — from a teenage gathering to a milestone 50th birthday celebration with the whole family.\n\nWe handle every aspect of the setup, arriving early so everything is ready long before your guests. All you need to do is get ready and enjoy your day.',
    image: '/images/birthday.jpg',
    alt: 'Pink birthday party marquee',
    highlights: ['All ages and party sizes catered for', 'LED and fairy lighting options', 'Dance floor hire', 'Mobile bar hire', 'Themed furniture packages', 'Festoon and starlit ceiling options'],
    packages: ['Garden Party Package', 'Evening Party Package', 'Full Celebration Package', 'Kids Party Setup'],
  },
  {
    slug: 'funerals',
    title: 'Funerals',
    tagline: 'A dignified space to remember loved ones',
    description: 'We understand the sensitivity of funeral events and are dedicated to providing a dignified, respectful service. Our marquees and equipment can create a comfortable and peaceful space for family and friends to come together.',
    longDescription: 'Saying goodbye to a loved one is one of life\'s most difficult moments. A marquee reception at home or in a garden creates an intimate, personal space where family and friends can gather, share memories and support one another in familiar surroundings.\n\nOur team approaches every funeral hire with the utmost sensitivity and discretion. We work quietly and efficiently, ensuring everything is in place without adding to the stress of the day. We understand that details matter deeply at these moments, and we pride ourselves on delivering a service that honours that.\n\nWe can provide comfortable seating, catering equipment, and all the practical elements needed for a dignified gathering.',
    image: '/images/funeral.jpg',
    alt: 'Marquee hire for funeral reception',
    highlights: ['Dignified and respectful service', 'Discreet and efficient setup', 'Comfortable seating arrangements', 'Catering equipment hire', 'Flexible sizing for any guest count', 'Full collection after the event'],
    packages: ['Home Reception Setup', 'Garden Gathering', 'Wake Marquee Package'],
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    tagline: 'Impress clients and reward your team',
    description: 'From end-of-year celebrations to product launches and summer parties, TM Event Hire provides professional event equipment for corporate clients across Essex, Hertfordshire and London. We work with businesses of all sizes to deliver impressive events.',
    longDescription: 'Your corporate event is a reflection of your brand. Whether you\'re hosting a client summer party, a product launch or an end-of-year celebration for your team, the quality of your event setup matters.\n\nTM Event Hire works with businesses across Essex, Hertfordshire and London to deliver professional, polished event setups. We can accommodate branding requirements, AV equipment, stage setups and catering infrastructure — everything your event needs under one marquee.\n\nWe have experience working with companies of all sizes, from small team away-days to large corporate functions with hundreds of attendees. Our team is professional, punctual and thorough.',
    image: '/images/corporate.jpg',
    alt: 'Corporate event marquee setup',
    highlights: ['Professional setup service', 'Branding options available', 'Catering equipment hire', 'AV and stage compatible structures', 'References from previous corporate clients', 'Flexible sizing for any company size'],
    packages: ['Summer Party Package', 'Product Launch Setup', 'Team Celebration Package', 'Corporate Networking Event'],
  },
]
