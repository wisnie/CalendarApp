import React, { useState, FormEvent } from 'react';
import clsx from 'clsx';

import { useSelectedDayState } from '../../context/selected-day-context';
import { useIsLightTheme } from '../../context/theme-context';
import {
  useAppointmentsDispatch,
  ActionTypes,
} from '../../context/appointments-context';
import {
  useChartDispatch,
  ActionTypes as ChartActionTypes,
} from '../../context/chart-context';

export default function AppointmentForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const resetTitle = () => setTitle('');
  const resetDescription = () => setDescription('');

  const selectedDay = useSelectedDayState();
  const appointmentsDispatch = useAppointmentsDispatch();
  const chartDispatch = useChartDispatch();
  const isLightTheme = useIsLightTheme();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.length > 0 && description.length > 0) {
      appointmentsDispatch({
        type: ActionTypes.SetAppointment,
        payload: { calendarDay: selectedDay, title, description },
      });
      chartDispatch({
        type: ChartActionTypes.IncrementAddedAppointments,
      });
      resetTitle();
      resetDescription();
    }
  };

  return (
    <form
      className={clsx(
        'flex flex-col justify-between w-full h-full px-3 py-5 border-t-2',
        isLightTheme ? 'border-gray-200' : 'border-gray-700'
      )}
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col'>
        <label
          className={clsx(
            'mb-2 text-sm font-bold',
            isLightTheme ? 'text-gray-700' : 'text-white'
          )}
          htmlFor='title'
        >
          Title
        </label>
        <input
          className={clsx(
            'w-full py-2 px-3 border rounded appearance-none leading-tight shadow focus:outline-none focus:shadow-outline',
            isLightTheme
              ? 'text-gray-700'
              : 'bg-gray-900 text-white border-gray-900'
          )}
          id='title'
          type='text'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label
          className={clsx(
            'mb-2 mt-4 text-sm font-bold',
            isLightTheme ? 'text-gray-700' : 'text-white'
          )}
          htmlFor='description'
        >
          Description
        </label>
        <textarea
          className={clsx(
            'w-full h-24 resize-none py-2 px-3 border rounded appearance-none leading-tight shadow focus:outline-none focus:shadow-outline',
            isLightTheme
              ? 'text-gray-700'
              : 'bg-gray-900 text-white border-gray-900'
          )}
          id='description'
          value={description}
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className='w-full py-2 mt-16 rounded text-white uppercase tracking-wider font-bold bg-indigo-700 hover:bg-indigo-800 transition-colors ease-out duration-100'
        type='submit'
      >
        Add
      </button>
    </form>
  );
}
