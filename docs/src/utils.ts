import { Context, createSignal, useContext } from "solid-js";
import { FIVE_MINUTE_INTERVALS_IN_HOUR } from "common/constants";

const separateWords = /([A-Z])/g;

export const camelToTitleCase = (str: string) => {
  const result = str.replace(separateWords, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

const capitals = /([A-Z])/g;
export const pascalToSnake = (str: string) => str.charAt(0).toLowerCase() + str.slice(1).replace(capitals, (a) => "-" + a.toLowerCase());

const spaces = / /g;
export const wordsToSnake = (str: string) => str.toLowerCase().replace(spaces, "-");

const snakeToPascalRegex = /^(\w)|-(\w)/g;
export const snakeToPascal = (str: string) => str.replace(snakeToPascalRegex, (a) => a.toUpperCase());

const snakeToCamelRegex = /-(\w)/g;
export const snakeToCamel = (str: string) => str.replace(snakeToCamelRegex, (a, b) => b.toUpperCase());

const snakeToWordsRegex = /^(\w)|(-\w)/g;
const hyphens = /-/g;
export const snakeToWords = (str: string) => str.replace(snakeToWordsRegex, (a) => a.toUpperCase()).replace(hyphens, " ");


/**
 * Defaults to off. Set with true/undefined.
 */
export const createToggleSignal = () => {

  const [toggleValue, setToggleValue] = createSignal<undefined | true>(undefined);

  const toggle = () => !toggleValue() ? setToggleValue(true) : setToggleValue(undefined);

  return [toggleValue, setToggleValue, toggle] as const;
}

export const useContextWhenDefined = <T>(context: Context<T | undefined>): T => {
  const provider = useContext(context)
  if(provider === undefined) {
    throw new Error(`Context should not be undefined`);
  }
  return provider;
}

export const toFiveMinuteInterval = (date: Date) => (date.getHours() * FIVE_MINUTE_INTERVALS_IN_HOUR) + (date.getMinutes() / 5);

/**
 * Assert that the value is not undefined. Useful for SolidJS Show's "when" prop.
 * See: https://github.com/solidjs/solid/issues/1055
 * @param val 
 * @returns 
 */
export const nud = <T>(val: T | undefined) => {
  if(val === undefined ) throw new Error("Violated assumption that value would not be undefined");
  return val;
}

/**
 * Zero-indexed inputs to CSS Grid (which are 1-indexed)
 * @param colStart 
 * @param colEnd 
 * @param rowStart 
 * @param rowEnd 
 * @returns 
 */
export const cssGridLoc = (colStart: number, colEnd: number, rowStart: number, rowEnd: number) => ({
  "grid-column-start": colStart + 1,
  "grid-column-end": colEnd + 1,
  "grid-row-start": rowStart + 1,
  "grid-row-end": rowEnd + 1
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
