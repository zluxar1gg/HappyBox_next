import '../globals.css'
import React from 'react'
import { Analytics } from '../components/Analytics'

export const metadata = {
  title: 'HappyBox Logistics - Fast and Reliable International Delivery',
  description: 'Fast, affordable, and trustworthy shipping from China & Hong Kong. Operating since 2016 with 24/7 customer support and worldwide delivery.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden">
        <Analytics />
        {children}
      </body>
    </html>
  )
}
