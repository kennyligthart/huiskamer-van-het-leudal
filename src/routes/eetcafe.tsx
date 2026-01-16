import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SectionDivider } from '~/components/SectionDivider'

export const Route = createFileRoute('/eetcafe')({
  component: EetcafePage,
})

function EetcafePage() {
  const { t } = useTranslation()

  const menuItems = [
    { icon: '🥪', key: 'sandwiches' },
    { icon: '🍟', key: 'snacks' },
    { icon: '🥗', key: 'salads' },
    { icon: '🍰', key: 'pastry' },
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
            {t('cafe.sectionLabel')}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-light mb-6">
            {t('nav.cafe')}
          </h1>
          <p className="text-light/70 max-w-2xl mx-auto">
            {t('cafe.heroDescription')}
          </p>
        </div>
      </section>

      <SectionDivider from="dark" to="light" />

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase">
                  {t('cafe.intro.sectionLabel')}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                {t('cafe.intro.title')}
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                {t('cafe.intro.description1')}
              </p>

              <p className="text-dark/70 leading-relaxed mb-8">
                {t('cafe.intro.description2')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>{t('cafe.intro.features.coffee')}</span>
                </div>
                <div className="flex items-center gap-2 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>{t('cafe.intro.features.beer')}</span>
                </div>
                <div className="flex items-center gap-2 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>{t('cafe.intro.features.menu')}</span>
                </div>
                <div className="flex items-center gap-2 text-dark/70">
                  <span className="text-primary">✓</span>
                  <span>{t('cafe.intro.features.atmosphere')}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <img
                src="https://dehuiskamervanhetleudal.com/wp-content/uploads/2020/03/DSC04167.jpg"
                alt={t('nav.cafe')}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="light" to="dark" />

      {/* Menu Highlights */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('cafe.menu.sectionLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-light">
              {t('cafe.menu.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-dark-lighter p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg text-light mb-1">
                  {t(`cafe.menu.items.${item.key}.title`)}
                </h3>
                <p className="text-light/60 text-sm">
                  {t(`cafe.menu.items.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="dark" to="light" />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
            {t('cafe.cta.title')}
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto mb-8">
            {t('cafe.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-dark font-medium px-8 py-4 hover:bg-primary-600 transition-colors"
          >
            {t('cafe.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
