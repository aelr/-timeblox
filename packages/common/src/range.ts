// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_range
export default function range(start: number, end: number, step: number) {
  return Array.from({ length: end - start }, (_, i) => start + i * step);
}