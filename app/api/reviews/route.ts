import { NextResponse } from 'next/server'
import { getReviews } from '@/lib/reviews'

export const revalidate = 86400

export async function GET() {
  const data = await getReviews()
  return NextResponse.json(data)
}
