import { create } from "zustand";

type ToastType = "success" | "error" | "info";

interface ToastState {
  isVisible: boolean;
  message: string;
  type: ToastType;
  show: (message: string, type?: ToastType) => void;
  hide: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isVisible: false,
  message: "",
  type: "info",
  show: (message, type = "info") => {
    set({ isVisible: true, message, type });
    setTimeout(() => set({ isVisible: false }), 4000);
  },
  hide: () => {
    set({ isVisible: false });
  },
}));
