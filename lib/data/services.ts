export interface ServiceProcess {
  step: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface FeatureCallout {
  name: string
  description: string
}

export interface Accessory {
  name: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
}

export interface PricingItem {
  name: string
  price: string
}

export interface PricingCategory {
  name: string
  items: PricingItem[]
  note?: string
}

export interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  images: string[]
  features?: string[]
  useCases?: string[]
  featureCallouts?: FeatureCallout[]
  accessories?: Accessory[]
  testimonial?: Testimonial
  pricingCategories?: PricingCategory[]
  process?: ServiceProcess[]
  faqs?: ServiceFAQ[]
}

const standardProcess: ServiceProcess[] = [
  { step: 'Site Visit', description: 'We visit your location to assess terrain, space, guest numbers and your event theme — so we can recommend exactly the right setup.' },
  { step: 'Deposit', description: 'A 25% non-refundable deposit secures your booking date. Peak summer dates sell quickly, so book early.' },
  { step: 'Install', description: 'Our team delivers and professionally installs everything 1–3 days before your event, so it\'s all ready and waiting for you.' },
  { step: 'Event', description: 'We do a final walkthrough with you before departing. Everything is in place — all you need to do is enjoy your event.' },
  { step: 'Collection', description: 'We return the following day to carefully remove all equipment, leaving your space exactly as we found it.' },
]

export const services: Service[] = [
  {
    slug: 'marquees',
    title: 'Marquee Hire',
    tagline: 'Clear-span marquees for any occasion in Essex, London & Hertfordshire',
    description: 'Our clear-span marquees create a grand appearance and luxury atmosphere with no annoying and obstructive centre poles or guide ropes. The perfect marquee tent solution whether you are planning a wedding reception, a birthday party, a private, corporate or public event.',
    longDescription: 'With over 10 years of experience erecting and decorating marquees across Essex, Hertfordshire and London, we know exactly what it takes to create an extraordinary event space. Our clear-span structures come in modular sizes so we can build the perfect footprint for your venue, from an intimate garden setup to a sweeping event structure for hundreds of guests.\n\nOur marquees are versatile and can be installed on almost any terrain — gardens, concrete, decking — with water barrels used for securing on hard surfaces. Wooden flooring is recommended for comfort and aesthetics. Every hire includes full delivery, professional installation and collection — so you can focus entirely on your guests while our team handles everything else.\n\nCustomise your marquee with white linings, blackout star-lit ceilings, transparent or clear roofs, festoon lighting, carpet, heating systems and doors. We also supply accessories including mobile bars, furniture, Chinese hats, dance floors and more.',
    images: ['/images/marquee-1.jpg', '/images/marquee-2.jpg', '/images/marquee-3.jpg'],
    featureCallouts: [
      { name: 'Grand', description: 'Create a truly grand first impression for your guests with a stunning clear-span structure that transforms any outdoor space into an elegant venue.' },
      { name: 'Spacious', description: 'No centre poles or guide ropes means a completely open, unobstructed interior — giving you maximum use of every square foot of space.' },
      { name: 'Customisable', description: 'Choose from white or transparent PVC walls, white linings, blackout star-lit ceilings, festoon lighting, carpet, heating and more to create your perfect look.' },
      { name: 'Versatile', description: 'Suitable for weddings, parties, corporate events and more. Our marquees can be installed on virtually any terrain — grass, concrete, decking or shingle.' },
      { name: 'Modular', description: 'Our clear-span marquees are built in modular bays, allowing us to extend or reduce the size to suit your exact guest count and available space.' },
      { name: 'Extras', description: 'Enhance your marquee with our full range of accessories — Chinese hats, mobile bars, dance floors, furniture, flooring and decorative lighting — all from one supplier.' },
    ],
    accessories: [
      { name: 'Doors', description: 'Choose from a range of door styles including glass panel doors for an elegant entrance and traditional marquee zip-up doors for a classic look.' },
      { name: 'Festoon Lights', description: 'Warm festoon string lighting draped inside or outside your marquee creates a magical, intimate atmosphere as evening falls.' },
      { name: 'Carpet', description: 'Plush carpet adds warmth, comfort and a polished finish to your marquee interior, available in a range of colours to match your theme.' },
      { name: 'Chinese Hats', description: 'Connect a Chinese Hat pagoda structure to your main marquee to create a seamless bar area, catering zone, or reception entrance.' },
      { name: 'Clear Roof', description: 'A transparent clear roof panel floods your marquee with natural light during the day and creates a stunning stargazing effect at night.' },
      { name: 'Mobile Bars', description: 'Our range of LED and wooden mobile bars can be positioned inside or outside your marquee to create a fully self-contained bar area for your guests.' },
      { name: 'Furniture', description: 'Complete your marquee setup with our range of banquet chairs, round tables, lounge sofas and bar stools — all available from TM Event Hire.' },
      { name: 'Black Out Ceiling', description: 'A fully lined blackout ceiling liner with integrated star-lit LED effect creates a dramatic and beautiful ceiling for evening events and dances.' },
      { name: 'Heaters', description: 'Indirect gas heaters positioned outside the tent with thermostatically controlled ducting keep your marquee warm and comfortable whatever the weather.' },
    ],
    testimonial: {
      quote: 'Absolutely brilliant service from start to finish. The marquee looked stunning and the team were so professional throughout. Will definitely be using TM Event Hire again.',
      author: 'D. Longman',
    },
    useCases: ['Garden weddings', 'Birthday parties', 'Corporate functions', 'Garden parties', 'Funeral receptions', 'School proms'],
    process: standardProcess,
    faqs: [
      { question: 'How much does marquee hire cost?', answer: 'Pricing depends on the size of marquee required, guest count and any additional items such as lining, flooring, lighting and bars. We provide custom quotes for every booking — contact us to discuss your requirements.' },
      { question: 'How long does it take to set up a marquee?', answer: 'Setup time varies depending on the size of the marquee and accessories included. We will confirm timings at the point of booking and typically install 1–3 days before your event.' },
      { question: 'Can a marquee be installed on concrete or decking?', answer: 'Yes. Our marquees can be installed on concrete or decking using water barrels for securing. We recommend wooden flooring for these surfaces to ensure comfort for your guests.' },
      { question: 'How is heating managed inside the marquee?', answer: 'We use indirect heaters positioned outside the tent with ducting into the marquee interior. They are thermostatically controlled to maintain a comfortable temperature throughout your event.' },
      { question: 'What are the power requirements?', answer: 'Standard lighting and heating require low power — access to a nearby building\'s electricity supply is usually sufficient. For catering equipment, bands or additional requirements, we can arrange generators.' },
      { question: 'How far in advance should I book?', answer: 'Peak summer dates sell quickly — we recommend booking as early as possible. Early and late season dates are often available with shorter notice. Contact us to check availability.' },
    ],
  },
  {
    slug: 'chinese-hats',
    title: 'Chinese Hat Hire',
    tagline: 'Stylish & elegant marquees that make a statement',
    description: 'Magnificent looking marquees, ideal for garden parties and as beautiful additions to a main marquee. Our Chinese Hat or Pagoda Style Marquees make an immediate impact and can be used as reception areas, catering zones, bar extensions or intimate seating areas.',
    longDescription: 'Chinese Hat or Pagoda style marquees are one of the most elegant and versatile event structures available. With their distinctive peaked roof and beautiful curved lines, they create a striking visual centrepiece at any event. The interior fabric lining drapes from the roof, hiding the metal structure and creating a luxurious aesthetic.\n\nThey can be used standalone for smaller gatherings or connected directly to a main marquee to extend your covered space. Double or triple them up for larger events, or position them as a grand entrance to lead guests into your main venue.\n\nOur Chinese Hats feature interchangeable PVC walls — choose brilliant white for catering areas or transparent options for open-air garden parties. They can be deployed on almost any terrain including gardens, paved areas, shingle and decking.',
    images: ['/images/chinese-hat-1.jpg', '/images/chinese-hat-2.jpg'],
    featureCallouts: [
      { name: 'Customisable', description: 'Interchangeable PVC walls in brilliant white or transparent options allow you to achieve exactly the look and feel you want for your event.' },
      { name: 'Versatile', description: 'Use as a standalone structure for smaller events or connect directly to a main marquee to create a seamless, extended event space.' },
      { name: 'Luxurious', description: 'The interior fabric lining drapes beautifully from the peaked roof, concealing the metal structure and creating a truly luxurious, finished aesthetic.' },
      { name: 'Modular', description: 'Double or triple up Chinese Hats side by side for larger events, or use them to create grand covered walkways and entrance areas.' },
      { name: 'Spacious', description: 'Despite their elegant appearance, Chinese Hats offer generous interior headroom and floor space — ideal for seated dining or a fully stocked bar.' },
      { name: 'Stylish', description: 'The distinctive peaked roofline and graceful curved edges create an immediate visual impact that no standard marquee can match.' },
    ],
    accessories: [
      { name: 'Swags', description: 'Decorative fabric swags draped between the roof peaks add a romantic, dressed finish to your Chinese Hat for weddings and formal events.' },
      { name: 'Festoon Lights', description: 'Warm festoon string lighting hung inside or outside your Chinese Hat creates a soft, inviting glow as daylight fades.' },
      { name: 'Carpet', description: 'Plush carpet laid inside your Chinese Hat adds warmth and a polished feel underfoot, available in colours to match your event theme.' },
      { name: 'Rustic Flooring', description: 'Wooden decking or rustic plank flooring creates a warm, natural look that suits garden parties and relaxed outdoor events.' },
      { name: 'Dance Floors', description: 'We supply black and white, LED starlit and wooden parquet dance floors — available in various sizes to suit your event and guest numbers.' },
      { name: 'Mobile Bars', description: 'Position one of our mobile LED or wooden bars inside a Chinese Hat to create a dedicated bar area that is separate from your main event space.' },
      { name: 'Furniture', description: 'Complement your Chinese Hat with our banquet chairs, round tables, poseur tables and lounge seating — available as part of a combined hire package.' },
    ],
    testimonial: {
      quote: 'The Chinese Hat looked incredible as our bar area. Guests couldn\'t believe it was a hired structure — it looked completely bespoke. TM Event Hire were professional, punctual and brilliant throughout.',
      author: 'A. White',
    },
    useCases: ['Wedding reception areas', 'Bar extensions', 'Catering zones', 'Intimate seating areas', 'Grand entrances', 'Corporate breakout spaces'],
    process: standardProcess,
    faqs: [
      { question: 'Can a Chinese Hat be connected to a main marquee?', answer: 'Yes — Chinese Hats can be directly connected to a main clear-span marquee to create a seamless extended event space. They are often used as bar areas, catering zones or reception entrances.' },
      { question: 'What sizes are available?', answer: 'We offer multiple sizes of Chinese Hat marquees. Contact us with your guest numbers and available space and we will recommend the right size for your event.' },
      { question: 'Can I have transparent or open sides?', answer: 'Yes. The PVC walls are interchangeable — choose transparent options for a light, open-air feel or white walls for a more formal look. Sides can also be fully open for garden parties.' },
      { question: 'Are accessories like dance floors and bars available?', answer: 'Yes. We offer a full range of accessories including swags, festoon lights, carpet, coconut matting, dance floors (black/white, LED starlit, wooden parquet) and mobile bars.' },
      { question: 'How many Chinese Hats can be linked together?', answer: 'Multiple Chinese Hats can be linked side by side or end to end to create longer covered walkways or larger event spaces. Contact us to discuss your specific layout requirements.' },
      { question: 'What terrain can a Chinese Hat be installed on?', answer: 'Chinese Hats can be installed on almost any terrain including grass, concrete, paved areas, shingle and decking. We use appropriate securing methods for each surface type.' },
      { question: 'How far in advance should I book?', answer: 'We recommend booking as early as possible, particularly for peak summer dates. Contact us to check availability and we will confirm a date that works for you.' },
    ],
  },
  {
    slug: 'bars',
    title: 'Mobile Bar Hire',
    tagline: 'Luxury mobile drinks-bar hire in Essex, London & Hertfordshire',
    description: 'A range of luxury mobile drinks bars available to suit your party theme and budget. From small corner bars to larger LED-lit centrepiece options, our bars are portable, adaptable and delivered straight to your event — wherever that may be.',
    longDescription: 'No event is complete without a great bar. Our mobile bar hire range offers a variety of styles to suit any theme or aesthetic — from sleek LED bars that glow to match your colour scheme, to rustic wooden straight bars that suit relaxed garden parties.\n\nAll our bars are self-contained, portable and moveable to any location. Behind-the-bar shelving is included for staff supply and equipment storage. Curved and straight bar sections can be mixed and matched for unique configurations. We also supply stylish bar stools and themed accessories to complement your event.\n\nWe handle collection, setup and return — so all you need to worry about is keeping the drinks flowing. We recommend The Bar People for alcohol supply and bar staffing if required.',
    images: ['/images/bar-1.jpg', '/images/bar-2.jpg'],
    featureCallouts: [
      { name: 'Customisable', description: 'Our LED bars can be set to any colour to match your event theme or colour scheme, and straight sections can be arranged in a variety of configurations.' },
      { name: 'Versatile', description: 'Suitable for indoor and outdoor use, our bars can be positioned in marquees, gardens, function rooms or any event space — wherever you need them.' },
      { name: 'Modular', description: 'Straight and curved bar sections can be combined in different configurations to fit the available space and create the perfect bar layout for your event.' },
      { name: 'Accessorise', description: 'Complement your bar with bar stools, glassware hire, refrigeration and themed accessories — all available to add to your hire package.' },
      { name: 'Hassle Free', description: 'We deliver and set up your bar the day before your event and collect the day after. No complicated logistics — just a stunning, ready-to-use bar.' },
      { name: 'Storage', description: 'All our bars feature integrated behind-the-bar shelving and storage space to keep your staff organised and your bar area tidy throughout the event.' },
    ],
    accessories: [
      { name: 'LED Straight Bar', description: 'A sleek LED-lit straight bar that can be set to any colour. Clean, modern and perfect as a centrepiece or perimeter bar in a marquee or function room.' },
      { name: 'Circular Mirror Bar', description: 'A glamorous circular bar with a mirrored finish — perfect as a statement centrepiece for weddings, milestone birthdays and high-end corporate events.' },
      { name: 'Circular LED Bar', description: 'A fully LED circular bar offering 360° visual impact. Ideal for large events where guests approach from all sides and a centrepiece bar is required.' },
      { name: 'Wooden Straight Bar', description: 'A warm, rustic wooden straight bar — perfect for garden parties, barn weddings and relaxed outdoor events where a natural aesthetic is preferred.' },
    ],
    testimonial: {
      quote: 'We hired the circular LED bar for a large wedding and it was an absolute showstopper. TM Event Hire were incredibly helpful throughout and the bar was delivered and set up perfectly. Highly recommended.',
      author: 'M. Starling, Daisy Venue Dressing',
    },
    useCases: ['Garden parties', 'Weddings', 'Birthday parties', 'Corporate events', 'Festivals', 'Private functions'],
    process: standardProcess,
    faqs: [
      { question: 'Do you supply alcohol or bar staff?', answer: 'TM Event Hire does not supply alcohol or bar staff, but we recommend The Bar People who specialise in bar staffing and drinks supply for private events.' },
      { question: 'Is delivery included?', answer: 'Yes — we provide free delivery and pickup. We deliver the day before your event and collect the day after, so there is no additional hassle.' },
      { question: 'Can I hire glassware and refrigeration too?', answer: 'Yes. Glassware, refrigeration and additional bar equipment are available to hire. Contact us to discuss your full requirements.' },
      { question: 'Which bar is right for my event?', answer: 'We can advise based on your event size, theme and available space. Circular LED and mirror bars work well as statement centrepieces for larger events; wooden bars suit more relaxed or rustic settings.' },
      { question: 'Can the LED colour be changed?', answer: 'Yes — our LED bars can be set to any single colour to match your event\'s colour scheme. Speak to us at the point of booking and we will configure this before delivery.' },
    ],
  },
  {
    slug: 'furniture',
    title: 'Furniture Hire',
    tagline: 'The details matter — luxury event furniture for every occasion',
    description: 'From the thickness of the table linen to the style of chair, our furniture hire services help you create a cohesive environment for your guests, whatever style of event it is. We only stock the highest quality furniture so your guests can feel comfortable and safe throughout.',
    longDescription: 'The right furniture transforms a marquee from a tent into an event. We offer a comprehensive range of hire furniture to suit everything from formal sit-down dinners to casual garden parties.\n\nOur seating collection includes Limewash Chiavari banquet chairs, wooden folding chairs, children\'s high chairs and bar stools. For tables, we offer round banquet tables in five sizes (3ft to 6ft), trestle tables, glass poser tables and white coffee tables. We also hire luxury lounge furniture including white two-seater sofas, armchairs and cube seating.\n\nAll furniture hire fees include delivery before and pickup after your event, so all you have to do is enjoy yourself. We deliver across Essex, London and Hertfordshire.',
    images: ['/images/furniture-1.jpg', '/images/furniture-2.jpg'],
    featureCallouts: [
      { name: 'Convenient', description: 'All furniture hire fees include delivery before your event and collection after — everything arrives ready to use, and we take it all away when you\'re done.' },
      { name: 'Variety', description: 'From elegant Chiavari banquet chairs to relaxed lounge sofas, we stock a wide range of furniture styles to suit any event type, from formal dinners to garden parties.' },
      { name: 'Quality', description: 'We only stock the highest quality furniture. Every item is checked, cleaned and presented to a high standard before delivery, so your guests can feel comfortable and safe throughout.' },
    ],
    features: [
      'Limewash Chiavari banquet chairs',
      'Wooden folding chairs',
      'Children\'s high chairs',
      'Bar stools',
      'Round banquet tables (3ft, 4ft, 5ft, 5.6ft, 6ft)',
      'Trestle tables (4ft and 6ft)',
      'Glass poser tables',
      'White coffee tables',
      'White two-seater lounge sofas',
      'White armchairs',
      'Cube seating',
    ],
    testimonial: {
      quote: 'The Chiavari chairs looked absolutely beautiful in our marquee. Every piece of furniture was immaculate and the delivery team were a pleasure to deal with. Nothing was too much trouble.',
      author: 'S. Andrews',
    },
    useCases: ['Wedding receptions', 'Sit-down dinners', 'Garden parties', 'Corporate lunches', 'Birthday parties', 'Fundraising events'],
    process: standardProcess,
    faqs: [
      { question: 'Is delivery included in the hire fee?', answer: 'Yes — delivery before your event and collection after are included in all furniture hire fees. We deliver across Essex, London and Hertfordshire.' },
      { question: 'What chair styles do you offer?', answer: 'We offer Limewash Chiavari banquet chairs for a classic, elegant look, and wooden folding chairs for a more relaxed setting. Bar stools are also available for poser tables.' },
      { question: 'What table sizes are available?', answer: 'We offer round banquet tables in 3ft, 4ft, 5ft, 5.6ft and 6ft sizes, plus 4ft and 6ft trestle tables. We can advise on the best layout for your guest numbers and marquee size.' },
      { question: 'Can you supply lounge furniture?', answer: 'Yes — we offer white two-seater sofas, armchairs and cube seating, perfect for creating chill-out areas in a marquee or garden event space.' },
    ],
  },
  {
    slug: 'kitchen-equipment',
    title: 'Kitchen Equipment Hire',
    tagline: 'Everything you need to feed your guests',
    description: 'Complete catering equipment hire for events of all sizes. Whether you are hosting a small garden party or a large corporate function, we have the professional kitchen equipment to keep your catering team running smoothly.',
    longDescription: 'Behind every great event feast is a well-equipped catering operation. Our kitchen equipment hire range provides everything professional caterers and private hosts need to serve hot, freshly prepared food to large groups.\n\nFrom commercial gas burners and bain maries to full chafing dish sets, we supply the kind of professional-grade equipment that keeps service running smoothly whether you are feeding 50 or 500 guests.\n\nAll equipment is delivered clean and ready to use. We recommend pairing our kitchen equipment with our tableware hire range for a complete, hassle-free catering solution.',
    images: ['/images/kitchen-1.jpg'],
    features: [
      'Commercial double ring gas burners',
      'Bain maries — electric and chafing dish styles',
      'Chafing dish sets (full and half size)',
      'Stainless steel serving trays and lids',
      'Buffet stands and risers',
      'Carving stations',
      'Hot plate units',
      'LPG gas cylinders available on request',
    ],
    testimonial: {
      quote: 'We use TM Event Hire\'s catering equipment regularly for large outdoor events. The equipment is always clean, reliable and ready to go — exactly what you need when you\'re catering for hundreds of guests.',
      author: 'Joey Lovejoy, Roamers Caterers',
    },
    useCases: ['Private party catering', 'Corporate functions', 'Wedding breakfasts', 'Buffet events', 'Street food setups', 'Festival catering'],
    process: standardProcess,
    faqs: [
      { question: 'Is the equipment delivered clean and ready to use?', answer: 'Yes — all kitchen equipment is thoroughly cleaned and inspected before delivery. It arrives ready to use so your catering team can get set up quickly and efficiently.' },
      { question: 'Do you supply gas for the burners?', answer: 'LPG gas cylinders are available on request as an add-on to your kitchen equipment hire. Let us know your requirements when booking and we will include them in your quote.' },
      { question: 'Can I hire kitchen equipment alongside a marquee?', answer: 'Absolutely — in fact, most of our kitchen equipment hire goes alongside a marquee or Chinese Hat. We can quote for the full package in one go, simplifying your planning and delivery logistics.' },
      { question: 'What size events is the kitchen equipment suitable for?', answer: 'Our catering equipment range is suitable for events of all sizes, from small garden parties of 30–50 guests up to large corporate or public events with 500+ guests. Contact us to discuss your specific requirements.' },
      { question: 'How far in advance should I book?', answer: 'We recommend booking as early as possible to guarantee availability, particularly for peak summer weekends. Equipment can often be booked with shorter notice for midweek or off-peak dates.' },
    ],
  },
  {
    slug: 'tableware',
    title: 'Tableware',
    tagline: 'The finishing touches that make the difference',
    description: 'Complete your event setup with our comprehensive tableware hire range. From crockery and cutlery to glassware and serving platters — everything you need for a perfectly presented dining experience.',
    longDescription: 'Every place setting tells a story about your event. Our tableware hire collection ensures that story is one of elegance and attention to detail. We supply everything from crisp white crockery to polished cutlery sets, wine glasses, champagne flutes and serving platters.\n\nHire by the piece or as complete sets — we will advise on quantities based on your guest numbers and menu style. Delivered clean and collected after your event for hassle-free entertaining.\n\nPlease note: a 25% washing up charge applies to all tableware hire. Alternatively, items can be returned washed to avoid this charge.',
    images: ['/images/tableware-1.jpg'],
    pricingCategories: [
      {
        name: 'Crockery',
        items: [
          { name: 'Dinner Plate (10")', price: '35p' },
          { name: 'Side Plate (7")', price: '25p' },
          { name: 'Dessert Bowl', price: '25p' },
          { name: 'Soup Bowl', price: '25p' },
          { name: 'Cup & Saucer', price: '40p' },
          { name: 'Teapot', price: '£1.50' },
          { name: 'Milk Jug', price: '75p' },
          { name: 'Sugar Bowl', price: '75p' },
          { name: 'Serving Platter (large)', price: '£2.50' },
          { name: 'Serving Bowl (large)', price: '£2.00' },
        ],
      },
      {
        name: 'Glassware',
        items: [
          { name: 'Wine Glass', price: '35p' },
          { name: 'Champagne Flute', price: '35p' },
          { name: 'Pint Glass', price: '35p' },
          { name: 'Half-Pint Glass', price: '25p' },
          { name: 'Tumbler (short)', price: '25p' },
          { name: 'Highball Glass', price: '30p' },
          { name: 'Martini Glass', price: '40p' },
          { name: 'Shot Glass', price: '20p' },
          { name: 'Water Jug', price: '£1.00' },
        ],
      },
      {
        name: 'Cutlery',
        items: [
          { name: 'Dinner Fork', price: '20p' },
          { name: 'Dinner Knife', price: '20p' },
          { name: 'Dessert Fork', price: '20p' },
          { name: 'Dessert Spoon', price: '20p' },
          { name: 'Soup Spoon', price: '20p' },
          { name: 'Teaspoon', price: '15p' },
          { name: 'Serving Spoon', price: '50p' },
          { name: 'Serving Fork', price: '50p' },
          { name: 'Cake Slice', price: '75p' },
        ],
      },
      {
        name: 'Miscellaneous',
        items: [
          { name: 'Table Napkins (paper)', price: '10p' },
          { name: 'Candelabra', price: '£2.95' },
          { name: 'Salt & Pepper Set', price: '75p' },
          { name: 'Bread Basket', price: '75p' },
          { name: 'Sauce Boat', price: '75p' },
          { name: 'Butter Dish', price: '50p' },
        ],
        note: 'Prices are per item per hire. A 25% washing up charge applies to all returned tableware. Items returned washed are exempt from the washing up charge.',
      },
    ],
    features: [
      'Crisp white crockery — starter, main, dessert and side plates',
      'Polished stainless steel cutlery sets',
      'Wine glasses, champagne flutes and tumblers',
      'Pint and half-pint glasses',
      'Serving platters, bowls and jugs',
      'Candelabra and table accessories',
      'Hire by the piece — no minimum order',
      'Delivered clean; 25% washing up charge on return',
    ],
    useCases: ['Wedding breakfasts', 'Sit-down dinners', 'Buffet events', 'Garden parties', 'Corporate lunches', 'Charity fundraisers'],
    process: standardProcess,
  },
]
