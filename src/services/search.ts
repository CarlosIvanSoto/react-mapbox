import { Feature, PlacesResponse } from "../interfaces/places"


const API = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
const PARAMS = {
    limit: '5',
    languege: 'es',
    access_token: 'pk.eyJ1IjoiY2FybG9zZ2FtZXVlIiwiYSI6ImNsYW9iaXM1YTB5MWYzcG8yMnB4YjEzZmgifQ.Ow4cBy1wmFElvcxY99-W8Q'
}



export const searchPlaces = async(query: string, userLocation?: [number,number]): Promise<Feature[]> => {
    if(query.length === 0) return []
    if(!userLocation) throw new Error("no hay ubicacion del usuario")

    const res = await fetch(`${API}/${query}.json?`+ new URLSearchParams({ ...PARAMS, proximity: userLocation.join(',')}))

    const data = await res.json() as PlacesResponse

    return data.features
}