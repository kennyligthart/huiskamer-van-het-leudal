import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/over-ons')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation()

  const values = [
    { icon: '🤝', key: 'hospitality' },
    { icon: '⭐', key: 'quality' },
    { icon: '🏛️', key: 'tradition' },
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
            {t('about.sectionLabel')}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.about')}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary/50" />
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16L5.5 21L8 13.5L2 9H9.5L12 2Z"/>
            </svg>
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  {t('about.history.sectionLabel')}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                {t('about.history.title')}
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <div className="prose prose-lg text-dark/70">
                <p className="mb-4">
                  {t('about.history.description1')}
                </p>
                <p className="mb-4">
                  {t('about.history.description2')}
                </p>
                <p>
                  {t('about.history.description3')}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <img
                src="https://dehuiskamervanhetleudal.com/wp-content/uploads/2020/03/DSC04167.jpg"
                alt="Café Houben"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-dark p-6">
                <div className="text-4xl font-serif font-bold">1890</div>
                <div className="text-xs tracking-wider uppercase">{t('about.history.founded')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('about.values.sectionLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="font-serif text-xl text-light mb-4">
                  {t(`about.values.items.${value.key}.title`)}
                </h3>
                <p className="text-light/60 leading-relaxed">
                  {t(`about.values.items.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('about.location.sectionLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-4">
              {t('about.location.title')}
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              {t('about.location.description')}
            </p>
          </div>

          <div className="bg-dark-lighter p-8 md:p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-primary text-sm tracking-wider uppercase mb-2">{t('footer.address')}</div>
                <address className="not-italic text-light/80">
                  Kerkstraat 17-19<br />
                  6083 AD Nunhem<br />
                  Nederland
                </address>
              </div>
              <div>
                <div className="text-primary text-sm tracking-wider uppercase mb-2">{t('footer.contact')}</div>
                <div className="text-light/80">
                  <a href="tel:+31475591234" className="hover:text-primary transition-colors block">
                    +31 (0)475 59 12 34
                  </a>
                  <a href="mailto:info@dehuiskamervanhetleudal.com" className="hover:text-primary transition-colors block">
                    info@dehuiskamervanhetleudal.com
                  </a>
                </div>
              </div>
              <div>
                <div className="text-primary text-sm tracking-wider uppercase mb-2">{t('footer.openingHours')}</div>
                <div className="text-light/80">
                  {t('footer.byReservation')}<br />
                  {t('footer.sundayClosed')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
