import React from 'react';
import clsx from 'clsx';

import { useIsLightTheme } from '../../context/theme-context';

type Props = { children: React.ReactNode };
export default function Card({ children }: Props) {
  const isLightTheme = useIsLightTheme();
  return (
    <div
      className={clsx(
        'flex-grow mt-1 rounded shadow-lg',
        isLightTheme ? 'bg-white' : 'bg-gray-800'
      )}
    >
      {children}
    </div>
  );
}
