export interface EventTheme {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  alt: string
  highlights: string[]
}

export const eventThemes: EventTheme[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    tagline: 'Make your perfect day even more magical',
    description: 'Your wedding day is the most special day of your life, and we understand how important it is to get every detail right. Our marquees and event equipment provide the perfect backdrop for your ceremony and reception, whatever your style or budget.',
    image: '/images/wedding.jpg',
    alt: 'Wedding marquee in Hertfordshire',
    highlights: ['Bespoke marquee sizing', 'Elegant furniture hire', 'Dance floor options', 'Bar hire', 'Full setup & collection included'],
  },
  {
    slug: 'birthdays',
    title: 'Birthday Parties',
    tagline: 'Celebrate in style — whatever the age',
    description: 'Whether it\'s a 21st, 30th, 50th or beyond, TM Event Hire provides everything you need to throw the ultimate birthday party. Our marquees, bars, furniture and dance floors create the perfect venue in your own garden.',
    image: '/images/birthday.jpg',
    alt: 'Pink birthday party marquee',
    highlights: ['All ages catered for', 'LED lighting options', 'Dance floors', 'Mobile bar hire', 'Themed furniture packages'],
  },
  {
    slug: 'funerals',
    title: 'Funerals',
    tagline: 'A dignified space to remember loved ones',
    description: 'We understand the sensitivity of funeral events and are dedicated to providing a dignified, respectful service. Our marquees and equipment can create a comfortable and peaceful space for family and friends to come together.',
    image: '/images/funeral.jpg',
    alt: 'Marquee hire for funeral reception',
    highlights: ['Dignified & respectful service', 'Comfortable seating arrangements', 'Catering equipment hire', 'Discreet setup & collection', 'Flexible sizing'],
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    tagline: 'Impress clients and reward your team',
    description: 'From end-of-year celebrations to product launches and summer parties, TM Event Hire provides professional event equipment for corporate clients across Essex, Hertfordshire and London. We work with businesses of all sizes to deliver impressive events.',
    image: '/images/corporate.jpg',
    alt: 'Corporate event marquee setup',
    highlights: ['Professional setup service', 'Branding options available', 'Catering equipment', 'AV compatible structures', 'References available'],
  },
]
