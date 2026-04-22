import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'OTJ Fellowship — The Human Intelligence Layer', description: 'Where talent becomes system. Apply to Cohort One.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
