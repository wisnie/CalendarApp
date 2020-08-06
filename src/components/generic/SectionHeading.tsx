import React from 'react';
import clsx from 'clsx';

import { useIsLightTheme } from '../../context/theme-context';

type Props = { value: string };
export default function SectionHeading({ value }: Props) {
  const isLightTheme = useIsLightTheme();
  return (
    <h2
      className={clsx(
        'text-3xl',
        isLightTheme ? 'text-gray-700' : 'text-white'
      )}
    >
      {value}
    </h2>
  );
}
