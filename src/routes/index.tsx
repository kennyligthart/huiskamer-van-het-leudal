import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SectionDivider } from '~/components/SectionDivider'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// Change this to test different divider styles:
// 'wave' | 'angle' | 'ornament' | 'overlap' | 'gradient' | 'arc' | 'zigzag' | 'dots' | 'brush' | 'peaks' | 'scallop' | 'artdeco' | 'vine' | 'doubleline' | 'torn'
const DIVIDER_VARIANT = 'vine' as const

function HomePage() {
  return (
    <div className="bg-light overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      <SectionDivider from="dark" to="light" variant={DIVIDER_VARIANT} />

      {/* Welcome Section */}
      <WelcomeSection />
      <SectionDivider from="light" to="dark" variant={DIVIDER_VARIANT} />

      {/* Services Section */}
      <ServicesSection />
      <SectionDivider from="dark" to="light" variant={DIVIDER_VARIANT} />

      {/* Why Choose Us */}
      <WhyChooseUsSection />
      <SectionDivider from="light" to="dark" variant={DIVIDER_VARIANT} />

      {/* Call to Action */}
      <CTASection />
    </div>
  )
}

/* ============================================
   HERO SECTION
   ============================================ */
function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://dehuiskamervanhetleudal.com/wp-content/uploads/2014/08/cropped-DSC04166.jpg')`,
        }}
      />

      {/* Dark overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90" />

      {/* Decorative grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative corner ornaments */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M0,0 L40,0 L40,4 L4,4 L4,40 L0,40 Z" fill="currentColor"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-24 h-24 opacity-40 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M0,0 L40,0 L40,4 L4,4 L4,40 L0,40 Z" fill="currentColor"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-24 opacity-40 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M0,0 L40,0 L40,4 L4,4 L4,40 L0,40 Z" fill="currentColor"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-40 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M0,0 L40,0 L40,4 L4,4 L4,40 L0,40 Z" fill="currentColor"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Heritage Badge */}
        <div
          className="inline-flex items-center justify-center mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
            <div className="relative px-6 py-2 border-2 border-primary/60 rounded-full bg-dark/50 backdrop-blur-sm">
              <span className="text-primary font-serif tracking-[0.3em] text-sm uppercase">
                {t('home.hero.since')}
              </span>
            </div>
          </div>
        </div>

        {/* Main Title with decorative elements */}
        <div className="relative mb-6">
          {/* Decorative line left */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-px bg-gradient-to-r from-transparent to-primary/50 animate-expand-right"
            style={{ animationDelay: '0.5s' }}
          />
          {/* Decorative line right */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-px bg-gradient-to-l from-transparent to-primary/50 animate-expand-left"
            style={{ animationDelay: '0.5s' }}
          />

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight animate-fade-in-up"
            style={{
              animationDelay: '0.3s',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)'
            }}
          >
            <span className="block text-primary/90 text-2xl sm:text-3xl md:text-4xl mb-2 tracking-wide">
              {t('home.hero.titlePart1')}
            </span>
            <span className="italic">{t('home.hero.titlePart2')}</span>
          </h1>
        </div>

        {/* Decorative divider */}
        <div
          className="flex items-center justify-center gap-4 mb-8 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="w-12 h-px bg-primary/40" />
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16L5.5 21L8 13.5L2 9H9.5L12 2Z"/>
          </svg>
          <div className="w-12 h-px bg-primary/40" />
        </div>

        {/* Tagline */}
        <p
          className="text-light/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up"
          style={{
            animationDelay: '0.7s',
            fontFamily: "'Crimson Text', Georgia, serif"
          }}
        >
          {t('home.hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          <Link
            to="/contact"
            className="group relative px-8 py-4 bg-primary text-dark font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,127,0,0.4)]"
          >
            <span className="relative z-10">{t('nav.contact')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/over-ons"
            className="px-8 py-4 border border-light/30 text-light font-medium tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
          >
            {t('nav.about')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  )
}

/* ============================================
   WELCOME SECTION
   ============================================ */
function WelcomeSection() {
  const { t } = useTranslation()

  const features = [
    { icon: '🏨', key: 'hotel' },
    { icon: '🍽️', key: 'restaurant' },
    { icon: '☕', key: 'cafe' },
    { icon: '🎉', key: 'events' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-light overflow-hidden">
      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a37f00' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20 -z-10 transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute -inset-8 border border-primary/10 -z-20 transform group-hover:scale-110 transition-transform duration-700 delay-100" />

            <div className="relative overflow-hidden">
              <img
                src="https://dehuiskamervanhetleudal.com/wp-content/uploads/2020/03/DSC04167.jpg"
                alt="Café Houben"
                className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-dark text-light p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-serif text-primary">130+</div>
                <div className="text-xs tracking-[0.2em] uppercase mt-1 text-light/70">{t('home.welcome.yearsExperience')}</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-8">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                {t('home.welcome.sectionLabel')}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-6 leading-tight">
              {t('home.welcome.title')}
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-8" />

            <p className="text-dark/70 text-lg leading-relaxed mb-8">
              {t('home.welcome.description')}
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/50 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-dark/80 font-medium">{t(`home.welcome.features.${item.key}`)}</span>
                </div>
              ))}
            </div>

            <Link
              to="/over-ons"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              <span>{t('common.readMore')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SERVICES SECTION
   ============================================ */
function ServicesSection() {
  const { t } = useTranslation()

  const services = [
    {
      key: 'hotel',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/hotel',
    },
    {
      key: 'restaurant',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/restaurant',
    },
    {
      key: 'cafe',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/eetcafe',
    },
    {
      key: 'events',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: '/evenementen',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a37f00' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-primary/10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-primary/10" />

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              {t('home.services.sectionLabel')}
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
            {t('home.services.title')}
          </h2>

          <p className="text-light/60 max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.key}
              to={service.link}
              className="group relative bg-dark-lighter border border-primary/10 p-8 hover:border-primary/40 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-0 right-0 w-full h-px bg-primary/30 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute top-0 right-0 h-full w-px bg-primary/30 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
              </div>

              {/* Icon */}
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-light mb-3 group-hover:text-primary transition-colors">
                {t(`home.services.${service.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-light/60 text-sm leading-relaxed mb-4">
                {t(`home.services.${service.key}.description`)}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-primary text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="mr-2">{t('common.learnMore')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   WHY CHOOSE US SECTION
   ============================================ */
function WhyChooseUsSection() {
  const { t } = useTranslation()

  const highlights = [
    { number: '01', key: 'tradition', icon: '👨‍👩‍👧‍👦' },
    { number: '02', key: 'cuisine', icon: '🍳' },
    { number: '03', key: 'location', icon: '🌿' },
    { number: '04', key: 'service', icon: '💝' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/30" />

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('home.whyChooseUs.sectionLabel')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            {t('home.whyChooseUs.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group text-center p-6"
            >
              {/* Number */}
              <div className="text-6xl font-serif text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                {item.number}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="font-serif text-xl text-dark mb-3">{t(`home.whyChooseUs.items.${item.key}.title`)}</h3>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Description */}
              <p className="text-dark/60 text-sm leading-relaxed">{t(`home.whyChooseUs.items.${item.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CTA SECTION
   ============================================ */
function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://dehuiskamervanhetleudal.com/wp-content/uploads/2014/08/cropped-DSC04166.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-dark/85" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L0 20l20 20 20-20L20 0zm0 8l12 12-12 12L8 20l12-12z' fill='%23a37f00' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative text-center">
        {/* Decorative top element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-primary/50" />
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16L5.5 21L8 13.5L2 9H9.5L12 2Z"/>
          </svg>
          <div className="w-16 h-px bg-primary/50" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-6">
          {t('home.cta.title')} <span className="text-primary italic">{t('home.cta.titleHighlight')}</span>
        </h2>

        <p className="text-light/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('home.cta.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group relative px-10 py-4 bg-primary text-dark font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(163,127,0,0.5)]"
          >
            <span className="relative z-10">{t('home.cta.button')}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>

          <a
            href="tel:+31475591234"
            className="flex items-center gap-2 px-6 py-4 border border-light/30 text-light hover:border-primary hover:text-primary transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+31 (0)475 59 12 34</span>
          </a>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex items-center justify-center">
          <div className="px-6 py-2 border border-primary/30 text-primary/80 text-sm tracking-[0.2em] uppercase">
            {t('home.hero.since')}
          </div>
        </div>
      </div>
    </section>
  )
}
