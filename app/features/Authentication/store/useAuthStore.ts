/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/store/useAuthStore.ts
import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  user: any | null;
  setUser: (user: any) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),
  clearUser: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));
