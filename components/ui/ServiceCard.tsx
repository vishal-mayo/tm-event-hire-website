'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowCircle } from '@/components/ui/ArrowCircle'

declare global {
  interface Window {
    TweenLite: any; TimelineLite: any; SlowMo: any; Elastic: any; CSSPlugin: any
  }
}

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  index?: number
}

export function ServiceCard({ title, image, href }: ServiceCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const tlRef      = useRef<any>(null)
  const loadedRef  = useRef(false)

  useEffect(() => {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TimelineLite.min.js',
    ]
    if (window.TweenLite && window.TimelineLite) { initTimeline(); return }
    if (loadedRef.current) return
    loadedRef.current = true

    let loaded = 0
    scripts.forEach(src => {
      if (document.querySelector(`script[src="${src}"]`)) {
        loaded++; if (loaded === scripts.length) setTimeout(initTimeline, 50); return
      }
      const s = document.createElement('script')
      s.src = src
      s.onload = () => { loaded++; if (loaded === scripts.length) setTimeout(initTimeline, 50) }
      document.head.appendChild(s)
    })
  }, [])

  function initTimeline() {
    if (!wrapperRef.current) return
    const { TweenLite, TimelineLite } = window
    if (!TweenLite || !TimelineLite) return

    const el = wrapperRef.current
    const tl = el.querySelectorAll<HTMLElement>('.card-circle.top-left')
    const br = el.querySelectorAll<HTMLElement>('.card-circle.bottom-right')

    // Fan burst: keep all 3 circles within ~18px of each other so the goo
    // filter (stdDeviation=10) keeps them merged as one blob that dissolves.
    const btTl = new TimelineLite({ paused: true })

    // Reset top-left circles to corner on every restart
    btTl.set(tl, { x: 0, y: 0, scale: 1 }, 0)
    // Fan toward top-left — slight spread so they don't all overlap exactly
    btTl.to(tl[0], 0.55, { x: -20, y: -5,  scale: 0, opacity: 0 }, 0)
    btTl.to(tl[1], 0.55, { x: -14, y: -14, scale: 0, opacity: 0 }, 0)
    btTl.to(tl[2], 0.55, { x: -5,  y: -20, scale: 0, opacity: 0 }, 0)

    // Reset bottom-right circles and fan toward bottom-right
    btTl.set(br, { x: 0, y: 0, scale: 1 }, 0.08)
    btTl.to(br[0], 0.55, { x: 20,  y: 5,   scale: 0, opacity: 0 }, 0.08)
    btTl.to(br[1], 0.55, { x: 14,  y: 14,  scale: 0, opacity: 0 }, 0.08)
    btTl.to(br[2], 0.55, { x: 5,   y: 20,  scale: 0, opacity: 0 }, 0.08)

    btTl.timeScale(1.8)
    tlRef.current = btTl
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        wrapperRef.current?.querySelectorAll<HTMLElement>('.card-circle').forEach(c => { c.style.opacity = '1' })
        tlRef.current?.restart()
      }}
    >
      {/* Goo bubble circles — anchored at top-left corner, hidden until hover */}
      <span
        className="absolute pointer-events-none z-20"
        style={{ top: 0, left: 0, filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`tl-${i}`} className="card-circle top-left absolute w-[28px] h-[28px] rounded-full"
            style={{ background: '#D4DCE8', top: -14, left: -14, opacity: 0 }} />
        ))}
      </span>

      {/* Goo bubble circles — anchored at bottom-right corner, hidden until hover */}
      <span
        className="absolute pointer-events-none z-20"
        style={{ bottom: 0, right: 0, filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`br-${i}`} className="card-circle bottom-right absolute w-[28px] h-[28px] rounded-full"
            style={{ background: '#D4DCE8', top: -14, left: -14, opacity: 0 }} />
        ))}
      </span>

      <Link href={href} className="group relative block overflow-hidden rounded-2xl aspect-[3/4] transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-3">
          <h3 className="font-sans font-bold text-white text-base sm:text-lg leading-snug">
            {title}
          </h3>
          <ArrowCircle />
        </div>
      </Link>
    </div>
  )
}
