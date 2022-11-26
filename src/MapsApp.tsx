import React from 'react'
import { MapProvider, PlacesProvider } from './context'
import { HomeScreen } from './pages'

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider >
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
