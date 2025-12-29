import React from 'react'
import { CalculatorClient } from '../components/CalculatorClient'
import { Tracking } from '../components/Tracking'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold">HappyBox Logistics</h1>
        <p className="mt-2 text-gray-600">Fast and reliable international delivery.</p>
      </header>

      <section id="calculator" className="mb-12">
        <CalculatorClient />
      </section>

      <section id="tracking">
        <Tracking />
      </section>
    </div>
  )
}
