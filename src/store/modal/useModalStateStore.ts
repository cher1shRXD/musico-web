import { create } from "zustand";
import { ModalState } from "../../types/zustand/modalState";
import { VibeResponse } from "../../types/music/vibeResponse";

export const useModalStateStore = create<ModalState>((set) => ({
  modalOpen: false,
  setModalOpen: (modalOpen: boolean) => set({ modalOpen }),
  musicData: null,
  setMusicData: (musicData: VibeResponse | null) => set({ musicData }),
}));
