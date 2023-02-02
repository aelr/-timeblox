import { parse, isValid } from "date-fns"

import WeeklyView from "../components/WeeklyView";
import { CalendarEventView, Day } from "../../../src/types";
import { Stories } from "./stories";
import { toFiveMinuteInterval } from "~/utils";
import { FIVE_MINUTE_INTERVALS_IN_DAY } from "../../../src/constants";

/**
 * NOT FOR PRODUCTION USE
 * @param startTime 
 * @param endTime 
 */
const timeToFiveMinuteInterval = (time: string) => {
  const dt = parse(time, "h:mm a", new Date());
  if (!isValid(dt)) throw new Error("Invalid time provided: " + time);
  return toFiveMinuteInterval(dt);
}

const span = (day: number, from: number | string, to: number | string, title = "", description = ""): CalendarEventView => {
  if (typeof from === "string") {
    from = timeToFiveMinuteInterval(from);
  }
  if (typeof to === "string") {
    to = timeToFiveMinuteInterval(to);
  }
  return {
    day,
    fiveMinuteIntervalStart: from,
    fiveMinuteIntervalEnd: to,
    title,
    description
  }
};

const stories: Stories = {
  "Selection": {
    "No Day Selected": () => (
      <WeeklyView></WeeklyView>
    ),
    "Sunday": () => (
      <WeeklyView selectedDay={0}></WeeklyView>
    ),
    "Monday": () => (
      <WeeklyView selectedDay={1}></WeeklyView>
    ),
    "Tuesday": () => (
      <WeeklyView selectedDay={2}></WeeklyView>
    ),
    "Wednesday": () => (
      <WeeklyView selectedDay={3}></WeeklyView>
    ),
    "Thursday": () => (
      <WeeklyView selectedDay={4}></WeeklyView>
    ),
    "Friday": () => (
      <WeeklyView selectedDay={5}></WeeklyView>
    ),
    "Saturday": () => (
      <WeeklyView selectedDay={6}></WeeklyView>
    )
  },

  "Events": {
    "Lunch Hour": () => {
      const calendarEvents = [span(Day.Sunday, "12:00 PM", "1:00 PM", "Lunch", "Take a lunch")]
      return <WeeklyView calendarEvents={calendarEvents}></WeeklyView>
    },
    "Friday Off": () => {
      const calendarEvents = [span(Day.Friday, 0, FIVE_MINUTE_INTERVALS_IN_DAY, "Friday PTO", "Long weekend")]
      return <WeeklyView selectedDay={5} calendarEvents={calendarEvents}></WeeklyView>
    },
    "Full Day": () => {
      const calendarEvents = [
        span(Day.Sunday, "12:00 PM", "1:00 PM"),
        span(Day.Sunday, "1:00 PM", "1:20 PM"),
        span(Day.Sunday, "1:20 PM", "1:40 PM"),
        span(Day.Sunday, "1:50 PM", "2:00 PM")
      ]
      return <WeeklyView selectedDay={0} calendarEvents={calendarEvents}></WeeklyView>
    },
    "Tiny Events": () => {
      const calendarEvents = [
        span(Day.Tuesday, "11:00 AM", "11:05 AM"),
        span(Day.Wednesday, "12:55 PM", "1:00 PM"),
        span(Day.Thursday, "5:20 PM", "5:25 PM"),
      ]
      return <WeeklyView selectedDay={2} calendarEvents={calendarEvents}></WeeklyView>
    }
  }
}

export default stories;