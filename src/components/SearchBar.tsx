import React, { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context'
import { SearchResults } from './'

export const SearchBar = () => {

  const {searchPlacesByTerm} = useContext(PlacesContext)
  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueyChanged = (event:ChangeEvent<HTMLInputElement>) => {
    if(debounceRef.current)
      clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      console.log('debounced value:', event.target.value)
      searchPlacesByTerm(event.target.value)
    }, 350)
  }

  return (
    <div className='search-container'>
        <input type='text' className='form-control' placeholder='buscar lugar...' onChange={onQueyChanged}/>
        <SearchResults />
    </div>
  )
}
