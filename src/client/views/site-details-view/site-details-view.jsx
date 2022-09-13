import React from "react";
import { Heading, Page } from "~gui-library";
import { useParams } from "react-router-dom";
import { SiteDetails } from "~client/components/site-details/site-details";

export const SiteDetailsView = () => {
  let { siteId } = useParams();
  return (
    <Page left={0}>
      <Heading top>Site details</Heading>
      <SiteDetails siteId={siteId} />
    </Page>
  );
};
