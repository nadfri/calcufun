import { randomize } from '@utils/utils';

export const DURATION = 60 * 1000; /*ms*/
export const TABLE_OF_INITIAL = 2;
export const NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const LENGTH = NUMBERS.length;

export const getRandomNumbers = () => randomize(NUMBERS);
