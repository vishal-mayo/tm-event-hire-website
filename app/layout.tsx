import type { Metadata } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactBar } from '@/components/layout/ContactBar'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { PageTransition } from '@/components/layout/PageTransition'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Event Marquee Hire for Essex & Hertfordshire | TM Event Hire',
  description: 'Premium marquee hire, mobile bar hire, furniture hire and event equipment hire across Essex, Hertfordshire and London. Get a free quote today.',
  openGraph: {
    title: 'TM Event Hire',
    description: 'Premium event equipment hire in Essex & Hertfordshire',
    url: 'https://tmeventhire.co.uk',
    siteName: 'TM Event Hire',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', visibility: 'hidden', width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <ContactBar />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
