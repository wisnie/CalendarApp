import React from 'react';

import Header from './components/generic/Header';
import Calendar from './components/calendar/Calendar';
import UpcomingAppointmentsBoard from './components/appointment/UpcomingAppointmentsBoard';
import AddAppointmentBoard from './components/appointment/AddAppointmentBoard';
import AppointmentsOfDay from './components/appointment/AppointmentsOfDay';
import Container from './components/generic/Container';
import AppProvider from './AppProvider';
import MonthlyChart from './components/charts/MonthlyChart';
import WeeklyChart from './components/charts/WeeklyChart';
import { useIsLightTheme } from './context/theme-context';
import clsx from 'clsx';

function App() {
  const isLightTheme = useIsLightTheme();
  return (
    <div
      className={clsx(
        'min-h-screen',
        isLightTheme ? 'text-gray-900 bg-gray-200' : 'bg-gray-900 text-white'
      )}
    >
      <Header />
      <Container>
        <main className='grid row-gap-8 col-gap-5 pb-8 mt-8 md:grid-cols-2 xl:grid-cols-3'>
          <AppProvider>
            <Calendar />
            <AddAppointmentBoard />
            <UpcomingAppointmentsBoard />
            <AppointmentsOfDay />
            <MonthlyChart />
            <WeeklyChart />
          </AppProvider>
        </main>
      </Container>
    </div>
  );
}

export default App;
