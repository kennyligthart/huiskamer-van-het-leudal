import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SectionDivider } from '~/components/SectionDivider'

export const Route = createFileRoute('/evenementen/bruiloft')({
  component: BruiloftPage,
})

function BruiloftPage() {
  const { t } = useTranslation()

  const features = [
    { key: 'reception' },
    { key: 'partyHall' },
    { key: 'garden' },
    { key: 'accommodation' },
  ]

  const services = [
    { icon: '🥂', key: 'reception' },
    { icon: '🍽️', key: 'dinner' },
    { icon: '🎵', key: 'party' },
    { icon: '🛏️', key: 'stay' },
  ]

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
          <Link to="/evenementen" className="text-primary/70 hover:text-primary text-sm tracking-wider uppercase mb-4 inline-block">
            {t('common.backToEvents')}
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('events.wedding')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            {t('weddingPage.heroSubtitle')}
          </p>
        </div>
      </section>

      <SectionDivider from="dark" to="light" />

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center">
                <div className="text-center text-light/50">
                  <span className="text-6xl block mb-4">💒</span>
                  <p className="text-sm">{t('common.photoComingSoon')}</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  {t('weddingPage.sectionLabel')}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                {t('weddingPage.title')}
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                {t('weddingPage.description1')}
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                {t('weddingPage.description2')}
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature.key} className="flex items-center gap-3 text-dark/70">
                    <span className="text-primary">✓</span>
                    <span>{t(`weddingPage.features.${feature.key}`)}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
              >
                {t('common.scheduleConsultation')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="light" to="dark" />

      {/* Services */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('weddingPage.services.sectionLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              {t('weddingPage.services.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div key={item.key} className="bg-dark-lighter p-6 text-center border border-primary/10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg text-light mb-2">
                  {t(`weddingPage.services.items.${item.key}.title`)}
                </h3>
                <p className="text-light/60 text-sm">
                  {t(`weddingPage.services.items.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
