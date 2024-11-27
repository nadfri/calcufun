import { DURATION, getRandomNumbers, NUMBERS, TABLE_INITIAL } from '@init/init';
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
        randomNumbers: getRandomNumbers(),
        solutions: NUMBERS.map((n) => n * TABLE_INITIAL),
      },
      setCurrentTable: (tableOf: number) => {
        const numbers = getRandomNumbers();
        const solutions = NUMBERS.map((n) => n * tableOf);

        set({
          currentTable: {
            tableOf: tableOf,
            randomNumbers: numbers,
            solutions: solutions,
          },
        });
      },

      resetGame: (keepOpen = false) => {
        const { currentTable } = get();
        const solutions = NUMBERS.map((n) => n * currentTable.tableOf);
        const numbers = getRandomNumbers();

        set({
          isGameOver: false,
          isWin: false,
          count: 0,
          currentTime: DURATION / 1000,
          openGame: keepOpen,
          currentTable: {
            ...currentTable,
            randomNumbers: numbers,
            solutions: solutions,
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
