import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navigation() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false)

  const mainLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/over-ons', label: t('nav.about') },
    { to: '/hotel', label: t('nav.hotel') },
    { to: '/restaurant', label: t('nav.restaurant') },
    { to: '/eetcafe', label: t('nav.cafe') },
  ]

  const eventLinks = [
    { to: '/evenementen/binnentuin', label: t('events.garden') },
    { to: '/evenementen/catering', label: t('events.catering') },
    { to: '/evenementen/feestzaal', label: t('events.partyHall') },
    { to: '/evenementen/vergaderzaal', label: t('events.meetingRoom') },
    { to: '/evenementen/bruiloft', label: t('events.wedding') },
    { to: '/evenementen/uitvaart', label: t('events.funeral') },
  ]

  return (
    <header className="bg-dark sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-primary font-serif text-xl md:text-2xl font-bold tracking-wide">
              Café Houben
            </span>
            <span className="hidden sm:block text-light/60 text-sm">|</span>
            <span className="hidden sm:block text-light/80 text-sm">
              Sinds 1890
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-light/90 hover:text-primary transition-colors text-sm font-medium"
                activeProps={{ className: 'text-primary' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              <Link
                to="/evenementen"
                className="px-3 py-2 text-light/90 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1"
                activeProps={{ className: 'text-primary' }}
              >
                {t('nav.events')}
                <svg
                  className={`w-4 h-4 transition-transform ${eventsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {eventsDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-dark-lighter rounded-b-lg shadow-xl py-2">
                  {eventLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-light/80 hover:text-primary hover:bg-dark transition-colors text-sm"
                      activeProps={{ className: 'text-primary bg-dark' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/scooterverhuur"
              className="px-3 py-2 text-light/90 hover:text-primary transition-colors text-sm font-medium"
              activeProps={{ className: 'text-primary' }}
            >
              {t('nav.scooterRental')}
            </Link>

            <Link
              to="/contact"
              className="ml-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-600 transition-colors"
              activeProps={{ className: 'bg-primary-600' }}
            >
              {t('nav.contact')}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-light hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-dark-lighter">
            <div className="flex flex-col gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 text-light/90 hover:text-primary hover:bg-dark-lighter transition-colors"
                  activeProps={{ className: 'text-primary bg-dark-lighter' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 py-2 text-primary font-medium text-sm uppercase tracking-wide">
                {t('nav.events')}
              </div>
              {eventLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-6 py-2 text-light/80 hover:text-primary hover:bg-dark-lighter transition-colors text-sm"
                  activeProps={{ className: 'text-primary bg-dark-lighter' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/scooterverhuur"
                className="px-4 py-3 text-light/90 hover:text-primary hover:bg-dark-lighter transition-colors"
                activeProps={{ className: 'text-primary bg-dark-lighter' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.scooterRental')}
              </Link>

              <Link
                to="/contact"
                className="mx-4 mt-2 px-4 py-3 bg-primary text-white text-center rounded hover:bg-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
