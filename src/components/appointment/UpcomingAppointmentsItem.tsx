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
import {
  useCalendarDispatch,
  ActionTypes,
} from '../../context/calendar-context';
import { isSameDay } from '../../utils/calendar';

type Props = { appointment: Appointment };
export default function UpcomingAppointmentsItem({ appointment }: Props) {
  const isLightTheme = useIsLightTheme();
  const daysToAppointment = getDaysToAppointment(appointment.calendarDay);
  const selectedDay = useSelectedDayState();
  const setSelectedDay = useSelectedDaySetState();
  const calendarDispatch = useCalendarDispatch();
  const isSelected = isSameDay(selectedDay, appointment.calendarDay);

  const selectDate = () => {
    setSelectedDay(appointment.calendarDay);
    calendarDispatch({
      type: ActionTypes.SetCalendar,
      payload: {
        year: appointment.calendarDay.year,
        month: appointment.calendarDay.month,
      },
    });
  };

  return (
    <li>
      <button
        className='flex items-center justify-between w-full mt-4'
        onClick={selectDate}
      >
        <div className='flex items-center'>
          <span
            className={clsx(
              'inline-block w-20 p-2 flex-none rounded-full text-white text-xs font-bold text-center truncate',
              getBackgroundForBadge(daysToAppointment)
            )}
          >
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
        <Location
          className={clsx(
            'h-6 w-6 fill-current',
            getColorForLocation(isLightTheme, isSelected)
          )}
        />
      </button>
    </li>
  );
}

function getBackgroundForBadge(daysToAppointment: number): string {
  const isWithinTwoDays = daysToAppointment <= 2;
  if (isWithinTwoDays) {
    return 'bg-red-400';
  }

  const isWithinFiveDays = daysToAppointment <= 5;
  if (isWithinFiveDays) {
    return 'bg-green-400';
  }

  return 'bg-gray-400';
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

function getColorForLocation(isLightTheme: boolean, isSelected: boolean) {
  if (isLightTheme) {
    if (isSelected) {
      return 'text-gray-800';
    }
    return 'text-gray-400 hover:text-gray-700';
  } else if (isSelected) {
    return 'text-white';
  }
  return 'text-gray-700 hover:text-gray-500';
}
