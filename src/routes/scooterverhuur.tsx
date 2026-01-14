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
            Ontdek de Omgeving
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.scooterRental')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            Verken het prachtige Leudal en omstreken op een comfortabele scooter
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
                  Scooterverhuur
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Ontdek Limburg op Twee Wielen
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                Het Leudal en de omgeving bieden prachtige routes door bossen,
                langs kastelen en door pittoreske dorpjes. Op de scooter ervaart
                u dit alles op een ontspannen en plezierige manier.
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                Onze scooters zijn eenvoudig te bedienen en geschikt voor iedereen
                met een rijbewijs B. Wij zorgen voor een korte instructie en
                u kunt direct op pad!
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Inclusief helm en instructie</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Routesuggesties beschikbaar</span>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dagverhuur en halve dag mogelijk</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center">
                <div className="text-center text-light/50">
                  <span className="text-6xl block mb-4">🛵</span>
                  <p className="text-sm">Foto volgt binnenkort</p>
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
              Praktische Info
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              Wat U Moet Weten
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-lighter p-8 border border-primary/10">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-serif text-xl text-light mb-4">Vereisten</h3>
              <ul className="text-light/60 space-y-2 text-sm">
                <li>• Minimumleeftijd: 18 jaar</li>
                <li>• Geldig rijbewijs B</li>
                <li>• Legitimatie verplicht</li>
                <li>• Borg vereist</li>
              </ul>
            </div>

            <div className="bg-dark-lighter p-8 border border-primary/10">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="font-serif text-xl text-light mb-4">Verhuurtijden</h3>
              <ul className="text-light/60 space-y-2 text-sm">
                <li>• Halve dag: 4 uur</li>
                <li>• Hele dag: 8 uur</li>
                <li>• Weekend arrangementen</li>
                <li>• Op reservering</li>
              </ul>
            </div>

            <div className="bg-dark-lighter p-8 border border-primary/10">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="font-serif text-xl text-light mb-4">Routes</h3>
              <ul className="text-light/60 space-y-2 text-sm">
                <li>• Leudal route</li>
                <li>• Kastelentocht</li>
                <li>• Maasroute</li>
                <li>• Eigen route mogelijk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
            Reserveer Uw Scooter
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8">
            Neem contact met ons op voor beschikbaarheid en tarieven.
            Wij adviseren om vooraf te reserveren, vooral in het hoogseizoen.
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
