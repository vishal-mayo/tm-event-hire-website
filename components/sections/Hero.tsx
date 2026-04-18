'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BubbleButton } from '@/components/ui/BubbleButton'

const slides = [
  { word: 'Party',      image: '/images/essex-girl-21st-birthday.jpg', alt: 'Birthday party marquee' },
  { word: 'Wedding',    image: '/images/first-dance-wedding.jpg',       alt: 'Wedding marquee in Hertfordshire' },
  { word: 'Birthday',   image: '/images/pink-birthday-party.jpg',       alt: 'Pink birthday party marquee' },
  { word: 'Anniversary',image: '/images/clear-span-marquee-field.jpg',  alt: 'Clear span marquee in a field' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/65" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-silver font-semibold text-xs uppercase tracking-[0.3em] mb-5"
          >
            Essex · Hertfordshire · London
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-1 text-white/50 font-sans text-base md:text-lg uppercase tracking-[0.15em]"
          >
            Planning a
          </motion.div>

          <div className="overflow-hidden h-[5rem] md:h-[7.5rem] flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={slides[current].word}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold tracking-tighter text-7xl md:text-9xl text-white leading-none"
              >
                {slides[current].word}?
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
          >
            We provide everything you need so that your guests can have the time of their lives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <BubbleButton href="/get-a-quote" variant="gold">Get a Quote</BubbleButton>
            <BubbleButton href="/services" variant="navy">View Services</BubbleButton>
          </motion.div>
        </div>
      </div>

      {/* Slide progress bars */}
      <div className="absolute bottom-8 left-8 right-8 flex gap-2 z-10 max-w-xs">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="flex-1 h-0.5 bg-white/20 overflow-hidden"
          >
            <div className={`h-full bg-silver transition-all duration-300 ${i === current ? 'w-full' : i < current ? 'w-full opacity-50' : 'w-0'}`} />
          </button>
        ))}
      </div>
    </section>
  )
}
