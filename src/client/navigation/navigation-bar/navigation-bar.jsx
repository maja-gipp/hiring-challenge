import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { TopBar } from "~gui-library";
import Logo from "../../images/logo@2x.png";
import { oilRigsRoute } from "../routing";

export const NavigationBar = () => {
  const history = useHistory();

  const sitesMatch = useRouteMatch({
    path: "/",
    exact: true,
  });

  const oilRigsMatch = useRouteMatch({
    path: oilRigsRoute.getUrl(),
  });

  const sitesChartMatch = useRouteMatch({
    path: "/sites-chart",
  });

  return (
    <TopBar
      title={{
        logo: <img src={Logo} alt="logo" />,
        label: "Hiring Challenge",
      }}
      content={[
        {
          active: sitesMatch !== null,
          label: "Sites",
          onClick: () => history.push("/"),
          type: "Link",
        },
        {
          active: oilRigsMatch !== null,
          label: "Oil rigs",
          onClick: () => history.push(oilRigsRoute.getUrl()),
          type: "Link",
        },
        {
          active: sitesChartMatch !== null,
          label: "Sites chart",
          onClick: () => history.push("/sites-chart"),
          type: "Link",
        },
      ]}
    />
  );
};
