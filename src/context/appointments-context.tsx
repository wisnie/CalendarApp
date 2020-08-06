import React, { useContext, useReducer } from 'react';

import {
  getNextId,
  setAppointment,
  removeAppointment,
  getAllAppointments,
  Appointment,
  AppointmentsArray,
} from '../utils/appointment';

type State = AppointmentsArray;
type AppointmentsProviderProps = { children: React.ReactNode };

export enum ActionTypes {
  SetAppointment = 'setAppointment',
  RemoveAppointment = 'removeAppointment',
}
type Action =
  | {
      type: ActionTypes.SetAppointment;
      payload: Pick<Appointment, 'calendarDay' | 'description' | 'title'>;
    }
  | { type: ActionTypes.RemoveAppointment; id: number };
type Dispatch = (action: Action) => void;

const AppointmentsStateContext = React.createContext<State | undefined>(
  undefined
);
const AppointmentsDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function appointmentsReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.SetAppointment: {
      setAppointment(state, { ...action.payload, id: getNextId(state) });
      return getAllAppointments() || [];
    }
    case ActionTypes.RemoveAppointment: {
      removeAppointment(state, action.id);
      return getAllAppointments() || [];
    }
  }
}

function AppointmentsProvider({ children }: AppointmentsProviderProps) {
  const [state, dispatch] = useReducer(
    appointmentsReducer,
    getAllAppointments() || []
  );

  return (
    <AppointmentsStateContext.Provider value={state}>
      <AppointmentsDispatchContext.Provider value={dispatch}>
        {children}
      </AppointmentsDispatchContext.Provider>
    </AppointmentsStateContext.Provider>
  );
}

function useAppointmentsState() {
  const context = useContext(AppointmentsStateContext);
  if (context === undefined) {
    throw new Error(
      'useAppointmentsState must be used within a AppointmentsProvider'
    );
  }
  return context;
}

function useAppointmentsDispatch() {
  const context = useContext(AppointmentsDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useAppointmentsDispatch must be used within a AppointmentsProvider'
    );
  }
  return context;
}

export { AppointmentsProvider, useAppointmentsState, useAppointmentsDispatch };
