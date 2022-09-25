const siteDetailsRoutePrefix = "oil-sites";
export const siteDetailsRoute = {
  getUrl: (siteId) => {
    return `/${siteDetailsRoutePrefix}/${siteId}`;
  },
  getPath: () => {
    return `/${siteDetailsRoutePrefix}/:siteId`;
  },
};
