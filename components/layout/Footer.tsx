import Link from 'next/link'

const serviceLinks = [
  { label: 'Marquee Hire',      href: '/services/marquees' },
  { label: 'Chinese Hat Hire',  href: '/services/chinese-hats' },
  { label: 'Mobile Bar Hire',   href: '/services/bars' },
  { label: 'Furniture Hire',    href: '/services/furniture' },
  { label: 'Kitchen Equipment', href: '/services/kitchen-equipment' },
  { label: 'Tableware',         href: '/services/tableware' },
]
const eventLinks = [
  { label: 'Weddings',          href: '/event-themes/weddings' },
  { label: 'Birthdays',         href: '/event-themes/birthdays' },
  { label: 'Funerals',          href: '/event-themes/funerals' },
  { label: 'Corporate Events',  href: '/event-themes/corporate-events' },
]
const helpLinks = [
  { label: 'About Us',     href: '/about' },
  { label: 'News',         href: '/news' },
  { label: 'Get a Quote',  href: '/get-a-quote' },
  { label: 'Contact Us',   href: '/contact-us' },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              TM<span className="text-gold">Event</span>Hire
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Premium event equipment hire across Essex, Hertfordshire and London. Members of the Event Hire Association.
            </p>
            <div className="inline-block border border-gold/40 text-gold text-xs px-3 py-1 rounded font-semibold tracking-widest uppercase">
              EHA Member
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-white hover:-translate-y-0.5 transition-all inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event themes */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs mb-4">Types of Events</h4>
            <ul className="space-y-2">
              {eventLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-white hover:-translate-y-0.5 transition-all inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="tel:+447595979451" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block">
                  📞 +44 7595 979 451
                </a>
              </li>
              <li>
                <a href="mailto:info@tmeventhire.co.uk" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block">
                  ✉️ info@tmeventhire.co.uk
                </a>
              </li>
              <li>
                <a href="https://wa.me/447595979451" className="hover:text-white transition-colors hover:-translate-y-0.5 inline-block">
                  💬 WhatsApp Us
                </a>
              </li>
              <li className="pt-2">
                <span>Essex, Hertfordshire & London</span>
              </li>
            </ul>
            <div className="mt-4">
              {helpLinks.map(l => (
                <Link key={l.href} href={l.href} className="block text-white/60 text-sm hover:text-white hover:-translate-y-0.5 transition-all mb-2">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          TM Event Hire T/A T MCL CATERING HIRE LIMITED © Copyright 2013– | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
