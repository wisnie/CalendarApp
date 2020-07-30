import React from 'react';

import CalendarDay from './CalendarDay';
import { isToday } from '../../utils/date';
import { AppointmentsArray } from '../../utils/appointment';
import { getAppointmentsFor } from '../../utils/appointment';
import {
  getCalendarDaysFor,
  CalendarDay as CalendarDayType,
  isSameDay,
} from '../../utils/calendar';
import { useCalendarState } from '../../context/calendar-context';
import { useAppointmentsState } from '../../context/appointments-context';
import {
  useSelectedDayState,
  useSelectedDaySetState,
} from '../../context/selected-day-context';

export default function CalendarDays() {
  const { year: calendarYear, month: calendarMonth } = useCalendarState();
  const selectedDay = useSelectedDayState();
  const setSelectedDay = useSelectedDaySetState();
  const appointments = useAppointmentsState();

  return (
    <ol className='grid grid-cols-7'>
      {getCalendarDaysFor({ year: calendarYear, month: calendarMonth }).map(
        (calendarDay, index) => {
          const { month, day } = calendarDay;
          const selectDay = () => setSelectedDay(calendarDay);
          return (
            <CalendarDay
              key={index}
              day={day}
              isCurrentDate={isToday(calendarDay)}
              isFaded={month !== calendarMonth}
              isSelected={isSameDay(selectedDay, calendarDay)}
              hasAppointment={hasAppointment(appointments, calendarDay)}
              onClick={selectDay}
            />
          );
        }
      )}
    </ol>
  );
}

function hasAppointment(
  appointments: AppointmentsArray,
  calendarDay: CalendarDayType
) {
  return getAppointmentsFor(appointments, calendarDay).length > 0;
}
