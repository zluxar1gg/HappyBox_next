'use client'
import React, { useState } from 'react'

export default function Calculator() {
  const [weight, setWeight] = useState(1)
  const [result, setResult] = useState<number | null>(null)

  const calc = () => {
    // simple placeholder calculation
    const price = Math.max(10, weight * 2 + 5)
    setResult(price)
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Shipping Calculator (draft)</h3>
      <label className="block mb-2">
        Weight (kg)
        <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="ml-2 border rounded px-2" />
      </label>
      <div className="flex gap-2 mt-4">
        <button onClick={calc} className="bg-blue-600 text-white px-4 py-2 rounded">Calculate</button>
      </div>
      {result !== null && (
        <div className="mt-4 p-4 bg-gray-50 rounded">Estimated price: <strong>${result}</strong></div>
      )}
    </div>
  )
}
