import React from 'react';
import clsx from 'clsx';

import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';
import { getMonthName } from '../../utils/date';
import { useIsLightTheme } from '../../context/theme-context';
import {
  useCalendarState,
  useCalendarDispatch,
} from '../../context/calendar-context';

export default function MonthSwitch() {
  const { incrementMonth, decrementMonth } = useCalendarDispatch();
  const isLightTheme = useIsLightTheme();
  const { month } = useCalendarState();

  return (
    <div className='flex justify-between items-center w-3/5'>
      <button className='cursor-pointer' onClick={decrementMonth}>
        <ChevronLeft className={getChevronClasses(isLightTheme)} />
        <span className='sr-only'>Previous Month</span>
      </button>
      <span
        className={clsx(
          'text-sm',
          isLightTheme ? 'text-gray-700' : 'text-white'
        )}
      >
        {getMonthName(month)}
      </span>
      <button className='cursor-pointer' onClick={incrementMonth}>
        <ChevronRight className={getChevronClasses(isLightTheme)} />
        <span className='sr-only'>Next Month</span>
      </button>
    </div>
  );
}

export function getChevronClasses(isLightTheme: boolean) {
  return clsx(
    'h-8 w-8 fill-current',
    isLightTheme
      ? 'text-gray-700 hover:text-gray-900'
      : 'text-white hover:text-gray-500'
  );
}
