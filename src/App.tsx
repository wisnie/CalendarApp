import React from 'react';

import Header from './components/generic/Header';
import Calendar from './components/calendar/Calendar';
import UpcomingAppointmentsBoard from './components/appointment/UpcomingAppointmentsBoard';
import AddAppointmentBoard from './components/appointment/AddAppointmentBoard';
import Container from './components/generic/Container';
import AppProviders from './AppProviders';
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
        <main
          className='grid row-gap-8 col-gap-8 pb-8 mt-8 md:grid-cols-12'
          style={{ gridTemplateRows: 'repeat(2, 500px)' }}
        >
          <AppProviders>
            <Calendar />
            <AddAppointmentBoard />
            <UpcomingAppointmentsBoard />
            <WeeklyChart />
          </AppProviders>
        </main>
      </Container>
    </div>
  );
}

export default App;
