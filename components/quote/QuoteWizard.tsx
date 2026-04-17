'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { BubbleButton } from '@/components/ui/BubbleButton'

const confettiModule = () => import('canvas-confetti').then(m => m.default)

// Step data
const EVENT_TYPES = [
  'Wedding', 'Birthday Party', 'Anniversary', 'Garden Party',
  'Gender Reveal', 'Bar Mitzvah', 'Funeral', 'Corporate', 'Other',
]
const MARQUEE_SIZES  = ['3x6m', '6x6m', '9x6m', '12x6m', 'Custom']
const LININGS        = ['White Pleated', 'LED Black Starlit', 'Clear Roof', 'None']
const LIGHTING       = ['Fairy Lights', 'Chandeliers', 'Festoons', 'LED Up-Lighters', 'None']
const FLOORING       = ['Wooden Floorboards & Carpet', 'Matting to Grass', 'None']
const DANCE_FLOORS   = ['Wooden', 'Black & White Chequered', 'White Starlit LED', 'None']
const FURNITURE      = ['Tables', 'Chairs', 'Both', 'None']
const BARS           = ['Circular Mirror', 'LED Straight', 'Circular LED', 'Wooden Straight', 'None']
const EXTRAS         = ['Heating', 'Double Door Entrance', 'Catering Marquee', 'Power Distribution', 'Outside Lighting']

const STEPS = [
  'Event Type', 'Event Details', 'Marquee & Structure',
  'Furnishings & Extras', 'Contact Details', 'Your Quote',
]

interface QuoteState {
  eventType: string
  guests: number
  date: string
  address: string
  postcode: string
  marqueeSize: string
  chineseHat: boolean
  lining: string
  lighting: string
  flooring: string
  danceFloor: string
  furniture: string
  furniturePeople: number
  bar: string
  extras: string[]
  name: string
  email: string
  phone: string
}

const initial: QuoteState = {
  eventType: '', guests: 50, date: '', address: '', postcode: '',
  marqueeSize: '6x6m', chineseHat: false, lining: 'White Pleated',
  lighting: 'Fairy Lights', flooring: 'None', danceFloor: 'None',
  furniture: 'Both', furniturePeople: 50, bar: 'None', extras: [],
  name: '', email: '', phone: '',
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-between mb-10 overflow-x-auto pb-2">
      {STEPS.map((label, i) => (
        <div key={i} className="flex items-center shrink-0">
          <div className={`flex flex-col items-center ${i < STEPS.length - 1 ? 'mr-2' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              i < step ? 'bg-gold text-navy' : i === step ? 'bg-navy text-white ring-2 ring-gold' : 'bg-grey-light text-grey-mid'
            }`}>
              {i < step ? '✓' : i + 1}
            </div>
            <span className="text-[10px] mt-1 text-grey-mid hidden sm:block whitespace-nowrap">{label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`h-0.5 w-8 mx-1 transition-colors ${i < step ? 'bg-gold' : 'bg-grey-light'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

export function QuoteWizard() {
  const [step, setStep] = useState(0)
  const [q, setQ] = useState<QuoteState>(initial)

  const set = <K extends keyof QuoteState>(k: K, v: QuoteState[K]) => setQ(p => ({ ...p, [k]: v }))

  const toggleExtra = (e: string) =>
    setQ(p => ({ ...p, extras: p.extras.includes(e) ? p.extras.filter(x => x !== e) : [...p.extras, e] }))

  const next = async () => {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
      if (step === STEPS.length - 2) {
        const confetti = await confettiModule()
        confetti({ particleCount: 120, spread: 80, colors: ['#F5C518', '#0D1F3C', '#ffffff'] })
      }
    }
  }
  const back = () => setStep(s => Math.max(s - 1, 0))

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressBar step={step} />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main wizard */}
        <div className="lg:col-span-2 bg-white rounded-sm shadow-lg p-8">
          {step === 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-6">What type of event are you planning?</h2>
              <div className="grid grid-cols-3 gap-3">
                {EVENT_TYPES.map(t => (
                  <button key={t} onClick={() => set('eventType', t)}
                    className={`p-3 border-2 rounded-sm text-sm font-semibold transition-all ${
                      q.eventType === t ? 'border-gold bg-gold/10 text-navy' : 'border-grey-light text-grey-mid hover:border-navy'
                    }`}
                  >{t}</button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-navy">Tell us about your event</h2>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Number of guests: <span className="text-gold">{q.guests}</span></label>
                <input type="range" min={10} max={500} step={10} value={q.guests} onChange={e => set('guests', +e.target.value)}
                  className="w-full accent-gold" />
                <div className="flex justify-between text-xs text-grey-mid mt-1"><span>10</span><span>500</span></div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Event date</label>
                <input type="date" value={q.date} onChange={e => set('date', e.target.value)}
                  className="w-full border border-grey-light rounded-sm px-4 py-2 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Venue address</label>
                <input type="text" placeholder="Street address" value={q.address} onChange={e => set('address', e.target.value)}
                  className="w-full border border-grey-light rounded-sm px-4 py-2 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Postcode</label>
                <input type="text" placeholder="e.g. CM1 1AA" value={q.postcode} onChange={e => set('postcode', e.target.value)}
                  className="w-full border border-grey-light rounded-sm px-4 py-2 focus:outline-none focus:border-gold" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-navy">Marquee & structure options</h2>
              <div>
                <label className="block text-sm font-semibold text-navy mb-3">Marquee size</label>
                <div className="grid grid-cols-3 gap-3">
                  {MARQUEE_SIZES.map(s => (
                    <button key={s} onClick={() => set('marqueeSize', s)}
                      className={`p-3 border-2 rounded-sm text-sm font-semibold transition-all ${
                        q.marqueeSize === s ? 'border-gold bg-gold/10 text-navy' : 'border-grey-light text-grey-mid hover:border-navy'
                      }`}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="chineseHat" checked={q.chineseHat} onChange={e => set('chineseHat', e.target.checked)}
                  className="w-5 h-5 accent-gold" />
                <label htmlFor="chineseHat" className="text-sm font-semibold text-navy cursor-pointer">Add Chinese Hat</label>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-3">Lining</label>
                <div className="grid grid-cols-2 gap-3">
                  {LININGS.map(l => (
                    <button key={l} onClick={() => set('lining', l)}
                      className={`p-3 border-2 rounded-sm text-sm font-semibold transition-all ${
                        q.lining === l ? 'border-gold bg-gold/10 text-navy' : 'border-grey-light text-grey-mid hover:border-navy'
                      }`}
                    >{l}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-navy">Furnishings & extras</h2>
              {[
                { label: 'Lighting', options: LIGHTING, key: 'lighting' as const },
                { label: 'Flooring', options: FLOORING, key: 'flooring' as const },
                { label: 'Dance Floor', options: DANCE_FLOORS, key: 'danceFloor' as const },
                { label: 'Bar', options: BARS, key: 'bar' as const },
              ].map(({ label, options, key }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-navy mb-3">{label}</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {options.map(o => (
                      <button key={o} onClick={() => set(key, o)}
                        className={`p-2.5 border-2 rounded-sm text-xs font-semibold transition-all ${
                          q[key] === o ? 'border-gold bg-gold/10 text-navy' : 'border-grey-light text-grey-mid hover:border-navy'
                        }`}
                      >{o}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-navy mb-3">Furniture</label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {FURNITURE.map(f => (
                    <button key={f} onClick={() => set('furniture', f)}
                      className={`p-2.5 border-2 rounded-sm text-xs font-semibold transition-all ${
                        q.furniture === f ? 'border-gold bg-gold/10 text-navy' : 'border-grey-light text-grey-mid hover:border-navy'
                      }`}
                    >{f}</button>
                  ))}
                </div>
                {q.furniture !== 'None' && (
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">How many people? <span className="text-gold">{q.furniturePeople}</span></label>
                    <input type="range" min={10} max={500} step={10} value={q.furniturePeople}
                      onChange={e => set('furniturePeople', +e.target.value)} className="w-full accent-gold" />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-3">Additional extras</label>
                <div className="grid grid-cols-2 gap-2">
                  {EXTRAS.map(e => (
                    <button key={e} onClick={() => toggleExtra(e)}
                      className={`p-2.5 border-2 rounded-sm text-xs font-semibold transition-all text-left ${
                        q.extras.includes(e) ? 'border-gold bg-gold/10 text-navy' : 'border-grey-light text-grey-mid hover:border-navy'
                      }`}
                    >{e}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-navy">Your contact details</h2>
              {[
                { label: 'Full Name', key: 'name' as const, placeholder: 'Jane Smith', type: 'text' },
                { label: 'Email Address', key: 'email' as const, placeholder: 'jane@example.com', type: 'email' },
                { label: 'Phone Number', key: 'phone' as const, placeholder: '+44 7700 900000', type: 'tel' },
              ].map(({ label, key, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-navy mb-2">{label} <span className="text-red-500">*</span></label>
                  <input type={type} placeholder={placeholder} value={q[key] as string}
                    onChange={e => set(key, e.target.value)}
                    className="w-full border border-grey-light rounded-sm px-4 py-3 focus:outline-none focus:border-gold" />
                </div>
              ))}
            </div>
          )}

          {step === 5 && (
            <div id="quote-summary">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Your Quote Summary</h2>
              <div className="space-y-3 mb-6">
                {[
                  ['Event Type', q.eventType],
                  ['Guests', String(q.guests)],
                  ['Date', q.date],
                  ['Location', `${q.address}${q.postcode ? ', ' + q.postcode : ''}`],
                  ['Marquee Size', q.marqueeSize],
                  ['Chinese Hat', q.chineseHat ? 'Yes' : 'No'],
                  ['Lining', q.lining],
                  ['Lighting', q.lighting],
                  ['Flooring', q.flooring],
                  ['Dance Floor', q.danceFloor],
                  ['Furniture', q.furniture !== 'None' ? `${q.furniture} (${q.furniturePeople} people)` : 'None'],
                  ['Bar', q.bar],
                  ['Extras', q.extras.length ? q.extras.join(', ') : 'None'],
                  ['Name', q.name],
                  ['Email', q.email],
                  ['Phone', q.phone],
                ].map(([label, val]) => val && (
                  <div key={label} className="flex justify-between py-2 border-b border-grey-light text-sm">
                    <span className="font-semibold text-navy">{label}</span>
                    <span className="text-grey-mid text-right max-w-xs">{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-grey-mid italic mb-8">
                This is an estimated quote only. All prices are subject to a site visit and final confirmation.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <BubbleButton href="tel:+447595979451" variant="gold">Call Us</BubbleButton>
                <BubbleButton href="https://wa.me/447595979451" variant="navy">WhatsApp Us</BubbleButton>
              </div>
              <button onClick={() => window.print()} className="text-sm text-navy underline hover:text-gold transition-colors">
                Save as PDF
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            {step > 0 && (
              <button onClick={back} className="text-sm text-navy font-semibold hover:text-gold transition-colors">
                ← Back
              </button>
            )}
            {step < 5 && (
              <div className="ml-auto">
                <BubbleButton onClick={next} variant="gold">
                  {step === 4 ? 'Build My Quote' : 'Continue'}
                </BubbleButton>
              </div>
            )}
          </div>
        </div>

        {/* Sticky sidebar summary */}
        <div className="hidden lg:block">
          <div className="sticky top-32 bg-grey-light rounded-sm p-6">
            <h3 className="font-display text-lg font-bold text-navy mb-4">Your selections</h3>
            {step === 0 ? (
              <p className="text-sm text-grey-mid italic">Complete each step to see your selections here.</p>
            ) : (
              <ul className="space-y-2 text-sm text-grey-mid">
                {step > 0 && q.eventType && <li><span className="text-navy font-semibold">Event:</span> {q.eventType}</li>}
                {step > 1 && <li><span className="text-navy font-semibold">Guests:</span> {q.guests}</li>}
                {step > 1 && q.date && <li><span className="text-navy font-semibold">Date:</span> {q.date}</li>}
                {step > 1 && q.address && <li><span className="text-navy font-semibold">Location:</span> {q.postcode || q.address}</li>}
                {step > 2 && <li><span className="text-navy font-semibold">Marquee:</span> {q.marqueeSize}</li>}
                {step > 2 && q.chineseHat && <li><span className="text-navy font-semibold">Chinese Hat:</span> Yes</li>}
                {step > 2 && q.lining !== 'None' && <li><span className="text-navy font-semibold">Lining:</span> {q.lining}</li>}
                {step > 3 && q.lighting !== 'None' && <li><span className="text-navy font-semibold">Lighting:</span> {q.lighting}</li>}
                {step > 3 && q.flooring !== 'None' && <li><span className="text-navy font-semibold">Flooring:</span> {q.flooring}</li>}
                {step > 3 && q.danceFloor !== 'None' && <li><span className="text-navy font-semibold">Dance Floor:</span> {q.danceFloor}</li>}
                {step > 3 && q.furniture !== 'None' && <li><span className="text-navy font-semibold">Furniture:</span> {q.furniture}</li>}
                {step > 3 && q.bar !== 'None' && <li><span className="text-navy font-semibold">Bar:</span> {q.bar}</li>}
                {step > 3 && q.extras.length > 0 && <li><span className="text-navy font-semibold">Extras:</span> {q.extras.join(', ')}</li>}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
