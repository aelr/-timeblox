import format from "date-fns/format";
import { Component, createMemo, createSignal, For, Show } from "solid-js";

import { DateMilliseconds, DayEvent } from "@timeblox/common/types";

import './DayPane.css';

export type DayPaneProps = {
  date: DateMilliseconds,
  events?: DayEvent[]
}

const toTitleDate = (date: DateMilliseconds) => {
  const d = new Date(date);
  const now = new Date();
  if (d.getFullYear() === now.getFullYear()) {
    return format(d, "LLL d");
  }
  else {
    return format(d, "LLL d, y");
  }
}

const toTimeInterval = (date1: DateMilliseconds, date2: DateMilliseconds) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const includeMeridian = format(d1, "a") === format(d2, "a") ? "" : format(d1, " a");

  return `${format(d1, "h:mm")}${includeMeridian} - ${format(d2, "h:mm a")}`;
}

const DESCRIPTION_PREVIEW_LENGTH = 100;
const DayPane: Component<DayPaneProps> = (props: DayPaneProps) => {
  const [editing, setEditing] = createSignal(false);
  const toggleEditing = () => setEditing(!editing());

  const title = createMemo(() => (
    props.events && props.events.length > 0 ? toTitleDate(props.date) : ""
  ));

  return (
    <div class="day-pane h-full">
      <div class="navbar justify-content-between">
        <div class="navbar-content">{/*Left */}</div>
        <div class="navbar-content">{title()}</div>
        <div class="navbar-content">
          <button class="btn btn-action" type="button" onClick={toggleEditing}>
            <i class={editing() ? "ph-x-circle" : "ph-pencil-simple"}></i>
          </button>
        </div>
      </div>
      <div class="day-events">
        <For each={props.events}>
          {(event, index) => (
            <details class="day-event collapse-panel">
              <summary class="collapse-header without-arrow flex flex-row justify-between">
                <div class="day-event-summary min-w-0">
                  <div class="min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    <span class="text-muted">
                      {toTimeInterval(event.start, event.end)} -
                    </span>
                    <span class="font-bold text-muted">
                      {" " + event.title}
                    </span>
                  </div>
                  <div class="text-muted hidden-collapse-open overflow-hidden
                overflow-ellipsis whitespace-nowrap">
                    {event.description}
                  </div>
                </div>
                <Show when={editing()}>
                  <div class="z-10">
                    <button class="btn btn-action" type="button" onClick={() => { }}>
                      <i class="ph-pencil-simple"></i>
                    </button>
                  </div>
                </Show>
              </summary>
              <div class="collapse-content">
                {event.description}
              </div>
            </details>
          )}
        </For>
      </div>
    </div>
  )
}

export default DayPane;
