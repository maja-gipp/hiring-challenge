import React from "react";
import { Heading, Page } from "~gui-library";
import { useParams } from "react-router-dom";

export const SiteDetailsView = () => {
  let { siteId } = useParams();
  return (
    <Page left={0}>
      <Heading top>Site details {siteId}</Heading>
    </Page>
  );
};
