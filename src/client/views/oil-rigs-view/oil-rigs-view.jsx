import React from 'react';
import { Heading, Page } from "~gui-library";
import { OilRigs } from "~client/components/oil-rigs/oil-rigs";

export const OilRigsView = () => {
  return (
    <Page left={0}>
      <Heading top>Oil rigs</Heading>
      <OilRigs />
    </Page>
  );
}