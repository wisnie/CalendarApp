import React from 'react';
import clsx from 'clsx';

import { ReactComponent as Location } from '../../icons/location.svg';
import { Appointment } from '../../utils/appointment';
import { getDaysToAppointment } from '../../utils/appointment';
import {
  useSelectedDayState,
  useSelectedDaySetState,
} from '../../context/selected-day-context';
import { useIsLightTheme } from '../../context/theme-context';
import { useCalendarDispatch } from '../../context/calendar-context';
import { isSameDay } from '../../utils/calendar';

type Props = { appointment: Appointment };
export default function UpcomingAppointmentsItem({ appointment }: Props) {
  const isLightTheme = useIsLightTheme();
  const daysToAppointment = getDaysToAppointment(appointment.calendarDay);
  const selectedDay = useSelectedDayState();
  const setSelectedDay = useSelectedDaySetState();
  const { setCalendar } = useCalendarDispatch();
  const isSelected = isSameDay(selectedDay, appointment.calendarDay);

  const selectDate = () => {
    setSelectedDay(appointment.calendarDay);
    setCalendar({
      year: appointment.calendarDay.year,
      month: appointment.calendarDay.month,
    });
  };

  const isWithinTwoDays = daysToAppointment <= 2;
  const isWithinFiveDays = daysToAppointment <= 5;
  const badgeClasses = clsx(
    'inline-block w-20 p-2 flex-none rounded-full text-white text-xs font-bold text-center truncate',
    {
      'bg-red-400': isWithinTwoDays,
      'bg-green-400': isWithinFiveDays && !isWithinTwoDays,
      'bg-gray-400': !isWithinFiveDays && !isWithinTwoDays,
    }
  );

  const locationClasses = clsx('h-6 w-6 fill-current', {
    'text-gray-800': isLightTheme && isSelected,
    'text-gray-400 hover:text-gray-700': isLightTheme && !isSelected,
    'text-white': !isLightTheme && isSelected,
    'text-gray-700 hover:text-gray-500': !isLightTheme && !isSelected,
  });

  return (
    <li>
      <button
        className='flex items-center justify-between w-full mb-5'
        onClick={selectDate}
      >
        <div className='flex items-center'>
          <span className={badgeClasses}>
            {getTextForBadge(daysToAppointment)}
          </span>
          <h3
            className={clsx(
              'inline-block ml-4 text-xl truncate flex-shrink',
              isLightTheme ? 'border-gray-800' : 'text-white'
            )}
          >
            {appointment.title}
          </h3>
        </div>
        <span className='sr-only'>Jump to Date</span>
        <Location className={locationClasses} />
      </button>
    </li>
  );
}

function getTextForBadge(daysToAppointment: number): string {
  const isToday = daysToAppointment === 0;
  if (isToday) {
    return 'Today';
  }

  const isTommorow = daysToAppointment === 1;
  if (isTommorow) {
    return 'Tommorow';
  }

  return `In ${daysToAppointment} days`;
}
