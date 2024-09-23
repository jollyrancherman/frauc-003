import { StateCreator } from 'zustand';

export type AuthSlice = {
  showSignIn: boolean;
  setShowSignIn: (showSignIn: boolean) => void;
  showSignUp: boolean;
  setShowSignUp: (showSignUp: boolean) => void;
};

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  showSignIn: false,
  setShowSignIn: (showSignIn) => set({ showSignIn }),
  showSignUp: false,
  setShowSignUp: (showSignUp) => set({ showSignUp }),
});

export default createAuthSlice;
