import React from 'react';
import clsx from 'clsx';

import Section from '../generic/Section';
import MonthSwitch from './MonthSwitch';
import YearSwitch from './YearSwitch';
import DaysOfWeek from './DaysOfWeek';
import CalendarDays from './CalendarDays';
import { useIsLightTheme } from '../../context/theme-context';
import AppointmentsForSelectedDay from './AppointmentsForSelectedDay';

export default function Calendar() {
  const isLightTheme = useIsLightTheme();
  return (
    <Section
      heading='Calendar'
      id='calendar'
      gridPosition='md:col-span-6 row-span-2'
    >
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
      <AppointmentsForSelectedDay />
    </Section>
  );
}
