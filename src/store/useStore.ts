import { create } from 'zustand';
import createLocationSlice, { LocationSlice } from './useLocationSlice';
import createAuthSlice, { AuthSlice } from './useAuthSlice';

export const useStore = create<LocationSlice & AuthSlice>((...a) => ({
  ...createLocationSlice(...a),
  ...createAuthSlice(...a),
}));
