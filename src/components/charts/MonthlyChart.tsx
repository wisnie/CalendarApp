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

export default function MonthlyChart() {
  const isLightTheme = useIsLightTheme();
  const { monthlyData } = useChartState();

  return (
    <Section heading='Monthly Chart' id='monthlyData-chart'>
      <header
        className={clsx(
          'inline-block px-3 py-4 text-xl',
          isLightTheme ? 'text-gray-700' : 'text-white'
        )}
      >
        Monthly editions of appointments
      </header>
      <div
        className={clsx(
          'px-3 py-5 border-t-2 border-gray-200',
          isLightTheme ? 'border-gray-200' : 'border-gray-700'
        )}
      >
        <ResponsiveContainer width='100%' height={450}>
          <LineChart
            data={monthlyData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
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
