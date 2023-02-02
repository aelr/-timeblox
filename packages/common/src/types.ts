// Code types
export type DateMilliseconds = number;

export enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

export type TimeBox = {
  startDay: Day,
  startHour: number,
  startMinute: number,
  offsetHours: number,
  offsetMinutes: number
}

// Stored types

export type TimeBlock = {
  id: string,  
  encodedTimeBox: number,
  activityId?: string
}

export type Activity = {
  id: string,
  title: string,
  description: string
}

export type WeeklyTemplate = {
  id: string,
  name: string // string(100)
  timeBlocks?: TimeBlock[]
}

// Views

export type CalendarEventView = {
  day: number,
  fiveMinuteIntervalStart: number,
  fiveMinuteIntervalEnd: number,
  title: string,
  description: string
}

export type DayEvent = {
  start: DateMilliseconds,
  end: DateMilliseconds
  title: string,
  description: string
}
