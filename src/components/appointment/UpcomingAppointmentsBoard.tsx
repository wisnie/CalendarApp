import React from 'react';
import clsx from 'clsx';

import Section from '../generic/Section';
import UpcomingAppointmentsItem from './UpcomingAppointmentsItem';
import { getUpcomingAppointments } from '../../utils/appointment';
import { useAppointmentsState } from '../../context/appointments-context';
import { useIsLightTheme } from '../../context/theme-context';

export default function UpcomingAppointmentsBoard() {
  const appointments = useAppointmentsState();
  const upcomingAppointments = getUpcomingAppointments(appointments);
  const isLightTheme = useIsLightTheme();

  return (
    <Section
      heading='Upcoming'
      id='upcoming'
      gridPosition='md:col-span-6 xl:col-span-3'
    >
      <div className='h-full flex flex-col'>
        <header
          className={clsx(
            'px-3 py-4 text-xl flex items-baseline',
            isLightTheme ? 'text-gray-700' : 'text-white'
          )}
        >
          <span className='inline-block w-20 text-center'>Time</span>
          <span className='inline-block flex-grow text-center'>Title</span>
        </header>
        {upcomingAppointments.length > 0 ? (
          <div className='flex-grow relative'>
            <ul
              className={clsx(
                'absolute inset-0 px-3 pt-1 border-t-2 overflow-y-auto',
                isLightTheme ? 'border-gray-200' : 'border-gray-700'
              )}
            >
              {upcomingAppointments.map((appointment) => (
                <UpcomingAppointmentsItem
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </ul>
          </div>
        ) : (
          <span
            className={clsx(
              'inline-block w-full px-3 py-5 text-center text-lg border-t-2',
              isLightTheme
                ? 'text-gray-600 border-gray-200'
                : 'text-white border-gray-700'
            )}
          >
            You don't have any upcoming appointments
          </span>
        )}
      </div>
    </Section>
  );
}
