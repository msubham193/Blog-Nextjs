import { create } from "zustand";

export const LoginModalStore = create((set) => ({
  isOpen: false,
  setOpen: () => set((state: any) => ({ isOpen: true })),
  setClose: () => set((state: any) => ({ isOpen: false })),
}));
