'use client'
import { motion } from 'framer-motion'
import { BubbleButton } from '@/components/ui/BubbleButton'

export function CallbackCTA() {
  return (
    <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Have a question? Speak to our team today!
          </h2>
          <p className="text-white/65 text-lg mb-10">
            We&apos;re always happy to help. Whether you need advice, a quote, or just want to chat about your event — we&apos;re here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BubbleButton href="https://wa.me/447595979451" variant="gold">WhatsApp Us</BubbleButton>
            <BubbleButton href="mailto:info@tmeventhire.co.uk" variant="navy">Email Us</BubbleButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
