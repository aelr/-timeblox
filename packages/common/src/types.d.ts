export declare type DateMilliseconds = number;
export declare enum Day {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export declare type TimeBox = {
    startDay: Day;
    startHour: number;
    startMinute: number;
    offsetHours: number;
    offsetMinutes: number;
};
export declare type TimeBlock = {
    id: string;
    encodedTimeBox: number;
    activityId?: string;
};
export declare type Activity = {
    id: string;
    title: string;
    description: string;
};
export declare type WeeklyTemplate = {
    id: string;
    name: string;
    timeBlocks?: TimeBlock[];
};
export declare type CalendarEventView = {
    day: number;
    fiveMinuteIntervalStart: number;
    fiveMinuteIntervalEnd: number;
    title: string;
    description: string;
};
export declare type DayEvent = {
    start: DateMilliseconds;
    end: DateMilliseconds;
    title: string;
    description: string;
};
//# sourceMappingURL=types.d.ts.map