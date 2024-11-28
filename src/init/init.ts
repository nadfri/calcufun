export const DURATION = 60 * 1000; /*ms*/

export const FINAL_LEVEL = 13;

export const NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const FINAL_NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 6, 7, 8, 9];

export const INITIAL_TABLE_OF = 2;

export const INITIAL_STARS = Object.fromEntries(NUMBERS.map((n) => [n, 0]));

export const INITAL_TABLES = NUMBERS.map((tableOf) => ({
  tableOf,
  islocked: tableOf !== 2,
  stars: 0,
})).concat({ tableOf: 13, islocked: true, stars: 0 });

/*FINAL LEVEL IS MELTING OF TABLES 2 TO 12*/
