import { create } from "zustand";
import { PlayerError } from "../../types/zustand/playerError";

export const  usePlayerErrorStore = create<PlayerError>((set)=>({
  error: null,
  setError: (error:any) => set({ error }),
}));