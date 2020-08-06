import React from 'react';
import clsx from 'clsx';

import { Appointment } from '../../utils/appointment';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useIsLightTheme } from '../../context/theme-context';
import {
  useAppointmentsDispatch,
  ActionTypes,
} from '../../context/appointments-context';
import {
  useChartDispatch,
  ActionTypes as ChartActionTypes,
} from '../../context/chart-context';

type Props = { appointment: Appointment };
export default function AppointmentsItem({ appointment }: Props) {
  const appointmentsDispatch = useAppointmentsDispatch();
  const chartDispatch = useChartDispatch();
  const isLightTheme = useIsLightTheme();
  const handleDelete = () => {
    appointmentsDispatch({
      type: ActionTypes.RemoveAppointment,
      id: appointment.id,
    });
    chartDispatch({ type: ChartActionTypes.IncrementRemovedAppointments });
  };

  return (
    <li className='mt-4'>
      <div className='flex items-end justify-between'>
        <h3
          className={clsx(
            'text-xl truncate',
            isLightTheme ? 'text-gray-800' : 'text-white'
          )}
        >
          {appointment.title}
        </h3>
        <button className='' type='button' onClick={handleDelete}>
          <DeleteIcon className='h-8 w-8 p-1 rounded border-2 border-gray-500 fill-current text-gray-500 transition ease-out duration-200 hover:border-red-600 hover:text-red-600' />
        </button>
      </div>
      <p
        className={clsx(
          'mt-1 text-sm break-words',
          isLightTheme ? 'text-gray-600' : 'text-gray-400'
        )}
      >
        {appointment.description}
      </p>
    </li>
  );
}
