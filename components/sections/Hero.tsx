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
            className="object-cover"
            style={{ transform: 'scale(1.05)' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-silver font-semibold text-sm uppercase tracking-[0.25em] mb-4">
            Essex · Hertfordshire · London
          </p>

          <div className="mb-2 text-white font-display text-xl md:text-2xl font-light">
            Planning a...
          </div>

          <div className="h-24 md:h-32 flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={slides[current].word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="font-display text-6xl md:text-8xl italic text-white leading-none"
              >
                {slides[current].word}?
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            We provide everything you need so that your guests can have the time of their lives.
          </p>

          <div className="flex flex-wrap gap-4">
            <BubbleButton href="/get-a-quote" variant="gold">Get a Quote</BubbleButton>
            <BubbleButton href="/services" variant="navy">View Services</BubbleButton>
          </div>
        </div>
      </div>

      {/* Slide progress bars */}
      <div className="absolute bottom-8 left-8 right-8 flex gap-2 z-10 max-w-xs">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="flex-1 h-0.5 bg-white/25 overflow-hidden"
          >
            <div className={`h-full bg-silver transition-all duration-300 ${i === current ? 'w-full' : i < current ? 'w-full opacity-60' : 'w-0'}`} />
          </button>
        ))}
      </div>
    </section>
  )
}
