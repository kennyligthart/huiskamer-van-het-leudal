import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/hotel')({
  component: HotelPage,
})

function HotelPage() {
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
            Verblijf
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.hotel')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            Ontspan in onze comfortabele kamers en geniet van Limburgse gastvrijheid
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
                  Ons Hotel
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Een Thuisgevoel op Vakantie
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                Ons hotel biedt u de perfecte uitvalsbasis om de prachtige omgeving van
                het Leudal te verkennen. Na een dag vol activiteiten of zakelijke
                bezigheden kunt u heerlijk tot rust komen in één van onze comfortabele kamers.
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                Alle kamers zijn voorzien van moderne voorzieningen en ingericht met
                oog voor detail. 's Ochtends wordt u verwend met een uitgebreid ontbijt,
                bereid met verse, lokale producten.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gratis WiFi</span>
                </div>
                <div className="flex items-center gap-2 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ontbijt inbegrepen</span>
                </div>
                <div className="flex items-center gap-2 text-dark/70">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Parkeren</span>
                </div>
              </div>
            </div>

            <div className="relative">
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
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Voorzieningen
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              Alles Voor Uw Comfort
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛏️', title: 'Comfortabele Bedden', desc: 'Heerlijk slapen op kwaliteitsbedden' },
              { icon: '🚿', title: 'Eigen Badkamer', desc: 'Met douche en toiletartikelen' },
              { icon: '📺', title: 'Flatscreen TV', desc: 'Met diverse zenders' },
              { icon: '☕', title: 'Koffie & Thee', desc: 'Gratis op de kamer' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-lighter p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg text-light mb-2">{item.title}</h3>
                <p className="text-light/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
            Interesse in een Verblijf?
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8">
            Neem contact met ons op voor beschikbaarheid en tarieven.
            Wij helpen u graag bij het plannen van uw verblijf.
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
