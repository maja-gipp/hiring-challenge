import React from 'react';
import {Divider, Heading, Page} from '~gui-library';
import {Stories} from '~client/components/stories/stories';
import {Employees} from "~client/components/employees/employees";

export const Main = ({}) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      {/* TODO: \/ REMOVE BELOW IF FULLSTACK CHALLENGE \/ */}
      <Heading top>Frontend Challenge</Heading>
      <Stories/>
      <Divider/>
      {/* TODO: \/ REMOVE BELOW IF FRONTEND CHALLENGE \/ */}
      <Heading top>Fullstack Challenge</Heading>
      <Employees/>
      <Divider/>
    </Page>
  );
};
