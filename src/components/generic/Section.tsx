import React from 'react';

import Card from './Card';
import SectionHeading from './SectionHeading';
import clsx from 'clsx';

type Props = {
  heading: string;
  id: string;
  gridPosition?: string;
  children: React.ReactNode;
};
export default function Section({
  heading,
  id,
  children,
  gridPosition = 'row-auto col-auto',
}: Props) {
  return (
    <section
      className={clsx(
        'h-full max-h-full w-full max-w-full flex flex-col',
        gridPosition
      )}
      id={id}
      style={{ minHeight: '500px' }}
    >
      <SectionHeading value={heading} />
      <Card>{children}</Card>
    </section>
  );
}
