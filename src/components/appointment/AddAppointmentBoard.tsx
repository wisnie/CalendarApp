import React from 'react';

import Section from '../generic/Section';
import DateDisplayName from './DateDisplayName';
import AppointmentForm from './AppointmentForm';

export default function AddAppointmentBoard() {
  return (
    <Section
      heading='Add Appointment'
      id='add-appointment'
      gridPosition='md:col-span-6 xl:col-span-3'
    >
      <div className='flex flex-col h-full'>
        <DateDisplayName />
        <AppointmentForm />
      </div>
    </Section>
  );
}
