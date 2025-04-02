// src/shared/store/confirmModalStore.ts
import { create } from "zustand";

type ConfirmModalState = {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  open: (params: {
    title: string;
    message: string;
    onConfirm: () => void;
  }) => void;
  close: () => void;
};

export const useConfirmModalStore = create<ConfirmModalState>((set) => ({
  isOpen: false,
  title: "",
  message: "",
  onConfirm: () => {},
  open: ({ title, message, onConfirm }) =>
    set({ isOpen: true, title, message, onConfirm }),
  close: () =>
    set({ isOpen: false, title: "", message: "", onConfirm: () => {} }),
}));
