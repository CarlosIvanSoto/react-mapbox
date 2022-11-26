export interface DirectionsResponse {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

export interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}

export interface Route {
  country_crossed: boolean;
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
  legs: Leg[];
  geometry: Geometry;
}

interface Leg {
  via_waypoints: any[];
  admins: Admin[];
  weight: number;
  duration: number;
  steps: Step[];
  distance: number;
  summary: string;
}

interface Step {
  intersections: Intersection[];
  maneuver: Maneuver;
  name: string;
  duration: number;
  distance: number;
  driving_side: string;
  weight: number;
  mode: string;
  geometry: Geometry;
  ref?: string;
  destinations?: string;
  exits?: string;
}

interface Geometry {
  coordinates: number[][];
  type: string;
}

interface Maneuver {
  type: string;
  instruction: string;
  bearing_after: number;
  bearing_before: number;
  location: number[];
  modifier?: string;
}

interface Intersection {
  classes?: string[];
  entry: boolean[];
  bearings: number[];
  duration?: number;
  mapbox_streets_v8?: Mapboxstreetsv8;
  is_urban?: boolean;
  admin_index: number;
  out?: number;
  weight?: number;
  geometry_index: number;
  location: number[];
  turn_weight?: number;
  in?: number;
  turn_duration?: number;
  railway_crossing?: boolean;
  stop_sign?: boolean;
  lanes?: Lane[];
  toll_collection?: Tollcollection;
}

interface Tollcollection {
  type: string;
  name?: string;
}

interface Lane {
  indications: string[];
  valid_indication?: string;
  valid: boolean;
  active: boolean;
}

interface Mapboxstreetsv8 {
  class: string;
}

interface Admin {
  iso_3166_1_alpha3: string;
  iso_3166_1: string;
}
