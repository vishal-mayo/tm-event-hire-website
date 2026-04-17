export interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  images: string[]
  features?: string[]
  useCases?: string[]
}

export const services: Service[] = [
  {
    slug: 'marquees',
    title: 'Marquee Hire',
    tagline: 'Transform any space into your dream venue',
    description: 'Our clear-span marquees are the ultimate marquee tent solution whether you are planning a wedding reception, a birthday party, a private, corporate or public event. No annoying centre poles or guide ropes — just a stunning open space that can be transformed into anything you can imagine.',
    longDescription: 'With over 10 years of experience erecting and decorating marquees across Essex, Hertfordshire and London, we know exactly what it takes to create an extraordinary event space. Our clear-span structures come in modular sizes so we can build the perfect footprint for your venue, from an intimate 3×6m garden setup to a sweeping 12×6m+ event structure for hundreds of guests.\n\nEvery marquee hire includes full delivery, professional installation and collection — so you can focus entirely on your guests while our team handles the setup.',
    images: ['/images/marquee-1.jpg', '/images/marquee-2.jpg', '/images/marquee-3.jpg'],
    features: ['No centre poles or guide ropes', 'Modular sizing from 3×6m to 12×6m+', 'Works on any surface — grass, concrete, decking', 'White or transparent PVC wall options', 'Full delivery, setup and collection included', 'Compatible with all lighting and flooring options'],
    useCases: ['Garden weddings', 'Birthday parties', 'Corporate functions', 'Garden parties', 'Funeral receptions', 'School proms'],
  },
  {
    slug: 'chinese-hats',
    title: 'Chinese Hat Hire',
    tagline: 'Elevate your outdoor event with style',
    description: 'Perfect as standalone tents or beautiful additions to a main marquee. Our stunning Chinese Hat or Pagoda Style Marquees make an immediate impact on guests and can be used as reception areas, catering zones or intimate seating areas.',
    longDescription: 'Chinese Hat or Pagoda style marquees are one of the most elegant and versatile event structures available. With their distinctive peaked roof and open sides, they create a striking visual centrepiece at any event. They can be used standalone for smaller gatherings or connected directly to a main marquee to extend your covered space.\n\nPerfect as a bar area, reception entrance, outdoor seating extension or catering zone — a Chinese Hat adds that extra touch of sophistication that makes your event stand out.',
    images: ['/images/chinese-hat-1.jpg', '/images/chinese-hat-2.jpg'],
    features: ['Standalone or linked directly to main marquee', 'Ideal as bar, reception or catering areas', 'Multiple sizes available', 'Festoon and fairy lighting compatible', 'Open or closed side options', 'Professional setup included'],
    useCases: ['Wedding reception areas', 'Bar extensions', 'Catering zones', 'Intimate seating areas', 'Photo booth enclosures', 'Corporate breakout spaces'],
  },
  {
    slug: 'bars',
    title: 'Mobile Bar Hire',
    tagline: 'Where refreshment meets convenience',
    description: 'Our range of mobile drinks bars are the perfect addition to any party or event that needs to serve drinks until the music stops! Choose from circular mirror bars, LED straight bars, circular LED bars and wooden straight bars.',
    longDescription: 'No event is complete without a great bar. Our mobile bar hire range offers a variety of styles to suit any theme or aesthetic — from sleek LED bars that glow to match your colour scheme, to rustic wooden straight bars that suit relaxed garden parties.\n\nAll our bars are self-contained and require no permanent installation, making them ideal for marquee events, garden parties or indoor venues. We deliver, set up and collect — you just keep the drinks flowing.',
    images: ['/images/bar-1.jpg', '/images/bar-2.jpg'],
    features: ['Circular Mirror Bar', 'LED Straight Bar', 'Circular LED Bar', 'Wooden Straight Bar', 'Full bar setup and collection', 'Suitable for any event size'],
    useCases: ['Garden parties', 'Weddings', 'Birthday parties', 'Corporate events', 'Festivals', 'Private functions'],
  },
  {
    slug: 'furniture',
    title: 'Furniture Hire',
    tagline: 'Tailored for every occasion',
    description: 'With exquisite furniture items available to hire to suit a range of different event themes and styles. From banquet tables and wooden fold-up chairs to luxury lounge seating, we have everything to make your event look spectacular.',
    longDescription: 'The right furniture transforms a marquee from a tent into an event. We offer a comprehensive range of hire furniture to suit everything from formal sit-down dinners to casual garden parties.\n\nOur collection includes banquet tables, round tables, wooden fold-up chairs, Chiavari chairs, luxury lounge sets, cocktail tables, and much more. Whether you need seating for 20 or 200, we can configure the perfect arrangement for your space.',
    images: ['/images/furniture-1.jpg', '/images/furniture-2.jpg'],
    features: ['Banquet tables and round tables', 'Wooden fold-up and Chiavari chairs', 'Luxury lounge seating', 'Cocktail and poseur tables', 'Linen and chair covers available', 'Setup and styling assistance'],
    useCases: ['Wedding receptions', 'Sit-down dinners', 'Garden parties', 'Corporate lunches', 'Birthday parties', 'Fundraising events'],
  },
  {
    slug: 'kitchen-equipment',
    title: 'Kitchen Equipment Hire',
    tagline: 'Everything you need to feed your guests',
    description: 'Complete catering equipment hire for events of all sizes. Whether you are hosting a small garden party or a large corporate function, we have the professional kitchen equipment to keep your catering team running smoothly.',
    longDescription: 'Behind every great event feast is a well-equipped catering operation. Our kitchen equipment hire range provides everything professional caterers and private hosts need to serve hot, freshly prepared food to large groups.\n\nFrom commercial gas burners and bain maries to full chafing dish sets, we supply the kind of professional-grade equipment that keeps service running smoothly whether you are feeding 50 or 500 guests.',
    images: ['/images/kitchen-1.jpg'],
    features: ['Commercial gas burners', 'Bain maries and hot plates', 'Chafing dish sets', 'Buffet and serving equipment', 'Catering marquees available', 'Full delivery and collection'],
    useCases: ['Private party catering', 'Corporate functions', 'Wedding breakfasts', 'Buffet events', 'Street food setups', 'Festival catering'],
  },
  {
    slug: 'tableware',
    title: 'Tableware',
    tagline: 'The finishing touches that make the difference',
    description: 'Complete your event setup with our comprehensive tableware hire range. From crockery and cutlery to glassware and serving platters — everything you need for a perfectly presented dining experience.',
    longDescription: 'Every place setting tells a story about your event. Our tableware hire collection ensures that story is one of elegance and attention to detail. We supply everything from crisp white crockery to polished cutlery sets, wine glasses, champagne flutes and serving platters.\n\nHire by the piece or as complete sets — we will advise on quantities based on your guest numbers and menu style. Delivered clean and collected after your event for hassle-free entertaining.',
    images: ['/images/tableware-1.jpg'],
    features: ['Crockery sets — starter, main and dessert plates', 'Polished cutlery sets', 'Wine glasses and champagne flutes', 'Serving platters and bowls', 'Available by the piece or full set', 'Delivered clean and collected after'],
    useCases: ['Wedding breakfasts', 'Sit-down dinners', 'Buffet events', 'Garden parties', 'Corporate lunches', 'Charity fundraisers'],
  },
]
