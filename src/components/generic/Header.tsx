import React from 'react';
import clsx from 'clsx';

import Container from './Container';
import ThemeToggle from './ThemeToggle';
import { useIsLightTheme } from '../../context/theme-context';

export default function Header() {
  const isLightTheme = useIsLightTheme();
  return (
    <header className={clsx('py-3', isLightTheme ? 'bg-white' : 'bg-gray-800')}>
      <Container>
        <div className='relative md:flex md:justify-between md:items-center'>
          <h1
            className={clsx(
              'text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl',
              isLightTheme ? 'text-gray-800' : 'text-white'
            )}
          >
            React Calendar
          </h1>
          <nav className='mt-3 py-3 border-t-2 border-gray-500 md:border-0 md:mt-0 md:py-0'>
            <ul className='md:flex md:items-center'>
              <li
                className={clsx(
                  'md:text-sm lg:text-xl',
                  isLightTheme ? 'text-gray-700' : 'text-white'
                )}
              >
                <a href='#calendar'>Calendar</a>
              </li>
              <li
                className={clsx(
                  'mt-3 md:mt-0 md:ml-5 md:text-sm lg:text-xl lg:ml-8',
                  isLightTheme ? 'text-gray-700' : 'text-white'
                )}
              >
                <a href='#upcoming-appointments'>Upcoming Appointments</a>
              </li>
              <li
                className={clsx(
                  'mt-3 md:mt-0 md:ml-5 md:text-sm lg:text-xl lg:ml-8',
                  isLightTheme ? 'text-gray-700' : 'text-white'
                )}
              >
                <a href='#add-appointment'>Add Appointment</a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
