import Link from 'next/link'
import Image from 'next/image'

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
const companyLinks = [
  { label: 'About Us',    href: '/about' },
  { label: 'News',        href: '/news' },
  { label: 'Get a Quote', href: '/get-a-quote' },
  { label: 'Contact Us',  href: '/contact-us' },
]

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-white/40 font-semibold uppercase tracking-[0.15em] text-[10px] mb-5">{title}</h4>
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/45 text-sm hover:text-silver transition-colors duration-200 leading-loose">
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #071e50 0%, #050f2a 100%)' }} className="text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand — 2 columns */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative rounded-sm overflow-hidden ring-1 ring-white/15">
                <Image src="/images/logo.jpg" alt="TM Event Hire" fill className="object-contain" sizes="40px" />
              </div>
              <span className="font-display text-xl text-white">TM <span className="text-silver">Event</span> Hire</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium marquee and event equipment hire across Essex, Hertfordshire and London. Members of the Event Hire Association.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:+447595979451" className="text-silver/70 hover:text-silver text-sm transition-colors">
                +44 7595 979 451
              </a>
              <span className="text-white/20">·</span>
              <a href="mailto:info@tmeventhire.co.uk" className="text-silver/70 hover:text-silver text-sm transition-colors">
                info@tmeventhire.co.uk
              </a>
            </div>
            <div className="mt-5">
              <div className="inline-block border border-silver/20 text-silver/60 text-[10px] px-3 py-1.5 font-semibold tracking-[0.15em] uppercase">
                EHA Member
              </div>
            </div>
          </div>

          {/* Services */}
          <FooterCol title="Our Services">
            <ul className="space-y-0.5">
              {serviceLinks.map(l => <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>)}
            </ul>
          </FooterCol>

          {/* Events */}
          <FooterCol title="Event Types">
            <ul className="space-y-0.5">
              {eventLinks.map(l => <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>)}
            </ul>
          </FooterCol>

          {/* Company */}
          <FooterCol title="Company">
            <ul className="space-y-0.5">
              {companyLinks.map(l => <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>)}
            </ul>
            <div className="mt-6 space-y-2">
              <a href="https://wa.me/447595979451" className="flex items-center gap-2 text-silver/60 text-sm hover:text-silver transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wide">
            TM Event Hire T/A T MCL CATERING HIRE LIMITED &copy; {new Date().getFullYear()} · All Rights Reserved
          </p>
          <p className="text-white/20 text-xs">Essex · Hertfordshire · London</p>
        </div>
      </div>
    </footer>
  )
}
