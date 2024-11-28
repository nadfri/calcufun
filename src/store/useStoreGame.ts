import { DURATION, NUMBERS, TABLE_INITIAL, FINAL_LEVEL, FINAL_NUMBERS } from '@init/init';
import { randomize } from '@utils/utils';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TableDataType = {
  tableOf: number;
  islocked: boolean;
  stars: number;
};

export type CurrentTableType = {
  tableOf: number;
  randomNumbers: number[];
  randomNumbers2: number[];
  solutions: number[];
};

type StoreType = {
  isMute: boolean;
  setIsMute: (isMute: boolean) => void;

  openGame: boolean;
  setOpenGame: (openGame: boolean) => void;

  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;

  isWin: boolean;
  setIsWin: (isWin: boolean) => void;

  count: number;
  setCount: (count: number) => void;

  currentTime: number;
  setCurrentTime: (currentTime: number) => void;

  tablesData: TableDataType[];
  updateTableData: (tableOf: number, data: Partial<TableDataType>) => void;

  currentTable: CurrentTableType;
  setCurrentTable: (tableOf: number) => void;

  resetGame: (keepOpen?: boolean) => void;
};

export const useStoreGame = create<StoreType>()(
  persist(
    (set, get) => ({
      isMute: false,
      setIsMute: (isMute: boolean) => set({ isMute }),

      openGame: false,
      setOpenGame: (openGame: boolean) => set({ openGame }),

      isGameOver: false,
      setIsGameOver: (isGameOver: boolean) => set({ isGameOver }),

      isWin: false,
      setIsWin: (isWin: boolean) => set({ isWin }),

      count: 0,
      setCount: (count: number) => set({ count }),

      currentTime: DURATION / 1000,
      setCurrentTime: (currentTime: number) => set({ currentTime }),

      tablesData: [
        ...NUMBERS.map((tableOf) => ({
          tableOf,
          islocked: tableOf !== 2,
          stars: 0,
        })),
        { tableOf: 13, islocked: true, stars: 0 },
      ],

      updateTableData: (tableOf: number, data: Partial<TableDataType>) =>
        set((state) => ({
          tablesData: state.tablesData.map((table) =>
            table.tableOf === tableOf ? { ...table, ...data } : table,
          ),
        })),

      currentTable: {
        tableOf: TABLE_INITIAL,
        randomNumbers: randomize(NUMBERS),
        randomNumbers2: randomize(FINAL_NUMBERS),
        solutions: NUMBERS.map((n) => n * TABLE_INITIAL),
      },

      setCurrentTable: (tableOf: number) => {
        let randomNumbers = randomize(NUMBERS);
        const randomNumbers2 = randomize(FINAL_NUMBERS);
        let solutions = NUMBERS.map((n) => n * tableOf);

        if (tableOf === FINAL_LEVEL) {
          randomNumbers = randomize(FINAL_NUMBERS);
          solutions = randomize(randomNumbers.map((n, i) => n * randomNumbers2[i]));
        }

        set({
          currentTable: {
            tableOf,
            randomNumbers,
            randomNumbers2,
            solutions,
          },
        });
      },

      resetGame: (keepOpen = false) => {
        const { currentTable } = get();
        let randomNumbers = randomize(NUMBERS);
        const randomNumbers2 = randomize(FINAL_NUMBERS);
        let solutions = NUMBERS.map((n) => n * currentTable.tableOf);

        if (currentTable.tableOf === FINAL_LEVEL) {
          randomNumbers = randomize(FINAL_NUMBERS);
          solutions = randomize(randomNumbers.map((n, i) => n * randomNumbers2[i]));
        }
        set({
          isGameOver: false,
          isWin: false,
          count: 0,
          currentTime: DURATION / 1000,
          openGame: keepOpen,
          currentTable: {
            ...currentTable,
            randomNumbers,
            randomNumbers2,
            solutions,
          },
        });
      },
    }),
    {
      name: 'calcufun',
      partialize: (state) => ({
        tablesData: state.tablesData,
        isMute: state.isMute,
        currentTable: {
          tableOf: state.currentTable.tableOf,
        },
      }),
    },
  ),
);
