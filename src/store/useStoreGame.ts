import { getRandomNumbers } from '@init/init';
import { randomize } from '@utils/utils';
import { create } from 'zustand';



type StoreType = {
  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;

  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;



  availableTables: number[];
  setAvailableTables: (availableTables: number[]) => void;

  currentTable: {
    tableOf: number;
    randomNumbers: number[];
    randomSolutions: number[];
  };

  setCurrentTable: (tableOf : number) => void;

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
    tableOf: 2,
    randomNumbers: getRandomNumbers(),
    randomSolutions: randomize(getRandomNumbers().map((n) => n * 2)),
  },

  setCurrentTable: (tableOf) => set({
    currentTable: {
      tableOf,
      randomNumbers: getRandomNumbers(),
      randomSolutions: randomize(getRandomNumbers().map((n) => n * tableOf)),
    },

  }),

  resetGame: (keepOpen = false) => {
    const randomNumbers = getRandomNumbers();
    const tableOf = get().currentTable.tableOf;

    set((state) => ({
      ...state,
      openGame: keepOpen,
      isGameOver: false,
      count: 0,
      currentTable: {
        ...state.currentTable,
        randomNumbers,
        randomSolutions: randomize(randomNumbers.map((n) => n * tableOf)),
      },
    }));
  },
}));
