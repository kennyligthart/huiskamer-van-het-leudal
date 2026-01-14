import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/evenementen/')({
  component: EvenementenPage,
})

function EvenementenPage() {
  const { t } = useTranslation()

  const eventTypes = [
    {
      title: t('events.garden'),
      description: 'Geniet van onze sfeervolle binnentuin voor uw speciale gelegenheid.',
      link: '/evenementen/binnentuin',
      icon: '🌿',
    },
    {
      title: t('events.catering'),
      description: 'Laat uw evenement verzorgen door onze ervaren cateringservice.',
      link: '/evenementen/catering',
      icon: '🍽️',
    },
    {
      title: t('events.partyHall'),
      description: 'Onze feestzaal biedt ruimte voor grotere vieringen en feesten.',
      link: '/evenementen/feestzaal',
      icon: '🎉',
    },
    {
      title: t('events.meetingRoom'),
      description: 'Een professionele omgeving voor uw zakelijke bijeenkomsten.',
      link: '/evenementen/vergaderzaal',
      icon: '💼',
    },
    {
      title: t('events.wedding'),
      description: 'Maak van uw trouwdag een onvergetelijke gebeurtenis.',
      link: '/evenementen/bruiloft',
      icon: '💒',
    },
    {
      title: t('events.funeral'),
      description: 'Een waardige locatie voor afscheid en herdenking.',
      link: '/evenementen/uitvaart',
      icon: '🕯️',
    },
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
            Uw Speciale Gelegenheid
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.events')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            De perfecte locatie voor elk evenement, groot of klein
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
                Onze Zalen
              </span>
              <div className="w-16 h-px bg-primary/50" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
              Voor Elk Moment de Juiste Ruimte
            </h2>

            <p className="text-dark/70 text-lg leading-relaxed">
              Van intieme bijeenkomsten tot grote feesten, van zakelijke vergaderingen
              tot emotionele momenten - onze diverse ruimtes bieden voor elk evenement
              de perfecte setting.
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
                  {event.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>Meer informatie</span>
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
            Laat Ons Uw Evenement Verzorgen
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            Neem vrijblijvend contact met ons op om de mogelijkheden te bespreken.
            Samen maken we van uw evenement een succes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
          >
            Contact Opnemen
          </Link>
        </div>
      </section>
    </div>
  )
}
