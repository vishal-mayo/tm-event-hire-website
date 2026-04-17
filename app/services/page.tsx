import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export const metadata: Metadata = {
  title: 'Event Hire Services | Marquees, Bars, Furniture & More | TM Event Hire',
  description: 'Browse our full range of event hire services including marquee hire, Chinese hat hire, mobile bar hire, furniture hire and kitchen equipment across Essex & Hertfordshire.',
}

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="What We Offer" title="Our Event Hire Services" subtitle="Everything you need to create the perfect event, delivered and set up by our expert team." light />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-grey-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <Link key={service.slug} href={`/services/${service.slug}`}
              className="group bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image src={service.images[0]} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <h2 className="font-display text-xl font-bold text-navy mb-2">{service.title}</h2>
                <p className="text-gold text-sm font-semibold italic mb-3">{service.tagline}</p>
                <p className="text-grey-mid text-sm line-clamp-3">{service.description}</p>
                <span className="inline-block mt-4 text-gold font-semibold text-sm">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
