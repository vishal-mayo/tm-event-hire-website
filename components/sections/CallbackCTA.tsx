'use client'
import { motion } from 'framer-motion'
import { BubbleButton } from '@/components/ui/BubbleButton'

export function CallbackCTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-navy-dark">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Large decorative quote */}
          <div className="font-display text-[10rem] text-white/4 leading-none select-none -mb-8">&ldquo;</div>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-silver/40" />
            <span className="text-silver/60 text-xs font-semibold uppercase tracking-[0.2em]">Get In Touch</span>
            <div className="w-8 h-px bg-silver/40" />
          </div>

          <h2 className="font-display italic text-4xl md:text-6xl text-white mb-5 leading-tight">
            Ready to create something<br />
            <span className="text-gradient-silver">extraordinary?</span>
          </h2>

          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you need advice, a quote, or just want to chat about your event — our friendly team is here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <BubbleButton href="/get-a-quote" variant="silver">Build Your Quote</BubbleButton>
            <BubbleButton href="https://wa.me/447595979451" variant="navy">WhatsApp Us</BubbleButton>
            <a href="tel:+447595979451"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors duration-200 self-center">
              or call +44 7595 979 451
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
