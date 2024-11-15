import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoopState } from "../../types/zustand/loopState";

export const useLoopStateStore = create<LoopState>()(
  persist(
    (set) => ({
      isLoop: false,
      setIsLoop: (isLoop: boolean) => set({ isLoop }),
    }),
    {
      name: "LOOP_STORAGE",
    }
  )
);
