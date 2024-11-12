import { create } from "zustand";
import { NowPlaying } from "../../types/zustand/nowPlaying";
import { MusicData } from "../../types/music/musicData";

export const useNowPlayingStore = create<NowPlaying>((set) => ({
  nowPlaying: {
    artist: [],
    title: "",
    coverUrl: "",
    videoId: "",
    trackId: ''
  },
  setNowPlaying: (musicData: MusicData) => set({ nowPlaying: musicData }),
}));
