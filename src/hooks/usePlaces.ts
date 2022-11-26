import { useState } from "react";
import { searchPlaces } from "../services";
import { Feature } from '../interfaces/places'

export const usePlaces = () => {
    const [places, setPlaces] = useState<Feature[]>([])
    const [loading, setLoading] = useState(false)

    const getPlaces = (query: string, userLocation?: [number,number]) => {
        setLoading(true)
        searchPlaces(query, userLocation)
            .then(res => setPlaces(res))
        setLoading(false)
    }
    return {places, loading, getPlaces}

}