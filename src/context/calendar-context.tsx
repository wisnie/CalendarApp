import React, { useReducer, useContext } from 'react';

const FIRST_MONTH_INDEX = 0;
const LAST_MONTH_INDEX = 11;

type State = {
  year: number;
  month: number;
};
type CalendarProviderProps = { children: React.ReactNode };

enum ActionTypes {
  SetCalendar = 'setCalendar',
  IncrementYear = 'incrementYear',
  DecrementYear = 'decrementYear',
  IncrementMonth = 'incrementMonth',
  DecrementMonth = 'decrementMonth',
}
type Action =
  | { type: ActionTypes.SetCalendar; payload: State }
  | { type: ActionTypes.IncrementYear }
  | { type: ActionTypes.DecrementYear }
  | { type: ActionTypes.IncrementMonth }
  | { type: ActionTypes.DecrementMonth };
type Dispatch = (action: Action) => void;

const CalendarStateContext = React.createContext<State | undefined>(undefined);
const CalendarDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function calendarReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.IncrementYear: {
      return { ...state, year: state.year + 1 };
    }
    case ActionTypes.DecrementYear: {
      return { ...state, year: state.year - 1 };
    }
    case ActionTypes.IncrementMonth: {
      if (isLastMonth(state.month)) {
        return {
          ...state,
          year: state.year + 1,
          month: FIRST_MONTH_INDEX,
        };
      }
      return { ...state, month: state.month + 1 };
    }
    case ActionTypes.DecrementMonth: {
      if (isFirstMonth(state.month)) {
        return {
          ...state,
          year: state.year - 1,
          month: LAST_MONTH_INDEX,
        };
      }
      return { ...state, month: state.month - 1 };
    }
    case ActionTypes.SetCalendar: {
      return { ...action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function isLastMonth(month: number) {
  return month === LAST_MONTH_INDEX;
}

function isFirstMonth(month: number) {
  return month === FIRST_MONTH_INDEX;
}

const INITIAL_STATE: State = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

function CalendarProvider({ children }: CalendarProviderProps) {
  const [state, dispatch] = useReducer(calendarReducer, INITIAL_STATE);

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

function useCalendarState() {
  const context = useContext(CalendarStateContext);
  if (context === undefined) {
    throw new Error('useCalendarState must be used within a CalendarProvider');
  }

  return context;
}

function useCalendarDispatch() {
  const context = useContext(CalendarDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCalendarDispatch must be used within a CalendarProvider'
    );
  }

  return context;
}

export { CalendarProvider, useCalendarState, useCalendarDispatch, ActionTypes };
