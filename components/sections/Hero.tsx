'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BubbleButton } from '@/components/ui/BubbleButton'

const slides = [
  { word: 'Wedding',     image: '/images/first-dance-wedding.jpg',      alt: 'Wedding marquee in Hertfordshire' },
  { word: 'Party',       image: '/images/essex-girl-21st-birthday.jpg', alt: 'Birthday party marquee Essex' },
  { word: 'Birthday',    image: '/images/pink-birthday-party.jpg',      alt: 'Pink birthday party marquee' },
  { word: 'Anniversary', image: '/images/clear-span-marquee-field.jpg', alt: 'Clear span marquee in a field' },
]

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Events Delivered' },
  { value: '3', label: 'Counties Covered' },
  { value: '5★', label: 'Google Rated' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [prevIndex, setPrevIndex] = useState(-1)

  useEffect(() => {
    const t = setInterval(() => {
      setPrevIndex(current)
      setCurrent(c => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [current])

  return (
    <section className="relative h-screen min-h-[680px] flex flex-col overflow-hidden">
      {/* Background images with crossfade */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            style={{ transform: 'scale(1.04)' }}
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/50 to-navy-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/60 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-silver" />
              <span className="text-silver text-xs font-semibold uppercase tracking-[0.25em]">
                Essex · Hertfordshire · London
              </span>
            </motion.div>

            {/* Static intro line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-display text-white/60 text-xl md:text-2xl mb-2"
            >
              Planning your perfect
            </motion.p>

            {/* Animated word */}
            <div className="h-[90px] md:h-[120px] lg:h-[140px] flex items-center mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slides[current].word}
                  initial={{ opacity: 0, y: 60, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -60, rotateX: 15 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display italic text-7xl md:text-9xl lg:text-[10rem] text-white leading-none"
                  style={{ textShadow: '0 4px 40px rgba(10,59,130,0.4)' }}
                >
                  {slides[current].word}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/70 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            >
              Premium marquee hire, mobile bars, furniture and event equipment — delivered and set up by our expert team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <BubbleButton href="/get-a-quote" variant="silver">Build Your Quote</BubbleButton>
              <BubbleButton href="/services" variant="navy">Explore Services</BubbleButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 border-t border-white/10"
        style={{ background: 'rgba(7,30,80,0.7)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display italic text-2xl md:text-3xl text-silver">{stat.value}</div>
                <div className="text-white/45 text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Progress bars */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2 hidden lg:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrevIndex(current); setCurrent(i) }}
            aria-label={`Slide ${i + 1}`}
            className="group flex items-center gap-2"
          >
            <div className={`h-8 w-0.5 rounded-full transition-all duration-500 ${i === current ? 'bg-silver' : 'bg-white/25 group-hover:bg-white/50'}`} />
          </button>
        ))}
      </div>
    </section>
  )
}
