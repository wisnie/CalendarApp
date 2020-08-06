import React from 'react';
import clsx from 'clsx';

import { useIsLightTheme } from '../../context/theme-context';

export default function DaysOfWeek() {
  const isLightTheme = useIsLightTheme();
  const itemClasses = clsx(
    'px-1 py-4 text-sm text-center font-black tracking-wide sm:px-2',
    isLightTheme ? 'text-gray-800' : 'text-white'
  );
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <ol className='grid grid-cols-7'>
      {weekdays.map((weekday) => (
        <li className={itemClasses} key={weekday}>
          {weekday}
        </li>
      ))}
    </ol>
  );
}
