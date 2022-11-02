import { EventInput } from "@fullcalendar/vue3";

let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: "2",
    title: "Long Event",
    start: "2022-12-02",
    end: "2022-12-08",
  },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T12:00:00",
  // },
];

export function createEventId() {
  return String(eventGuid++);
}
