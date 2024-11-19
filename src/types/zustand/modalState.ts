import { VibeResponse } from "../music/vibeResponse";

export interface ModalState {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  musicData: VibeResponse | null;
  setMusicData: (musicData: VibeResponse | null) => void;
}