import React from 'react';
import clsx from 'clsx';

import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';
import { getChevronClasses } from './MonthSwitch';
import { useIsLightTheme } from '../../context/theme-context';
import {
  useCalendarState,
  useCalendarDispatch,
  ActionTypes,
} from '../../context/calendar-context';

export default function YearSwitch() {
  const calendarDispatch = useCalendarDispatch();
  const isLightTheme = useIsLightTheme();
  const { year } = useCalendarState();

  return (
    <div className='flex justify-between items-center w-2/5'>
      <button
        className='cursor-pointer'
        onClick={() => calendarDispatch({ type: ActionTypes.DecrementYear })}
      >
        <ChevronLeft className={getChevronClasses(isLightTheme)} />
        <span className='sr-only'>Previous Year</span>
      </button>
      <span
        className={clsx(
          'text-sm',
          isLightTheme ? 'text-gray-700' : 'text-white'
        )}
      >
        {year}
      </span>
      <button
        className='cursor-pointer'
        onClick={() => calendarDispatch({ type: ActionTypes.IncrementYear })}
      >
        <ChevronRight className={getChevronClasses(isLightTheme)} />
        <span className='sr-only'>Next Year</span>
      </button>
    </div>
  );
}
