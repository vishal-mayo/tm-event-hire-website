const items = [
  'Marquee Hire',
  'Mobile Bars',
  'Chinese Hats',
  'Furniture Hire',
  'Tableware',
  'Kitchen Equipment',
  'Essex',
  'Hertfordshire',
  'London',
]

export function TickerStrip() {
  return (
    <div className="bg-navy-dark overflow-hidden py-3.5 border-y border-white/5 select-none">
      <div className="flex animate-ticker whitespace-nowrap" aria-hidden>
        {[0, 1].map(copy => (
          <div key={copy} className="flex items-center shrink-0">
            {items.map((item) => (
              <span key={item} className="inline-flex items-center gap-5 px-5">
                <span className="font-display font-bold text-xs uppercase tracking-[0.22em] text-silver/70">{item}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-silver/30 inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
