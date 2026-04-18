'use client'

interface ArrowCircleProps {
  className?: string
}

export function ArrowCircle({ className = '' }: ArrowCircleProps) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
      bg-white/90 backdrop-blur-sm
      transition-all duration-300 ease-out
      group-hover:bg-navy group-hover:scale-110
      ${className}`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="w-4 h-4 text-navy transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </div>
  )
}
