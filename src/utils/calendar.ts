const DAYS_IN_CALENDAR = 42;

type CalendarMonth = {
  year: number;
  month: number;
};

export type CalendarDay = {
  day: number;
  year: number;
  month: number;
};

function isSameDay(a: CalendarDay, b: CalendarDay) {
  return a.year === b.year && a.month === b.month && a.day === b.day;
}

function getCalendarDaysFor({ year, month }: CalendarMonth) {
  return generateCalendarDays(getFirstSaturdayInCalendarFor({ year, month }));
}

function getFirstSaturdayInCalendarFor({ year, month }: CalendarMonth) {
  const date = new Date(year, month);
  date.setDate(date.getDate() - date.getDay());
  return date;
}

function generateCalendarDays(startDate: Date) {
  const calendarDays: CalendarDay[] = [];
  const date = new Date(startDate);

  for (let i = 0; i < DAYS_IN_CALENDAR; ++i) {
    calendarDays.push({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });

    date.setDate(date.getDate() + 1);
  }

  return calendarDays;
}

export { getCalendarDaysFor, isSameDay };
