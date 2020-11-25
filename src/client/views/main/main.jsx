import React from 'react';
import {Heading, Page} from '~gui-library';
import {Stories} from '~client/components/stories/stories';

export const Main = ({}) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      <Stories/>
    </Page>
  );
};
