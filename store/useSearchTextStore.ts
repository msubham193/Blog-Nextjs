import { create } from "zustand";

export const useSearchTextStore = create((set) => ({
  text: "",
  setText: (e: string) => set((state: any) => ({ ...state.text, text: e })),
}));
