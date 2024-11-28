import { NUMBERS, FINAL_LEVEL, FINAL_NUMBERS } from '@init/init';
import { CurrentTableType } from '@store/useStoreGame';

export function randomize<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateTable(tableOf: number): CurrentTableType {
  if (tableOf === FINAL_LEVEL) {
    const randomNumbers = randomize(FINAL_NUMBERS);
    const randomNumbers2 = randomize(FINAL_NUMBERS);

    const solutions = randomNumbers
      .map((n, i) => n * randomNumbers2[i])
      .sort((a, b) => a - b);

    return {
      tableOf,
      randomNumbers,
      randomNumbers2,
      solutions,
    };
  }

  return {
    tableOf,
    randomNumbers: randomize(NUMBERS),
    randomNumbers2: [],
    solutions: NUMBERS.map((n) => n * tableOf),
  };
}
