import { Day, TimeBox } from "./types";
export declare const createTimBox: (startDay: Day, startHour: number, startMinute: number, offsetHours: number, offsetMinutes: number) => TimeBox;
/**
 * Compresses TimeBox into into a single integer (21 bits).
 * Time in the week is compressed into 5-minute intervals.
 * 12 bits for the starting point during a week (starting on Sunday). 0-2015.
 * 9 bits for the length of the TimeBox. 0-287.
 * @param {TimeBox}
 * @returns {number}
 */
export declare const encodeTimeBox: (timeBox: TimeBox) => number;
/**
 * Decodes 21-bit encoded time block into TimeBlock
 * @param encoded
 * @returns TimeBlock
 */
export declare const decodeTimeBox: (encoded: number) => TimeBox;
//# sourceMappingURL=timeBox.d.ts.map