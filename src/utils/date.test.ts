import { isToday, getMonthName, getDateDisplayName } from './date';
import cases from 'jest-in-case';

test('isToday returns boolean depending on date', () => {});

describe('isToday should return boolean depending on date', () => {
  it('should return true if given date is today', () => {
    const today = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDate(),
    };
    expect(isToday(today)).toBe(true);
  });
  it('should return false for any other date', () => {
    const nextYear = {
      year: new Date().getFullYear() + 1,
      month: new Date().getMonth(),
      day: new Date().getDate(),
    };
    expect(isToday(nextYear)).toBe(false);
  });
});

const getMonthNameInput: [number, string][] = [
  [0, 'January'],
  [1, 'February'],
  [2, 'March'],
  [3, 'April'],
  [4, 'May'],
  [5, 'June'],
  [6, 'July'],
  [7, 'August'],
  [8, 'September'],
  [9, 'October'],
  [10, 'November'],
  [11, 'December'],
];
cases(
  'getMonthName',
  ({ input, output }) => expect(getMonthName(input)).toBe(output),
  getMonthNameInput.map(([input, output]: [number, string]) => ({
    title: `${input} => ${output}`,
    input,
    output,
  }))
);

const getDateDisplayNameInput: [Date, string][] = [
  [new Date('December 17, 1995'), 'Sunday, December 17, 1995'],
  [new Date('January 17, 2015'), 'Saturday, January 17, 2015'],
  [new Date('April 23, 2020'), 'Thursday, April 23, 2020'],
];

cases(
  'getDateDisplayName',
  ({ input, output }) => expect(getDateDisplayName(input)).toBe(output),
  getDateDisplayNameInput.map(([input, output]: [Date, string]) => ({
    title: `${input} => ${output}`,
    input,
    output,
  }))
);
