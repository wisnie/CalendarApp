const CHARTS = 'charts';
const ADDED_APPOINTMENTS = 'Added appointments';
const REMOVED_APPOINTMENTS = 'Removed appointments';

const INITIAL_STATE = [
  {
    name: 'Sun',
    [ADDED_APPOINTMENTS]: 0,
    [REMOVED_APPOINTMENTS]: 0,
  },
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
];

export { CHARTS, ADDED_APPOINTMENTS, REMOVED_APPOINTMENTS, INITIAL_STATE };
