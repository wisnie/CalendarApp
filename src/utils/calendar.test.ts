import { getCalendarDaysFor } from './calendar';

// Months have indexes from 0-11 in Date()

test('return April 2022 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2022, month: 3 })).toEqual(
    // prettier-ignore
    [
      { year: 2022, month: 2, day: 27 }, { year: 2022, month: 2, day: 28 }, { year: 2022, month: 2, day: 29 }, { year: 2022, month: 2, day: 30 }, { year: 2022, month: 2, day: 31 }, { year: 2022, month: 3, day: 1  }, { year: 2022, month: 3, day: 2  },
      { year: 2022, month: 3, day: 3  }, { year: 2022, month: 3, day: 4  }, { year: 2022, month: 3, day: 5  }, { year: 2022, month: 3, day: 6  }, { year: 2022, month: 3, day: 7  }, { year: 2022, month: 3, day: 8  }, { year: 2022, month: 3, day: 9  },
      { year: 2022, month: 3, day: 10 }, { year: 2022, month: 3, day: 11 }, { year: 2022, month: 3, day: 12 }, { year: 2022, month: 3, day: 13 }, { year: 2022, month: 3, day: 14 }, { year: 2022, month: 3, day: 15 }, { year: 2022, month: 3, day: 16 },
      { year: 2022, month: 3, day: 17 }, { year: 2022, month: 3, day: 18 }, { year: 2022, month: 3, day: 19 }, { year: 2022, month: 3, day: 20 }, { year: 2022, month: 3, day: 21 }, { year: 2022, month: 3, day: 22 }, { year: 2022, month: 3, day: 23 },
      { year: 2022, month: 3, day: 24 }, { year: 2022, month: 3, day: 25 }, { year: 2022, month: 3, day: 26 }, { year: 2022, month: 3, day: 27 }, { year: 2022, month: 3, day: 28 }, { year: 2022, month: 3, day: 29 }, { year: 2022, month: 3, day: 30 },
      { year: 2022, month: 4, day: 1  }, { year: 2022, month: 4, day: 2  }, { year: 2022, month: 4, day: 3  }, { year: 2022, month: 4, day: 4  }, { year: 2022, month: 4, day: 5  }, { year: 2022, month: 4, day: 6  }, { year: 2022, month: 4, day: 7  },
    ]
  );
});

test('return July 2020 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2020, month: 6 })).toEqual(
    // prettier-ignore
    [
      { year: 2020, month: 5, day: 28 }, { year: 2020, month: 5, day: 29 }, { year: 2020, month: 5, day: 30 }, { year: 2020, month: 6, day: 1  }, { year: 2020, month: 6, day: 2  }, { year: 2020, month: 6, day: 3  }, { year: 2020, month: 6, day: 4  },
      { year: 2020, month: 6, day: 5  }, { year: 2020, month: 6, day: 6  }, { year: 2020, month: 6, day: 7  }, { year: 2020, month: 6, day: 8  }, { year: 2020, month: 6, day: 9  }, { year: 2020, month: 6, day: 10 }, { year: 2020, month: 6, day: 11 }, 
      { year: 2020, month: 6, day: 12 }, { year: 2020, month: 6, day: 13 }, { year: 2020, month: 6, day: 14 }, { year: 2020, month: 6, day: 15 }, { year: 2020, month: 6, day: 16 }, { year: 2020, month: 6, day: 17 }, { year: 2020, month: 6, day: 18 }, 
      { year: 2020, month: 6, day: 19 }, { year: 2020, month: 6, day: 20 }, { year: 2020, month: 6, day: 21 }, { year: 2020, month: 6, day: 22 }, { year: 2020, month: 6, day: 23 }, { year: 2020, month: 6, day: 24 }, { year: 2020, month: 6, day: 25 }, 
      { year: 2020, month: 6, day: 26 }, { year: 2020, month: 6, day: 27 }, { year: 2020, month: 6, day: 28 }, { year: 2020, month: 6, day: 29 }, { year: 2020, month: 6, day: 30 }, { year: 2020, month: 6, day: 31 }, { year: 2020, month: 7, day: 1  }, 
      { year: 2020, month: 7, day: 2  }, { year: 2020, month: 7, day: 3  }, { year: 2020, month: 7, day: 4  }, { year: 2020, month: 7, day: 5  }, { year: 2020, month: 7, day: 6  }, { year: 2020, month: 7, day: 7  }, { year: 2020, month: 7, day: 8  },
    ]
  );
});

test('return December 2029 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2029, month: 11 })).toEqual(
    // prettier-ignore
    [
      { year: 2029, month: 10, day: 25 }, { year: 2029, month: 10, day: 26 }, { year: 2029, month: 10, day: 27 }, { year: 2029, month: 10, day: 28 }, { year: 2029, month: 10, day: 29 }, { year: 2029, month: 10, day: 30 }, { year: 2029, month: 11, day: 1  },
      { year: 2029, month: 11, day: 2  }, { year: 2029, month: 11, day: 3  }, { year: 2029, month: 11, day: 4  }, { year: 2029, month: 11, day: 5  }, { year: 2029, month: 11, day: 6  }, { year: 2029, month: 11, day: 7  }, { year: 2029, month: 11, day: 8  },
      { year: 2029, month: 11, day: 9  }, { year: 2029, month: 11, day: 10 }, { year: 2029, month: 11, day: 11 }, { year: 2029, month: 11, day: 12 }, { year: 2029, month: 11, day: 13 }, { year: 2029, month: 11, day: 14 }, { year: 2029, month: 11, day: 15 },
      { year: 2029, month: 11, day: 16 }, { year: 2029, month: 11, day: 17 }, { year: 2029, month: 11, day: 18 }, { year: 2029, month: 11, day: 19 }, { year: 2029, month: 11, day: 20 }, { year: 2029, month: 11, day: 21 }, { year: 2029, month: 11, day: 22 },
      { year: 2029, month: 11, day: 23 }, { year: 2029, month: 11, day: 24 }, { year: 2029, month: 11, day: 25 }, { year: 2029, month: 11, day: 26 }, { year: 2029, month: 11, day: 27 }, { year: 2029, month: 11, day: 28 }, { year: 2029, month: 11, day: 29 },
      { year: 2029, month: 11, day: 30 }, { year: 2029, month: 11, day: 31 }, { year: 2030, month: 0 , day: 1  }, { year: 2030, month: 0 , day: 2  }, { year: 2030, month: 0 , day: 3  }, { year: 2030, month: 0 , day: 4  }, { year: 2030, month: 0 , day: 5  },
    ]
  );
});

test('return September 2032 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2032, month: 8 })).toEqual(
    // prettier-ignore
    [
      { year: 2032, month: 7 , day: 29 }, { year: 2032, month: 7 , day: 30 }, { year: 2032, month: 7 , day: 31 }, { year: 2032, month: 8 , day: 1  }, { year: 2032, month: 8 , day: 2  }, { year: 2032, month: 8 , day: 3  }, { year: 2032, month: 8 , day: 4  },
      { year: 2032, month: 8 , day: 5  }, { year: 2032, month: 8 , day: 6  }, { year: 2032, month: 8 , day: 7  }, { year: 2032, month: 8 , day: 8  }, { year: 2032, month: 8 , day: 9  }, { year: 2032, month: 8 , day: 10 }, { year: 2032, month: 8 , day: 11 },
      { year: 2032, month: 8 , day: 12 }, { year: 2032, month: 8 , day: 13 }, { year: 2032, month: 8 , day: 14 }, { year: 2032, month: 8 , day: 15 }, { year: 2032, month: 8 , day: 16 }, { year: 2032, month: 8 , day: 17 }, { year: 2032, month: 8 , day: 18 },
      { year: 2032, month: 8 , day: 19 }, { year: 2032, month: 8 , day: 20 }, { year: 2032, month: 8 , day: 21 }, { year: 2032, month: 8 , day: 22 }, { year: 2032, month: 8 , day: 23 }, { year: 2032, month: 8 , day: 24 }, { year: 2032, month: 8 , day: 25 },
      { year: 2032, month: 8 , day: 26 }, { year: 2032, month: 8 , day: 27 }, { year: 2032, month: 8 , day: 28 }, { year: 2032, month: 8 , day: 29 }, { year: 2032, month: 8 , day: 30 }, { year: 2032, month: 9 , day: 1  }, { year: 2032, month: 9 , day: 2  },
      { year: 2032, month: 9 , day: 3  }, { year: 2032, month: 9 , day: 4  }, { year: 2032, month: 9 , day: 5  }, { year: 2032, month: 9 , day: 6  }, { year: 2032, month: 9 , day: 7  }, { year: 2032, month: 9 , day: 8  }, { year: 2032, month: 9 , day: 9  },
    ]
  );
});

test('return August 2027 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2027, month: 7 })).toEqual(
    // prettier-ignore
    [
      { year: 2027, month: 7, day: 1  }, { year: 2027, month: 7, day: 2  }, { year: 2027, month: 7, day: 3  }, { year: 2027, month: 7, day: 4  }, { year: 2027, month: 7, day: 5  }, { year: 2027, month: 7, day: 6  }, { year: 2027, month: 7, day: 7  },
      { year: 2027, month: 7, day: 8  }, { year: 2027, month: 7, day: 9  }, { year: 2027, month: 7, day: 10 }, { year: 2027, month: 7, day: 11 }, { year: 2027, month: 7, day: 12 }, { year: 2027, month: 7, day: 13 }, { year: 2027, month: 7, day: 14 },
      { year: 2027, month: 7, day: 15 }, { year: 2027, month: 7, day: 16 }, { year: 2027, month: 7, day: 17 }, { year: 2027, month: 7, day: 18 }, { year: 2027, month: 7, day: 19 }, { year: 2027, month: 7, day: 20 }, { year: 2027, month: 7, day: 21 },
      { year: 2027, month: 7, day: 22 }, { year: 2027, month: 7, day: 23 }, { year: 2027, month: 7, day: 24 }, { year: 2027, month: 7, day: 25 }, { year: 2027, month: 7, day: 26 }, { year: 2027, month: 7, day: 27 }, { year: 2027, month: 7, day: 28 },
      { year: 2027, month: 7, day: 29 }, { year: 2027, month: 7, day: 30 }, { year: 2027, month: 7, day: 31 }, { year: 2027, month: 8, day: 1  }, { year: 2027, month: 8, day: 2  }, { year: 2027, month: 8, day: 3  }, { year: 2027, month: 8, day: 4  },
      { year: 2027, month: 8, day: 5  }, { year: 2027, month: 8, day: 6  }, { year: 2027, month: 8, day: 7  }, { year: 2027, month: 8, day: 8  }, { year: 2027, month: 8, day: 9  }, { year: 2027, month: 8, day: 10 }, { year: 2027, month: 8, day: 11 },
    ]
  );
});

test('return June 2020 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2020, month: 5 })).toEqual(
    // prettier-ignore
    [
      { year: 2020, month: 4, day: 31 }, { year: 2020, month: 5, day: 1  }, { year: 2020, month: 5, day: 2  }, { year: 2020, month: 5, day: 3  }, { year: 2020, month: 5, day: 4  }, { year: 2020, month: 5, day: 5  }, { year: 2020, month: 5, day: 6  },
      { year: 2020, month: 5, day: 7  }, { year: 2020, month: 5, day: 8  }, { year: 2020, month: 5, day: 9  }, { year: 2020, month: 5, day: 10 }, { year: 2020, month: 5, day: 11 }, { year: 2020, month: 5, day: 12 }, { year: 2020, month: 5, day: 13 },
      { year: 2020, month: 5, day: 14 }, { year: 2020, month: 5, day: 15 }, { year: 2020, month: 5, day: 16 }, { year: 2020, month: 5, day: 17 }, { year: 2020, month: 5, day: 18 }, { year: 2020, month: 5, day: 19 }, { year: 2020, month: 5, day: 20 },
      { year: 2020, month: 5, day: 21 }, { year: 2020, month: 5, day: 22 }, { year: 2020, month: 5, day: 23 }, { year: 2020, month: 5, day: 24 }, { year: 2020, month: 5, day: 25 }, { year: 2020, month: 5, day: 26 }, { year: 2020, month: 5, day: 27 },
      { year: 2020, month: 5, day: 28 }, { year: 2020, month: 5, day: 29 }, { year: 2020, month: 5, day: 30 }, { year: 2020, month: 6, day: 1  }, { year: 2020, month: 6, day: 2  }, { year: 2020, month: 6, day: 3  }, { year: 2020, month: 6, day: 4  },
      { year: 2020, month: 6, day: 5  }, { year: 2020, month: 6, day: 6  }, { year: 2020, month: 6, day: 7  }, { year: 2020, month: 6, day: 8  }, { year: 2020, month: 6, day: 9  }, { year: 2020, month: 6, day: 10 }, { year: 2020, month: 6, day: 11 },
    ]
  );
});

test('return December 2019 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2019, month: 11 })).toEqual(
    // prettier-ignore
    [
      { year: 2019, month: 11, day: 1  }, { year: 2019, month: 11, day: 2  }, { year: 2019, month: 11, day: 3  }, { year: 2019, month: 11, day: 4  }, { year: 2019, month: 11, day: 5  }, { year: 2019, month: 11, day: 6  }, { year: 2019, month: 11, day: 7  },
      { year: 2019, month: 11, day: 8  }, { year: 2019, month: 11, day: 9  }, { year: 2019, month: 11, day: 10 }, { year: 2019, month: 11, day: 11 }, { year: 2019, month: 11, day: 12 }, { year: 2019, month: 11, day: 13 }, { year: 2019, month: 11, day: 14 },
      { year: 2019, month: 11, day: 15 }, { year: 2019, month: 11, day: 16 }, { year: 2019, month: 11, day: 17 }, { year: 2019, month: 11, day: 18 }, { year: 2019, month: 11, day: 19 }, { year: 2019, month: 11, day: 20 }, { year: 2019, month: 11, day: 21 },
      { year: 2019, month: 11, day: 22 }, { year: 2019, month: 11, day: 23 }, { year: 2019, month: 11, day: 24 }, { year: 2019, month: 11, day: 25 }, { year: 2019, month: 11, day: 26 }, { year: 2019, month: 11, day: 27 }, { year: 2019, month: 11, day: 28 },
      { year: 2019, month: 11, day: 29 }, { year: 2019, month: 11, day: 30 }, { year: 2019, month: 11, day: 31 }, { year: 2020, month: 0 , day: 1  }, { year: 2020, month: 0 , day: 2  }, { year: 2020, month: 0 , day: 3  }, { year: 2020, month: 0 , day: 4  },
      { year: 2020, month: 0 , day: 5  }, { year: 2020, month: 0 , day: 6  }, { year: 2020, month: 0 , day: 7  }, { year: 2020, month: 0 , day: 8  }, { year: 2020, month: 0 , day: 9  }, { year: 2020, month: 0 , day: 10 }, { year: 2020, month: 0 , day: 11 }, 
    ]
  );
});

test('return February 2019 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2019, month: 1 })).toEqual(
    // prettier-ignore
    [
      { year: 2019, month: 0, day: 27 }, { year: 2019, month: 0, day: 28 }, { year: 2019, month: 0, day: 29 }, { year: 2019, month: 0, day: 30 }, { year: 2019, month: 0, day: 31 }, { year: 2019, month: 1, day: 1  }, { year: 2019, month: 1, day: 2  },
      { year: 2019, month: 1, day: 3  }, { year: 2019, month: 1, day: 4  }, { year: 2019, month: 1, day: 5  }, { year: 2019, month: 1, day: 6  }, { year: 2019, month: 1, day: 7  }, { year: 2019, month: 1, day: 8  }, { year: 2019, month: 1, day: 9  },
      { year: 2019, month: 1, day: 10 }, { year: 2019, month: 1, day: 11 }, { year: 2019, month: 1, day: 12 }, { year: 2019, month: 1, day: 13 }, { year: 2019, month: 1, day: 14 }, { year: 2019, month: 1, day: 15 }, { year: 2019, month: 1, day: 16 },
      { year: 2019, month: 1, day: 17 }, { year: 2019, month: 1, day: 18 }, { year: 2019, month: 1, day: 19 }, { year: 2019, month: 1, day: 20 }, { year: 2019, month: 1, day: 21 }, { year: 2019, month: 1, day: 22 }, { year: 2019, month: 1, day: 23 },
      { year: 2019, month: 1, day: 24 }, { year: 2019, month: 1, day: 25 }, { year: 2019, month: 1, day: 26 }, { year: 2019, month: 1, day: 27 }, { year: 2019, month: 1, day: 28 }, { year: 2019, month: 2, day: 1  }, { year: 2019, month: 2, day: 2  },
      { year: 2019, month: 2, day: 3  }, { year: 2019, month: 2, day: 4  }, { year: 2019, month: 2, day: 5  }, { year: 2019, month: 2, day: 6  }, { year: 2019, month: 2, day: 7  }, { year: 2019, month: 2, day: 8  }, { year: 2019, month: 2, day: 9  },
    ]
  );
});

test('return February 2020 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2020, month: 1 })).toEqual(
    // prettier-ignore
    [
      { year: 2020, month: 0, day: 26 }, { year: 2020, month: 0, day: 27 }, { year: 2020, month: 0, day: 28 }, { year: 2020, month: 0, day: 29 }, { year: 2020, month: 0, day: 30 }, { year: 2020, month: 0, day: 31 }, { year: 2020, month: 1, day: 1  }, 
      { year: 2020, month: 1, day: 2  }, { year: 2020, month: 1, day: 3  }, { year: 2020, month: 1, day: 4  }, { year: 2020, month: 1, day: 5  }, { year: 2020, month: 1, day: 6  }, { year: 2020, month: 1, day: 7  }, { year: 2020, month: 1, day: 8  },
      { year: 2020, month: 1, day: 9  }, { year: 2020, month: 1, day: 10 }, { year: 2020, month: 1, day: 11 }, { year: 2020, month: 1, day: 12 }, { year: 2020, month: 1, day: 13 }, { year: 2020, month: 1, day: 14 }, { year: 2020, month: 1, day: 15 },
      { year: 2020, month: 1, day: 16 }, { year: 2020, month: 1, day: 17 }, { year: 2020, month: 1, day: 18 }, { year: 2020, month: 1, day: 19 }, { year: 2020, month: 1, day: 20 }, { year: 2020, month: 1, day: 21 }, { year: 2020, month: 1, day: 22 },
      { year: 2020, month: 1, day: 23 }, { year: 2020, month: 1, day: 24 }, { year: 2020, month: 1, day: 25 }, { year: 2020, month: 1, day: 26 }, { year: 2020, month: 1, day: 27 }, { year: 2020, month: 1, day: 28 }, { year: 2020, month: 1, day: 29 },
      { year: 2020, month: 2, day: 1  }, { year: 2020, month: 2, day: 2  }, { year: 2020, month: 2, day: 3  }, { year: 2020, month: 2, day: 4  }, { year: 2020, month: 2, day: 5  }, { year: 2020, month: 2, day: 6  }, { year: 2020, month: 2, day: 7  },
    ]
  );
});

test('return February 2015 calendar month as array', () => {
  expect(getCalendarDaysFor({ year: 2015, month: 1 })).toEqual(
    // prettier-ignore
    [
      { year: 2015, month: 1, day: 1  }, { year: 2015, month: 1, day: 2  }, { year: 2015, month: 1, day: 3  }, { year: 2015, month: 1, day: 4  }, { year: 2015, month: 1, day: 5  }, { year: 2015, month: 1, day: 6  }, { year: 2015, month: 1, day: 7  },
      { year: 2015, month: 1, day: 8  }, { year: 2015, month: 1, day: 9  }, { year: 2015, month: 1, day: 10 }, { year: 2015, month: 1, day: 11 }, { year: 2015, month: 1, day: 12 }, { year: 2015, month: 1, day: 13 }, { year: 2015, month: 1, day: 14 },
      { year: 2015, month: 1, day: 15 }, { year: 2015, month: 1, day: 16 }, { year: 2015, month: 1, day: 17 }, { year: 2015, month: 1, day: 18 }, { year: 2015, month: 1, day: 19 }, { year: 2015, month: 1, day: 20 }, { year: 2015, month: 1, day: 21 },
      { year: 2015, month: 1, day: 22 }, { year: 2015, month: 1, day: 23 }, { year: 2015, month: 1, day: 24 }, { year: 2015, month: 1, day: 25 }, { year: 2015, month: 1, day: 26 }, { year: 2015, month: 1, day: 27 }, { year: 2015, month: 1, day: 28 },
      { year: 2015, month: 2, day: 1  }, { year: 2015, month: 2, day: 2  }, { year: 2015, month: 2, day: 3  }, { year: 2015, month: 2, day: 4  }, { year: 2015, month: 2, day: 5  }, { year: 2015, month: 2, day: 6  }, { year: 2015, month: 2, day: 7  },
      { year: 2015, month: 2, day: 8  }, { year: 2015, month: 2, day: 9  }, { year: 2015, month: 2, day: 10 }, { year: 2015, month: 2, day: 11 }, { year: 2015, month: 2, day: 12 }, { year: 2015, month: 2, day: 13 }, { year: 2015, month: 2, day: 14 },
    ]
  );
});
