import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zZ2FtZXVlIiwiYSI6ImNsYW9iaXM1YTB5MWYzcG8yMnB4YjEzZmgifQ.Ow4cBy1wmFElvcxY99-W8Q'

if(!navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocation')
  throw new Error('Tu navegador no tiene opcion de geolocalizacion')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
