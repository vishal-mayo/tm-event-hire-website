'use client'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    TweenLite: any; TimelineLite: any; SlowMo: any; Elastic: any; CSSPlugin: any
  }
}

interface BubbleButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'gold' | 'navy'
  className?: string
}

export function BubbleButton({ children, href, onClick, variant = 'gold', className }: BubbleButtonProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const tlRef       = useRef<any>(null)
  const loadedRef   = useRef(false)

  const bgColour   = variant === 'gold' ? '#F5C518' : '#0D1F3C'
  const textColour = variant === 'gold' ? '#0D1F3C' : '#F5C518'

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
    if (!containerRef.current) return
    const { TweenLite, TimelineLite, SlowMo, Elastic } = window
    if (!TweenLite || !TimelineLite || !SlowMo || !Elastic) return

    const el  = containerRef.current
    const tl  = el.querySelectorAll<HTMLElement>('.circle.top-left')
    const br  = el.querySelectorAll<HTMLElement>('.circle.bottom-right')
    const eff = el.querySelector<HTMLElement>('.effect-button')!

    const tlAnim  = new TimelineLite()
    const tl2Anim = new TimelineLite()
    const btTl    = new TimelineLite({ paused: true })

    tlAnim.to(tl, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) })
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
    btTl.to(eff, 0.8, { scaleY: 1.1 }, 0.1)
    btTl.add(tlBt2, 0.2)
    btTl.to(eff, 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2)
    btTl.timeScale(2.6)

    tlRef.current = btTl
  }

  const Tag = (href ? 'a' : 'button') as any

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      <Tag
        href={href}
        onClick={onClick}
        onMouseEnter={() => tlRef.current?.restart()}
        className="relative z-[2] inline-block font-semibold tracking-[0.14em] uppercase text-sm px-8 py-4 rounded-full cursor-pointer"
        style={{ color: textColour, WebkitFontSmoothing: 'antialiased' }}
      >
        {children}
      </Tag>

      <span
        className="absolute block pointer-events-none transition-all duration-100"
        style={{ width: '200%', height: '400%', top: '-150%', left: '-50%', filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`tl-${i}`} className="circle top-left absolute w-[25px] h-[25px] rounded-full"
            style={{ background: bgColour, top: '40%', left: '27%' }} />
        ))}
        <span className="effect-button absolute border-0 rounded-full"
          style={{ background: bgColour, width: '50%', height: '25%', top: '50%', left: '25%', transform: 'translateY(-50%)', zIndex: 1 }} />
        {[0, 1, 2].map(i => (
          <span key={`br-${i}`} className="circle bottom-right absolute w-[25px] h-[25px] rounded-full"
            style={{ background: bgColour, bottom: '40%', right: '27%' }} />
        ))}
      </span>
    </span>
  )
}
