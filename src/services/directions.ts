import { DirectionsResponse, Route } from "../interfaces/directions"

const API = 'https://api.mapbox.com/directions/v5/mapbox/driving'
const PARAMS = {
    alternatives: 'false',
    geometries: 'geojson',
    overview: 'simplified',
    steps: 'false',
    language: 'es',
    access_token: 'pk.eyJ1IjoiY2FybG9zZ2FtZXVlIiwiYSI6ImNsYW9iaXM1YTB5MWYzcG8yMnB4YjEzZmgifQ.Ow4cBy1wmFElvcxY99-W8Q'
}

export const getRoute = async(start: [number,number], end: [number,number]): Promise<Route[]> => {

    const res = await fetch(`${API}/${start.join(',')};${end.join(',')}?`+ new URLSearchParams({ ...PARAMS}))

    const data = await res.json() as DirectionsResponse

    return data.routes
}