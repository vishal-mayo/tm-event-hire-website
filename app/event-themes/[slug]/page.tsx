import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { eventThemes } from '@/lib/data/events'
import { BubbleButton } from '@/components/ui/BubbleButton'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export async function generateStaticParams() {
  return eventThemes.map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const theme = eventThemes.find(e => e.slug === params.slug)
  if (!theme) return {}
  return {
    title: `${theme.title} Hire in Essex & Hertfordshire | TM Event Hire`,
    description: theme.description.slice(0, 160),
  }
}

export default function EventThemePage({ params }: { params: { slug: string } }) {
  const theme = eventThemes.find(e => e.slug === params.slug)
  if (!theme) notFound()

  return (
    <main className="pt-28">
      <section className="relative h-80 overflow-hidden">
        <Image src={theme.image} alt={theme.alt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3">Event Theme</span>
          <h1 className="font-display italic text-5xl md:text-6xl text-white">{theme.title}</h1>
          <p className="text-white/70 text-xl italic mt-3">{theme.tagline}</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <p className="text-navy text-lg leading-relaxed mb-10">{theme.description}</p>
          <h3 className="font-display italic text-2xl text-navy mb-5">What&apos;s included</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {theme.highlights.map(h => (
              <li key={h} className="flex items-center gap-3 text-navy">
                <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
          <BubbleButton href="/get-a-quote" variant="gold">Get a Free Quote</BubbleButton>
        </div>
      </section>
      <CallbackCTA />
    </main>
  )
}
