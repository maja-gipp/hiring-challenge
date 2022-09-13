import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavigationBar } from "../navigation-bar/navigation-bar";

import { Main } from "../../views/main/main";
import { OilRigsView } from "~client/views/oil-rigs-view/oil-rigs-view";
import { SiteDetailsView } from "~client/views/site-details-view/site-details-view";

export const Routes = () => {
  return (
    <Router>
      <NavigationBar />
      <Route path="/" exact component={Main} />
      <Route path="/oil-rigs" component={OilRigsView} />
      <Route path="/sites/:siteId" component={SiteDetailsView} />
    </Router>
  );
};
