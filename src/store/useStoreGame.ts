import { create } from 'zustand';

type StoreType = {
  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;
  numbers: number[];
  setNumbers: (numbers: number[]) => void;
  enabledTables: number[];
  setEnabledTables: (numbers: number[]) => void;
};

export const useStoreGame = create<StoreType>((set) => ({
  openGame: false,
  setOpenGame: (openGame: boolean) => set({ openGame }),
  numbers: [2],
  setNumbers: (numbers: number[]) => set({ numbers }),
  enabledTables: [2],
  setEnabledTables: (enabledTables: number[]) => set({ enabledTables }),
}));
