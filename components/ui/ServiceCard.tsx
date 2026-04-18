import Image from 'next/image'
import Link from 'next/link'
import { ArrowCircle } from '@/components/ui/ArrowCircle'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  index?: number
}

export function ServiceCard({ title, image, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-2xl aspect-[3/4]">
      {/* Full-bleed image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-3">
        <h3 className="font-sans font-bold text-white text-base sm:text-lg leading-snug">
          {title}
        </h3>
        <ArrowCircle />
      </div>
    </Link>
  )
}
