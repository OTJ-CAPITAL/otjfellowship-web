import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ Fellowship — The Human Intelligence Layer',
  description: 'The Fellowship identifies, grooms, and deploys the world\'s sharpest minds to build, govern, and evolve the AI systems that run OTJ Capital.',
  openGraph: {
    title: 'OTJ Fellowship — The Human Intelligence Layer',
    description: 'The Fellowship identifies, grooms, and deploys the world\'s sharpest minds to build, govern, and evolve the AI systems that run OTJ Capital.',
    url: 'https://otjfellowship.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#FAFAFA' }}>{children}</body>
    </html>
  )
}
