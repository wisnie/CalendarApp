import React from 'react';
import clsx from 'clsx';

import Section from '../generic/Section';
import MonthSwitch from './MonthSwitch';
import YearSwitch from './YearSwitch';
import DaysOfWeek from './DaysOfWeek';
import CalendarDays from './CalendarDays';
import { useIsLightTheme } from '../../context/theme-context';

export default function Calendar() {
  const isLightTheme = useIsLightTheme();
  return (
    <Section heading='Calendar' id='calendar'>
      <header className='flex justify-between items-center px-3 py-4'>
        <MonthSwitch />
        <YearSwitch />
      </header>
      <article
        className={clsx(
          'flex flex-col p-1 border-t-2',
          isLightTheme ? 'border-gray-200' : 'border-gray-700'
        )}
      >
        <DaysOfWeek />
        <CalendarDays />
      </article>
    </Section>
  );
}
