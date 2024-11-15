import { create } from "zustand";
import { persist } from "zustand/middleware";
import { VolumeState } from "../../types/zustand/volumeState";

export const useVolumeStore = create<VolumeState>()(
  persist(
    (set) => ({
      volume: 0.5,
      setVolume: (volume: number) => set({ volume }),
    }),
    {
      name: "VOLUME_STORAGE",
    }
  )
);
