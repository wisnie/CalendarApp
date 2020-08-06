import React from 'react';
import clsx from 'clsx';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Section from '../generic/Section';
import { useChartState } from '../../context/chart-context';
import { useIsLightTheme } from '../../context/theme-context';

export default function WeeklyChart() {
  const isLightTheme = useIsLightTheme();
  const chartData = useChartState();

  return (
    <Section
      heading='Weekly Chart'
      id='weeklyData-chart'
      gridPosition='md:col-span-12 xl:col-span-6'
    >
      <header
        className={clsx(
          'inline-block px-3 py-4 text-xl',
          isLightTheme ? 'text-gray-700' : 'text-white'
        )}
      >
        Weekly editions of appointments
      </header>
      <div
        className={clsx(
          'px-3 py-5 border-t-2 border-gray-200',
          isLightTheme ? 'border-gray-200' : 'border-gray-700'
        )}
      >
        <ResponsiveContainer width='100%' height={350}>
          <LineChart data={chartData}>
            <Line
              type='monotone'
              dataKey='Added appointments'
              stroke={isLightTheme ? '#38A169' : '#68D391'}
            />
            <Line
              type='monotone'
              dataKey='Removed appointments'
              stroke={isLightTheme ? '#E53E3E' : '#FC8181'}
            />
            <Legend verticalAlign='bottom' height={50} />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='name' />
            <YAxis width={30} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
