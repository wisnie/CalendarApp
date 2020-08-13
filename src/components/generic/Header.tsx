import React from 'react';
import clsx from 'clsx';

import Container from './Container';
import ThemeToggle from './ThemeToggle';
import { useIsLightTheme } from '../../context/theme-context';
import './Header.css';

export default function Header() {
  const isLightTheme = useIsLightTheme();
  const itemClasses = clsx(
    'px-3 lg:text-xl',
    isLightTheme ? 'text-gray-700' : 'text-white'
  );
  return (
    <header
      className={clsx(
        'sticky top-0 md:static z-20 py-3 px-2 shadow-lg',
        isLightTheme ? 'bg-white' : 'bg-gray-800'
      )}
    >
      <Container>
        <div className='scroll flex items-center justify-between w-full whitespace-no-wrap overflow-x-auto'>
          <h1
            className={clsx(
              'mr-3 text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl flex-shrink-0',
              isLightTheme ? 'text-gray-800' : 'text-white'
            )}
          >
            Calendar App
          </h1>
          <nav className='md:hidden'>
            <ul className='flex'>
              <li className={itemClasses}>
                <a href='#calendar'>Calendar</a>
              </li>
              <li className={itemClasses}>
                <a href='#add-appointment'>Add Appointment</a>
              </li>
              <li className={itemClasses}>
                <a href='#upcoming'>Upcoming</a>
              </li>
              <li className={itemClasses}>
                <a href='#weekly-chart'>Weekly Chart</a>
              </li>
            </ul>
          </nav>
          <div className='px-5 md:px-0'>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
