import addDays from "date-fns/addDays";
import differenceInDays from "date-fns/differenceInDays";
import getDay from "date-fns/getDay";
import isValid from "date-fns/isValid";
import startOfWeek from "date-fns/startOfWeek";
import { merge, times } from "lodash";
import { For, ParentComponent, ParentProps } from "solid-js";
import { cssGridLoc } from "../utils";

import './ThreeMonthPreview.css';

export type ThreeMonthPreviewProps = {
  date?: Date
}

// If a July starts on a Saturday (assuming Sunday start of week), there are 14 weeks to get through Sept.
// With July/Aug as the longest pair of months, this is the worst-case scenario.
const WEEKS_TO_PREVIEW = 14;
const DAYS_IN_WEEK = 7;
type PreviewDayView = {
  d: Date,
  gridLoc: ReturnType<typeof cssGridLoc>
};
const ThreeMonthPreview: ParentComponent<ThreeMonthPreviewProps> = (props: ParentProps<ThreeMonthPreviewProps>) => {
  if (props.date === undefined || isValid(props.date)) {
    props.date = new Date()
  }

  const weekStart = startOfWeek(props.date); // TODO: Validate how this works in locales where the week starts on Monday
  const previewDays = times(WEEKS_TO_PREVIEW * DAYS_IN_WEEK, (index) => addDays(weekStart, index));
  const previewDaysView = previewDays.map((day): PreviewDayView => {
    const colStart = getDay(day);
    const colEnd = colStart + 1;
    const rowStart = (differenceInDays(day, weekStart) / 7);
    const rowEnd = rowStart + 1;

    return {
      d: day,
      gridLoc: cssGridLoc(colStart, colEnd, rowStart, rowEnd)
    };
  });

  const logoColor = "#80FEB7";
  const GOLDEN_ANGLE = 137.5; // Golden Angle
  const monthDiff = (d1: Date, d2: Date) => d1.getMonth() - d2.getMonth();
  return (
    <div class="three-month-preview h-full">
      <For each={previewDaysView}>
        {(view, index) => (
          <div class="rounded-sm border-1 border-gray-500"
            style={merge({}, view.gridLoc,
              { "filter": `hue-rotate(${GOLDEN_ANGLE * monthDiff(weekStart, view.d)}deg)` })}>
          </div>
        )}
      </For>
    </div>
  )
}

export default ThreeMonthPreview;
