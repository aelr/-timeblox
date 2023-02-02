import { For, Index, onMount, Show } from "solid-js";
import { range } from "lodash";

import { CalendarEventView } from "common/types";
import { FIVE_MINUTE_INTERVALS_IN_DAY } from "common/constants";
import "./WeeklyView.css";
import { cssGridLoc, nud, toFiveMinuteInterval } from "../utils";
import parse from "date-fns/parse";
import addHours from "date-fns/addHours";
import format from "date-fns/format";

export type WeeklyViewProps = {
  selectedDay?: number,
  calendarEvents?: CalendarEventView[]
}

/**
 * Generate a CSS Grid location style from CalendarEventView details
 * @param calEventView 
 */
const calEventViewLoc = (calEventView: CalendarEventView) => {
  return cssGridLoc(calEventView.day + 1, calEventView.day + 1,
    calEventView.fiveMinuteIntervalStart, calEventView.fiveMinuteIntervalEnd);
}

//FIVE_MINUTE_INTERVALS_IN_DAY
//const dayClasses = new Array(7).fill("day").map((day, index) => day + index);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayLabelGridLocations = days.map((value, index) => cssGridLoc(index + 1, index + 2, 0, 1));
const dayGridLocations = days.map((value, index) => cssGridLoc(index + 1, index + 2, 1, FIVE_MINUTE_INTERVALS_IN_DAY));

/**
 * Creates an hour label and optional border line for the weekly grid view
 * @param props 
 * @returns 
 */
const HourLabel = (props: { date: Date, hourLabel: boolean }) => {
  const row = toFiveMinuteInterval(props.date);
  const hourLoc = cssGridLoc(0, 0, row, row + 10);
  let borderLoc = cssGridLoc(0, 8, row, row+4);
  return (
    <>
      <Show when={props.hourLabel} fallback={<div class="whitespace-nowrap hour-label-border-subtle" style={borderLoc}></div>}>
        <>
          <div class="whitespace-nowrap hour-label-border" style={borderLoc}></div>
          <div class="text-center whitespace-nowrap overflow-hidden text-gray-400" id={"hour-label" + props.date.getHours()} style={hourLoc}>{format(props.date, "h a")}</div>
        </>
      </Show>
    </>
  )
}

const WeeklyView = (props: WeeklyViewProps) => {
  const labelTimes = range(1, 24, 1).map((hours) => addHours(parse("12:00 AM", "p", new Date()), hours));

  onMount(() => {
    document.getElementById("hour-label4")?.scrollIntoView(true);
  })

  return (
    <div class="weekly-view">
      <div class={"header rounded-t-lg bg-light-lm"}>
        <Index each={days}>
          {(day, index) => (
            <div class={"column text-center table-cell align-middle day-label"}
              style={dayLabelGridLocations[index]}>{days[index][0]}</div>
          )}
        </Index>

      </div>
      <div class={"body rounded-b-lg bg-dark-dm"}>
        <Show when={props.selectedDay !== undefined}>
          <div class="bg-gray-100" style={cssGridLoc(nud(props.selectedDay) + 1, nud(props.selectedDay) + 1, 0, FIVE_MINUTE_INTERVALS_IN_DAY)}></div>
        </Show>
        <Index each={days}>
          {(day, index) => (
            <div class={"text-center day-label"}
            style={dayGridLocations[index]}></div>
          )}
        </Index>
        <For each={props.calendarEvents || []}>
          {(calEventView, index) => <div class="calendar-event btn btn-success mb-1 z-1" style={calEventViewLoc(calEventView)}></div>}
        </For>
        <For each={labelTimes}>
          {(time) => (
            <HourLabel date={time} hourLabel={time.getHours() % 2 === 0}></HourLabel>
          )}
        </For>
      </div>
    </div>
  )
}

export default WeeklyView;
