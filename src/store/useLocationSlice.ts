import { StateCreator } from 'zustand';

export type LocationSlice = {
  coordinates: {
    lat: number;
    lng: number;
  };
  city: string;
  state: string;
  country: string;
  distance: number;
  distanceUnit: string;
  setCoordinates: (lat: number, lng: number) => void;
  setCity: (city: string) => void;
  setState: (state: string) => void;
  setCountry: (country: string) => void;
  setDistance: (distance: number) => void;
  setDistanceUnit: (distanceUnit: string) => void;
};

const createLocationSlice: StateCreator<LocationSlice> = (set) => ({
  coordinates: {
    lat: 0,
    lng: 0,
  },
  city: '',
  state: '',
  country: '',
  distance: 20,
  distanceUnit: 'km',
  setCoordinates: (lat, lng) => set({ coordinates: { lat, lng } }),
  setCity: (city) => set({ city }),
  setState: (state) => set({ state }),
  setCountry: (country) => set({ country }),
  setDistance: (distance) => set({ distance }),
  setDistanceUnit: (distanceUnit) => set({ distanceUnit }),
  // fetchLocationData: async (city) => {
  //   // Make API request to Google API to get location information based on city
  //   const locationData = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=YOUR_API_KEY`);
  //   const locationJson = await locationData.json();
  //   const { lat, lng } = locationJson.results[0].geometry.location;

  //   set({ city, coordinates: { lat, lng } });
  // },
});

export default createLocationSlice;
