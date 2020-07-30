import React from 'react';

import Card from './Card';
import SectionHeading from './SectionHeading';

type Props = {
  heading: string;
  id: string;
  children: React.ReactNode;
};
export default function Section({ heading, id, children }: Props) {
  return (
    <section
      className='w-full max-w-xs sm:max-w-sm flex flex-col'
      id={id}
      style={{ justifySelf: 'center' }}
    >
      <SectionHeading value={heading} />
      <Card>{children}</Card>
    </section>
  );
}
