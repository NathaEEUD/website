// return a random number within a range
export const getRandomNumber = (min: number, max: number): number =>
  Math.random() * (max - min) + min
