import { Artist } from "./artist";

export interface MusicData {
  artist: Artist[];
  title: string;
  coverUrl: string;
  videoId: string[];
  trackId: number;
}
