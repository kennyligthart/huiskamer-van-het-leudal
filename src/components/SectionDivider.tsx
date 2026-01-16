interface SectionDividerProps {
  from: 'dark' | 'light'
  to: 'dark' | 'light'
}

export function SectionDivider({ from, to }: SectionDividerProps) {
  const toColor = to === 'dark' ? '#1b1b1b' : '#f2f2f2'

  return (
    <div
      className="relative py-4 flex items-center justify-center"
      style={{ backgroundColor: toColor }}
    >
      <svg className="w-64 h-8 text-primary" viewBox="0 0 256 32" fill="none">
        {/* Left vine */}
        <path d="M0,16 Q32,8 64,16 T128,16" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="48" cy="12" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="80" cy="20" r="2" fill="currentColor" opacity="0.3" />

        {/* Center leaf */}
        <path d="M128,8 Q136,16 128,24 Q120,16 128,8" fill="currentColor" />

        {/* Right vine */}
        <path d="M128,16 Q160,24 192,16 T256,16" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="176" cy="20" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="208" cy="12" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  )
}
