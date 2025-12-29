'use client'
import React, { useEffect } from 'react'

export const Tracking: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Placeholder for 17track widget integration.
    // If your current site uses a script or iframe, paste it here.

  }, [])

  return (
    <div id="tracking-widget" className="w-full">
      {/* Tracking widget placeholder — will copy exact implementation from Vite app when provided */}
      <div className="p-4 bg-gray-50 rounded">Tracking widget will load here.</div>
    </div>
  )
}
