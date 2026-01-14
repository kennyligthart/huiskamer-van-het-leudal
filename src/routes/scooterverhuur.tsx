import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/scooterverhuur')({
  component: ScooterverhuurPage,
})

function ScooterverhuurPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://dehuiskamervanhetleudal.com/wp-content/uploads/2014/08/cropped-DSC04166.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />

        <div className="container-custom relative text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('scooterRental.sectionLabel')}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.scooterRental')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            {t('scooterRental.heroDescription')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  {t('scooterRental.intro.sectionLabel')}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                {t('scooterRental.intro.title')}
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                {t('scooterRental.intro.description1')}
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                {t('scooterRental.intro.description2')}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('scooterRental.intro.features.helmet')}</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('scooterRental.intro.features.routes')}</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('scooterRental.intro.features.duration')}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center">
                <div className="text-center text-light/50">
                  <span className="text-6xl block mb-4">🛵</span>
                  <p className="text-sm">{t('common.photoComingSoon')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('scooterRental.info.sectionLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              {t('scooterRental.info.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-lighter p-8 border border-primary/10">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-serif text-xl text-light mb-4">{t('scooterRental.info.requirements.title')}</h3>
              <ul className="text-light/60 space-y-2 text-sm">
                <li>• {t('scooterRental.info.requirements.age')}</li>
                <li>• {t('scooterRental.info.requirements.license')}</li>
                <li>• {t('scooterRental.info.requirements.id')}</li>
                <li>• {t('scooterRental.info.requirements.deposit')}</li>
              </ul>
            </div>

            <div className="bg-dark-lighter p-8 border border-primary/10">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="font-serif text-xl text-light mb-4">{t('scooterRental.info.times.title')}</h3>
              <ul className="text-light/60 space-y-2 text-sm">
                <li>• {t('scooterRental.info.times.halfDay')}</li>
                <li>• {t('scooterRental.info.times.fullDay')}</li>
                <li>• {t('scooterRental.info.times.weekend')}</li>
                <li>• {t('scooterRental.info.times.reservation')}</li>
              </ul>
            </div>

            <div className="bg-dark-lighter p-8 border border-primary/10">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="font-serif text-xl text-light mb-4">{t('scooterRental.info.routes.title')}</h3>
              <ul className="text-light/60 space-y-2 text-sm">
                <li>• {t('scooterRental.info.routes.leudal')}</li>
                <li>• {t('scooterRental.info.routes.castles')}</li>
                <li>• {t('scooterRental.info.routes.maas')}</li>
                <li>• {t('scooterRental.info.routes.custom')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
            {t('scooterRental.cta.title')}
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8">
            {t('scooterRental.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
          >
            {t('scooterRental.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
