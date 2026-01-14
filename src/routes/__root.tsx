/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import * as React from 'react'
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
      {
        title: 'De Huiskamer van het Leudal | Café Houben - Sinds 1890',
      },
      {
        name: 'description',
        content: 'Beleef Limburgse gastvrijheid en gezelligheid in een huiselijke sfeer. Hotel, restaurant, eetcafé en evenementenlocatie in Nunhem sinds 1890.',
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
  return (
    <html lang="nl">
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
