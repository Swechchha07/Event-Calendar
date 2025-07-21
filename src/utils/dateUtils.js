import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format } from "date-fns";

export function generateCalendar(currentDate) {
  const start = startOfWeek(startOfMonth(currentDate));
  const end = endOfWeek(endOfMonth(currentDate));

  const days = [];
  let day = start;
  while (day <= end) {
    days.push(day);
    day = addDays(day, 1);
  }
  return days;
}

export const formatDate = (date) => format(date, "yyyy-MM-dd");
