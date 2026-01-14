import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/restaurant')({
  component: RestaurantPage,
})

function RestaurantPage() {
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
            Culinair Genieten
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.restaurant')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            Proef de authentieke smaken van Limburg in een sfeervolle ambiance
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="aspect-[4/3] bg-dark-lighter flex items-center justify-center">
                <div className="text-center text-light/50">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Foto volgt binnenkort</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  Ons Restaurant
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Limburgse Keuken met Passie Bereid
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                In ons restaurant serveren wij eerlijke, smakelijke gerechten bereid met
                verse, lokale ingrediënten. Onze keuken combineert traditionele Limburgse
                recepten met een moderne touch.
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                Of u nu komt voor een uitgebreide lunch, een romantisch diner of een
                feestelijke maaltijd - onze chef-kok en zijn team staan garant voor
                een culinaire ervaring om te onthouden.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
              >
                <span>Reserveer een tafel</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Onze Specialiteiten
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              Proef Limburg
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seizoensgerechten',
                description: 'Onze menukaart verandert met de seizoenen, zodat u altijd kunt genieten van de verste ingrediënten.',
                icon: '🍂',
              },
              {
                title: 'Lokale Producten',
                description: 'Wij werken samen met lokale boeren en leveranciers voor de beste kwaliteit.',
                icon: '🌾',
              },
              {
                title: 'Huisgemaakte Desserts',
                description: 'Sluit uw maaltijd af met een van onze heerlijke, huisgemaakte desserts.',
                icon: '🍰',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-lighter p-8 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-serif text-xl text-light mb-4">{item.title}</h3>
                <p className="text-light/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
            Reserveer Uw Tafel
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8">
            Wij adviseren om vooraf te reserveren, zodat wij u de beste plek kunnen garanderen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
            >
              Reserveren
            </Link>
            <a
              href="tel:+31475591234"
              className="inline-flex items-center gap-2 px-8 py-4 border border-dark/30 text-dark hover:border-primary hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+31 (0)475 59 12 34</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
