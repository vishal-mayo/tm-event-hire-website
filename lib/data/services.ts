export interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  images: string[]
  features?: string[]
}

export const services: Service[] = [
  {
    slug: 'marquees',
    title: 'Marquee Hire',
    tagline: 'Transform any space into your dream venue',
    description: 'Our clear-span marquees are the ultimate marquee tent solution whether you are planning a wedding reception, a birthday party, a private, corporate or public event. No annoying centre poles or guide ropes — just a stunning open space that can be transformed into anything you can imagine.',
    images: ['/images/marquee-1.jpg', '/images/marquee-2.jpg', '/images/marquee-3.jpg'],
    features: ['No centre poles or guide ropes', 'Modular sizing from 3x6m to 12x6m+', 'Works on any surface — grass, concrete, decking', 'White or transparent PVC wall options', 'Full accessories available'],
  },
  {
    slug: 'chinese-hats',
    title: 'Chinese Hat Hire',
    tagline: 'Elevate your outdoor event with style',
    description: 'Perfect as standalone tents or beautiful additions to a main marquee. Our stunning Chinese Hat or Pagoda Style Marquees make an immediate impact on guests and can be used as reception areas, catering zones or intimate seating areas.',
    images: ['/images/chinese-hat-1.jpg', '/images/chinese-hat-2.jpg'],
    features: ['Standalone or linked to main marquee', 'Perfect reception or catering areas', 'Multiple sizes available', 'Festoon lighting compatible'],
  },
  {
    slug: 'bars',
    title: 'Mobile Bar Hire',
    tagline: 'Where refreshment meets convenience',
    description: 'Our range of mobile drinks bars are the perfect addition to any party or event that needs to serve drinks until the music stops! Choose from circular mirror bars, LED straight bars, circular LED bars and wooden straight bars.',
    images: ['/images/bar-1.jpg', '/images/bar-2.jpg'],
    features: ['Circular Mirror Bar', 'LED Straight Bar', 'Circular LED Bar', 'Wooden Straight Bar', 'Full bar setup included'],
  },
  {
    slug: 'furniture',
    title: 'Furniture Hire',
    tagline: 'Tailored for every occasion',
    description: 'With exquisite furniture items available to hire to suit a range of different event themes and styles. From banquet tables and wooden fold-up chairs to luxury lounge seating, we have everything to make your event look spectacular.',
    images: ['/images/furniture-1.jpg', '/images/furniture-2.jpg'],
    features: ['Banquet tables', 'Wooden fold-up chairs', 'Luxury lounge seating', 'Cocktail tables', 'Linen and chair covers'],
  },
  {
    slug: 'kitchen-equipment',
    title: 'Kitchen Equipment Hire',
    tagline: 'Everything you need to feed your guests',
    description: 'Complete catering equipment hire for events of all sizes. Whether you are hosting a small garden party or a large corporate function, we have the professional kitchen equipment to keep your catering team running smoothly.',
    images: ['/images/kitchen-1.jpg'],
    features: ['Commercial gas burners', 'Bain maries', 'Chafing dishes', 'Buffet equipment', 'Catering marquees'],
  },
  {
    slug: 'tableware',
    title: 'Tableware',
    tagline: 'The finishing touches that make the difference',
    description: 'Complete your event setup with our comprehensive tableware hire range. From crockery and cutlery to glassware and serving platters — everything you need for a perfectly presented dining experience.',
    images: ['/images/tableware-1.jpg'],
    features: ['Crockery sets', 'Cutlery', 'Glassware', 'Serving platters', 'Table centrepieces'],
  },
]
