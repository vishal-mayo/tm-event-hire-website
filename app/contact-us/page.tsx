import type { Metadata } from 'next'
import { BubbleButton } from '@/components/ui/BubbleButton'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact TM Event Hire | Essex Marquee & Event Equipment',
  description: 'Get in touch with TM Event Hire for marquee hire, mobile bar hire, furniture hire and event equipment across Essex, Hertfordshire and London.',
}

export default function ContactPage() {
  return (
    <main className="pt-28">
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Get In Touch" title="Contact Us" subtitle="We'd love to hear about your event. Get in touch and we'll get back to you as soon as possible." light />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Get in touch</h2>
            <div className="space-y-5">
              {[
                { label: 'Phone', value: '+44 7595 979 451', href: 'tel:+447595979451', icon: '📞' },
                { label: 'Email', value: 'info@tmeventhire.co.uk', href: 'mailto:info@tmeventhire.co.uk', icon: '✉️' },
                { label: 'WhatsApp', value: '+44 7595 979 451', href: 'https://wa.me/447595979451', icon: '💬' },
                { label: 'Area', value: 'Essex, Hertfordshire & London', href: undefined, icon: '📍' },
              ].map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-stone/40 border border-stone/60">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-grey-mid uppercase tracking-widest mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="font-semibold text-navy hover:text-gold transition-colors">{value}</a>
                    ) : (
                      <span className="font-semibold text-navy">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <BubbleButton href="https://wa.me/447595979451" variant="gold">WhatsApp Us</BubbleButton>
              <BubbleButton href="tel:+447595979451" variant="navy">Call Us</BubbleButton>
            </div>
          </div>

          <div className="bg-stone/30 border border-stone/60 p-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-2">Ready to get started?</h2>
            <p className="text-navy/60 mb-6 text-sm">Use our quote builder to tell us about your event and we&apos;ll be in touch with a personalised package.</p>
            <BubbleButton href="/get-a-quote" variant="gold">Build Your Quote</BubbleButton>
          </div>
        </div>
      </section>
    </main>
  )
}
