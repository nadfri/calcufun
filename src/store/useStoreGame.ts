import { getRandomNumbers, TABLE_OF_INITIAL } from '@init/init';
import { create } from 'zustand';

type StoreType = {
  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;

  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;

  availableTables: number[];
  setAvailableTables: (availableTables: number[]) => void;

  currentTable: {
    key: number;
    tableOf: number;
    randomNumbers: number[];
    solutions: number[];
  };

  setCurrentTable: (tableOf: number) => void;

  count: number;
  setCount: (count: number) => void;

  resetGame: (keepOpen?: boolean) => void;
};

export const useStoreGame = create<StoreType>((set, get) => ({
  openGame: false,
  setOpenGame: (openGame) => set({ openGame }),

  isGameOver: false,
  setIsGameOver: (isGameOver) => set({ isGameOver }),

  count: 0,
  setCount: (count) => set({ count }),

  availableTables: [2, 3],
  setAvailableTables: (availableTables: number[]) => set({ availableTables }),

  currentTable: {
    key: Math.random(),
    tableOf: TABLE_OF_INITIAL,
    randomNumbers: getRandomNumbers(),
    solutions: getRandomNumbers()
      .map((n) => n * 2)
      .sort((a, b) => a - b),
  },

  setCurrentTable: (tableOf) =>
    set({
      currentTable: {
        key: Math.random(),
        tableOf,
        randomNumbers: getRandomNumbers(),
        solutions: getRandomNumbers()
          .map((n) => n * tableOf)
          .sort((a, b) => a - b),
      },
    }),

  resetGame: (keepOpen = false) => {
    const randomNumbers = getRandomNumbers();
    const tableOf = get().currentTable.tableOf;

    set(() => ({
      openGame: keepOpen,
      isGameOver: false,
      count: 0,
      currentTable: {
        key: Math.random(),
        tableOf,
        randomNumbers,
        solutions: randomNumbers.map((n) => n * tableOf).sort((a, b) => a - b),
      },
    }));
  },
}));
