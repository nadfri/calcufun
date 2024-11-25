import { getRandomNumbers, TABLE_OF_INITIAL } from '@init/init';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreType = {
  isMute: boolean;
  setIsMute: (isMute: boolean) => void;

  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;

  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;

  isWin: boolean;
  setIsWin: (isWin: boolean) => void;

  availableTables: number[];
  setAvailableTables: (availableTables: number[]) => void;

  currentTable: {
    tableOf: number;
    randomNumbers: number[];
    solutions: number[];
  };

  setCurrentTable: (tableOf: number) => void;

  count: number;
  setCount: (count: number) => void;

  resetGame: (keepOpen?: boolean) => void;
};

export const useStoreGame = create<StoreType>()(
  persist(
    (set, get) => ({
      isMute: false,
      setIsMute: (isMute) => set({ isMute }),

      openGame: false,
      setOpenGame: (openGame) => set({ openGame }),

      isGameOver: false,
      setIsGameOver: (isGameOver) => set({ isGameOver }),

      isWin: false,
      setIsWin: (isWin) => set({ isWin }),

      count: 0,
      setCount: (count) => set({ count }),

      availableTables: [2],
      setAvailableTables: (availableTables: number[]) => set({ availableTables }),

      currentTable: {
        tableOf: TABLE_OF_INITIAL,
        randomNumbers: getRandomNumbers(),
        solutions: getRandomNumbers()
          .map((n) => n * 2)
          .sort((a, b) => a - b),
      },

      setCurrentTable: (tableOf) =>
        set({
          currentTable: {
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
          isWin: false,
          count: 0,
          currentTable: {
            tableOf,
            randomNumbers,
            solutions: randomNumbers.map((n) => n * tableOf).sort((a, b) => a - b),
          },
        }));
      },
    }),
    {
      name: 'calcufun-storage',
      partialize: (state) => ({
        availableTables: state.availableTables,
        isMute: state.isMute,
      }),
    },
  ),
);
