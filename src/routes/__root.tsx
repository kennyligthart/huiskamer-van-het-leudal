/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from '~/components/Navigation'
import { Footer } from '~/components/Footer'
import globalsCss from '~/styles/globals.css?url'

// Initialize i18n
import '~/lib/i18n'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      { rel: 'stylesheet', href: globalsCss },
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const { t } = useTranslation()

  // Update document title dynamically
  React.useEffect(() => {
    document.title = t('meta.title')
  }, [t])

  return (
    <RootDocument>
      <Navigation />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()

  return (
    <html lang={i18n.language}>
      <head>
        <HeadContent />
      </head>
      <body className="bg-light">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
