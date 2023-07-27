import { create } from "zustand";

export const RequestSuccessStore = create((set) => ({
  isSuccess: false,
  setSuccess: () => set((state: any) => ({ isSuccess: true })),
}));
