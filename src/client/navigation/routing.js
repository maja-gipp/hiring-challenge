const siteDetailsRoutePrefix = "oil-sites";
export const siteDetailsRoute = {
  getUrl: (siteId) => {
    return `/${siteDetailsRoutePrefix}/${siteId}`;
  },
  getPath: () => {
    return `/${siteDetailsRoutePrefix}/:siteId`;
  },
};
const oilRigsRoutePrefix = "oil-rigs2";
export const oilRigsRoute = {
  getUrl: () => {
    return `/${oilRigsRoutePrefix}`;
  },
  getPath: () => {
    return `/${oilRigsRoutePrefix}`;
  },
};
const sitesChartRoutePrefix = "sites-chart";
export const sitesChartRoute = {
  getUrl: () => {
    return `/${sitesChartRoutePrefix}`;
  },
  getPath: () => {
    return `/${sitesChartRoutePrefix}`;
  },
};
