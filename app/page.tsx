import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { USPStrip } from '@/components/sections/USPStrip'
import { EventThemes } from '@/components/sections/EventThemes'
import { ReviewsCarouselClient } from '@/components/sections/ReviewsCarousel'
import { CallbackCTA } from '@/components/sections/CallbackCTA'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { getReviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Event Marquee Hire for Essex & Hertfordshire | TM Event Hire',
  description: 'Premium marquee hire, mobile bar hire, furniture hire and event equipment hire across Essex, Hertfordshire and London. Get a free quote today.',
}

export default async function HomePage() {
  const { reviews, rating, total } = await getReviews()

  return (
    <main>
      <Hero />
      <ServicesGrid />
      <USPStrip />
      <EventThemes />
      <ReviewsCarouselClient reviews={reviews} rating={rating} total={total} />
      <CallbackCTA />
      <BlogPreview />
    </main>
  )
}
