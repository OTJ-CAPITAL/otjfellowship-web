import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ Fellowship',
  description: 'A fellowship developing the next generation of African quantitative researchers and fund managers.',
  openGraph: { title: 'OTJ Fellowship', url: 'https://otjfellowship.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
