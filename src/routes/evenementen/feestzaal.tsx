import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/evenementen/feestzaal')({
  component: FeestzaalPage,
})

function FeestzaalPage() {
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
          <Link to="/evenementen" className="text-primary/70 hover:text-primary text-sm tracking-wider uppercase mb-4 inline-block">
            ← Terug naar Evenementen
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('events.partyHall')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            De ideale ruimte voor uw feest of viering
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center">
                <div className="text-center text-light/50">
                  <span className="text-6xl block mb-4">🎉</span>
                  <p className="text-sm">Foto volgt binnenkort</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  Feestzaal
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Ruimte voor Grotere Vieringen
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                Onze feestzaal is de perfecte locatie voor verjaardagen, jubilea,
                communies en andere feestelijke gelegenheden. De zaal biedt ruimte
                voor grotere gezelschappen.
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                Wij verzorgen alles voor u: van een sfeervolle aankleding tot
                heerlijke catering. U hoeft zich nergens zorgen over te maken
                en kunt volledig genieten van uw feest.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Capaciteit tot 100 personen</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Eigen bar</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Geluidsinstallatie aanwezig</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Ruime parkeergelegenheid</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
              >
                Informatie Aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
