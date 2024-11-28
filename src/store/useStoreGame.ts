import { DURATION, INITAL_TABLES, INITIAL_TABLE_OF } from '@init/init';
import { generateTable } from '@utils/utils';
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

      tablesData: INITAL_TABLES,
      currentTable: generateTable(INITIAL_TABLE_OF),

      setCurrentTable: (tableOf: number) => {
        set({ currentTable: generateTable(tableOf) });
      },

      updateTableData: (tableOf: number, data: Partial<TableDataType>) =>
        set((state) => ({
          tablesData: state.tablesData.map((table) =>
            table.tableOf === tableOf ? { ...table, ...data } : table,
          ),
        })),

      resetGame: (keepOpen = false) => {
        const { currentTable } = get();

        set({
          isGameOver: false,
          isWin: false,
          count: 0,
          currentTime: DURATION / 1000,
          openGame: keepOpen,
          currentTable: generateTable(currentTable.tableOf),
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
