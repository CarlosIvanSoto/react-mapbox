import React, { useEffect, useReducer } from 'react'
import { getUserLocation } from '../../helpers'
import { Feature } from '../../interfaces/places'
import { searchPlaces } from '../../services'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './placesReducer'

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
    isLoadingPlaces: boolean
    places: Feature[]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(() => {
    getUserLocation()
      .then(lngLat => dispatch({type: 'setUserLocation', payload: lngLat}))
  }, [])

  const searchPlacesByTerm = (query: string) => {
    dispatch({type: 'setLoadingPlaces'})
    searchPlaces(query, state.userLocation)
      .then(features => dispatch({type: 'setPlaces', payload: features}))

  }
  

  return (
    <PlacesContext.Provider value={{...state, searchPlacesByTerm}} >
      {children}
    </PlacesContext.Provider>
  )
}
