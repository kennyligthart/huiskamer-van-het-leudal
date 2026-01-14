import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/evenementen/binnentuin')({
  component: BinnentuinPage,
})

function BinnentuinPage() {
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
            {t('events.garden')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            Een oase van rust voor uw speciale momenten
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  Binnentuin
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Een Groene Oase in het Hart van Nunhem
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                Onze prachtige binnentuin biedt een unieke setting voor uw evenement.
                Omgeven door groen en beschut tegen de wind, is dit de perfecte
                locatie voor een zomerse receptie, borrel of diner.
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                De tuin kan zowel overdag als 's avonds gebruikt worden en wordt
                bij donker sfeervolle verlicht. Ideaal voor zowel formele als
                informele gelegenheden.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Geschikt voor 20-60 personen</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Sfeervolle verlichting</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>Catering mogelijk</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
              >
                Informatie Aanvragen
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center">
                <div className="text-center text-light/50">
                  <span className="text-6xl block mb-4">🌿</span>
                  <p className="text-sm">Foto volgt binnenkort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
