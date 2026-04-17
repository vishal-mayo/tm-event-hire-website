'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Review } from '@/lib/reviews'
import { SectionHeading } from '@/components/ui/SectionHeading'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < rating ? 'fill-gold' : 'fill-grey-mid'}`}>
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
  const displayReviews = reviews.slice(0, 5)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % displayReviews.length), 5000)
    return () => clearInterval(t)
  }, [displayReviews.length])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-grey-light">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-bold text-navy text-sm">Google Reviews</span>
              <StarRating rating={Math.round(rating)} />
              <span className="text-grey-mid text-xs">{rating}/5 ({total} reviews)</span>
            </div>
          </div>

          <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" />
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) setCurrent(c => Math.min(c + 1, displayReviews.length - 1))
              if (info.offset.x > 60)  setCurrent(c => Math.max(c - 1, 0))
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {displayReviews.map((review, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="bg-white rounded-sm shadow-md p-8 max-w-2xl mx-auto">
                    <StarRating rating={review.rating} />
                    <blockquote className="mt-4 text-navy text-base leading-relaxed">
                      &ldquo;{review.text.length > 200 ? review.text.slice(0, 200) + '…' : review.text}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                        {review.author_name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm">{review.author_name}</div>
                        <div className="text-xs text-grey-mid">
                          {new Date(review.time * 1000).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {displayReviews.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-gold scale-125' : 'bg-grey-mid'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
