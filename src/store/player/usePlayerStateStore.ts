import { create } from "zustand";
import { PlayerState } from "../../types/zustand/playerState";

export const usePlayerStateStore = create<PlayerState>((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
}));
