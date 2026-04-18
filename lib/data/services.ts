export interface ServiceProcess {
  step: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
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
    features: [
      'No centre poles or guide ropes — completely open interior',
      'Modular construction for flexible sizing',
      'Suitable for any terrain — gardens, concrete, decking',
      'White or transparent/clear PVC wall options',
      'White linings, blackout star-lit ceilings, clear roofs available',
      'Festoon lighting, carpet, heating and door options',
      'Full delivery, professional setup and collection included',
      'Compatible with all dance floor, bar and furniture options',
    ],
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
    features: [
      'Distinctive curved roof — stands out from traditional marquees',
      'Interior fabric lining hides metal structure for elegant finish',
      'Interchangeable PVC walls — white or transparent options',
      'Standalone or linked directly to a main marquee',
      'Can be doubled or tripled for larger events',
      'Deployable on almost any terrain',
      'Festoon and fairy lighting compatible',
      'Swags, carpet and dance floor options available',
    ],
    useCases: ['Wedding reception areas', 'Bar extensions', 'Catering zones', 'Intimate seating areas', 'Grand entrances', 'Corporate breakout spaces'],
    process: standardProcess,
    faqs: [
      { question: 'Can a Chinese Hat be connected to a main marquee?', answer: 'Yes — Chinese Hats can be directly connected to a main clear-span marquee to create a seamless extended event space. They are often used as bar areas, catering zones or reception entrances.' },
      { question: 'What sizes are available?', answer: 'We offer multiple sizes of Chinese Hat marquees. Contact us with your guest numbers and available space and we will recommend the right size for your event.' },
      { question: 'Can I have transparent or open sides?', answer: 'Yes. The PVC walls are interchangeable — choose transparent options for a light, open-air feel or white walls for a more formal look. Sides can also be fully open for garden parties.' },
      { question: 'Are accessories like dance floors and bars available?', answer: 'Yes. We offer a full range of accessories including swags, festoon lights, carpet, coconut matting, dance floors (black/white, LED starlit, wooden parquet) and mobile bars.' },
    ],
  },
  {
    slug: 'bars',
    title: 'Mobile Bar Hire',
    tagline: 'Luxury mobile drinks-bar hire in Essex, London & Hertfordshire',
    description: 'A range of luxury mobile drinks bars available to suit your party theme and budget. From small corner bars to larger LED-lit centrepiece options, our bars are portable, adaptable and delivered straight to your event — wherever that may be.',
    longDescription: 'No event is complete without a great bar. Our mobile bar hire range offers a variety of styles to suit any theme or aesthetic — from sleek LED bars that glow to match your colour scheme, to rustic wooden straight bars that suit relaxed garden parties.\n\nAll our bars are self-contained, portable and moveable to any location. Behind-the-bar shelving is included for staff supply and equipment storage. Curved and straight bar sections can be mixed and matched for unique configurations. We also supply stylish bar stools and themed accessories to complement your event.\n\nWe handle collection, setup and return — so all you need to worry about is keeping the drinks flowing. We recommend The Bar People for alcohol supply and bar staffing if required.',
    images: ['/images/bar-1.jpg', '/images/bar-2.jpg'],
    features: [
      'LED Straight Bar — sleek and customisable glow',
      'Circular Mirror Bar — glamorous centrepiece',
      'Circular LED Bar — 360° impact for large events',
      'Wooden Straight Bar — rustic and warm aesthetic',
      'Bar stools and themed accessories available',
      'Behind-the-bar shelving included',
      'Free delivery and pickup — day before and day after',
      'Glassware and refrigeration available on request',
    ],
    useCases: ['Garden parties', 'Weddings', 'Birthday parties', 'Corporate events', 'Festivals', 'Private functions'],
    process: standardProcess,
    faqs: [
      { question: 'Do you supply alcohol or bar staff?', answer: 'TM Event Hire does not supply alcohol or bar staff, but we recommend The Bar People who specialise in bar staffing and drinks supply for private events.' },
      { question: 'Is delivery included?', answer: 'Yes — we provide free delivery and pickup. We deliver the day before your event and collect the day after, so there is no additional hassle.' },
      { question: 'Can I hire glassware and refrigeration too?', answer: 'Yes. Glassware, refrigeration and additional bar equipment are available to hire. Contact us to discuss your full requirements.' },
      { question: 'Which bar is right for my event?', answer: 'We can advise based on your event size, theme and available space. Circular LED and mirror bars work well as statement centrepieces for larger events; wooden bars suit more relaxed or rustic settings.' },
    ],
  },
  {
    slug: 'furniture',
    title: 'Furniture Hire',
    tagline: 'The details matter — luxury event furniture for every occasion',
    description: 'From the thickness of the table linen to the style of chair, our furniture hire services help you create a cohesive environment for your guests, whatever style of event it is. We only stock the highest quality furniture so your guests can feel comfortable and safe throughout.',
    longDescription: 'The right furniture transforms a marquee from a tent into an event. We offer a comprehensive range of hire furniture to suit everything from formal sit-down dinners to casual garden parties.\n\nOur seating collection includes Limewash Chiavari banquet chairs, wooden folding chairs, children\'s high chairs and bar stools. For tables, we offer round banquet tables in five sizes (3ft to 6ft), trestle tables, glass poser tables and white coffee tables. We also hire luxury lounge furniture including white two-seater sofas, armchairs and cube seating.\n\nAll furniture hire fees include delivery before and pickup after your event, so all you have to do is enjoy yourself. We deliver across Essex, London and Hertfordshire.',
    images: ['/images/furniture-1.jpg', '/images/furniture-2.jpg'],
    features: [
      'Limewash Chiavari banquet chairs',
      'Wooden folding chairs',
      'Round banquet tables (3ft, 4ft, 5ft, 5.6ft, 6ft)',
      'Trestle tables (4ft and 6ft)',
      'Glass poser tables and white coffee tables',
      'White lounge sofas, armchairs and cube seating',
      'Bar stools for poser tables',
      'Delivery and collection included in hire fee',
    ],
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
    longDescription: 'Behind every great event feast is a well-equipped catering operation. Our kitchen equipment hire range provides everything professional caterers and private hosts need to serve hot, freshly prepared food to large groups.\n\nFrom commercial gas burners and bain maries to full chafing dish sets, we supply the kind of professional-grade equipment that keeps service running smoothly whether you are feeding 50 or 500 guests.',
    images: ['/images/kitchen-1.jpg'],
    features: ['Commercial gas burners', 'Bain maries and hot plates', 'Chafing dish sets', 'Buffet and serving equipment', 'Catering marquees available', 'Full delivery and collection'],
    useCases: ['Private party catering', 'Corporate functions', 'Wedding breakfasts', 'Buffet events', 'Street food setups', 'Festival catering'],
    process: standardProcess,
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
    process: standardProcess,
  },
]
