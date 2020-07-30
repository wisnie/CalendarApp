import { CalendarDay } from './calendar';

function getDateDisplayName(date: Date) {
  return `${getDayName(date)}, ${getMonthName(
    date.getMonth()
  )} ${date.getDate()}, ${date.getFullYear()}`;
}

function isToday({ year, month, day }: CalendarDay) {
  const today = new Date();
  return (
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day
  );
}

function getMonthName(month: number) {
  const date = new Date(0, month);
  return date.toLocaleDateString('default', { month: 'long' });
}

function getDayName(date: Date) {
  return date.toLocaleDateString('default', { weekday: 'long' });
}

export { isToday, getMonthName, getDateDisplayName };
