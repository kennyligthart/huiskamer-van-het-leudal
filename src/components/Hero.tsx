import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  showCta?: boolean
  ctaText?: string
  ctaLink?: string
  overlay?: 'dark' | 'light' | 'gold'
  size?: 'full' | 'large' | 'medium' | 'small'
}

export function Hero({
  title,
  subtitle,
  backgroundImage = '/images/hero-default.jpg',
  showCta = false,
  ctaText,
  ctaLink = '/contact',
  overlay = 'dark',
  size = 'large',
}: HeroProps) {
  const { t } = useTranslation()

  const sizeClasses = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[50vh]',
    small: 'min-h-[30vh]',
  }

  const overlayClasses = {
    dark: 'bg-dark/70',
    light: 'bg-light/50',
    gold: 'bg-primary/30',
  }

  return (
    <section
      className={`relative ${sizeClasses[size]} flex items-center justify-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30 m-8" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30 m-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-light/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        {showCta && ctaText && (
          <Link
            to={ctaLink}
            className="inline-block btn-primary text-lg px-8 py-4 rounded"
          >
            {ctaText}
          </Link>
        )}
      </div>

      {/* Scroll Indicator */}
      {size === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  )
}
