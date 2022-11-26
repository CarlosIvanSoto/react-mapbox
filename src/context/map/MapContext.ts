import { createContext } from 'react'
import { Map } from 'mapbox-gl'

interface Props {
    isMapReady: boolean
    map?: Map
    //METODS
    setMap: (map:Map) => void
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => void
}

export const MapContext = createContext({} as Props)
