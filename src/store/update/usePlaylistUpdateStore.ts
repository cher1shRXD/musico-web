import { create } from "zustand";
import { PlaylistUpdate } from "../../types/zustand/playlistUpdate";

export const usePlaylistUpdateStore = create<PlaylistUpdate>((set) => ({
  isUpdated: false,
  setIsUpdated: (isUpdated: boolean) => set({ isUpdated }),
}));
