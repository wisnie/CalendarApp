import React from 'react';
import clsx from 'clsx';

import { ReactComponent as Moon } from './../../icons/moon.svg';
import { ReactComponent as Sun } from './../../icons/sun.svg';
import { useIsLightTheme, useToggleTheme } from '../../context/theme-context';

export default function ThemeToggle() {
  const isLightTheme = useIsLightTheme();
  const toggleTheme = useToggleTheme();

  return (
    <button
      className={clsx(
        'rounded p-1 shadow-lg cursor-pointer',
        isLightTheme ? 'bg-gray-900' : 'bg-white'
      )}
      type='button'
      onClick={toggleTheme}
    >
      {isLightTheme ? (
        <Moon className='fill-current h-8 text-white' />
      ) : (
        <Sun className='fill-current h-8 text-gray-800' />
      )}
      <span className='sr-only'>
        Switch to {isLightTheme ? 'dark' : 'light'} theme
      </span>
    </button>
  );
}
