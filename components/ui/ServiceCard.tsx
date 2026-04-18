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
    const { TweenLite, TimelineLite, SlowMo, Elastic } = window
    if (!TweenLite || !TimelineLite || !SlowMo || !Elastic) return

    const el = wrapperRef.current
    const tl = el.querySelectorAll<HTMLElement>('.card-circle.top-left')
    const br = el.querySelectorAll<HTMLElement>('.card-circle.bottom-right')

    // Keep circles hidden until hover fires
    TweenLite.set([...Array.from(tl), ...Array.from(br)], { opacity: 0, scale: 0 })

    const tlAnim = new TimelineLite()
    const tl2Anim = new TimelineLite()
    const btTl = new TimelineLite({ paused: true })

    tlAnim.to(tl, 0, { opacity: 1, scale: 1 })
    tlAnim.to(tl, 1.2, { x: -30, y: -30, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) })
    tlAnim.to(tl[0], 0.1, { scale: 0.2, x: '+=6', y: '-=2' })
    tlAnim.to(tl[1], 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1')
    tlAnim.to(tl[2], 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1')
    tlAnim.to(tl[0], 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 })
    tlAnim.to(tl[1], 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1')
    tlAnim.to(tl[2], 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1')

    const tlBt1 = new TimelineLite()
    tlBt1.set(tl, { x: 0, y: 0, rotation: -45 })
    tlBt1.add(tlAnim)

    tl2Anim.set(br, { x: 0, y: 0 })
    tl2Anim.to(br, 0, { opacity: 1, scale: 1 })
    tl2Anim.to(br, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) })
    tl2Anim.to(br[0], 0.1, { scale: 0.2, x: '-=6', y: '+=3' })
    tl2Anim.to(br[1], 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1')
    tl2Anim.to(br[2], 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2')
    tl2Anim.to(br[0], 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 })
    tl2Anim.to(br[1], 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1')
    tl2Anim.to(br[2], 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1')

    const tlBt2 = new TimelineLite()
    tlBt2.set(br, { x: 0, y: 0, rotation: 45 })
    tlBt2.add(tl2Anim)

    btTl.add(tlBt1)
    btTl.add(tlBt2, 0.2)
    btTl.timeScale(2.6)

    tlRef.current = btTl
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => tlRef.current?.restart()}
    >
      {/* Goo bubble circles — anchored at top-left corner, hidden until hover */}
      <span
        className="absolute pointer-events-none z-20"
        style={{ top: 0, left: 0, filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`tl-${i}`} className="card-circle top-left absolute w-[28px] h-[28px] rounded-full"
            style={{ background: '#071e50', top: -14, left: -14, opacity: 0 }} />
        ))}
      </span>

      {/* Goo bubble circles — anchored at bottom-right corner, hidden until hover */}
      <span
        className="absolute pointer-events-none z-20"
        style={{ bottom: 0, right: 0, filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`br-${i}`} className="card-circle bottom-right absolute w-[28px] h-[28px] rounded-full"
            style={{ background: '#071e50', top: -14, left: -14, opacity: 0 }} />
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
