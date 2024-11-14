import { User } from "../auth/user";

export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}