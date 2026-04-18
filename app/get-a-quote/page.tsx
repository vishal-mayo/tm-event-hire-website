import type { Metadata } from 'next'
import { QuoteWizard } from '@/components/quote/QuoteWizard'

export const metadata: Metadata = {
  title: 'Get a Free Quote | TM Event Hire',
  description: 'Build your personalised event hire quote in minutes. Choose your marquee, furniture, bar and extras — get an instant summary to share with our team.',
}

export default function GetAQuotePage() {
  return (
    <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-silver font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Free Quote Builder</span>
          <h1 className="font-display italic text-5xl text-navy mb-4">Build Your Quote</h1>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Tell us about your event and we&apos;ll put together a personalised package. No obligation — just fill in the details and we&apos;ll be in touch.
          </p>
        </div>
        <QuoteWizard />
      </div>
    </main>
  )
}
