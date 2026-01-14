interface SectionDividerProps {
  from: 'dark' | 'light'
  to: 'dark' | 'light'
  variant?: 'wave' | 'angle' | 'ornament' | 'overlap' | 'gradient' | 'arc' | 'zigzag' | 'dots' | 'brush' | 'peaks' | 'scallop' | 'artdeco' | 'vine' | 'doubleline' | 'torn'
}

export function SectionDivider({ from, to, variant = 'wave' }: SectionDividerProps) {
  const fromColor = from === 'dark' ? '#1b1b1b' : '#f2f2f2'
  const toColor = to === 'dark' ? '#1b1b1b' : '#f2f2f2'

  switch (variant) {
    case 'wave':
      return <WaveDivider fromColor={fromColor} toColor={toColor} />
    case 'angle':
      return <AngleDivider fromColor={fromColor} toColor={toColor} />
    case 'ornament':
      return <OrnamentDivider fromColor={fromColor} toColor={toColor} />
    case 'overlap':
      return <OverlapDivider fromColor={fromColor} toColor={toColor} />
    case 'gradient':
      return <GradientDivider fromColor={fromColor} toColor={toColor} />
    case 'arc':
      return <ArcDivider fromColor={fromColor} toColor={toColor} />
    case 'zigzag':
      return <ZigzagDivider fromColor={fromColor} toColor={toColor} />
    case 'dots':
      return <DotsDivider fromColor={fromColor} toColor={toColor} />
    case 'brush':
      return <BrushDivider fromColor={fromColor} toColor={toColor} />
    case 'peaks':
      return <PeaksDivider fromColor={fromColor} toColor={toColor} />
    case 'scallop':
      return <ScallopDivider fromColor={fromColor} toColor={toColor} />
    case 'artdeco':
      return <ArtDecoDivider fromColor={fromColor} toColor={toColor} />
    case 'vine':
      return <VineDivider fromColor={fromColor} toColor={toColor} />
    case 'doubleline':
      return <DoubleLineDivider fromColor={fromColor} toColor={toColor} />
    case 'torn':
      return <TornDivider fromColor={fromColor} toColor={toColor} />
    default:
      return null
  }
}

/* ============================================
   OPTION 1: WAVE DIVIDER
   ============================================ */
function WaveDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-24 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-24"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,64 C480,128 960,0 1440,64 L1440,0 L0,0 Z" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 2: ANGLE DIVIDER
   ============================================ */
function AngleDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-20 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <polygon points="0,0 1440,0 1440,40 0,80" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 3: ORNAMENT DIVIDER
   ============================================ */
function OrnamentDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div
      className="relative py-8 flex items-center justify-center"
      style={{ backgroundColor: toColor }}
    >
      {/* Line left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%-60px)] h-px"
        style={{ background: `linear-gradient(to right, transparent, #a37f00)` }}
      />

      {/* Ornament center */}
      <div className="relative z-10 flex items-center gap-3">
        <svg className="w-4 h-4 text-primary" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
        </svg>
        <div className="w-2 h-2 rotate-45 border border-primary" />
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C15.1 7 16 7.9 16 9V10H17C18.1 10 19 10.9 19 12V14H20C21.1 14 22 14.9 22 16V22H2V16C2 14.9 2.9 14 4 14H5V12C5 10.9 5.9 10 7 10H8V9C8 7.9 8.9 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2Z" />
        </svg>
        <div className="w-2 h-2 rotate-45 border border-primary" />
        <svg className="w-4 h-4 text-primary" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
        </svg>
      </div>

      {/* Line right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%-60px)] h-px"
        style={{ background: `linear-gradient(to left, transparent, #a37f00)` }}
      />
    </div>
  )
}

/* ============================================
   OPTION 4: OVERLAP DIVIDER
   ============================================ */
function OverlapDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative" style={{ backgroundColor: fromColor }}>
      <div
        className="relative -mb-12 mx-auto max-w-6xl"
        style={{
          backgroundColor: toColor,
          borderRadius: '24px 24px 0 0',
          height: '48px',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.15)'
        }}
      />
    </div>
  )
}

/* ============================================
   OPTION 5: GRADIENT DIVIDER
   ============================================ */
function GradientDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div
      className="h-16"
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
      }}
    />
  )
}

/* ============================================
   OPTION 6: ARC DIVIDER
   ============================================ */
function ArcDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-20 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,0 L1440,0 L1440,40 Q720,80 0,40 Z" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 7: ZIGZAG DIVIDER
   ============================================ */
function ZigzagDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-12 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-12"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,0 L1440,0 L1440,24 L1380,48 L1260,24 L1140,48 L1020,24 L900,48 L780,24 L660,48 L540,24 L420,48 L300,24 L180,48 L60,24 L0,48 Z" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 8: DOTS DIVIDER
   ============================================ */
function DotsDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div
      className="relative py-6 flex items-center justify-center gap-3"
      style={{ backgroundColor: toColor }}
    >
      <div className="w-2 h-2 rounded-full bg-primary/30" />
      <div className="w-2 h-2 rounded-full bg-primary/50" />
      <div className="w-3 h-3 rounded-full bg-primary" />
      <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
      <div className="w-3 h-3 rounded-full bg-primary" />
      <div className="w-2 h-2 rounded-full bg-primary/50" />
      <div className="w-2 h-2 rounded-full bg-primary/30" />
    </div>
  )
}

/* ============================================
   OPTION 9: BRUSH STROKE DIVIDER
   ============================================ */
function BrushDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-16 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-16"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,0 L1440,0 L1440,20 C1400,35 1350,15 1300,30 C1250,45 1200,25 1150,35 C1100,45 1050,20 1000,32 C950,44 900,28 850,38 C800,48 750,22 700,34 C650,46 600,26 550,36 C500,46 450,24 400,35 C350,46 300,28 250,38 C200,48 150,25 100,35 C50,45 25,30 0,40 Z" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 10: PEAKS DIVIDER
   ============================================ */
function PeaksDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-16 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-16"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,0 L1440,0 L1440,32 L1320,64 L1200,32 L1080,56 L960,32 L840,64 L720,32 L600,56 L480,32 L360,64 L240,32 L120,56 L0,32 Z" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 11: SCALLOP DIVIDER
   ============================================ */
function ScallopDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-12 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-12"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,0 L1440,0 L1440,24 C1380,48 1320,48 1260,24 C1200,48 1140,48 1080,24 C1020,48 960,48 900,24 C840,48 780,48 720,24 C660,48 600,48 540,24 C480,48 420,48 360,24 C300,48 240,48 180,24 C120,48 60,48 0,24 Z" />
      </svg>
    </div>
  )
}

/* ============================================
   OPTION 12: ART DECO DIVIDER
   ============================================ */
function ArtDecoDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div
      className="relative py-6 flex items-center justify-center"
      style={{ backgroundColor: toColor }}
    >
      {/* Left geometric pattern */}
      <div className="flex items-center gap-1">
        <div className="w-20 h-px bg-primary/40" />
        <div className="w-2 h-2 rotate-45 bg-primary/40" />
        <div className="w-8 h-px bg-primary/60" />
      </div>

      {/* Center diamond */}
      <div className="mx-4 relative">
        <div className="w-6 h-6 rotate-45 border-2 border-primary" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rotate-45 bg-primary" />
        </div>
      </div>

      {/* Right geometric pattern */}
      <div className="flex items-center gap-1">
        <div className="w-8 h-px bg-primary/60" />
        <div className="w-2 h-2 rotate-45 bg-primary/40" />
        <div className="w-20 h-px bg-primary/40" />
      </div>
    </div>
  )
}

/* ============================================
   OPTION 13: VINE DIVIDER
   ============================================ */
function VineDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
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

/* ============================================
   OPTION 14: DOUBLE LINE DIVIDER
   ============================================ */
function DoubleLineDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div
      className="relative py-6 flex flex-col items-center justify-center gap-2"
      style={{ backgroundColor: toColor }}
    >
      <div className="flex items-center w-full max-w-md">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/60 to-primary" />
        <div className="w-3 h-3 rotate-45 border border-primary mx-2" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/60 to-primary" />
      </div>
      <div className="flex items-center w-full max-w-xs">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary mx-2" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
      </div>
    </div>
  )
}

/* ============================================
   OPTION 15: TORN PAPER DIVIDER
   ============================================ */
function TornDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative h-8 -mt-1" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute bottom-0 w-full h-8"
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <path d="M0,0 L1440,0 L1440,8 L1420,12 L1400,6 L1380,14 L1360,8 L1340,16 L1320,10 L1300,18 L1280,12 L1260,20 L1240,14 L1220,22 L1200,16 L1180,24 L1160,18 L1140,26 L1120,20 L1100,28 L1080,22 L1060,30 L1040,24 L1020,32 L1000,26 L980,30 L960,24 L940,28 L920,22 L900,26 L880,20 L860,24 L840,18 L820,22 L800,16 L780,20 L760,14 L740,18 L720,12 L700,16 L680,10 L660,14 L640,8 L620,12 L600,6 L580,10 L560,4 L540,8 L520,2 L500,6 L480,0 L460,4 L440,8 L420,2 L400,6 L380,10 L360,4 L340,8 L320,12 L300,6 L280,10 L260,14 L240,8 L220,12 L200,16 L180,10 L160,14 L140,18 L120,12 L100,16 L80,20 L60,14 L40,18 L20,12 L0,16 Z" />
      </svg>
    </div>
  )
}
