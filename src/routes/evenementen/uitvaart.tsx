import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/evenementen/uitvaart')({
  component: UitvaartPage,
})

function UitvaartPage() {
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
            {t('events.funeral')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            Een waardige plek voor afscheid en herdenking
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-primary/50" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  Koffietafel
                </span>
                <div className="w-16 h-px bg-primary/50" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Samen Herdenken in een Warme Omgeving
              </h2>
            </div>

            <p className="text-dark/70 text-lg leading-relaxed mb-6 text-center">
              Het afscheid nemen van een dierbare is een emotioneel moment.
              Wij bieden een rustgevende omgeving waar familie en vrienden
              samen kunnen komen om te herdenken en herinneringen te delen.
            </p>

            <p className="text-dark/70 leading-relaxed mb-12 text-center">
              Onze ervaren medewerkers zorgen met respect en discretie voor
              een waardig ontvangst. U kunt zich volledig richten op het
              samenzijn met uw naasten.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Koffie & Thee', desc: 'Onbeperkt koffie, thee en fris' },
                { title: 'Koffietafel', desc: 'Traditionele koffietafel met broodjes' },
                { title: 'Warme Maaltijd', desc: 'Mogelijkheid voor een warme maaltijd' },
                { title: 'Flexibele Ruimte', desc: 'Aangepast aan uw gezelschap' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 shadow-md">
                  <h3 className="font-serif text-lg text-dark mb-2">{item.title}</h3>
                  <p className="text-dark/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-dark-lighter p-8 text-center">
              <p className="text-light/80 mb-6">
                Wij begrijpen dat dit een moeilijke tijd is. Neem gerust contact
                met ons op om de mogelijkheden te bespreken. Wij denken graag
                met u mee.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
              >
                Contact Opnemen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
