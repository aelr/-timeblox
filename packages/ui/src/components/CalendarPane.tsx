import { Component } from "solid-js";

import './CalendarPane.css';
import ThreeMonthPreview from "./ThreeMonthPreview";
import WeeklyView from "./WeeklyView";

export type CalendarPaneProps = {

}

const CalendarPane: Component<CalendarPaneProps> = (props: CalendarPaneProps) => {

  return (
    <div class="calendar-pane h-full">
      <WeeklyView></WeeklyView>
      <ThreeMonthPreview></ThreeMonthPreview>
      <div class="footer navbar navbar-fixed-bottom justify-content-between">
        <div class="navbar-content">{/*Left */}</div>
        <div class="navbar-content">
          <button class="btn btn-action" type="button" data-title="Previous Day" data-placement="top" onclick={() => {/* TODO */ }}>
            <i class="ph-caret-left"></i>
          </button>
          <button class="btn btn-action" type="button" data-title="Today" data-placement="top" onclick={() => {/* TODO */ }}>
            <i class="ph-calendar-check"></i>
          </button>
          <button class="btn btn-action" type="button" data-title="Next Day" data-placement="top" onclick={() => {/* TODO */ }}>
            <i class="ph-caret-right"></i>
          </button>
          <div class="dropdown dropright toggle-on-hover">
            <button class="btn" data-toggle="dropdown" type="button">
              <i class="ph-caret-up"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-up">
              <div class="dropdown-content">
                <div class="flex flex-row justify-around">
                  <div class="btn-group flex flex-column" role="group">
                    <button class="btn btn-action" type="button" onclick={() => { }}>Sun</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Mon</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Tues</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Wed</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Thurs</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Fri</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Sat</button>
                  </div>
                  <div class="btn-group flex flex-column" role="group">
                    <button class="btn btn-action" type="button" onclick={() => { }}>Sun</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Mon</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Tues</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Wed</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Thurs</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Fri</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Sat</button>
                  </div>
                  <div class="btn-group flex flex-column" role="group">
                    <button class="btn btn-action" type="button" onclick={() => { }}>Sun</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Mon</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Tues</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Wed</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Thurs</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Fri</button>
                    <button class="btn btn-action" type="button" onclick={() => { }}>Sat</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-content">
          <button class="btn btn-action" type="button" data-title="Fullscreen" data-placement="top"
            onclick={() => {/* TODO */ }}>
            <i class="ph-arrows-out" onclick={() => { }}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalendarPane;
