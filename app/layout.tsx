import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/shared/ScrollProgress'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-sg' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono' })
export const metadata: Metadata = {
  title: 'OTJ Fellowship — Train. Build. Deploy.',
  description: 'The OTJ Fellowship trains exceptional people from Africa to build the AI systems that run OTJ Capital.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
