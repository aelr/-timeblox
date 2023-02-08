import Ajv from "ajv";
import { DAYS_IN_WEEK, HOURS_IN_DAY, MINUTES_IN_HOUR } from "./constants";
import { decodeTimeBox } from "./timeBox";
export const ajv = new Ajv();
export const TimeBlockSchema = {
    "$id": "https://maketimeblox.com/timeblock",
    type: "object",
    properties: {
        startDay: { type: "integer", minimum: 0, maximum: DAYS_IN_WEEK - 1 },
        startHour: { type: "integer", minimum: 0, maximum: HOURS_IN_DAY - 1 },
        startMinute: { type: "integer", minimum: 0, maximum: MINUTES_IN_HOUR - 1 },
        offsetHours: { type: "integer", minimum: 0, maximum: HOURS_IN_DAY - 1 },
        offsetMinutes: { type: "integer", minimum: 0, maximum: MINUTES_IN_HOUR - 1 }
    },
    required: ["startDay", "startHour", "startMinute", "offsetHours", "offsetMinutes"],
    additionalProperties: false
};
export const TimeBoxSchema = {
    type: "object",
    properties: {
        id: { type: "string", minLength: 21, maxLength: 21 },
        encodedTimeBox: { type: "integer" },
        activityId: { type: "string", nullable: true }
    },
    required: ["id", "encodedTimeBox"],
    additionalProperties: false
};
// export const WeeklyTemplateSchema: JSONSchemaType<WeeklyTemplate> = {
//   type: "object",
//   properties: {
//     id: {type: "string", minLength: 21, maxLength: 21},
//     name: {type: "string", minLength: 3, maxLength: 100},
//     timeBlocks: {
//       type: "array",
//       items: {type: TimeBlockSchema},
//       maxItems: FIVE_MINUTE_INTERVALS_IN_WEEK,
//       nullable: true
//     },
//   },
//   required: ["id", "name"],
//   additionalProperties: false
// };
export const validateEncodedTimeBox = (encoded) => {
    const timebox = decodeTimeBox(encoded);
};
// ajv.addKeyword({
//   keyword: "timebox",
//   type: "object",
//   validate: (schema, data) => 
// })
