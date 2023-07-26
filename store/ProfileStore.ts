import { create } from "zustand";

export const ProfileStore = create((set) => ({
  isSuccess: false,
  setSuccess: () => set((state: any) => ({ isSuccess: true })),
}));
