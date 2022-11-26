import mapboxgl from 'mapbox-gl'
import React, { useContext, useLayoutEffect, useRef } from 'react'
import { MapContext, PlacesContext } from '../context'
import { Loading } from './'

export const MapView = () => {
  const {isLoading, userLocation} = useContext(PlacesContext)
  const {setMap} = useContext(MapContext)
  const div = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!isLoading){
      const map = new mapboxgl.Map({
        container: div.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map)
    }
  }, [isLoading])

  if (isLoading)
    return (<Loading />)
  return (
    <div ref={div} style={{
      backgroundColor:'red',
      height:'100vh',
      width:'100vw',
      left:0,top:0,
      position:'fixed'}}>
      {userLocation?.join(',')}
    </div>
  )
}
