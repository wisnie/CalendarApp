import React, { useState, useContext } from 'react';

import { CalendarDay } from '../utils/calendar';

type State = CalendarDay;
type SetState = (calendarDay: CalendarDay) => void;
type SelectedDayProviderProps = { children: React.ReactNode };

const SelectedDayStateContext = React.createContext<State | undefined>(
  undefined
);
const SelectedDaySetStateContext = React.createContext<SetState | undefined>(
  undefined
);

function SelectedDayProvider({ children }: SelectedDayProviderProps) {
  const [selectedDay, setSelectedDay] = useState<State>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });

  return (
    <SelectedDayStateContext.Provider value={selectedDay}>
      <SelectedDaySetStateContext.Provider value={setSelectedDay}>
        {children}
      </SelectedDaySetStateContext.Provider>
    </SelectedDayStateContext.Provider>
  );
}

function useSelectedDayState() {
  const context = useContext(SelectedDayStateContext);
  if (context === undefined) {
    throw new Error(
      'useSelectedDayState must be used within a SelectedDayProvider'
    );
  }
  return context;
}

function useSelectedDaySetState() {
  const context = useContext(SelectedDaySetStateContext);
  if (context === undefined) {
    throw new Error(
      'useSelectedDaySetState must be used within a SelectedDayProvider'
    );
  }
  return context;
}

export { SelectedDayProvider, useSelectedDayState, useSelectedDaySetState };
