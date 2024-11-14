import { create } from "zustand";
import { UserState } from "../../types/zustand/userState";
import { User } from "../../types/auth/user";

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
