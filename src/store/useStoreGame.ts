import { getRandomNumbers } from '@init';
import { create } from 'zustand';

type StoreType = {
  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;

  numberSelected: number;
  setNumberSelected: (numberSelected: number) => void;

  randomNumbers: number[];

  availableTables: number[];
  setAvailableTables: (availableTables: number[]) => void;

  count: number;
  setCount: (count: number) => void;
};

export const useStoreGame = create<StoreType>((set) => ({
  openGame: false,
  setOpenGame: (openGame: boolean) => set({ openGame }),

  numberSelected: 2,
  setNumberSelected: (numberSelected: number) => set({ numberSelected }),

  randomNumbers: getRandomNumbers(),

  availableTables: [2, 3],
  setAvailableTables: (availableTables: number[]) => set({ availableTables }),

  count: 0,
  setCount: (count: number) => set({ count }),
}));
