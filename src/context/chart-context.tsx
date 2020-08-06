import React, { useReducer, useContext } from 'react';
import * as z from 'zod';

import { getStorageItem, setStorageItem } from '../utils/storage';
import {
  CHARTS,
  ADDED_APPOINTMENTS,
  REMOVED_APPOINTMENTS,
  INITIAL_STATE,
} from './chart-context-constants';

const ChartDataObject = z.object({
  name: z.string(),
  [ADDED_APPOINTMENTS]: z.number(),
  [REMOVED_APPOINTMENTS]: z.number(),
});

const ChartDataArray = z.array(ChartDataObject);

type ChartDataObject = z.infer<typeof ChartDataObject>;
type ChartDataArray = z.infer<typeof ChartDataArray>;
type State = ChartDataArray;

type ChartProviderProps = { children: React.ReactNode };

enum ActionTypes {
  IncrementAddedAppointments = 'incrementAddedAppointments',
  IncrementRemovedAppointments = 'incrementRemovedAppointments',
}
type Action = { type: ActionTypes };
type Dispatch = (action: Action) => void;

const ChartStateContext = React.createContext<State | undefined>(undefined);
const ChartDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function chartReducer(state: State, action: Action): State {
  const currentWeekday = new Date().getDay();

  switch (action.type) {
    case ActionTypes.IncrementAddedAppointments: {
      const chartData = state.slice(0);
      chartData[currentWeekday][ADDED_APPOINTMENTS] += 1;
      setStorageItem(CHARTS, chartData);
      return chartData;
    }
    case ActionTypes.IncrementRemovedAppointments: {
      const chartData = state.slice(0);
      chartData[currentWeekday][REMOVED_APPOINTMENTS] += 1;
      setStorageItem(CHARTS, chartData);
      return chartData;
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function ChartProvider({ children }: ChartProviderProps) {
  const [state, dispatch] = useReducer(chartReducer, INITIAL_STATE, init);

  return (
    <ChartStateContext.Provider value={state}>
      <ChartDispatchContext.Provider value={dispatch}>
        {children}
      </ChartDispatchContext.Provider>
    </ChartStateContext.Provider>
  );
}

function init(initialState: State) {
  const data = getStorageItem(CHARTS);
  if (ChartDataArray.check(data)) {
    return data;
  }

  return initialState;
}

function useChartState() {
  const context = useContext(ChartStateContext);
  if (context === undefined) {
    throw new Error('useChartState must be used within a ChartProvider');
  }

  return context;
}

function useChartDispatch() {
  const context = useContext(ChartDispatchContext);
  if (context === undefined) {
    throw new Error('useChartDispatch must be used within a ChartProvider');
  }

  return context;
}

export { ChartProvider, useChartState, useChartDispatch, ActionTypes };
