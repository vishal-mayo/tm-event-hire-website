export interface Review {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url: string
}

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: 'Aimee Naughton',
    rating: 5,
    text: 'Absolute 5 star review for TM Event Hire. From start to finish the team were amazing. Nothing was too much trouble and everything was perfect on the day. Highly recommend!',
    time: 1696464000,
    profile_photo_url: '',
  },
  {
    author_name: 'Dianne Bonney',
    rating: 5,
    text: 'Tom and his team are the best in the business. They made the process of getting a marquee completely stress free and extremely reasonable. Would 100% use again.',
    time: 1688000000,
    profile_photo_url: '',
  },
  {
    author_name: 'Jo George',
    rating: 5,
    text: 'Tom and the team did a great job on a marquee for my 30th birthday! Great communication throughout, the marquee looked amazing and the fabulous bar and dance floor were exactly what we wanted.',
    time: 1676332800,
    profile_photo_url: '',
  },
  {
    author_name: 'Sarah Mitchell',
    rating: 5,
    text: 'We hired TM Event Hire for our wedding and they were absolutely fantastic. The marquee was stunning and the whole team were so professional and helpful from start to finish.',
    time: 1670000000,
    profile_photo_url: '',
  },
  {
    author_name: 'Mark Thompson',
    rating: 5,
    text: 'Used TM Event Hire for our company summer party. The setup was seamless, the marquee looked incredible, and all our guests were impressed. Will definitely book again.',
    time: 1663000000,
    profile_photo_url: '',
  },
]

export async function getReviews(): Promise<{ reviews: Review[]; rating: number; total: number }> {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey  = process.env.GOOGLE_PLACES_API_KEY

  if (!placeId || !apiKey || apiKey === 'your_key_here') {
    return { reviews: FALLBACK_REVIEWS, rating: 5, total: 9 }
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    )
    const data = await res.json()
    return {
      reviews: data.result?.reviews ?? [],
      rating:  data.result?.rating ?? 5,
      total:   data.result?.user_ratings_total ?? 0,
    }
  } catch {
    return { reviews: FALLBACK_REVIEWS, rating: 5, total: 9 }
  }
}
