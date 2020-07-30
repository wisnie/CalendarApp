import React, { useReducer, useContext } from 'react';
import * as z from 'zod';

import { getStorageItem, setStorageItem } from '../utils/storage';

const CHARTS = 'charts';
const ADDED_APPOINTMENTS = 'Added appointments';
const REMOVED_APPOINTMENTS = 'Removed appointments';

const ChartDataObject = z.object({
  name: z.string(),
  [ADDED_APPOINTMENTS]: z.number(),
  [REMOVED_APPOINTMENTS]: z.number(),
});

const ChartDataArray = z.array(ChartDataObject);

const ChartsData = z.object({
  monthlyData: ChartDataArray.length(12),
  weeklyData: ChartDataArray.length(7),
});

type ChartDataObject = z.infer<typeof ChartDataObject>;
type ChartDataArray = z.infer<typeof ChartDataArray>;
type ChartsData = z.infer<typeof ChartsData>;
type State = ChartsData;

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
  const currentMonth = new Date().getMonth();
  const currentWeekday = new Date().getDay();

  switch (action.type) {
    case ActionTypes.IncrementAddedAppointments: {
      const chartsData = {
        monthlyData: incrementObjectField({
          source: state.monthlyData,
          index: currentMonth,
          objectField: ADDED_APPOINTMENTS,
        }),
        weeklyData: incrementObjectField({
          source: state.weeklyData,
          index: currentWeekday,
          objectField: ADDED_APPOINTMENTS,
        }),
      };

      setStorageItem(CHARTS, chartsData);
      return chartsData;
    }
    case ActionTypes.IncrementRemovedAppointments: {
      const chartsData = {
        monthlyData: incrementObjectField({
          source: state.monthlyData,
          index: currentMonth,
          objectField: REMOVED_APPOINTMENTS,
        }),
        weeklyData: incrementObjectField({
          source: state.weeklyData,
          index: currentWeekday,
          objectField: REMOVED_APPOINTMENTS,
        }),
      };

      setStorageItem(CHARTS, chartsData);
      return chartsData;
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function incrementObjectField({
  source,
  index,
  objectField,
}: {
  source: ChartDataArray;
  index: number;
  objectField: typeof ADDED_APPOINTMENTS | typeof REMOVED_APPOINTMENTS;
}) {
  return source.map((element, elementIndex) => {
    if (elementIndex === index) {
      return {
        ...element,
        [objectField]: element[objectField] + 1,
      };
    }
    return element;
  });
}

const INITIAL_STATE: State = {
  monthlyData: [
    {
      name: '1',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '2',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '3',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '4',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '5',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '6',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '7',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '8',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '9',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '10',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '11',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: '12',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
  ],
  weeklyData: [
    {
      name: 'Mon',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: 'Tue',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: 'Wed',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: 'Thu',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: 'Fri',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: 'Sat',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
    {
      name: 'Sun',
      [ADDED_APPOINTMENTS]: 0,
      [REMOVED_APPOINTMENTS]: 0,
    },
  ],
};

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
  if (ChartsData.check(data)) {
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
