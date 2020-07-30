import React from 'react';
import clsx from 'clsx';

import { getDateDisplayName } from '../../utils/date';
import { useSelectedDayState } from '../../context/selected-day-context';
import { useIsLightTheme } from '../../context/theme-context';

export default function DateDisplayName() {
  const isLightTheme = useIsLightTheme();
  const { year, month, day } = useSelectedDayState();

  return (
    <span
      className={clsx(
        'inline-block px-3 py-4 text-xl',
        isLightTheme ? 'text-gray-700' : 'text-white'
      )}
    >
      {getDateDisplayName(new Date(year, month, day))}
    </span>
  );
}
