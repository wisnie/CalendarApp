import React from 'react';

import { SelectedDayProvider } from './context/selected-day-context';
import { AppointmentsProvider } from './context/appointments-context';
import { CalendarProvider } from './context/calendar-context';
import { ChartProvider } from './context/chart-context';

type Props = { children: React.ReactNode };
export default function AppProvider({ children }: Props) {
  return (
    <CalendarProvider>
      <SelectedDayProvider>
        <AppointmentsProvider>
          <ChartProvider>{children}</ChartProvider>
        </AppointmentsProvider>
      </SelectedDayProvider>
    </CalendarProvider>
  );
}
