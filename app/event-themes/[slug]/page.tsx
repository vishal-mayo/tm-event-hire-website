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
    <main className="pt-20">
      {/* Full-bleed hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src={theme.image} alt={theme.alt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/40 to-navy/75" />
        <div className="absolute inset-0 flex items-end px-4 sm:px-8 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Event Theme</span>
            <h1 className="font-display italic text-6xl md:text-8xl text-white mb-3">{theme.title}</h1>
            <p className="text-white/70 text-xl">{theme.tagline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-silver-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main copy */}
            <div className="lg:col-span-2">
              <div className="w-8 h-px bg-silver mb-8" />
              <p className="text-slate/70 text-lg leading-relaxed mb-6">{theme.description}</p>
              {theme.longDescription && (
                <div className="space-y-4">
                  {theme.longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate/60 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}
              <div className="mt-10">
                <BubbleButton href="/get-a-quote" variant="gold">Get a Free Quote</BubbleButton>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What's included */}
              <div className="bg-silver/20 border border-silver/30 p-6">
                <h3 className="font-display italic text-2xl text-navy mb-5">What&apos;s included</h3>
                <ul className="space-y-3">
                  {theme.highlights.map(h => (
                    <li key={h} className="flex items-start gap-3 text-slate/70 text-sm">
                      <span className="w-5 h-5 rounded-full bg-silver flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packages */}
              {theme.packages && (
                <div className="bg-navy p-6">
                  <h3 className="font-display italic text-2xl text-white mb-5">Popular packages</h3>
                  <ul className="space-y-2.5">
                    {theme.packages.map(p => (
                      <li key={p} className="text-white/60 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-silver shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <BubbleButton href="/get-a-quote" variant="gold">Build Your Package</BubbleButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
