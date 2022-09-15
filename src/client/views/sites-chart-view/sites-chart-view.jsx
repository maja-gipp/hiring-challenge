import React from "react";
import { Page } from "~gui-library";
import { SitesChart } from "~client/components/sites-chart/sites-chart";

export const SitesChartView = () => {
  return (
    <Page left={0}>
      <SitesChart />
    </Page>
  );
};
