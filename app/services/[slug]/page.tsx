import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { services } from '@/lib/data/services'
import { BubbleButton } from '@/components/ui/BubbleButton'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} in Essex & Hertfordshire | TM Event Hire`,
    description: service.description.slice(0, 160),
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Our Services</span>
          <h1 className="font-display italic text-5xl md:text-7xl text-white mb-4">{service.title}</h1>
          <p className="text-white/60 text-xl">{service.tagline}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Text */}
            <div>
              <div className="w-8 h-px bg-silver mb-8" />
              <p className="text-navy/70 text-lg leading-relaxed mb-6">{service.description}</p>
              {service.longDescription && (
                <div className="space-y-4">
                  {service.longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-navy/60 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}
              <div className="mt-8">
                <BubbleButton href="/get-a-quote" variant="navy">Get a Quote</BubbleButton>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              {service.images.map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border border-stone/60">
                  <div className="aspect-video relative">
                    <Image src={img} alt={`${service.title} ${i + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority={i === 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features + Use Cases */}
          {(service.features || service.useCases) && (
            <div className="grid md:grid-cols-2 gap-12 border-t border-stone pt-16 mb-20">
              {service.features && (
                <div>
                  <h2 className="font-display italic text-3xl text-navy mb-6">What&apos;s included</h2>
                  <ul className="space-y-3">
                    {service.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-navy/70">
                        <span className="w-5 h-5 rounded-full bg-silver flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.useCases && (
                <div>
                  <h2 className="font-display italic text-3xl text-navy mb-6">Perfect for</h2>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map(u => (
                      <span key={u} className="px-4 py-2 border border-stone text-navy/70 text-sm bg-stone/30 rounded-full">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Feature Callouts */}
      {service.featureCallouts && service.featureCallouts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Why Choose Us</span>
              <h2 className="font-display italic text-4xl md:text-5xl text-navy">What Makes It Special</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.featureCallouts.map(callout => (
                <div key={callout.name} className="bg-white border border-stone rounded-2xl p-6">
                  <h3 className="font-sans font-bold text-navy text-lg mb-3">{callout.name}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Accessories */}
      {service.accessories && service.accessories.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Add-Ons</span>
              <h2 className="font-display italic text-4xl md:text-5xl text-navy">Accessories &amp; Extras</h2>
              <p className="text-navy/60 mt-4 max-w-xl mx-auto">Everything available from a single supplier — simplifying your planning and your event day.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.accessories.map(acc => (
                <div key={acc.name} className="flex items-start gap-4 bg-stone/30 border border-stone rounded-2xl p-5">
                  <span className="w-8 h-8 rounded-full bg-silver/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-navy/60">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-sans font-bold text-navy text-sm mb-1">{acc.name}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{acc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {service.pricingCategories && service.pricingCategories.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Transparent Pricing</span>
              <h2 className="font-display italic text-4xl md:text-5xl text-navy">Hire Price List</h2>
              <p className="text-navy/60 mt-4 max-w-xl mx-auto">All prices are per item per hire. Contact us for quantity discounts on larger orders.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.pricingCategories.map(cat => (
                <div key={cat.name} className="bg-white border border-stone rounded-2xl p-6">
                  <h3 className="font-sans font-bold text-navy text-lg mb-5 pb-4 border-b border-stone">{cat.name}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map(item => (
                      <li key={item.name} className="flex items-center justify-between gap-2 text-sm">
                        <span className="text-navy/70">{item.name}</span>
                        <span className="font-semibold text-navy shrink-0">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  {cat.note && (
                    <p className="mt-5 pt-4 border-t border-stone text-navy/50 text-xs leading-relaxed">{cat.note}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <BubbleButton href="/get-a-quote" variant="navy">Get a Full Quote</BubbleButton>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {service.testimonial && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
          <div className="max-w-3xl mx-auto text-center">
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 mx-auto mb-8 text-silver/40" aria-hidden>
              <path d="M14 22c0-5.523 4.477-10 10-10v4a6 6 0 00-6 6v2h6v12H8V22h6zm22 0c0-5.523 4.477-10 10-10v4a6 6 0 00-6 6v2h6v12H30V22h6z" fill="currentColor" />
            </svg>
            <blockquote className="font-display italic text-2xl md:text-3xl text-white leading-relaxed mb-8">
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <p className="text-silver font-semibold text-sm uppercase tracking-[0.15em]">{service.testimonial.author}</p>
          </div>
        </section>
      )}

      {/* How it works */}
      {service.process && (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${service.testimonial ? 'bg-stone/30' : 'bg-navy'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className={`font-semibold text-xs uppercase tracking-[0.2em] mb-3 block ${service.testimonial ? 'text-silver' : 'text-silver'}`}>Simple &amp; Stress-Free</span>
              <h2 className={`font-display italic text-4xl md:text-5xl ${service.testimonial ? 'text-navy' : 'text-white'}`}>How It Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.process.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${service.testimonial ? 'bg-silver/20' : 'bg-silver/20'}`}>
                    <span className="text-silver font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className={`font-sans font-bold text-lg mb-2 ${service.testimonial ? 'text-navy' : 'text-white'}`}>{p.step}</h3>
                  <p className={`text-sm leading-relaxed ${service.testimonial ? 'text-navy/50' : 'text-white/50'}`}>{p.description}</p>
                  {i < service.process!.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-silver/20 -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Got Questions?</span>
              <h2 className="font-display italic text-4xl md:text-5xl text-navy">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-0 divide-y divide-stone">
              {service.faqs.map((faq) => (
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
