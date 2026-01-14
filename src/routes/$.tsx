import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/$')({
  component: NotFoundPage,
})

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://dehuiskamervanhetleudal.com/wp-content/uploads/2014/08/cropped-DSC04166.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative text-center px-4">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-primary/50" />
          <span className="text-primary text-6xl font-serif">404</span>
          <div className="w-16 h-px bg-primary/50" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-light mb-4">
          {t('notFound.title')}
        </h1>

        <p className="text-light/70 max-w-md mx-auto mb-8">
          {t('notFound.description')}
        </p>

        <Link
          to="/"
          className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
        >
          {t('notFound.backHome')}
        </Link>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </div>
  )
}
