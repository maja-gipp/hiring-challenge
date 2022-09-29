import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";

import { Main } from "../../views/main/main";
import { OilRigsView } from "~client/views/oil-rigs-view/oil-rigs-view";
import { SiteDetailsView } from "~client/views/site-details-view/site-details-view";
import { SitesChartView } from "~client/views/sites-chart-view/sites-chart-view";
import { siteDetailsRoute } from "../routing";
import { oilRigsRoute } from "../routing";
import { sitesChartRoute } from "../routing";
import { Page } from "~gui-library";

export const Routes = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path={oilRigsRoute.getPath()} component={OilRigsView} />
        <Route path={siteDetailsRoute.getPath()} component={SiteDetailsView} />
        <Route path={sitesChartRoute.getPath()} component={SitesChartView} />
        <Route
          path="*"
          component={() => {
            return <Page left={0}>404</Page>;
          }}
        />
      </Switch>
    </Router>
  );
};
