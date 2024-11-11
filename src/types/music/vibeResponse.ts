import { Artist } from "./artist";

export interface VibeResponse {
  title: string;
  albumArt: string;
  artists: Artist[];
  trackId: string;
}
