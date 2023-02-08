import { JSONSchemaType } from "ajv";
import { TimeBlock, TimeBox } from "./types";
export declare const ajv: any;
export declare const TimeBlockSchema: JSONSchemaType<TimeBox>;
export declare const TimeBoxSchema: JSONSchemaType<TimeBlock>;
export declare const validateEncodedTimeBox: (encoded: number) => void;
//# sourceMappingURL=schema.d.ts.map