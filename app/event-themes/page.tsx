import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { eventThemes } from '@/lib/data/events'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export const metadata: Metadata = {
  title: 'Event Themes — Weddings, Birthdays, Corporate & More | TM Event Hire',
  description: 'Whatever your event, TM Event Hire has the perfect equipment and expertise. Weddings, birthdays, corporate events and funerals across Essex & Hertfordshire.',
}

export default function EventThemesPage() {
  return (
    <main className="pt-28">
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Event Types" title="We Cater For Every Occasion" subtitle="Whatever you're celebrating, TM Event Hire provides the perfect setup." light />
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventThemes.map(theme => (
            <Link key={theme.slug} href={`/event-themes/${theme.slug}`}
              className="group relative overflow-hidden aspect-[16/9] block rounded-sm">
              <Image src={theme.image} alt={theme.alt} fill className="object-cover group-hover:brightness-110 transition-all duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent group-hover:from-navy/90 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-display text-3xl font-bold text-white mb-2">{theme.title}</h2>
                <p className="text-white/70 mb-3 text-sm">{theme.tagline}</p>
                <span className="text-gold font-semibold text-sm">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CallbackCTA />
    </main>
  )
}
