import React from 'react';
import clsx from 'clsx';

import { useIsLightTheme } from '../../context/theme-context';

type Props = {
  day: number;
  isCurrentDate: boolean;
  isFaded: boolean;
  isSelected: boolean;
  hasAppointment: boolean;
  onClick: () => void;
};

export default function CalendarDay({
  day,
  isFaded,
  isCurrentDate,
  isSelected,
  onClick,
  hasAppointment,
}: Props) {
  const isLightTheme = useIsLightTheme();

  return (
    <li
      className={clsx(
        'flex justify-center py-1 text-center font-semibold text-sm sm:text-base',
        isFaded && 'text-gray-600',
        isLightTheme ? 'bg-white' : 'bg-gray-800'
      )}
    >
      <button
        className={clsx(
          'relative w-10 h-10 p-2 rounded-full focus:z-10 sm:w-12 sm:h-12 transition-colors',
          isCurrentDate && 'border-2 border-gray-400',
          isSelected && 'text-white bg-indigo-700 border-indigo-700',
          isLightTheme ? 'bg-white' : 'bg-gray-800'
        )}
        onClick={onClick}
      >
        {day}
        {hasAppointment && (
          <div
            className={clsx(
              'absolute h-1 w-1 rounded-full bg-white transform translate-x-1/2',
              !isSelected && isLightTheme && 'bg-gray-700'
            )}
            style={{ right: '50%', top: '5px' }}
          ></div>
        )}
      </button>
    </li>
  );
}
