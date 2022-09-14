import React from "react";
import { connect } from "react-redux";
import { Card, Heading, Column, List, Row, Spinner } from "~gui-library";
import { sitesLoaded } from "~store/entities/sites/sites";
import { useEffect } from "react";
import { oilRigsLoaded } from "~client/store/entities/oil-rigs/oil-rigs";
import { Link } from "react-router-dom";

const SiteDetails = ({
  siteId,
  sites,
  oilRigs,
  sitesLoaded,
  oilRigsLoaded,
}) => {
  const site = sites.list.find((site) => site.id === siteId);
  const siteOilRigs =
    site?.oilRigs.map((oilRigId) => {
      const rig = oilRigs.list.find((oilRig) => oilRig.id === oilRigId);
      if (rig === undefined) {
        return {
          id: 0,
          name: "unknown",
        };
      }
      return {
        id: rig.id,
        name: rig.name,
        details: rig.manufacturer,
      };
    }) ?? [];
  useEffect(() => {
    sitesLoaded();
    oilRigsLoaded();
  }, []);
  const loading = sites.loading || oilRigs.loading;
  return (
    <Card
      heading={
        <Heading>
          Site details
          {loading && <Spinner dark tiny />}
        </Heading>
      }
    >
      <Row>
        <Column>
          <Link to={"/"}>Go back</Link>
          <h1>{site?.name}</h1>
          <p>{site?.country}</p>
          <List
            list={{
              items: siteOilRigs,
            }}
            noHeader
          />
        </Column>
      </Row>
    </Card>
  );
};

const mapStateToProps = ({ entities }) => {
  const { sites, oilRigs } = entities;
  return {
    sites,
    oilRigs,
  };
};

const mapDispatchToProps = {
  sitesLoaded,
  oilRigsLoaded,
};

const ConnectedSiteDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteDetails);
export { ConnectedSiteDetails as SiteDetails };
