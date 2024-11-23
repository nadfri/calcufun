import { create } from 'zustand';

type StoreType = {
  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;
  table: number;
  setTable: (table: number) => void;
  availableTables: number[];
  setAvailableTables: (availableTables: number[]) => void;
};

export const useStoreGame = create<StoreType>((set) => ({
  openGame: false,
  setOpenGame: (openGame: boolean) => set({ openGame }),
  table: 2,
  setTable: (table: number) => set({ table }),
  availableTables: [2, 3],
  setAvailableTables: (availableTables: number[]) => set({ availableTables }),
}));
