import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

interface ServiceCardProps {
  title: string
  description: string
  image?: string
  link: string
  icon?: React.ReactNode
}

export function ServiceCard({ title, description, image, link, icon }: ServiceCardProps) {
  const { t } = useTranslation()

  return (
    <Link
      to={link}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 bg-dark-lighter overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark to-dark-lighter">
            {icon || (
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-2xl">✦</span>
              </div>
            )}
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-dark mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-dark/70 text-sm leading-relaxed">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center text-primary text-sm font-medium">
          <span>{t('common.learnMore')}</span>
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
