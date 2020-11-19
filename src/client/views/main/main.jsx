import React from 'react';
import {Heading, Page} from '~gui-library';
import {Tasks} from '~client/components/tasks/tasks';

export const Main = ({}) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      <Tasks />
    </Page>
  );
};
