'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Review } from '@/lib/reviews'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < rating ? 'fill-silver' : 'fill-silver/20'}`}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

interface ReviewsCarouselClientProps {
  reviews: Review[]
  rating: number
  total: number
}

export function ReviewsCarouselClient({ reviews, rating, total }: ReviewsCarouselClientProps) {
  const [current, setCurrent] = useState(0)
  const display = reviews.slice(0, 5)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % display.length), 5500)
    return () => clearInterval(t)
  }, [display.length])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy" style={{ background: 'linear-gradient(135deg, #071e50 0%, #0a3b82 60%, #1a4fa0 100%)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Google badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-white/15 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <Stars rating={Math.round(rating)} />
            <span className="text-white/50 text-xs">{rating.toFixed(1)} / 5 · {total} reviews</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-silver/40" />
            <span className="text-silver/60 text-xs font-semibold uppercase tracking-[0.2em]">Testimonials</span>
            <div className="w-8 h-px bg-silver/40" />
          </div>
          <h2 className="font-display italic text-4xl md:text-5xl text-white">What Our Customers Say</h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 p-8 md:p-12 relative"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(4px)' }}
            >
              {/* Large quote mark */}
              <div className="font-display text-8xl text-white/6 absolute top-4 left-8 leading-none select-none">&ldquo;</div>

              <Stars rating={display[current]?.rating ?? 5} />

              <blockquote className="font-display italic text-xl md:text-2xl text-white/85 leading-relaxed mt-5 mb-8 relative z-10">
                &ldquo;{(display[current]?.text ?? '').length > 240
                  ? (display[current]?.text ?? '').slice(0, 240) + '…'
                  : (display[current]?.text ?? '')}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center border border-silver/30 shrink-0">
                  <span className="font-display italic text-silver text-base">
                    {(display[current]?.author_name ?? 'A').charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{display[current]?.author_name}</div>
                  <div className="text-silver/50 text-xs mt-0.5">
                    {display[current] ? new Date(display[current].time * 1000).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) : ''}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {display.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'bg-silver w-6 h-2' : 'bg-white/20 w-2 h-2 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
