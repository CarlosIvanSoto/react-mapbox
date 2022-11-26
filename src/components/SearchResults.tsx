import React, { useContext, useState } from 'react'
import { MapContext, PlacesContext } from '../context'
import { Feature } from '../interfaces/places'
import { getRoute } from '../services/directions'
import { LoadingPlaces } from './'

export const SearchResults = () => {
  const {places,isLoadingPlaces, userLocation} = useContext(PlacesContext)
  const {map, getRouteBetweenPoints} = useContext(MapContext)
  const [activeId, setActiveId] = useState('')

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center
    setActiveId(place.id)
    map?.flyTo({zoom:14, center:[lng, lat]})
  }
  const getRouteOnClick = (place: Feature) => {
    if( !userLocation ) return
    const [lng, lat] = place.center
    getRouteBetweenPoints(userLocation, [lng, lat] )
  }

  if (isLoadingPlaces )
    return <LoadingPlaces />
  if (places.length === 0)
    return <></>
  return (
    <ul className='list-group mt-3'>
      {
        places.map(place => (
          <li key={place.id} onClick={() => onPlaceClicked(place)} className={`${(activeId===place.id) && 'active'} list-group-item list-group-item-action pointer`}>
            <h6>{place.text}</h6>
            <p className=''>{place.place_name}</p>
            <button onClick={() => getRouteOnClick(place)} className={`btn btn-sm ${(activeId===place.id) ? 'btn-outline-light' : 'btn-outline-primary'}`}>Direcciones</button>
          </li>
        ))
      }
    </ul>
  )
}
