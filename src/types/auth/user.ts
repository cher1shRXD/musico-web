import { MusicData } from "../music/musicData";

export interface User {
  _id: string;
  username: string;
  currentNowPlaying: number;
  queue: MusicData[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}