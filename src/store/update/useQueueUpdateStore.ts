import { create } from "zustand";
import { QueueUpdate } from "../../types/zustand/queueUpdate";

export const useQueueUpdateStore = create<QueueUpdate>((set) => ({
  isUpdated: false,
  setIsUpdated: (isUpdated: boolean) => set({ isUpdated }),
}));
