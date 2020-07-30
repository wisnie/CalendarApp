import React from 'react';
import clsx from 'clsx';

import { useIsLightTheme } from '../../context/theme-context';

export default function DaysOfWeek() {
  const isLightTheme = useIsLightTheme();
  const itemClasses = getItemClasses(isLightTheme);
  return (
    <ol className='grid grid-cols-7'>
      <li className={itemClasses}>Sun</li>
      <li className={itemClasses}>Mon</li>
      <li className={itemClasses}>Tue</li>
      <li className={itemClasses}>Wed</li>
      <li className={itemClasses}>Thu</li>
      <li className={itemClasses}>Fri</li>
      <li className={itemClasses}>Sat</li>
    </ol>
  );
}

function getItemClasses(isLightTheme: boolean) {
  return clsx(
    'px-1 py-4 text-sm text-center font-black tracking-wide sm:px-2',
    isLightTheme ? 'text-gray-800' : 'text-white'
  );
}
