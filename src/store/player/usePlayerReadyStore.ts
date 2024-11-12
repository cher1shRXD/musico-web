import { create } from "zustand";
import { PlayerReady } from "../../types/zustand/playerReady";

export const usePlayerReadyStore = create<PlayerReady>((set) => ({
  isReady: false,
  setIsReady: (isReady: boolean) => set({ isReady }),
}));
