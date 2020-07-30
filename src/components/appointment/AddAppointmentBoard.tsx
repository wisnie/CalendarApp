import React from 'react';

import Section from '../generic/Section';
import DateDisplayName from './DateDisplayName';
import AppointmentForm from './AppointmentForm';

export default function AddAppointmentBoard() {
  return (
    <Section heading='Add Appointment' id='add-appointment'>
      <DateDisplayName />
      <AppointmentForm />
    </Section>
  );
}
