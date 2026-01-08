
export interface Coordinates {
  lat: number;
  lng: number;
  accuracy?: number;
}

export interface Activity {
  id: string;
  title: string;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  locationName: string;
  endLocationName?: string; // Optional: Destination name
  coords: Coordinates;
  endCoords?: Coordinates;  // Optional: Destination coordinates
  description: string;
  keyDetails: string;
  priceNOK?: number;
  priceEUR: number;
  // Fix: Added 'walk' to the activity types union to match the itinerary data in constants.ts
  type: 'transport' | 'food' | 'sightseeing' | 'shopping' | 'logistics' | 'walk';
  completed: boolean;
  notes?: string;
  googleMapsUrl?: string; // Nuevo campo para enlaces directos a Google Maps
  contingencyNote?: string; // Aviso de contingencia/emergencia
  audioGuideText?: string; // Texto para la audioguía
  ticketUrl?: string; // Enlace a compra de tickets
}

export interface Pronunciation {
  word: string;
  phonetic: string;
  simplified: string;
  meaning: string;
}

export enum AppTab {
  TIMELINE = 'timeline',
  MAP = 'map',
  BUDGET = 'budget',
  GUIDE = 'guide'
}