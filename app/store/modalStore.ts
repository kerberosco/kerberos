import { create } from "zustand";
import { StateCreator } from "zustand";

interface ModalState {
  isOpen: boolean;
  imageData: {
    imageSrc: string;
    imageAlt: string;
  } | null;
  openModal: (data: NonNullable<ModalState["imageData"]>) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>(((set) => ({
  isOpen: false,
  imageData: null,
  openModal: (data) => set({ isOpen: true, imageData: data }),
  closeModal: () => set({ isOpen: false, imageData: null }),
})) as StateCreator<ModalState>);
