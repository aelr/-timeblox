// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_times
export default function times<T>(n: number, iteratee: (n: number) => T): T[] {
  return Array.from({ length: 10 }, iteratee)
}