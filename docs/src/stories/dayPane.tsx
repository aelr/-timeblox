import { addHours, addMinutes } from "date-fns";
import parseISO from "date-fns/parseISO";
import { LoremIpsum} from "lorem-ipsum";
import { MersenneTwister19937, Random } from "random-js";

import { getRandomInt } from "~/utils";
import { DayEvent } from "../../../src/types";
import DayPane from "../components/DayPane";
import { Stories } from "./stories";

const testRnd = new Random(MersenneTwister19937.seed(1));
const createEvents = (date: Date, count: number) => {
  const l = new LoremIpsum({ random: () => testRnd.realZeroToOneExclusive()});
  const events: DayEvent[] = [];
  for(let i = 0; i < count || i < 10; i++) {
    events.push({
      start: addHours(date, i).getTime(),
      end: addMinutes(addHours(date, i), 30).getTime(),
      title: l.generateWords(getRandomInt(3, 10)),
      description: l.generateSentences(getRandomInt(0, 5))
    });
  }
  return events;
}

const dayPane: Stories = {
  "Category": {
    "Simple": () => {
      const date = parseISO("2023-01-20T00:00").getTime();
      const events: DayEvent[] = [{
        start: parseISO("2023-01-20T09:00").getTime(),
        end: parseISO("2023-01-20T09:20").getTime(),
        title: "Something to do",
        description: "Some description of this thing that is short"
      }]
      return <DayPane date={date} events={events}></DayPane>;
    },
    "More Events": () => {
      const date = parseISO("2023-01-20T10:30");
      const events: DayEvent[] = createEvents(date, 5);
      return <DayPane date={date.getTime()} events={events}></DayPane>;
    }
  }
}

export default dayPane;
