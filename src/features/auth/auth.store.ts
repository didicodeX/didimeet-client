import { create } from "zustand";
import { AuthResponse } from "./auth.interface";

interface AuthState {
  user: AuthResponse["user"] | null;
  setUser: (user: AuthResponse["user"] | null) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
