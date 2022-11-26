export interface PlacesResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text_es: string;
  place_name_es: string;
  text: string;
  place_name: string;
  center: number[];
  geometry: Geometry;
  context: Context[];
  language_es?: string;
  language?: string;
  bbox?: number[];
  matching_text?: string;
  matching_place_name?: string;
}

interface Context {
  id: string;
  wikidata: string;
  text_es: string;
  language_es: string;
  text: string;
  language: string;
  short_code?: string;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Properties {
  accuracy?: string;
  wikidata?: string;
}
