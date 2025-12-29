import '../globals.css'
import React from 'react'
import { Analytics } from '../components/Analytics'

export const metadata = {
  title: 'HappyBox Logistics',
  description: 'Logistics and delivery services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
