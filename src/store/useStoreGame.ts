import { create } from 'zustand';

type StoreType = {
  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;
};

export const useStoreGame = create<StoreType>((set) => ({
  openGame: false,
  setOpenGame: (openGame: boolean) => set({ openGame }),
}));
