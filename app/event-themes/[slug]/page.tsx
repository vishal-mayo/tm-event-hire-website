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
            <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Event Types</span>
            <h1 className="font-display italic text-6xl md:text-8xl text-white mb-3">{theme.title}</h1>
            <p className="text-white/70 text-xl">{theme.tagline}</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main copy */}
            <div className="lg:col-span-2">
              <div className="w-8 h-px bg-silver mb-8" />
              <p className="text-navy/70 text-lg leading-relaxed mb-6">{theme.description}</p>
              {theme.longDescription && (
                <div className="space-y-4">
                  {theme.longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-navy/60 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}
              <div className="mt-10">
                <BubbleButton href="/get-a-quote" variant="navy">Get a Free Quote</BubbleButton>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What's included */}
              <div className="bg-stone/30 border border-stone rounded-2xl p-6">
                <h3 className="font-sans font-bold text-xl text-navy mb-5">What&apos;s included</h3>
                <ul className="space-y-3">
                  {theme.highlights.map(h => (
                    <li key={h} className="flex items-start gap-3 text-navy/70 text-sm">
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

              {/* CTA box */}
              <div className="bg-navy rounded-2xl p-6 text-center">
                <h3 className="font-sans font-bold text-white text-lg mb-2">Ready to get started?</h3>
                <p className="text-white/50 text-sm mb-6">Tell us about your event and we&apos;ll put together a custom quote.</p>
                <BubbleButton href="/get-a-quote" variant="silver">Get a Quote</BubbleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      {theme.packages && theme.packages.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Popular Packages</span>
              <h2 className="font-display italic text-4xl md:text-5xl text-navy">Choose Your Setup</h2>
              <p className="text-navy/60 mt-4 max-w-xl mx-auto">Every package is fully customisable — add, remove or swap items to match your vision exactly.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {theme.packages.map((pkg) => (
                <div key={pkg.name} className="bg-white border border-stone rounded-2xl p-6">
                  <h3 className="font-sans font-bold text-navy text-xl mb-5 pb-4 border-b border-stone">{pkg.name}</h3>
                  <ul className="space-y-2.5">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-navy/70 text-sm">
                        <span className="w-4 h-4 rounded-full bg-silver/40 flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5 text-navy/60">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-navy/60 mb-6">Want to mix and match? We&apos;ll build a bespoke package just for you.</p>
              <BubbleButton href="/get-a-quote" variant="navy">Build Your Package</BubbleButton>
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Simple &amp; Stress-Free</span>
            <h2 className="font-display italic text-4xl md:text-5xl text-white">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 'Site Visit', description: 'We visit your location to assess terrain, space, guest numbers and your event theme — so we can recommend the right setup.' },
              { step: 'Deposit', description: 'A 25% non-refundable deposit secures your booking date. Peak summer dates sell quickly — book early.' },
              { step: 'Install', description: 'Our team delivers and professionally installs everything 1–3 days before your event.' },
              { step: 'Event', description: 'We do a final walkthrough before departing. Everything is in place — all you need to do is enjoy your event.' },
              { step: 'Collection', description: 'We return the following day to carefully remove all equipment, leaving your space exactly as we found it.' },
            ].map((p, i) => (
              <div key={p.step}>
                <div className="w-10 h-10 rounded-full bg-silver/20 flex items-center justify-center mb-4">
                  <span className="text-silver font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-sans font-bold text-white text-lg mb-2">{p.step}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {theme.faqs && theme.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Got Questions?</span>
              <h2 className="font-display italic text-4xl md:text-5xl text-navy">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-0 divide-y divide-stone">
              {theme.faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="font-sans font-bold text-navy text-lg mb-3">{faq.question}</h3>
                  <p className="text-navy/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-navy/60 mb-6">Still have questions? We&apos;re happy to help.</p>
              <BubbleButton href="/contact-us" variant="navy">Contact Us</BubbleButton>
            </div>
          </div>
        </section>
      )}

      <CallbackCTA />
    </main>
  )
}
