import {
  getNextId,
  setAppointment,
  removeAppointment,
  getAppointmentsFor,
  getAllAppointments,
} from './appointment';

afterEach(() => {
  localStorage.removeItem('appointments');
});

it('gets appointments from localStorage', () => {
  const appointments = [
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 11,
      },
      title: 'Test',
      description: 'Test',
      id: 73,
    },
  ];
  localStorage.setItem('appointments', JSON.stringify(appointments));
  expect(getAllAppointments()).toEqual(appointments);
});

it('gets nextId based on highest id in appointments array', () => {
  const appointments = [
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 11,
      },
      title: 'Test',
      description: 'Test',
      id: 73,
    },
  ];
  expect(getNextId(appointments)).toBe(74);
});

it('sets appointment to localStorage', () => {
  const appointments = [
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 11,
      },
      title: 'Test',
      description: 'Test',
      id: 73,
    },
  ];
  const payload = {
    calendarDay: {
      day: 1,
      year: 2020,
      month: 11,
    },
    title: 'Test',
    description: 'Test',
    id: 74,
  };
  setAppointment(appointments, payload);
  expect(JSON.parse(localStorage.getItem('appointments'))).toEqual([
    ...appointments,
    payload,
  ]);
});

it('removes appointment from localStorage', () => {
  const appointments = [
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 11,
      },
      title: 'Test',
      description: 'Test',
      id: 73,
    },
  ];
  const id = 73;
  localStorage.setItem('appointments', JSON.stringify(appointments));
  removeAppointment(appointments, id);

  expect(JSON.parse(localStorage.getItem('appointments'))).toEqual([
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
  ]);
});

it('gets appointments for specific day', () => {
  const appointments = [
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 11,
      },
      title: 'Test',
      description: 'Test',
      id: 73,
    },
  ];

  expect(
    getAppointmentsFor(appointments, {
      day: 1,
      year: 2020,
      month: 10,
    })
  ).toEqual([
    {
      calendarDay: {
        day: 1,
        year: 2020,
        month: 10,
      },
      title: 'Test',
      description: 'Test',
      id: 3,
    },
  ]);
});
