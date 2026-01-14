import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-primary font-serif text-2xl font-bold">
                Café Houben
              </span>
            </Link>
            <p className="text-light/70 text-sm leading-relaxed">
              De Huiskamer van het Leudal - {t('home.hero.since')}
            </p>
            <p className="text-light/60 text-sm mt-2">
              {t('home.hero.subtitle')}
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-primary font-serif text-lg mb-4">
              {t('footer.address')}
            </h4>
            <address className="not-italic text-light/80 text-sm leading-relaxed">
              <p>Kerkstraat 17-19</p>
              <p>6083 AD Nunhem</p>
              <p>Nederland</p>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-serif text-lg mb-4">
              {t('footer.contact')}
            </h4>
            <div className="text-light/80 text-sm space-y-2">
              <p>
                <a
                  href="mailto:info@dehuiskamervanhetleudal.com"
                  className="hover:text-primary transition-colors"
                >
                  info@dehuiskamervanhetleudal.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+31475591234"
                  className="hover:text-primary transition-colors"
                >
                  +31 (0)475 59 12 34
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-primary font-serif text-lg mb-4">
              {t('footer.openingHours')}
            </h4>
            <div className="text-light/80 text-sm space-y-1">
              <p>{t('footer.byReservation')}</p>
              <p className="text-light/60">{t('footer.sundayClosed')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dark-lighter">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-light/60">
            <p>
              © {currentYear} Café Houben - De Huiskamer van het Leudal. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/over-ons"
                className="hover:text-primary transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
