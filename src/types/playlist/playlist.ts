import { MusicData } from "../music/musicData";

export interface Playlist {
  id: string;
  title: string;
  author: string;
  songs: MusicData[];
  createdAt: string;
  updatedAt: string;
}