import * as z from 'zod';
import { CalendarDay, isSameDay } from './calendar';
import { setStorageItem, getStorageItem } from '../utils/storage';

const APPOINTMENTS = 'appointments';
const ONE_DAY_IN_MS = 86400000;

const Appointment = z.object({
  calendarDay: z.object({
    day: z.number(),
    year: z.number(),
    month: z.number(),
  }),
  title: z.string(),
  description: z.string(),
  id: z.number(),
});

const AppointmentsArray = z.array(Appointment);

export type Appointment = z.infer<typeof Appointment>;
export type AppointmentsArray = z.infer<typeof AppointmentsArray>;

function getAllAppointments(): Array<Appointment> {
  const data = getStorageItem(APPOINTMENTS);
  if (AppointmentsArray.check(data)) {
    return data;
  }

  return [];
}

function setAppointment(appointments: AppointmentsArray, payload: Appointment) {
  setStorageItem(APPOINTMENTS, [...appointments, payload]);
}

function removeAppointment(appointments: AppointmentsArray, id: number) {
  setStorageItem(
    APPOINTMENTS,
    appointments.filter((appointment) => appointment.id !== id)
  );
}

function getNextId(appointments: AppointmentsArray) {
  if (appointments.length === 0) {
    return 0;
  }
  const { id: lastId } = appointments[appointments.length - 1];
  const nextId = lastId + 1;
  return nextId;
}

function getAppointmentsFor(
  appointments: AppointmentsArray,
  calendarDay: CalendarDay
) {
  return appointments.filter((appointment) =>
    isSameDay(calendarDay, appointment.calendarDay)
  );
}

function getDaysToAppointment({ year, month, day }: CalendarDay) {
  const calendarDayTime = new Date(year, month, day).getTime();
  return (calendarDayTime - getCurrentTime()) / ONE_DAY_IN_MS;
}

function getUpcomingAppointments(appointments: AppointmentsArray) {
  return appointments.filter(isFutureAppointment).sort(compareDates);
}

function isFutureAppointment(appointment: Appointment) {
  const { year, month, day } = appointment.calendarDay;
  const calendarDayTime = new Date(year, month, day).getTime();
  return (calendarDayTime - getCurrentTime()) / ONE_DAY_IN_MS >= 0;
}

function getCurrentTime() {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ).getTime();
}
function compareDates(a: Appointment, b: Appointment) {
  const { year: yearA, month: monthA, day: dayA } = a.calendarDay;
  const { year: yearB, month: monthB, day: dayB } = b.calendarDay;

  return (
    new Date(yearA, monthA, dayA).getTime() -
    new Date(yearB, monthB, dayB).getTime()
  );
}

export {
  getNextId,
  setAppointment,
  removeAppointment,
  getAppointmentsFor,
  getUpcomingAppointments,
  getAllAppointments,
  getDaysToAppointment,
  Appointment,
};
