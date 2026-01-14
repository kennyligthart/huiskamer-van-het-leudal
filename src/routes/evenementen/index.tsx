import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/evenementen/')({
  component: EvenementenPage,
})

function EvenementenPage() {
  const { t } = useTranslation()

  const eventTypes = [
    { key: 'garden', link: '/evenementen/binnentuin', icon: '🌿' },
    { key: 'catering', link: '/evenementen/catering', icon: '🍽️' },
    { key: 'partyHall', link: '/evenementen/feestzaal', icon: '🎉' },
    { key: 'meetingRoom', link: '/evenementen/vergaderzaal', icon: '💼' },
    { key: 'wedding', link: '/evenementen/bruiloft', icon: '💒' },
    { key: 'funeral', link: '/evenementen/uitvaart', icon: '🕯️' },
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
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('eventsPage.sectionLabel')}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.events')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            {t('eventsPage.heroDescription')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-primary/50" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase">
                {t('eventsPage.intro.sectionLabel')}
              </span>
              <div className="w-16 h-px bg-primary/50" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
              {t('eventsPage.intro.title')}
            </h2>

            <p className="text-dark/70 text-lg leading-relaxed">
              {t('eventsPage.intro.description')}
            </p>
          </div>

          {/* Event Types Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <Link
                key={index}
                to={event.link}
                className="group bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="text-5xl mb-6">{event.icon}</div>
                <h3 className="font-serif text-xl text-dark mb-3 group-hover:text-primary transition-colors">
                  {t(`events.${event.key}`)}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-4">
                  {t(`eventsPage.types.${event.key}`)}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-light mb-6">
            {t('eventsPage.cta.title')}
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            {t('eventsPage.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
          >
            {t('eventsPage.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
