import { MusicData } from "../music/musicData";

export interface NowPlaying {
  nowPlaying: MusicData;
  setNowPlaying: (musicData: MusicData) => void;
}