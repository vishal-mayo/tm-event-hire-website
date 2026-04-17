import type { Metadata } from 'next'
import Image from 'next/image'
import { BubbleButton } from '@/components/ui/BubbleButton'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export const metadata: Metadata = {
  title: 'About TM Event Hire | Essex Marquee & Event Equipment Hire',
  description: 'Learn about TM Event Hire — Essex-based marquee and event equipment specialists with over 10 years of experience serving Essex, Hertfordshire and London.',
}

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">About Us</span>
          <h1 className="font-display italic text-5xl md:text-6xl text-white">Who We Are</h1>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Our Story</span>
            <h2 className="font-display italic text-4xl text-navy mb-6">10+ Years of Creating Unforgettable Events</h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-5">
              With over 10 years of experience in the events, catering and wedding industries, TM Event Hire has established itself as one of Essex&apos;s premier event equipment hire companies. We&apos;re proud members of the Event Hire Association.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-5">
              We provide high-end service, an impressive range of hire products and competitive pricing to customers across Essex, Hertfordshire and London. Whether you&apos;re planning an intimate garden party or a large corporate function, we have the expertise and equipment to make it happen.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              Our team takes pride in delivering flawless setups, working closely with each client to understand their vision and bring it to life. From the initial enquiry to final collection, we&apos;re with you every step of the way.
            </p>
            <BubbleButton href="/get-a-quote" variant="gold">Get a Free Quote</BubbleButton>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/about-team.jpg" alt="TM Event Hire team" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-sm shadow-xl">
              <div className="text-navy font-display text-4xl font-bold">10+</div>
              <div className="text-navy/80 text-xs uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: '10+', l: 'Years Experience' },
              { n: '500+', l: 'Events Completed' },
              { n: '3', l: 'Counties Covered' },
              { n: '5★', l: 'Google Rating' },
            ].map(stat => (
              <div key={stat.l} className="bg-cream p-6 rounded-sm shadow-sm">
                <div className="font-display text-4xl font-bold text-gold mb-2">{stat.n}</div>
                <div className="text-navy/70 text-sm font-semibold uppercase tracking-wide">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
