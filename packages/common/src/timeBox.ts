import { DAYS_IN_WEEK, HOURS_IN_DAY, MINUTES_IN_DAY, MINUTES_IN_HOUR, MINUTES_IN_WEEK } from "./constants";
import { Day, TimeBox } from "./types";


export const createTimBox = (startDay: Day, startHour: number, startMinute: number, offsetHours: number, offsetMinutes: number) => {
  return {startDay, startHour, startMinute, offsetHours, offsetMinutes} as TimeBox;
}

/**
 * Compresses TimeBox into into a single integer (21 bits).
 * Time in the week is compressed into 5-minute intervals.
 * 12 bits for the starting point during a week (starting on Sunday). 0-2015.
 * 9 bits for the length of the TimeBox. 0-287.
 * @param {TimeBox} 
 * @returns {number}
 */
export const encodeTimeBox = (timeBox: TimeBox) => {
  const {startDay, startHour, startMinute, offsetHours, offsetMinutes} = timeBox;
  let encoded = Math.floor(((startDay % DAYS_IN_WEEK) * (MINUTES_IN_DAY) + (startHour % HOURS_IN_DAY) * MINUTES_IN_HOUR + startMinute % MINUTES_IN_HOUR) / 5);
  encoded = (encoded << 9) | Math.floor(((offsetHours % HOURS_IN_DAY) * MINUTES_IN_HOUR + (offsetMinutes % MINUTES_IN_HOUR)) / 5);
  return encoded;
}

/**
 * Decodes 21-bit encoded time block into TimeBlock
 * @param encoded 
 * @returns TimeBlock
 */
export const decodeTimeBox = (encoded: number) => {
  const start = (((encoded & 0x1FFE00) >>> 9) * 5) % MINUTES_IN_WEEK;
  const startDay: Day = Math.floor(start / MINUTES_IN_DAY);
  const startWithDaysRemoved = start - startDay * MINUTES_IN_DAY;
  const startHour = Math.floor(startWithDaysRemoved / MINUTES_IN_HOUR);
  const startMinute = Math.floor(startWithDaysRemoved - startHour * MINUTES_IN_HOUR);
  
  const offset = (encoded & 0x1FF) * 5;
  const offsetHours = Math.floor(offset / MINUTES_IN_HOUR);
  const offsetMinutes = offset - (offsetHours * MINUTES_IN_HOUR);

  return {startDay, startHour, startMinute, offsetHours, offsetMinutes} as TimeBox;
}
